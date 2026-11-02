import Link from "next/link";
import { siteConfig } from "@/lib/config";
import type { Locale } from "@/lib/types";

type LegalKind = "privacy" | "cookies" | "legal";

const LAST_UPDATED_ES = "2 de noviembre de 2026";
const LAST_UPDATED_EN = "2 November 2026";

function OwnerDetails({ locale }: { locale: Locale }) {
  const legal = siteConfig.legal;
  return (
    <dl className="legal-details">
      <div><dt>{locale === "es" ? "Responsable" : "Controller"}</dt><dd>{legal.ownerName}</dd></div>
      <div><dt>{locale === "es" ? "CIF" : "Tax ID"}</dt><dd>{legal.taxId}</dd></div>
      <div>
        <dt>{locale === "es" ? "Dirección" : "Address"}</dt>
        <dd>{legal.postalAddressLines.map((line) => <div key={line}>{locale === "en" && line === "España" ? "Spain" : line}</div>)}</dd>
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
          ? "Esta Política de Privacidad explica cómo Naralimon S.C. trata los datos personales a través de naralimon.com, las finalidades del tratamiento, las bases jurídicas aplicables y los derechos de las personas interesadas."
          : "This Privacy Policy explains how Naralimon S.C. processes personal data through naralimon.com, the purposes of processing, the applicable legal bases and the rights available to data subjects."}
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
            ? "El tratamiento de datos personales se realiza de conformidad con el Reglamento (UE) 2016/679, Reglamento General de Protección de Datos (RGPD), la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), y las demás normas españolas y de la Unión Europea que resulten aplicables."
            : "Personal data is processed in accordance with Regulation (EU) 2016/679, the General Data Protection Regulation (GDPR), Spanish Organic Law 3/2018 on Personal Data Protection and Guarantee of Digital Rights (LOPDGDD), and other applicable Spanish and European Union data-protection rules."}
        </p>
      </section>

      <section>
        <h2>{es ? "3. Datos tratados" : "3. Personal data processed"}</h2>
        <p>
          {es
            ? "Naralimon puede tratar los datos que facilites mediante el formulario de contacto y otras comunicaciones directas. El formulario comercial recoge nombre, empresa, email, teléfono opcional, tipo de consulta, producto o interés comercial, mensaje, idioma y fecha/hora del envío."
            : "Naralimon may process data you provide through the contact form and other direct communications. The commercial enquiry form collects name, company, email, optional telephone number, enquiry type, product or commercial interest, message, language and the date/time of submission."}
        </p>
        <p>
          {es
            ? "Cuando se haya prestado el consentimiento correspondiente, también pueden tratarse datos de uso y analítica. El sitio utiliza además almacenamiento local y mecanismos técnicos necesarios para recordar preferencias, mantener la seguridad y prestar sus funciones."
            : "Where the relevant consent has been given, website-use and analytics data may also be processed. The site also uses local storage and technical mechanisms needed to remember preferences, maintain security and provide its functions."}
        </p>
      </section>

      <section>
        <h2>{es ? "4. Finalidades del tratamiento" : "4. Purposes of processing"}</h2>
        <ul>
          <li>{es ? "responder consultas comerciales y otras comunicaciones;" : "respond to commercial enquiries and other communications;"}</li>
          <li>{es ? "valorar posibles oportunidades de representación, intermediación o aprovisionamiento;" : "assess potential representation, brokerage or sourcing opportunities;"}</li>
          <li>{es ? "gestionar comunicaciones precontractuales solicitadas por la persona interesada;" : "manage pre-contractual communications requested by the data subject;"}</li>
          <li>{es ? "medir y analizar el uso del sitio cuando se haya aceptado la categoría Analítica;" : "measure and analyse website use where the Analytics category has been accepted;"}</li>
          <li>{es ? "mantener la seguridad, integridad y funcionamiento técnico del sitio;" : "maintain the security, integrity and technical operation of the site;"}</li>
          <li>{es ? "cumplir obligaciones legales aplicables." : "comply with applicable legal obligations."}</li>
        </ul>
      </section>

      <section>
        <h2>{es ? "5. Base jurídica" : "5. Legal bases"}</h2>
        <p>
          {es
            ? "Cuando una consulta se refiere a una posible relación comercial, el tratamiento puede ser necesario para aplicar medidas precontractuales solicitadas por la persona interesada. Google Analytics se basa en el consentimiento y no se carga antes de obtenerlo. El cumplimiento de obligaciones legales constituye la base cuando corresponda. El interés legítimo puede resultar aplicable de forma limitada para proteger la seguridad e integridad técnica del sitio o atender comunicaciones generales, siempre que no prevalezcan los derechos y libertades de la persona interesada."
            : "Where an enquiry concerns a possible commercial relationship, processing may be necessary to take pre-contractual steps requested by the data subject. Google Analytics relies on consent and does not load before consent is obtained. Compliance with legal obligations provides the basis where applicable. Legitimate interests may apply on a limited basis to protect the security and technical integrity of the site or deal with general communications, provided those interests are not overridden by the rights and freedoms of the individual."}
        </p>
      </section>

      <section>
        <h2>{es ? "6. Formulario de contacto y correo electrónico" : "6. Contact form and email"}</h2>
        <p>
          {es
            ? "Los mensajes enviados desde el formulario de contacto se remiten mediante un proceso de correo del servidor a naralimongroup@naralimon.com. El email facilitado se utiliza como dirección de respuesta (Reply-To). El sitio no crea una base de datos independiente de consultas. La entrega del correo utiliza la infraestructura configurada para Naralimon, actualmente Google Workspace."
            : "Messages submitted through the contact form are sent by a server-side mail process to naralimongroup@naralimon.com. The email address provided is used as the Reply-To address. The website does not create a separate enquiries database. Email delivery uses the infrastructure configured for Naralimon, currently Google Workspace."}
        </p>
      </section>

      <section>
        <h2>7. Google Analytics</h2>
        <p>
          {es
            ? "Naralimon utiliza Google Analytics únicamente cuando la persona usuaria ha consentido la categoría Analítica. El script no se carga antes de ese consentimiento. Los datos analíticos se utilizan para comprender de forma agregada cómo se usa el sitio y mejorar su funcionamiento y contenido. La analítica no se considera esencial."
            : "Naralimon uses Google Analytics only where the user has consented to the Analytics category. The script does not load before that consent is given. Analytics data is used to understand, in aggregate, how the site is used and to improve its operation and content. Analytics is not treated as essential."}
        </p>
      </section>

      <section>
        <h2>{es ? "8. Conservación" : "8. Retention"}</h2>
        <p>
          {es
            ? "Los datos personales se conservarán únicamente durante el tiempo necesario para la finalidad correspondiente y, cuando resulte aplicable, durante los periodos exigidos por obligaciones legales. Las consultas comerciales se conservarán durante el tiempo necesario para gestionarlas, evaluar la oportunidad y atender posibles obligaciones relacionadas. La conservación de datos de Analytics depende de la configuración aplicable del servicio."
            : "Personal data will be retained only for as long as necessary for the relevant purpose and, where applicable, for periods required by law. Commercial enquiries will be retained for as long as needed to deal with them, assess the opportunity and meet any related obligations. Retention of Analytics data depends on the applicable service configuration."}
        </p>
      </section>

      <section>
        <h2>{es ? "9. Destinatarios y encargados del tratamiento" : "9. Recipients and processors"}</h2>
        <p>
          {es
            ? "Para operar el sitio y sus funciones pueden intervenir proveedores como Vercel para alojamiento y plataforma web, Google Workspace para correo electrónico y Google Analytics para analítica cuando haya sido consentida. Estos proveedores tratarán datos únicamente en la medida necesaria para prestar sus servicios y conforme a las condiciones y garantías aplicables."
            : "Providers may process data to operate the site and its functions, including Vercel for hosting and web platform services, Google Workspace for email and Google Analytics for analytics where consent has been given. Such providers process data only to the extent necessary to provide their services and subject to applicable terms and safeguards."}
        </p>
      </section>

      <section>
        <h2>{es ? "10. Transferencias internacionales" : "10. International transfers"}</h2>
        <p>
          {es
            ? "Algunos proveedores pueden tratar datos fuera del Espacio Económico Europeo. Cuando una transferencia internacional esté sujeta al RGPD, deberán utilizarse los mecanismos y garantías previstos por la normativa aplicable, como decisiones de adecuación u otras garantías válidas."
            : "Some providers may process data outside the European Economic Area. Where an international transfer is subject to the GDPR, the mechanisms and safeguards required by applicable law must be used, such as adequacy decisions or other valid safeguards."}
        </p>
      </section>

      <section>
        <h2>{es ? "11. Derechos" : "11. Your rights"}</h2>
        <p>
          {es
            ? "Puedes ejercer, cuando proceda, tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar el consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento realizado previamente. Las solicitudes pueden enviarse a naralimongroup@naralimon.com."
            : "Where applicable, you may exercise your rights of access, rectification, erasure, objection, restriction of processing and data portability. You may also withdraw consent at any time without affecting the lawfulness of processing carried out before withdrawal. Requests may be sent to naralimongroup@naralimon.com."}
        </p>
      </section>

      <section>
        <h2>{es ? "12. Autoridad de control" : "12. Supervisory authority"}</h2>
        <p>
          {es
            ? "Si consideras que el tratamiento de tus datos personales infringe la normativa aplicable, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD)."
            : "If you consider that the processing of your personal data infringes applicable data-protection law, you may lodge a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos, AEPD)."}
        </p>
      </section>

      <section>
        <h2>{es ? "13. Menores" : "13. Children"}</h2>
        <p>
          {es
            ? "El sitio comercial no está dirigido a menores ni diseñado para recoger sus datos personales. Si se detectara que se han facilitado datos de un menor sin la base o autorización necesaria, se adoptarán las medidas oportunas conforme a la normativa aplicable."
            : "The commercial site is not directed at children or designed to collect their personal data. If it becomes apparent that a child's data has been provided without the necessary legal basis or authorisation, appropriate steps will be taken in accordance with applicable law."}
        </p>
      </section>

      <section>
        <h2>{es ? "14. Cambios en esta política" : "14. Changes to this policy"}</h2>
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
          ? "Esta Política de Cookies describe el almacenamiento y las tecnologías utilizadas por naralimon.com y explica cómo puedes aceptar, rechazar o modificar la analítica opcional."
          : "This Cookie Policy describes the storage and technologies used by naralimon.com and explains how you can accept, reject or change optional analytics."}
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
        <h2>{es ? "2. Categorías utilizadas" : "2. Categories used"}</h2>
        <ul>
          <li><strong>{es ? "Necesarias:" : "Necessary:"}</strong> {es ? "almacenamiento o funciones esenciales que no requieren consentimiento." : "storage or essential functions that do not require consent."}</li>
          <li><strong>{es ? "Analíticas:" : "Analytics:"}</strong> {es ? "opcionales y activadas únicamente después del consentimiento." : "optional and enabled only after consent."}</li>
        </ul>
      </section>

      <section>
        <h2>{es ? "3. Almacenamiento necesario" : "3. Necessary storage"}</h2>
        <p>
          {es
            ? "El almacenamiento necesario se utiliza para recordar tus preferencias de cookies y apoyar funciones esenciales, la seguridad y el funcionamiento técnico del sitio."
            : "Necessary storage is used to remember your cookie preferences and support essential functions, security and the technical operation of the site."}
        </p>
        <div className="cookie-table-wrap">
          <table className="cookie-table">
            <thead><tr><th>{es ? "Nombre" : "Name"}</th><th>{es ? "Tipo" : "Type"}</th><th>{es ? "Finalidad" : "Purpose"}</th><th>{es ? "Duración" : "Duration"}</th></tr></thead>
            <tbody>
              <tr>
                <td><code>naralimon-consent-v1</code></td>
                <td>localStorage</td>
                <td>{es ? "Recordar si se ha aceptado o rechazado la analítica." : "Remember whether analytics has been accepted or rejected."}</td>
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
            ? "Google Analytics es opcional y solo se carga después de que aceptes Analítica. Se utiliza para medir el uso del sitio, obtener estadísticas agregadas y ayudar a mejorar la web. Si no aceptas Analítica, el script no se carga. Si retiras posteriormente el consentimiento, el sitio desactiva Analytics y elimina las cookies _ga accesibles desde el dominio."
            : "Google Analytics is optional and loads only after you accept Analytics. It is used to measure website use, obtain aggregate statistics and help improve the site. If you do not accept Analytics, the script does not load. If you later withdraw consent, the site disables Analytics and removes accessible _ga cookies from the domain."}
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
        <h2>{es ? "5. Gestión del consentimiento" : "5. Managing consent"}</h2>
        <p>
          {es
            ? "El banner permite aceptar Analítica, rechazar las categorías no esenciales o abrir Preferencias. El almacenamiento necesario permanece activo. Puedes volver a abrir la configuración en cualquier momento mediante GESTIONAR COOKIES en el pie de página."
            : "The banner lets you accept Analytics, reject non-essential categories or open Preferences. Necessary storage remains enabled. You can reopen the settings at any time through MANAGE COOKIES in the footer."}
        </p>
      </section>

      <section>
        <h2>{es ? "6. Retirada o cambio del consentimiento" : "6. Withdrawing or changing consent"}</h2>
        <p>
          {es
            ? "Puedes cambiar o retirar el consentimiento analítico en cualquier momento mediante el control de preferencias. La retirada no afecta a la licitud de los tratamientos realizados antes del cambio."
            : "You may change or withdraw analytics consent at any time through the preferences control. Withdrawal does not affect the lawfulness of processing carried out before the change."}
        </p>
      </section>

      <section>
        <h2>{es ? "7. Normativa aplicable" : "7. Applicable law"}</h2>
        <p>
          {es
            ? "Esta política se interpreta de acuerdo con el Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 (LOPDGDD) y, en materia de servicios de la sociedad de la información y uso de cookies, la Ley 34/2002 (LSSI-CE), además de las demás normas aplicables."
            : "This policy is governed by Regulation (EU) 2016/679 (GDPR), Spanish Organic Law 3/2018 (LOPDGDD) and, in relation to information-society services and cookies, Spanish Law 34/2002 (LSSI-CE), together with other applicable rules."}
        </p>
      </section>

      <section>
        <h2>{es ? "8. Cambios en esta política" : "8. Changes to this policy"}</h2>
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

