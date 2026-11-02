import ContactForm from "@/components/ContactForm";
import { getCommercialCopy } from "@/lib/commercial-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  title: "Commercial contact | Naralimon",
  description: "Contact Naralimon about commercial representation, food brokerage or a professional sourcing requirement.",
  path: "/en/contact",
  alternatePath: "/contacto",
});

export default function ContactPage() {
  const c = getCommercialCopy("en").contact;
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
            <p>Independent commercial agency · Mijas Costa, Málaga, Spain</p>
            <a href="mailto:naralimongroup@naralimon.com">naralimongroup@naralimon.com</a>
            <p>Use the form to tell us about the product, market or commercial requirement. We do not publish telephone or WhatsApp details that have not been verified.</p>
          </div>
          <ContactForm locale="en" />
        </div>
      </section>
    </main>
  );
}
