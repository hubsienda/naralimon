import type { Locale } from "./types";

export const commercialCopy = {
  es: {
    nav: {
      home: "INICIO",
      representation: "REPRESENTACIÓN",
      brokerage: "INTERMEDIACIÓN",
      sourcing: "APROVISIONAMIENTO",
      about: "NOSOTROS",
      contact: "CONTACTO",
    },
    hero: {
      eyebrow: "NARALIMON",
      title: "Intermediación alimentaria y representación comercial",
      lead: "Conectamos fabricantes con nuevos mercados.",
      body: "Desde la Costa del Sol, facilitamos relaciones comerciales entre productores, fabricantes, distribuidores y compradores profesionales del sector alimentario.",
      sub: "Desarrollamos oportunidades de representación, intermediación y aprovisionamiento, tanto en España como en mercados internacionales.",
      manufacturer: "SOY FABRICANTE",
      buyer: "BUSCO PRODUCTOS",
    },
    home: {
      whatWeDo: {
        kicker: "QUÉ HACEMOS",
        title: "Desarrollo comercial entre oferta y demanda profesional",
        intro: "Naralimon actúa como agencia comercial independiente. Identificamos oportunidades, conectamos a las partes adecuadas y apoyamos el desarrollo de relaciones B2B.",
        cards: [
          {
            title: "Representación comercial",
            body: "Apoyo a fabricantes y productores que quieren desarrollar clientes, distribuidores y canales profesionales en nuevos mercados.",
            href: "/representacion-comercial",
            link: "VER REPRESENTACIÓN",
          },
          {
            title: "Intermediación alimentaria",
            body: "Introducciones comerciales y apoyo a operaciones concretas entre proveedores y compradores profesionales.",
            href: "/intermediacion-alimentaria",
            link: "VER INTERMEDIACIÓN",
          },
          {
            title: "Aprovisionamiento",
            body: "Búsqueda y contraste de proveedores según producto, volumen, documentación, formato y requisitos de entrega.",
            href: "/aprovisionamiento",
            link: "VER APROVISIONAMIENTO",
          },
        ],
      },
      manufacturers: {
        kicker: "PARA FABRICANTES",
        title: "Una extensión comercial independiente",
        body: "Trabajamos con fabricantes y productores que desean explorar mercados y canales profesionales sin presentar a Naralimon como fabricante, mayorista o distribuidor.",
        points: [
          "Identificación de clientes profesionales potenciales.",
          "Desarrollo de relaciones con distribuidores y mayoristas.",
          "Presentación comercial y seguimiento de oportunidades.",
          "Apoyo en conversaciones, ofertas y negociación comercial.",
        ],
        link: "HABLEMOS DE REPRESENTACIÓN",
      },
      buyers: {
        kicker: "PARA COMPRADORES PROFESIONALES",
        title: "Búsqueda orientada a requisitos reales de compra",
        body: "Ayudamos a distribuidores, mayoristas, operadores de foodservice y compradores profesionales a investigar opciones de suministro con criterios comerciales concretos.",
        points: [
          "Producto, especificación y formato.",
          "Volumen y frecuencia de compra.",
          "Documentación y requisitos de calidad.",
          "Packaging, condiciones comerciales y necesidades de entrega.",
        ],
        link: "BUSCO PRODUCTOS",
      },
      sectors: {
        kicker: "SECTORES DE PRODUCTO",
        title: "Foco inicial, capacidad de expansión",
        body: "Nuestro foco comercial inicial está en alimentos congelados, vegetales preparados y productos destinados a foodservice, canal mayorista y distribución profesional. Evaluamos otras categorías alimentarias cuando existe una oportunidad comercial concreta.",
        items: ["Alimentos congelados", "Vegetales preparados", "Foodservice", "Mayoristas", "Distribución profesional", "Otras categorías B2B"],
      },
      process: {
        kicker: "CÓMO TRABAJAMOS",
        title: "Un proceso comercial claro",
        steps: [
          ["01", "Entender", "Definimos producto, mercado, canal, requisitos y objetivo comercial."],
          ["02", "Identificar", "Investigamos contrapartes potenciales con encaje comercial."],
          ["03", "Conectar", "Facilitamos presentaciones y coordinamos el intercambio de información."],
          ["04", "Desarrollar", "Apoyamos el seguimiento comercial y la evolución de la relación entre las partes."],
        ],
        note: "Las condiciones, territorios, responsabilidades y comisiones se acuerdan individualmente. Los proveedores venden, facturan y entregan directamente conforme a los acuerdos alcanzados con sus clientes.",
      },
      contact: {
        kicker: "HABLEMOS",
        title: "¿Tiene un producto que desarrollar o una necesidad de aprovisionamiento?",
        body: "Cuéntenos qué fabrica, qué busca o qué mercado quiere explorar. Revisaremos si existe un encaje comercial razonable.",
        primary: "CONTACTAR",
        secondary: "CONOCER NARALIMON",
      },
    },
    representation: {
      kicker: "REPRESENTACIÓN COMERCIAL",
      title: "Desarrollo de mercados para fabricantes y productores",
      intro: "Naralimon propone una representación comercial independiente orientada a desarrollar oportunidades B2B para fabricantes y productores del sector alimentario.",
      sections: [
        {
          title: "Qué podemos desarrollar",
          body: "La representación puede incluir prospección de mercado, identificación de compradores profesionales y desarrollo continuado de relaciones comerciales.",
          points: [
            "Desarrollo de mercado.",
            "Identificación de clientes profesionales potenciales.",
            "Relaciones con distribuidores y mayoristas.",
            "Promoción y representación comercial.",
            "Introducción y apoyo a la negociación.",
            "Desarrollo de relaciones comerciales recurrentes.",
          ],
        },
        {
          title: "Un acuerdo adaptado a cada fabricante",
          body: "No ofrecemos una representación genérica ni damos por hecho exclusividades. Producto, mercado, territorio, responsabilidades, objetivos y remuneración se definen mediante acuerdos individuales.",
        },
        {
          title: "Modelo operativo",
          body: "Naralimon facilita y desarrolla la relación comercial. El fabricante o proveedor conserva la relación contractual de suministro y vende, factura y entrega directamente según lo acordado con el comprador. Naralimon percibe la comisión o remuneración comercial pactada.",
        },
      ],
      cta: "HABLEMOS DE REPRESENTACIÓN",
    },
    brokerage: {
      kicker: "INTERMEDIACIÓN ALIMENTARIA",
      title: "Introducciones B2B para oportunidades comerciales concretas",
      intro: "La intermediación permite conectar fabricantes y compradores profesionales cuando existe una necesidad o una oportunidad comercial específica.",
      sections: [
        {
          title: "Qué hacemos",
          body: "Analizamos el encaje básico de la oportunidad y facilitamos el contacto comercial entre las partes.",
          points: [
            "Identificación de contrapartes comerciales adecuadas.",
            "Evaluación de producto y requisitos de compra.",
            "Presentaciones comerciales.",
            "Coordinación de consultas y solicitudes de oferta.",
            "Apoyo durante las conversaciones comerciales.",
          ],
        },
        {
          title: "Intermediación y representación no son lo mismo",
          body: "La representación comercial busca desarrollar una presencia y relaciones de forma continuada para un fabricante. La intermediación puede centrarse en una oportunidad o asignación concreta. El alcance se acuerda antes de iniciar el trabajo.",
        },
        {
          title: "Responsabilidad de las partes",
          body: "Naralimon no garantiza que una operación se cierre ni asume la fabricación, calidad, disponibilidad, transporte o entrega del producto. Esos elementos deben verificarse y acordarse entre proveedor y comprador.",
        },
      ],
      cta: "HABLEMOS DE UNA OPORTUNIDAD",
    },
    sourcing: {
      kicker: "APROVISIONAMIENTO INTERNACIONAL",
      title: "Búsqueda de proveedores para compradores profesionales",
      intro: "Apoyamos a compradores profesionales que necesitan investigar opciones de suministro con requisitos concretos de producto, volumen, documentación, packaging y entrega.",
      sections: [
        {
          title: "Para quién",
          body: "El servicio está orientado a organizaciones que compran profesionalmente para distribución, transformación o consumo organizado.",
          points: [
            "Distribuidores de foodservice.",
            "Mayoristas.",
            "Hoteles y organizaciones de compras para catering.",
            "Compradores profesionales de alimentación.",
          ],
        },
        {
          title: "Qué investigamos",
          body: "Partimos de una especificación comercial para identificar proveedores potenciales y contrastar la información relevante antes de una introducción.",
          points: [
            "Producto y especificaciones.",
            "Volúmenes requeridos.",
            "Documentación de calidad solicitada.",
            "Packaging y formatos.",
            "Condiciones y necesidades de entrega.",
          ],
        },
        {
          title: "Verificación antes de decidir",
          body: "Las capacidades del proveedor, precios, disponibilidad, documentación y condiciones comerciales están siempre sujetos a verificación. Naralimon no presenta relaciones de suministro como existentes antes de haberlas confirmado.",
        },
      ],
      cta: "PLANTEAR UNA BÚSQUEDA",
    },
    about: {
      kicker: "NOSOTROS",
      title: "Una agencia comercial independiente desde Mijas Costa, Málaga",
      intro: "Naralimon S.C. es una empresa española que está desarrollando su actividad de intermediación alimentaria, representación comercial y apoyo al aprovisionamiento internacional.",
      sections: [
        {
          title: "Nuestro enfoque",
          body: "Trabajamos desde una lógica sencilla: comprender bien la oferta y la demanda, identificar un encaje real y facilitar relaciones profesionales transparentes entre las partes.",
        },
        {
          title: "Independencia comercial",
          body: "Naralimon no se presenta como fabricante, mayorista, importador de registro ni operador logístico. Nuestro papel es comercial: representación, intermediación, introducciones B2B y desarrollo de mercado.",
        },
        {
          title: "Cómo se estructura una operación",
          body: "Los fabricantes y proveedores venden, facturan y entregan directamente conforme a sus acuerdos. Naralimon recibe las comisiones o remuneraciones de intermediación que se acuerden para cada relación o asignación.",
        },
        {
          title: "Ámbito",
          body: "El foco inicial se sitúa en alimentos congelados, vegetales preparados, foodservice y distribución profesional, con capacidad para estudiar otras categorías y mercados cuando existe una oportunidad concreta.",
        },
      ],
      cta: "CONTACTAR",
    },
    contact: {
      kicker: "CONTACTO",
      title: "Hablemos de la oportunidad",
      intro: "Si representa a un fabricante, busca productos para compra profesional o quiere plantear una oportunidad comercial, envíenos la información básica. Responderemos si vemos un posible encaje.",
    },
    footer: {
      projects: "OTROS PROYECTOS NARALIMON",
      originals: "NARALIMON ORIGINALS",
      klanz: "KLANZ",
      privacy: "PRIVACIDAD",
      cookies: "COOKIES",
      legal: "AVISO LEGAL",
      manageCookies: "GESTIONAR COOKIES",
      top: "TOP",
    },
    consent: {
      bannerTitle: "COOKIES",
      bannerBody: "Usamos almacenamiento necesario para recordar tus preferencias. Google Analytics solo se carga si aceptas Analítica.",
      acceptAll: "ACEPTAR ANALÍTICA",
      reject: "RECHAZAR NO ESENCIALES",
      preferences: "PREFERENCIAS",
      preferencesTitle: "PREFERENCIAS DE COOKIES",
      necessary: "Necesarias",
      necessaryHelp: "Siempre activas. Guardan únicamente tus preferencias de consentimiento y permiten funciones esenciales.",
      analytics: "Analítica",
      analyticsHelp: "Permite Google Analytics para entender de forma agregada cómo se usa la web.",
      alwaysOn: "SIEMPRE ACTIVAS",
      save: "GUARDAR PREFERENCIAS",
      close: "CERRAR",
    },
  },
  en: {
    nav: {
      home: "HOME",
      representation: "REPRESENTATION",
      brokerage: "BROKERAGE",
      sourcing: "SOURCING",
      about: "ABOUT",
      contact: "CONTACT",
    },
    hero: {
      eyebrow: "NARALIMON",
      title: "Food Brokerage & Commercial Representation",
      lead: "Connecting manufacturers with new markets.",
      body: "Based on the Costa del Sol, we facilitate commercial relationships between food producers, manufacturers, distributors and professional buyers.",
      sub: "We develop opportunities in sales representation, food brokerage and sourcing, across Spain and international markets.",
      manufacturer: "I'M A MANUFACTURER",
      buyer: "I'M SOURCING PRODUCTS",
    },
    home: {
      whatWeDo: {
        kicker: "WHAT WE DO",
        title: "Commercial development between professional supply and demand",
        intro: "Naralimon operates as an independent commercial agency. We identify opportunities, connect relevant parties and support the development of B2B relationships.",
        cards: [
          {
            title: "Commercial representation",
            body: "Support for manufacturers and producers seeking to develop professional customers, distributors and channels in new markets.",
            href: "/en/sales-representation",
            link: "VIEW REPRESENTATION",
          },
          {
            title: "Food brokerage",
            body: "Commercial introductions and support for specific opportunities between suppliers and professional buyers.",
            href: "/en/food-brokerage",
            link: "VIEW BROKERAGE",
          },
          {
            title: "Sourcing",
            body: "Supplier research based on product, volume, documentation, format and delivery requirements.",
            href: "/en/sourcing",
            link: "VIEW SOURCING",
          },
        ],
      },
      manufacturers: {
        kicker: "FOR MANUFACTURERS",
        title: "An independent extension of your commercial activity",
        body: "We work with manufacturers and producers looking to explore markets and professional channels without presenting Naralimon as a manufacturer, wholesaler or distributor.",
        points: [
          "Identification of prospective professional customers.",
          "Development of distributor and wholesaler relationships.",
          "Commercial presentation and opportunity follow-up.",
          "Support with discussions, quotations and commercial negotiation.",
        ],
        link: "DISCUSS REPRESENTATION",
      },
      buyers: {
        kicker: "FOR PROFESSIONAL BUYERS",
        title: "Sourcing driven by real purchasing requirements",
        body: "We help distributors, wholesalers, foodservice operators and professional buyers investigate supply options against specific commercial criteria.",
        points: [
          "Product, specification and format.",
          "Volume and purchasing frequency.",
          "Documentation and quality requirements.",
          "Packaging, commercial terms and delivery requirements.",
        ],
        link: "I'M SOURCING PRODUCTS",
      },
      sectors: {
        kicker: "PRODUCT SECTORS",
        title: "Initial focus, room to expand",
        body: "Our initial commercial focus is frozen foods, prepared vegetables and products for foodservice, wholesale and professional distribution. We assess other food categories where there is a concrete commercial opportunity.",
        items: ["Frozen foods", "Prepared vegetables", "Foodservice", "Wholesale", "Professional distribution", "Other B2B categories"],
      },
      process: {
        kicker: "HOW WE WORK",
        title: "A clear commercial process",
        steps: [
          ["01", "Understand", "We define the product, market, channel, requirements and commercial objective."],
          ["02", "Identify", "We research potential counterparties with a plausible commercial fit."],
          ["03", "Connect", "We facilitate introductions and coordinate the exchange of relevant information."],
          ["04", "Develop", "We support commercial follow-up and the development of the relationship between the parties."],
        ],
        note: "Terms, territories, responsibilities and commissions are agreed individually. Suppliers sell, invoice and deliver directly in accordance with the agreements reached with their customers.",
      },
      contact: {
        kicker: "LET'S TALK",
        title: "Do you have a product to develop or a sourcing requirement?",
        body: "Tell us what you manufacture, what you are looking for or which market you want to explore. We will assess whether there is a reasonable commercial fit.",
        primary: "CONTACT US",
        secondary: "ABOUT NARALIMON",
      },
    },
    representation: {
      kicker: "COMMERCIAL REPRESENTATION",
      title: "Market development for food manufacturers and producers",
      intro: "Naralimon proposes independent commercial representation focused on developing B2B opportunities for food manufacturers and producers.",
      sections: [
        {
          title: "What we can develop",
          body: "Representation may include market prospecting, identification of professional buyers and the continued development of commercial relationships.",
          points: [
            "Market development.",
            "Identification of prospective professional customers.",
            "Distributor and wholesaler relationships.",
            "Commercial promotion and representation.",
            "Introduction and negotiation support.",
            "Development of recurring business relationships.",
          ],
        },
        {
          title: "An agreement tailored to each manufacturer",
          body: "We do not offer generic representation or assume exclusivity. Product, market, territory, responsibilities, objectives and remuneration are defined through individual agreements.",
        },
        {
          title: "Operating model",
          body: "Naralimon facilitates and develops the commercial relationship. The manufacturer or supplier retains the supply contract and sells, invoices and delivers directly as agreed with the buyer. Naralimon receives the agreed commission or commercial remuneration.",
        },
      ],
      cta: "DISCUSS REPRESENTATION",
    },
    brokerage: {
      kicker: "FOOD BROKERAGE",
      title: "B2B introductions for specific commercial opportunities",
      intro: "Brokerage connects manufacturers and professional buyers where there is a specific purchasing need or commercial opportunity.",
      sections: [
        {
          title: "What we do",
          body: "We assess the basic commercial fit of an opportunity and facilitate contact between the relevant parties.",
          points: [
            "Identification of appropriate commercial counterparties.",
            "Evaluation of product and purchasing requirements.",
            "Commercial introductions.",
            "Coordination of enquiries and quotation requests.",
            "Support during commercial discussions.",
          ],
        },
        {
          title: "Brokerage and representation are different",
          body: "Commercial representation is intended to build ongoing market presence and relationships for a manufacturer. Brokerage may focus on a specific assignment or opportunity. Scope is agreed before work begins.",
        },
        {
          title: "Responsibility of the parties",
          body: "Naralimon does not guarantee that a transaction will close and does not assume responsibility for manufacture, product quality, availability, transport or delivery. These elements must be verified and agreed between supplier and buyer.",
        },
      ],
      cta: "DISCUSS AN OPPORTUNITY",
    },
    sourcing: {
      kicker: "INTERNATIONAL SOURCING",
      title: "Supplier research for professional buyers",
      intro: "We support professional buyers that need to investigate supply options against specific product, volume, documentation, packaging and delivery requirements.",
      sections: [
        {
          title: "Who it is for",
          body: "The service is intended for organisations purchasing professionally for distribution, processing or organised consumption.",
          points: [
            "Foodservice distributors.",
            "Wholesalers.",
            "Hotels and catering procurement organisations.",
            "Professional food buyers.",
          ],
        },
        {
          title: "What we investigate",
          body: "We start with a commercial specification, identify potential suppliers and review relevant information before an introduction.",
          points: [
            "Product and specifications.",
            "Required volumes.",
            "Requested quality documentation.",
            "Packaging and formats.",
            "Commercial and delivery requirements.",
          ],
        },
        {
          title: "Verification before a decision",
          body: "Supplier capabilities, prices, availability, documentation and commercial terms are always subject to verification. Naralimon does not present supply relationships as existing before they have been confirmed.",
        },
      ],
      cta: "START A SOURCING ENQUIRY",
    },
    about: {
      kicker: "ABOUT",
      title: "An independent commercial agency based in Mijas Costa, Málaga",
      intro: "Naralimon S.C. is a Spanish company developing its activity in food brokerage, commercial representation and international sourcing support.",
      sections: [
        {
          title: "Our approach",
          body: "Our approach is straightforward: understand supply and demand properly, identify a genuine fit and facilitate transparent professional relationships between the parties.",
        },
        {
          title: "Commercial independence",
          body: "Naralimon does not present itself as a manufacturer, wholesaler, importer of record or logistics operator. Our role is commercial: representation, brokerage, B2B introductions and market development.",
        },
        {
          title: "How a transaction is structured",
          body: "Manufacturers and suppliers sell, invoice and deliver directly under their own agreements. Naralimon receives the commissions or brokerage remuneration agreed for each relationship or assignment.",
        },
        {
          title: "Scope",
          body: "Our initial focus is frozen foods, prepared vegetables, foodservice and professional distribution, with the ability to assess other categories and markets where there is a concrete opportunity.",
        },
      ],
      cta: "CONTACT US",
    },
    contact: {
      kicker: "CONTACT",
      title: "Let's discuss the opportunity",
      intro: "If you represent a manufacturer, are sourcing products professionally or want to discuss a commercial opportunity, send us the essential information. We will respond if we see a possible fit.",
    },
    footer: {
      projects: "OTHER NARALIMON PROJECTS",
      originals: "NARALIMON ORIGINALS",
      klanz: "KLANZ",
      privacy: "PRIVACY",
      cookies: "COOKIES",
      legal: "LEGAL NOTICE",
      manageCookies: "MANAGE COOKIES",
      top: "TOP",
    },
    consent: {
      bannerTitle: "COOKIES",
      bannerBody: "We use necessary storage to remember your preferences. Google Analytics only loads if you accept Analytics.",
      acceptAll: "ACCEPT ANALYTICS",
      reject: "REJECT NON-ESSENTIAL",
      preferences: "PREFERENCES",
      preferencesTitle: "COOKIE PREFERENCES",
      necessary: "Necessary",
      necessaryHelp: "Always enabled. Stores only your consent preferences and enables essential functions.",
      analytics: "Analytics",
      analyticsHelp: "Allows Google Analytics so we can understand, in aggregate, how the site is used.",
      alwaysOn: "ALWAYS ON",
      save: "SAVE PREFERENCES",
      close: "CLOSE",
    },
  },
} as const;

export function getCommercialCopy(locale: Locale) {
  return commercialCopy[locale];
}
