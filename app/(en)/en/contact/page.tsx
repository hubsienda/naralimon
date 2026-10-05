import ContactForm from "@/components/ContactForm";
import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Contact | Naralimon",
  description: "Talk to Naralimon.",
  path: "/en/contact",
  alternatePath: "/contacto",
});

export default function ContactPage() {
  return (
    <SimplePage eyebrow="NARALIMON" title="LET'S TALK">
      <p>Got an idea, a question or something that might become a game?</p>
      <ContactForm locale="en" />
    </SimplePage>
  );
}
