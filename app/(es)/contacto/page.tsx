import ContactForm from "@/components/ContactForm";
import { getCommercialCopy } from "@/lib/commercial-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Contacto comercial | Naralimon",
  description: "Contacta con Naralimon para representación comercial, intermediación alimentaria o una necesidad de aprovisionamiento profesional.",
  path: "/contacto",
  alternatePath: "/en/contact",
});

export default function ContactPage() {
  const c = getCommercialCopy("es").contact;
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
            <p>Agencia comercial independiente · Mijas Costa, Málaga, España</p>
            <a href="mailto:naralimongroup@naralimon.com">naralimongroup@naralimon.com</a>
            <p>Utiliza el formulario para indicarnos el producto, mercado o necesidad comercial. No publicamos números de teléfono o WhatsApp que no hayan sido verificados.</p>
          </div>
          <ContactForm locale="es" />
        </div>
      </section>
    </main>
  );
}
