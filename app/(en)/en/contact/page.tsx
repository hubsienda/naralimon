import ContactForm from "@/components/ContactForm";
import { getPublicCopy } from "@/lib/public-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Contact | Naralimon",
  description: "Contact Naralimon to explore B2B commercial brokerage, market-development and agrifood collaboration opportunities.",
  path: "/en/contact",
  alternatePath: "/contacto",
});

export default function ContactPage() {
  const c = getPublicCopy("en").contact;
  return (
    <main className="commercial-site commercial-contact-page">
      <section className="commercial-page-hero">
        <div className="shell commercial-page-hero-inner">
          <p className="commercial-kicker">{c.kicker}</p>
          <h1>{c.title}</h1>
          <p>{c.intro}</p>
        </div>
      </section>
      <section className="commercial-section">
        <div className="shell commercial-contact-layout">
          <div className="commercial-contact-details">
            <h2>Naralimon S.C.</h2>
            <p>Mijas Costa, Málaga, Spain</p>
            <p>{c.fallback}</p>
            <a href="mailto:naralimongroup@naralimon.com">naralimongroup@naralimon.com</a>
          </div>
          <ContactForm locale="en" />
        </div>
      </section>
    </main>
  );
}
