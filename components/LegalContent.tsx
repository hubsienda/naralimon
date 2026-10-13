import Link from "next/link";
import { siteConfig } from "@/lib/config";
import type { Locale } from "@/lib/types";

type LegalKind = "privacy" | "cookies" | "legal";

const LAST_UPDATED_ES = "13 de octubre de 2026";
const LAST_UPDATED_EN = "13 October 2026";

function OwnerDetails({ locale }: { locale: Locale }) {
  const legal = siteConfig.legal;
  return (
    <dl className="legal-details">
      <div><dt>{locale === "es" ? "Responsable" : "Controller"}</dt><dd>{legal.ownerName}</dd></div>
      <div><dt>{locale === "es" ? "CIF" : "Tax ID"}</dt><dd>{legal.taxId}</dd></div>
      <div>
        <dt>{locale === "es" ? "Dirección" : "Address"}</dt>
        <dd>{legal.postalAddressLines.map((line) => <div key={line}>{line}</div>)}</dd>
      </div>
      <div><dt>Email</dt><dd><a href={`mailto:${legal.contactEmail}`}>{legal.contactEmail}</a></dd></div>
    </dl>
  );
}

function PrivacyContent({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return (
    <>
      <p className="legal-intro">
        {es
          ? "Esta Política de Privacidad explica cómo Naralimon S.C. trata los datos personales a través de naralimon.com, las finalidades del tratamiento, las bases jurídicas aplicables y los derechos de las personas usuarias."
          : "This Privacy Policy explains how Naralimon S.C. processes personal data through naralimon.com, the purposes of processing, the applicable legal bases and the rights available to users."}
      </p>
      <p><strong>{es ? "Última actualización:" : "Last updated:"}</strong> {es ? LAST_UPDATED_ES : LAST_UPDATED_EN}</p>

      <section>
        <h2>{es ? "1. Responsable del tratamiento" : "1. Data controller"}</h2>
        <OwnerDetails locale={locale} />
      </section>

      <section>
        <h2>{es ? "2. Normativa aplicable" : "2. Applicable law"}</h2>
        <p>
          {es
            ? "El tratamiento de datos personales se realiza de conformidad con el Reglamento (UE) 2016/679, Reglamento General de Protección de Datos (RGPD), la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), y las demás normas españolas y de la Unión Europea que resulten aplicables."
            : "Personal data is processed in accordance with Regulation (EU) 2016/679, the General Data Protection Regulation (GDPR), Spanish Organic Law 3/2018 of 5 December on Personal Data Protection and Guarantee of Digital Rights (LOPDGDD), and other applicable Spanish and European Union data-protection rules."}
        </p>
      </section>

      <section>
        <h2>{es ? "3. Datos tratados" : "3. Personal data processed"}</h2>
        <p>
          {es
            ? "Naralimon puede tratar los datos que facilites voluntariamente mediante el formulario de contacto, la suscripción al newsletter, la correspondencia por email y otras comunicaciones directas. También puede tratar datos de uso y analítica cuando hayas prestado el consentimiento correspondiente, así como información derivada de cookies, almacenamiento local y mecanismos técnicos necesarios para el funcionamiento y la seguridad del sitio."
            : "Naralimon may process data you voluntarily provide through the contact form, newsletter subscription, email correspondence and other direct communications. It may also process website-use and analytics data where you have given the relevant consent, together with information arising from cookies, local storage and technical mechanisms necessary for the operation and security of the site."}
        </p>
        <p>
          {es
            ? "El formulario de contacto recoge nombre, email, mensaje, idioma y fecha/hora del envío. Naralimon no afirma recoger categorías de datos que no formen parte de las funciones realmente disponibles en el sitio."
            : "The contact form collects name, email, message, language and the date/time of submission. Naralimon does not claim to collect categories of data that are not part of the functions actually available on the site."}
        </p>
      </section>

      <section>
        <h2>{es ? "4. Finalidades del tratamiento" : "4. Purposes of processing"}</h2>
        <p>{es ? "Los datos pueden tratarse para:" : "Personal data may be processed to:"}</p>
        <ul>
          <li>{es ? "responder consultas y comunicaciones;" : "respond to enquiries and communications;"}</li>
          <li>{es ? "gestionar comunicaciones relacionadas con Naralimon;" : "manage communications relating to Naralimon;"}</li>
          <li>{es ? "gestionar suscripciones al newsletter y enviar comunicaciones cuando exista consentimiento;" : "manage newsletter subscriptions and send communications where consent has been given;"}</li>
          <li>{es ? "medir y analizar el uso del sitio cuando se haya aceptado la categoría Analítica;" : "measure and analyse website use where the Analytics category has been accepted;"}</li>
          <li>{es ? "mantener la seguridad, integridad y funcionamiento técnico del sitio;" : "maintain the security, integrity and technical operation of the site;"}</li>
          <li>{es ? "cumplir obligaciones legales aplicables." : "comply with applicable legal obligations."}</li>
        </ul>
      </section>

      <section>
        <h2>{es ? "5. Base jurídica" : "5. Legal bases"}</h2>
        <p>
          {es
            ? "La base jurídica depende de la finalidad concreta. El consentimiento se utiliza para el newsletter, Google Analytics y otros tratamientos opcionales que lo requieran. Cuando una consulta esté relacionada con una posible relación comercial, el tratamiento puede ser necesario para aplicar medidas precontractuales solicitadas por la persona interesada. El cumplimiento de obligaciones legales constituye la base cuando corresponda. El interés legítimo puede resultar aplicable de forma limitada, por ejemplo para proteger la seguridad e integridad técnica del sitio o atender comunicaciones generales, siempre que dicho interés no prevalezca sobre los derechos y libertades de la persona interesada. No se utiliza el interés legítimo como justificación genérica para todos los tratamientos."
            : "The legal basis depends on the specific purpose. Consent is used for the newsletter, Google Analytics and other optional processing that requires it. Where an enquiry concerns a possible commercial relationship, processing may be necessary to take pre-contractual steps requested by the data subject. Compliance with legal obligations provides the basis where applicable. Legitimate interests may apply on a limited basis, for example to protect the security and technical integrity of the site or to deal with general communications, provided those interests are not overridden by the rights and freedoms of the individual. Legitimate interests are not used as a blanket justification for all processing."}
        </p>
      </section>

      <section>
        <h2>{es ? "6. Formulario de contacto y correo electrónico" : "6. Contact form and email"}</h2>
        <p>
          {es
            ? "Los mensajes enviados desde el formulario de contacto se remiten mediante un proceso de correo del servidor a naralimongroup@naralimon.com. El email facilitado por la persona usuaria se utiliza como dirección de respuesta (Reply-To). El sitio no crea una base de datos independiente de consultas. La entrega del correo utiliza la infraestructura configurada para Naralimon, actualmente Google Workspace."
            : "Messages submitted through the contact form are sent by a server-side mail process to naralimongroup@naralimon.com. The user's email address is used as the Reply-To address. The website does not create a separate enquiries database. Email delivery uses the infrastructure configured for Naralimon, currently Google Workspace."}
        </p>
      </section>

      <section>
        <h2>{es ? "7. Newsletter y Mailrelay" : "7. Newsletter and Mailrelay"}</h2>
        <p>
          {es
            ? "La suscripción al newsletter se gestiona mediante el formulario alojado de Mailrelay / IPZ Marketing. El flujo es Naralimon → formulario de Mailrelay → Mailrelay → grupo «Naralimones». Los datos introducidos en ese formulario se tratan para gestionar la suscripción y enviar las comunicaciones solicitadas. Naralimon no mantiene en este sitio una base de datos de newsletter separada de la plataforma de Mailrelay."
            : "Newsletter subscriptions are managed through the hosted form provided by Mailrelay / IPZ Marketing. The flow is Naralimon → Mailrelay form → Mailrelay → “Naralimones” group. Data entered in that form is processed to manage subscriptions and send requested communications. Naralimon does not maintain a separate newsletter database on this website outside the Mailrelay platform."}
        </p>
        <p>
          {es
            ? "Puedes darte de baja en cualquier momento mediante el mecanismo de cancelación incluido en las comunicaciones o escribiendo a naralimongroup@naralimon.com."
            : "You may unsubscribe at any time using the unsubscribe mechanism included in communications or by writing to naralimongroup@naralimon.com."}
        </p>
      </section>

      <section>
        <h2>{es ? "8. Google Analytics" : "8. Google Analytics"}</h2>
        <p>
          {es
            ? "Naralimon utiliza Google Analytics únicamente cuando la persona usuaria ha consentido la categoría Analítica. El script de Google Analytics no se carga antes de ese consentimiento. Los datos analíticos se utilizan para comprender cómo se usa el sitio, obtener estadísticas agregadas y mejorar su funcionamiento y contenido. La analítica no se considera esencial."
            : "Naralimon uses Google Analytics only where the user has consented to the Analytics category. The Google Analytics script does not load before that consent is given. Analytics data is used to understand how the site is used, obtain aggregate statistics and improve its operation and content. Analytics is not treated as essential."}
        </p>
      </section>

      <section>
        <h2>{es ? "9. Conservación" : "9. Retention"}</h2>
        <p>
          {es
            ? "Los datos personales se conservarán únicamente durante el tiempo necesario para la finalidad correspondiente y, cuando resulte aplicable, durante los periodos exigidos por obligaciones legales. Las consultas se conservarán durante el tiempo necesario para gestionarlas y atender posibles obligaciones relacionadas. Los datos de newsletter se mantendrán mientras continúe la suscripción o hasta que se retire el consentimiento o se solicite la baja, sin perjuicio de las obligaciones legales que puedan exigir una conservación adicional. La conservación de datos de Analytics depende de la configuración aplicable del servicio."
            : "Personal data will be retained only for as long as necessary for the relevant purpose and, where applicable, for periods required by law. Enquiries will be retained for as long as needed to deal with them and meet any related obligations. Newsletter data will be retained while the subscription remains active or until consent is withdrawn or the user unsubscribes, subject to any legal obligations requiring additional retention. Retention of Analytics data depends on the applicable service configuration."}
        </p>
      </section>

      <section>
        <h2>{es ? "10. Destinatarios y encargados del tratamiento" : "10. Recipients and processors"}</h2>
        <p>
          {es
            ? "Para prestar las funciones descritas pueden intervenir proveedores necesarios para operar el sitio y sus servicios, entre ellos Vercel para alojamiento y plataforma web, Google Workspace para correo electrónico, Mailrelay / IPZ Marketing para la lista de correo y Google Analytics para analítica cuando haya sido consentida. Estos proveedores tratarán datos únicamente en la medida necesaria para prestar sus servicios y conforme a las condiciones y garantías que resulten aplicables."
            : "Providers necessary to operate the site and its services may process data for the functions described above, including Vercel for hosting and web platform services, Google Workspace for email, Mailrelay / IPZ Marketing for the mailing list, and Google Analytics for analytics where consent has been given. Such providers process data only to the extent necessary to provide their services and subject to the applicable terms and safeguards."}
        </p>
      </section>

      <section>
        <h2>{es ? "11. Transferencias internacionales" : "11. International transfers"}</h2>
        <p>
          {es
            ? "Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo. Cuando una transferencia internacional esté sujeta al RGPD, deberán utilizarse los mecanismos y garantías previstos por la normativa aplicable, como decisiones de adecuación u otras garantías válidas. Esta política no atribuye ubicaciones concretas de tratamiento cuando no están verificadas."
            : "Some providers may process data outside the European Economic Area. Where an international transfer is subject to the GDPR, the mechanisms and safeguards required by applicable law must be used, such as adequacy decisions or other valid safeguards. This policy does not attribute specific processing locations where they have not been verified."}
        </p>
      </section>

      <section>
        <h2>{es ? "12. Derechos" : "12. Your rights"}</h2>
        <p>
          {es
            ? "Puedes ejercer, cuando proceda, tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar el consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento realizado previamente. Las solicitudes pueden enviarse a naralimongroup@naralimon.com."
            : "Where applicable, you may exercise your rights of access, rectification, erasure, objection, restriction of processing and data portability. You may also withdraw consent at any time without affecting the lawfulness of processing carried out before withdrawal. Requests may be sent to naralimongroup@naralimon.com."}
        </p>
      </section>

      <section>
        <h2>{es ? "13. Autoridad de control" : "13. Supervisory authority"}</h2>
        <p>
          {es
            ? "Si consideras que el tratamiento de tus datos personales infringe la normativa aplicable, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD)."
            : "If you consider that the processing of your personal data infringes applicable data-protection law, you may lodge a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos, AEPD)."}
        </p>
      </section>

      <section>
        <h2>{es ? "14. Menores" : "14. Children"}</h2>
        <p>
          {es
            ? "El sitio no está específicamente dirigido a menores con la finalidad de recoger sus datos personales. Naralimon no solicita de forma consciente datos personales innecesarios de menores. Si se detectara que se han facilitado datos de un menor sin la base o autorización necesaria, se adoptarán las medidas oportunas conforme a la normativa aplicable."
            : "The site is not specifically directed at children for the purpose of collecting their personal data. Naralimon does not knowingly seek unnecessary personal data from children. If it becomes apparent that a child's data has been provided without the necessary legal basis or authorisation, appropriate steps will be taken in accordance with applicable law."}
        </p>
      </section>

      <section>
        <h2>{es ? "15. Cambios en esta política" : "15. Changes to this policy"}</h2>
        <p>
          {es
            ? "Esta Política de Privacidad puede actualizarse para reflejar cambios legales, técnicos u operativos. La fecha de última actualización indicada al inicio permite identificar la versión vigente."
            : "This Privacy Policy may be updated to reflect legal, technical or operational changes. The last-updated date shown above identifies the current version."}
        </p>
      </section>
    </>
  );
}

function CookieContent({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return (
    <>
      <p className="legal-intro">
        {es
          ? "Esta Política de Cookies describe el almacenamiento y las tecnologías utilizadas por naralimon.com y explica cómo puedes aceptar, rechazar o modificar las categorías opcionales."
          : "This Cookie Policy describes the storage and technologies used by naralimon.com and explains how you can accept, reject or change optional categories."}
      </p>
      <p><strong>{es ? "Última actualización:" : "Last updated:"}</strong> {es ? LAST_UPDATED_ES : LAST_UPDATED_EN}</p>

      <section>
        <h2>{es ? "1. Qué son las cookies" : "1. What cookies are"}</h2>
        <p>
          {es
            ? "Las cookies son pequeños archivos que un sitio web o un servicio puede guardar en el navegador para recordar información o permitir determinadas funciones. Naralimon también utiliza almacenamiento local del navegador (localStorage) para recordar las preferencias de consentimiento."
            : "Cookies are small files that a website or service may store in the browser to remember information or enable certain functions. Naralimon also uses browser local storage (localStorage) to remember consent preferences."}
        </p>
      </section>

      <section>
        <h2>{es ? "2. Categorías utilizadas por el sistema de consentimiento" : "2. Categories used by the consent system"}</h2>
        <p>{es ? "El gestor de consentimiento distingue las siguientes categorías:" : "The consent manager distinguishes the following categories:"}</p>
        <ul>
          <li><strong>{es ? "Necesarias:" : "Necessary:"}</strong> {es ? "siempre activas para el almacenamiento o funcionamiento esencial que no requiere consentimiento." : "always enabled for storage or essential operation that does not require consent."}</li>
          <li><strong>{es ? "Analíticas:" : "Analytics:"}</strong> {es ? "opcionales y activadas únicamente después del consentimiento." : "optional and enabled only after consent."}</li>
          <li><strong>{es ? "Marketing / terceros:" : "Marketing / third parties:"}</strong> {es ? "opcionales y utilizadas para cargar contenido o servicios de terceros que requieren esa elección, como el formulario de Mailrelay." : "optional and used to load third-party content or services that require that choice, such as the Mailrelay form."}</li>
        </ul>
      </section>

      <section>
        <h2>{es ? "3. Almacenamiento necesario" : "3. Necessary storage"}</h2>
        <p>
          {es
            ? "El almacenamiento necesario puede utilizarse para recordar tus preferencias de cookies, permitir funciones esenciales y apoyar la seguridad y el funcionamiento técnico del sitio. Cuando estos mecanismos sean legalmente exentos de consentimiento, permanecen activos."
            : "Necessary storage may be used to remember your cookie preferences, enable essential functions and support the security and technical operation of the site. Where such mechanisms are legally exempt from consent, they remain enabled."}
        </p>
        <div className="cookie-table-wrap">
          <table className="cookie-table">
            <thead><tr><th>{es ? "Nombre" : "Name"}</th><th>{es ? "Tipo" : "Type"}</th><th>{es ? "Finalidad" : "Purpose"}</th><th>{es ? "Duración" : "Duration"}</th></tr></thead>
            <tbody>
              <tr>
                <td><code>naralimon-consent-v1</code></td>
                <td>localStorage</td>
                <td>{es ? "Recordar las categorías de consentimiento aceptadas o rechazadas." : "Remember which consent categories have been accepted or rejected."}</td>
                <td>{es ? "Hasta que cambies las preferencias o elimines el almacenamiento del navegador." : "Until you change preferences or clear browser storage."}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>{es ? "4. Cookies analíticas — Google Analytics" : "4. Analytics cookies — Google Analytics"}</h2>
        <p>
          {es
            ? "Google Analytics es opcional y solo se carga después de que aceptes la categoría Analítica. Se utiliza para medir el uso del sitio, obtener estadísticas agregadas y ayudar a mejorar la web. Si no aceptas Analítica, el script de Google Analytics no se carga. Si retiras posteriormente el consentimiento, el sitio desactiva Analytics y elimina las cookies _ga accesibles desde el dominio."
            : "Google Analytics is optional and loads only after you accept the Analytics category. It is used to measure website use, obtain aggregate statistics and help improve the site. If you do not accept Analytics, the Google Analytics script does not load. If you later withdraw consent, the site disables Analytics and removes accessible _ga cookies from the domain."}
        </p>
        <div className="cookie-table-wrap">
          <table className="cookie-table">
            <thead><tr><th>{es ? "Cookie" : "Cookie"}</th><th>{es ? "Finalidad" : "Purpose"}</th><th>{es ? "Duración" : "Duration"}</th></tr></thead>
            <tbody>
              <tr><td><code>_ga</code></td><td>{es ? "Distinguir usuarios para medición analítica." : "Distinguish users for analytics measurement."}</td><td>{es ? "Según la configuración de Google Analytics y los límites del navegador." : "According to Google Analytics configuration and browser limits."}</td></tr>
              <tr><td><code>_ga_&lt;container-id&gt;</code></td><td>{es ? "Mantener el estado relacionado con la medición analítica." : "Maintain state associated with analytics measurement."}</td><td>{es ? "Según la configuración de Google Analytics y los límites del navegador." : "According to Google Analytics configuration and browser limits."}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>{es ? "5. Marketing / terceros" : "5. Marketing / third parties"}</h2>
        <p>
          {es
            ? "Esta categoría es opcional. Los servicios de terceros sujetos a esta categoría solo se cargan cuando la persona usuaria los ha consentido. Actualmente se utiliza para controlar la carga del formulario de suscripción de Mailrelay. Naralimon no afirma que existan otras cookies publicitarias activas si no han sido incorporadas realmente al sitio."
            : "This category is optional. Third-party services subject to this category load only when the user has consented to them. It is currently used to control loading of the Mailrelay subscription form. Naralimon does not claim that other advertising cookies are active unless they have actually been introduced on the site."}
        </p>
      </section>

      <section>
        <h2>{es ? "6. Mailrelay" : "6. Mailrelay"}</h2>
        <p>
          {es
            ? "El formulario de suscripción de Mailrelay / IPZ Marketing es un elemento alojado por un tercero. En naralimon.com, su iframe y el script asociado no se cargan hasta que aceptas Marketing / terceros. Una vez cargado, Mailrelay puede recibir información técnica de la conexión y utilizar cookies u otros mecanismos de acuerdo con su propio servicio y configuración. El formulario no se considera estrictamente necesario para el funcionamiento básico del sitio."
            : "The Mailrelay / IPZ Marketing subscription form is a third-party hosted element. On naralimon.com, its iframe and associated script do not load until you accept Marketing / third parties. Once loaded, Mailrelay may receive technical connection information and use cookies or similar mechanisms in accordance with its own service and configuration. The form is not treated as strictly necessary for the basic operation of the site."}
        </p>
      </section>

      <section>
        <h2>{es ? "7. Gestión del consentimiento" : "7. Managing consent"}</h2>
        <p>
          {es
            ? "El banner de cookies permite elegir ACEPTAR TODO, RECHAZAR NO ESENCIALES o PREFERENCIAS. Las categorías necesarias permanecen siempre activas. Analítica y Marketing / terceros son opcionales. Puedes volver a abrir la configuración en cualquier momento mediante GESTIONAR COOKIES en el pie de página."
            : "The cookie banner allows you to choose ACCEPT ALL, REJECT NON-ESSENTIAL or PREFERENCES. Necessary storage remains enabled. Analytics and Marketing / third parties are optional. You can reopen the settings at any time through MANAGE COOKIES in the footer."}
        </p>
      </section>

      <section>
        <h2>{es ? "8. Retirada o cambio del consentimiento" : "8. Withdrawing or changing consent"}</h2>
        <p>
          {es
            ? "Puedes cambiar o retirar el consentimiento en cualquier momento mediante el control de preferencias. La retirada no afecta a la licitud de los tratamientos realizados antes del cambio. Si desactivas Marketing / terceros, el formulario de Mailrelay dejará de cargarse en nuevas vistas o después de recargar la página."
            : "You may change or withdraw consent at any time through the preferences control. Withdrawal does not affect the lawfulness of processing carried out before the change. If you disable Marketing / third parties, the Mailrelay form will no longer load on new views or after the page is reloaded."}
        </p>
      </section>

      <section>
        <h2>{es ? "9. Normativa aplicable" : "9. Applicable law"}</h2>
        <p>
          {es
            ? "Esta política se interpreta de acuerdo con el Reglamento (UE) 2016/679, Reglamento General de Protección de Datos (RGPD), la Ley Orgánica 3/2018 (LOPDGDD) y, en materia de servicios de la sociedad de la información y uso de cookies, la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), además de las demás normas aplicables."
            : "This policy is governed by Regulation (EU) 2016/679, the General Data Protection Regulation (GDPR), Spanish Organic Law 3/2018 (LOPDGDD) and, in relation to information-society services and cookies, Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), together with other applicable rules."}
        </p>
      </section>

      <section>
        <h2>{es ? "10. Cambios en esta política" : "10. Changes to this policy"}</h2>
        <p>
          {es
            ? "Esta Política de Cookies puede actualizarse para reflejar cambios legales, técnicos o en los servicios utilizados por Naralimon."
            : "This Cookie Policy may be updated to reflect legal, technical or service changes affecting Naralimon."}
        </p>
      </section>

      <p><Link className="text-link" href={es ? "/privacidad" : "/en/privacy"}>{es ? "Ver Política de Privacidad" : "View Privacy Policy"} →</Link></p>
    </>
  );
}

function LegalNoticeContent({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return (
    <>
      <p className="legal-intro">{es ? "Información general sobre el titular, el uso del sitio y los contenidos de Naralimon." : "General information about the site owner, use of the site and Naralimon content."}</p>
      <section><h2>{es ? "1. Titular del sitio" : "1. Website owner"}</h2><OwnerDetails locale={locale} /></section>
      <section><h2>{es ? "2. Propiedad intelectual" : "2. Intellectual property"}</h2><p>{es ? "Salvo indicación en contrario, la identidad Naralimon, sus textos, diseños, ilustraciones, juegos, materiales y demás contenidos del sitio están protegidos por los derechos que correspondan a sus respectivos titulares. El acceso al sitio no transfiere derechos de propiedad intelectual o industrial." : "Unless stated otherwise, the Naralimon identity, texts, designs, illustrations, games, materials and other site content are protected by the rights belonging to their respective owners. Access to the site does not transfer intellectual or industrial property rights."}</p></section>
      <section><h2>{es ? "3. Uso permitido" : "3. Permitted use"}</h2><p>{es ? "Puedes navegar, compartir enlaces y utilizar las funciones públicas para su finalidad prevista. No puedes atribuirte los contenidos, explotarlos comercialmente sin autorización, interferir con el sitio o utilizarlo de forma ilícita." : "You may browse, share links and use public features for their intended purpose. You may not claim ownership of content, exploit it commercially without permission, interfere with the site or use it unlawfully."}</p></section>
      <section><h2>{es ? "4. Disponibilidad y responsabilidad" : "4. Availability and liability"}</h2><p>{es ? "Naralimon procura mantener el sitio disponible y correcto, pero no garantiza disponibilidad ininterrumpida ni que todo contenido permanezca sin cambios. Los juegos y retos del sitio son recreativos; deben utilizarse con sentido común y sin poner en riesgo a personas o bienes." : "Naralimon aims to keep the site available and accurate, but does not guarantee uninterrupted availability or that all content will remain unchanged. Site games and challenges are recreational; they should be used with common sense and without putting people or property at risk."}</p></section>
      <section><h2>{es ? "5. Enlaces de terceros" : "5. Third-party links"}</h2><p>{es ? "El sitio puede enlazar o integrar proyectos y plataformas externas, como KLANZ, Instagram, Mailrelay o proveedores de correo. Esos servicios tienen sus propias condiciones y políticas y Naralimon no controla su contenido o disponibilidad." : "The site may link to or integrate external projects and platforms such as KLANZ, Instagram, Mailrelay or mail providers. Those services have their own terms and policies and Naralimon does not control their content or availability."}</p></section>
      <section><h2>{es ? "6. Ley y jurisdicción" : "6. Law and jurisdiction"}</h2><p>{es ? "Se aplicarán la legislación imperativa y las reglas de jurisdicción que correspondan a Naralimon S.C. y a la relación concreta con la persona usuaria." : "Mandatory law and jurisdiction rules applicable to Naralimon S.C. and the particular relationship with the user will apply."}</p></section>
    </>
  );
}

export default function LegalContent({ locale, kind }: { locale: Locale; kind: LegalKind }) {
  if (kind === "privacy") return <PrivacyContent locale={locale} />;
  if (kind === "cookies") return <CookieContent locale={locale} />;
  return <LegalNoticeContent locale={locale} />;
}
