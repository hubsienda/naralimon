import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const roots = {
  es: path.join(process.cwd(), "content", "es", "historias"),
  en: path.join(process.cwd(), "content", "en", "stories"),
};

const entries = [];
const errors = [];
const warnings = [];

for (const [locale, directory] of Object.entries(roots)) {
  if (!fs.existsSync(directory)) continue;
  for (const file of fs.readdirSync(directory).filter((name) => name.endsWith(".mdx"))) {
    const fullPath = path.join(directory, file);
    const { data } = matter(fs.readFileSync(fullPath, "utf8"));
    const required = ["title", "description", "date", "translationKey", "slug", "published"];
    for (const field of required) {
      if (data[field] === undefined || data[field] === "") errors.push(`${fullPath}: missing frontmatter field '${field}'`);
    }
    entries.push({ locale, file, fullPath, ...data });
  }
}

const groups = new Map();
for (const entry of entries) {
  const key = String(entry.translationKey ?? "");
  if (!key) continue;
  const group = groups.get(key) ?? {};
  if (group[entry.locale]) errors.push(`${entry.fullPath}: duplicate translationKey '${key}' for ${entry.locale}`);
  group[entry.locale] = entry;
  groups.set(key, group);
}

for (const [key, group] of groups) {
  const hasEs = Boolean(group.es);
  const hasEn = Boolean(group.en);
  const anyPublished = group.es?.published === true || group.en?.published === true;
  const bothPublished = group.es?.published === true && group.en?.published === true;

  if (!hasEs || !hasEn) {
    const message = `translationKey '${key}' is missing ${hasEs ? "English" : "Spanish"}`;
    if (anyPublished) errors.push(message);
    else warnings.push(message);
  } else if (anyPublished && !bothPublished) {
    errors.push(`translationKey '${key}' must publish Spanish and English together`);
  }
}

for (const warning of warnings) console.warn(`CONTENT WARNING: ${warning}`);
for (const error of errors) console.error(`CONTENT ERROR: ${error}`);

if (errors.length) process.exit(1);
console.log(`Content check passed: ${entries.length} MDX file(s), ${groups.size} bilingual item(s).`);
