import ContactForm from "@/components/ContactForm";
import SimplePage from "@/components/SimplePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "es",
  title: "Contacto | Naralimon",
  description: "Habla con Naralimon.",
  path: "/contacto",
  alternatePath: "/en/contact",
});

export default function ContactPage() {
  return (
    <SimplePage eyebrow="NARALIMON" title="HABLEMOS">
      <p>¿Tienes una idea, una pregunta o algo que podría convertirse en un juego?</p>
      <ContactForm locale="es" />
    </SimplePage>
  );
}
