import ContactForm from "@/components/ContactForm";
import { getPublicCopy } from "@/lib/public-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Contacto | Naralimon",
  description: "Contacte con Naralimon para explorar oportunidades de intermediación comercial B2B, desarrollo de mercados y colaboración agroalimentaria.",
  path: "/contacto",
  alternatePath: "/en/contact",
});

export default function ContactPage() {
  const c = getPublicCopy("es").contact;
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
            <p>Mijas Costa, Málaga, España</p>
            <p>{c.fallback}</p>
            <a href="mailto:naralimongroup@naralimon.com">naralimongroup@naralimon.com</a>
          </div>
          <ContactForm locale="es" />
        </div>
      </section>
    </main>
  );
}