function LegalNoticeOwnerDetails({ locale }: { locale: Locale }) {
  return (
    <dl className="legal-details">
      <div><dt>{locale === "es" ? "Titular" : "Owner"}</dt><dd>Naralimon S.C.</dd></div>
      <div><dt>{locale === "es" ? "CIF" : "Tax ID"}</dt><dd>ES J01837269</dd></div>
      <div>
        <dt>{locale === "es" ? "Dirección" : "Address"}</dt>
        <dd>
          <div>Calle Tamarindos 7</div>
          <div>Mijas Costa</div>
          <div>29651 (Málaga)</div>
          <div>España</div>
        </dd>
      </div>
      <div><dt>Email</dt><dd><a href="mailto:naralimongroup@naralimon.com">naralimongroup@naralimon.com</a></dd></div>
    </dl>
  );
}

function LegalNoticeContent({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return (
    <>
      <p className="legal-intro">{es ? "Información general sobre el titular, el uso del sitio y los contenidos de Naralimon." : "General information about the site owner, use of the site and Naralimon content."}</p>
      <section><h2>{es ? "1. Titular del sitio" : "1. Website owner"}</h2><LegalNoticeOwnerDetails locale={locale} /></section>
      <section><h2>{es ? "2. Propiedad intelectual" : "2. Intellectual property"}</h2><p>{es ? "Salvo indicación en contrario, la identidad Naralimon, sus textos, diseños, ilustraciones, juegos, materiales y demás contenidos del sitio están protegidos por los derechos que correspondan a sus respectivos titulares. El acceso al sitio no transfiere derechos de propiedad intelectual o industrial." : "Unless stated otherwise, the Naralimon identity, texts, designs, illustrations, games, materials and other site content are protected by the rights belonging to their respective owners. Access to the site does not transfer intellectual or industrial property rights."}</p></section>
      <section><h2>{es ? "3. Uso permitido" : "3. Permitted use"}</h2><p>{es ? "Puedes navegar, compartir enlaces y utilizar las funciones públicas para su finalidad prevista. No puedes atribuirte los contenidos, explotarlos comercialmente sin autorización, interferir con el sitio o utilizarlo de forma ilícita." : "You may browse, share links and use public features for their intended purpose. You may not claim ownership of content, exploit it commercially without permission, interfere with the site or use it unlawfully."}</p></section>
      <section><h2>{es ? "4. Disponibilidad y responsabilidad" : "4. Availability and liability"}</h2><p>{es ? "Naralimon procura mantener el sitio disponible y correcto, pero no garantiza disponibilidad ininterrumpida ni que todo contenido permanezca sin cambios. La información comercial publicada tiene carácter general y no sustituye la verificación de las condiciones concretas de cada operación." : "Naralimon aims to keep the site available and accurate, but does not guarantee uninterrupted availability or that all content will remain unchanged. Commercial information published on the site is general and does not replace verification of the specific terms of each transaction."}</p></section>
      <section><h2>{es ? "5. Enlaces de terceros" : "5. Third-party links"}</h2><p>{es ? "El sitio puede enlazar a proyectos y recursos externos, como Naralimon Originals o KLANZ. Esos sitios y servicios tienen sus propias condiciones y políticas y Naralimon no controla su contenido o disponibilidad." : "The site may link to external projects and resources such as Naralimon Originals or KLANZ. Those sites and services have their own terms and policies and Naralimon does not control their content or availability."}</p></section>
      <section>
        <h2>{es ? "6. Ley y jurisdicción" : "6. Governing law and jurisdiction"}</h2>
        <p>
          {es
            ? "El presente sitio web y las relaciones derivadas de su utilización se regirán por la legislación española."
            : "This website and any relationships arising from its use shall be governed by Spanish law."}
        </p>
        <p>
          {es
            ? "Para cualquier controversia que pudiera surgir en relación con el acceso, uso o contenidos de este sitio web, y salvo que la normativa imperativa aplicable disponga otra cosa, las partes se someten a los Juzgados y Tribunales de Málaga, España."
            : "For any dispute arising in connection with access to, use of, or content on this website, and unless mandatory applicable law provides otherwise, the parties submit to the Courts of Málaga, Spain."}
        </p>
      </section>
    </>
  );
}

export default function LegalContent({ locale, kind }: { locale: Locale; kind: LegalKind }) {
  if (kind === "privacy") return <PrivacyContent locale={locale} />;
  if (kind === "cookies") return <CookieContent locale={locale} />;
  return <LegalNoticeContent locale={locale} />;
}
