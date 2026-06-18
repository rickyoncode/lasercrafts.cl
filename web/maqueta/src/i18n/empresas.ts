import type { Lang } from "../lib/whatsapp";

export type { Lang };
export const langs: Lang[] = ["es", "pt", "en"];

export const langLabel: Record<Lang, string> = {
  es: "Español",
  pt: "Português",
  en: "English",
};

export const langShort: Record<Lang, string> = {
  es: "ES",
  pt: "PT",
  en: "EN",
};

export const empresasUrl = (lang: Lang): string => (lang === "es" ? "/empresas" : `/empresas/${lang}`);

export interface CapacidadCard {
  titulo: string;
  descripcion: string;
}

export interface ProcesoPaso {
  titulo: string;
  descripcion: string;
}

export interface EmpresasCopy {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
  };
  switcher: {
    label: string;
  };
  hero: {
    eyebrow: string;
    h1Pre: string;
    h1Highlight: string;
    h1Post: string;
    lead: string;
    ctaWa: string;
    ctaLinkedin: string;
    photoAlt: string;
  };
  trustStrip: string[];
  capacidades: {
    eyebrow: string;
    h2: string;
    lead: string;
    cards: CapacidadCard[];
    custom: {
      kicker: string;
      texto: string;
      cta: string;
    };
  };
  caso: {
    eyebrow: string;
    h2: string;
    intro: string;
    bullets: string[];
    galeriaAlt: string[];
    pieFoto: string;
  };
  proceso: {
    eyebrow: string;
    h2: string;
    pasos: ProcesoPaso[];
  };
  materiales: {
    eyebrow: string;
    h2: string;
    parrafos: string[];
  };
  ctaFinal: {
    eyebrow: string;
    h2: string;
    lead: string;
    ctaWa: string;
    ctaLinkedin: string;
    emailLabel: string;
  };
  footer: {
    razonSocial: string;
    tagline: string;
    otrosIdiomas: string;
    volverTienda: string;
  };
}

const c: Record<Lang, EmpresasCopy> = {
  es: {
    htmlLang: "es-CL",
    meta: {
      title: "Productos únicos en madera para empresas — LáserCrafts",
      description:
        "Taller chileno de manufactura digital en terciado. Souvenirs, regalos corporativos, packaging y merchandising con identidad de marca. Cotizaciones por WhatsApp.",
    },
    switcher: { label: "Idioma" },
    hero: {
      eyebrow: "B2B · Mayorista · Corporativo",
      h1Pre: "Productos únicos en madera para",
      h1Highlight: "marcas que cuentan un territorio.",
      h1Post: "",
      lead:
        "Diseñamos y fabricamos a medida en terciado chileno. Grabado láser de precisión, acabados sellados, y un proceso pensado para ferias, hoteles, parques, viñas y marcas que necesitan piezas con alma.",
      ctaWa: "Cotizar por WhatsApp",
      ctaLinkedin: "Conectar en LinkedIn",
      photoAlt: "Ciervo armable en terciado grabado, parte del catálogo Parque Futangue 2026.",
    },
    trustStrip: [
      "Marca registrada en INAPI",
      "Taller propio en Paillaco, Región de los Ríos",
      "Terciado chileno",
      "Despacho nacional e internacional",
    ],
    capacidades: {
      eyebrow: "Qué fabricamos",
      h2: "Líneas que ya producimos en serie",
      lead:
        "Cada línea se diseña con tu identidad: fauna local, flora del territorio, logos, frases, números. Lo que define a tu marca, queda grabado.",
      cards: [
        {
          titulo: "Posavasos & coasters",
          descripcion:
            "Packs de 6 piezas, 10 cm diámetro, sellado contra humedad. Ideal para hoteles, restoranes y kits de bienvenida.",
        },
        {
          titulo: "Llaveros y piezas pequeñas",
          descripcion:
            "Llaveros con argolla premium, pines, miniaturas. Para tiendas de souvenirs, congresos y eventos.",
        },
        {
          titulo: "Marcapáginas y editorial",
          descripcion:
            "Piezas de alto valor botánico para librerías, hoteles boutique y museos. Detalle láser sub-milimétrico.",
        },
        {
          titulo: "Cajas para vino y packaging",
          descripcion:
            "Estuches para botellas de 750cc, cajas de regalo, set de presentación. Para viñas, ferias y regalos corporativos.",
        },
      ],
      custom: {
        kicker: "A medida",
        texto:
          "Si lo que buscas no está acá, lo diseñamos. Displays para puntos de venta, medallas, trofeos, señalética interior, kits de evento, anillos servilleteros, posa lentes, tarjetas regalo en madera.",
        cta: "Conversemos por WhatsApp",
      },
    },
    caso: {
      eyebrow: "Caso de estudio",
      h2: "Parque Futangue · Catálogo 2026",
      intro:
        "Diseñamos un catálogo de cuatro líneas (posavasos, llaveros, marcapáginas, cajas para vino) protagonizado por la fauna y flora del Parque Futangue. Cada pieza es un recordatorio del territorio que el parque protege.",
      bullets: [
        "Personajes: martín pescador, chucao, monito del monte, ranita de Darwin, helecho, hongos magallánicos.",
        "Material: terciado rosado eucalipto, 3 mm.",
        "Valores netos con tarifa mayorista y precio sugerido al consumidor final.",
        "Producción y despacho desde el taller en Reumén, Paillaco.",
      ],
      galeriaAlt: [
        "Pack de 6 posavasos con grabado de aves nativas — Parque Futangue.",
        "Llaveros con monito del monte, ranita de Darwin y chucao en terciado.",
        "Marcapáginas con hongos magallánicos y helechos en terciado.",
        "Cajas para vino con grabados botánicos del bosque valdiviano.",
      ],
      pieFoto: "Catálogo Parque Futangue · 2026",
    },
    proceso: {
      eyebrow: "Cómo trabajamos",
      h2: "Del brief al despacho, sin sorpresas",
      pasos: [
        { titulo: "Brief", descripcion: "Nos cuentas qué necesitas, para qué evento o canal, y para cuándo." },
        { titulo: "Propuesta", descripcion: "En 3 a 5 días hábiles entregamos diseño, plazos y valor neto." },
        { titulo: "Muestra física", descripcion: "Una pieza de prueba antes del volumen, opcional. Cero sorpresas." },
        { titulo: "Producción", descripcion: "Entre 7 y 15 días hábiles según volumen y complejidad." },
        { titulo: "Despacho", descripcion: "Directo al cliente o a un punto único. Chile y exportación bajo consulta." },
      ],
    },
    materiales: {
      eyebrow: "Materiales y técnica",
      h2: "Una sola materia prima, llevada al detalle",
      parrafos: [
        "Trabajamos exclusivamente en terciado chileno —rosado eucalipto por default, lenga y otras maderas bajo pedido—. El grabado láser permite detalle sub-milimétrico y curvas que el corte mecánico no alcanza.",
        "Cada pieza se sella contra humedad y, según el uso, se barniza. La materialidad no es una limitación: es una decisión de marca que privilegia lo cálido, lo táctil y lo durable por sobre el plástico o el metal estampado.",
        "Tarifa mayorista a partir de volúmenes coordinados según el tipo de pieza. Se confirma en la propuesta junto con plazos y condiciones de despacho.",
      ],
    },
    ctaFinal: {
      eyebrow: "Hablemos",
      h2: "¿Tienes una idea para tu marca? Conversemos.",
      lead:
        "Te respondemos por WhatsApp en horario laboral chileno (Lun a Vie, 9 a 18 hrs). Para conversaciones más extensas, agendamos una videollamada.",
      ctaWa: "Cotizar por WhatsApp",
      ctaLinkedin: "Visitar LinkedIn",
      emailLabel: "Email",
    },
    footer: {
      razonSocial: "Borquez Solutions SpA · Marca registrada en INAPI",
      tagline: "Terciado chileno, grabado a medida.",
      otrosIdiomas: "Otros idiomas",
      volverTienda: "Ir a la tienda (catálogo personas)",
    },
  },

  pt: {
    htmlLang: "pt-BR",
    meta: {
      title: "Produtos únicos em madeira para empresas — LáserCrafts",
      description:
        "Oficina chilena de manufatura digital em compensado. Souvenirs, brindes corporativos, embalagens e merchandising com identidade de marca. Orçamentos por WhatsApp.",
    },
    switcher: { label: "Idioma" },
    hero: {
      eyebrow: "B2B · Atacado · Corporativo",
      h1Pre: "Produtos únicos em madeira para",
      h1Highlight: "marcas que contam um território.",
      h1Post: "",
      lead:
        "Projetamos e fabricamos sob medida em compensado chileno. Gravação a laser de precisão, acabamento selado, e um processo pensado para feiras, hotéis, parques, vinícolas e marcas que precisam de peças com alma.",
      ctaWa: "Orçar pelo WhatsApp",
      ctaLinkedin: "Conectar no LinkedIn",
      photoAlt: "Veado montável em compensado gravado, parte do catálogo Parque Futangue 2026.",
    },
    trustStrip: [
      "Marca registrada no INAPI",
      "Oficina própria em Paillaco, Região de Los Ríos",
      "Compensado chileno",
      "Envio nacional e internacional",
    ],
    capacidades: {
      eyebrow: "O que fabricamos",
      h2: "Linhas que já produzimos em série",
      lead:
        "Cada linha é projetada com a sua identidade: fauna local, flora do território, logos, frases, números. O que define a sua marca fica gravado.",
      cards: [
        {
          titulo: "Porta-copos & coasters",
          descripcion:
            "Packs de 6 peças, 10 cm de diâmetro, selados contra umidade. Ideais para hotéis, restaurantes e kits de boas-vindas.",
        },
        {
          titulo: "Chaveiros e peças pequenas",
          descripcion:
            "Chaveiros com argola premium, pins, miniaturas. Para lojas de souvenir, congressos e eventos.",
        },
        {
          titulo: "Marcadores de livro e editorial",
          descripcion:
            "Peças de alto valor botânico para livrarias, hotéis boutique e museus. Detalhe a laser sub-milimétrico.",
        },
        {
          titulo: "Caixas para vinho e embalagens",
          descripcion:
            "Estojos para garrafas de 750cc, caixas de presente, sets de apresentação. Para vinícolas, feiras e brindes.",
        },
      ],
      custom: {
        kicker: "Sob medida",
        texto:
          "Se o que você procura não está aqui, nós projetamos. Displays para PDV, medalhas, troféus, sinalização interior, kits de evento, anéis de guardanapo, porta-óculos, cartões-presente em madeira.",
        cta: "Vamos conversar pelo WhatsApp",
      },
    },
    caso: {
      eyebrow: "Caso de estudo",
      h2: "Parque Futangue · Catálogo 2026",
      intro:
        "Desenvolvemos um catálogo de quatro linhas (porta-copos, chaveiros, marcadores, caixas de vinho) protagonizado pela fauna e flora do Parque Futangue. Cada peça é uma lembrança do território que o parque protege.",
      bullets: [
        "Personagens: martim-pescador, chucao, monito-do-monte, sapinho de Darwin, samambaia, fungos magalhânicos.",
        "Material: compensado rosa de eucalipto, 3 mm.",
        "Valores líquidos com tarifa de atacado e preço sugerido ao consumidor final.",
        "Produção e envio a partir da oficina em Reumén, Paillaco.",
      ],
      galeriaAlt: [
        "Pack de 6 porta-copos com gravação de aves nativas — Parque Futangue.",
        "Chaveiros com monito-do-monte, sapinho de Darwin e chucao em compensado.",
        "Marcadores de livro com fungos magalhânicos e samambaias em compensado.",
        "Caixas para vinho com gravações botânicas do bosque valdiviano.",
      ],
      pieFoto: "Catálogo Parque Futangue · 2026",
    },
    proceso: {
      eyebrow: "Como trabalhamos",
      h2: "Do briefing ao envio, sem surpresas",
      pasos: [
        { titulo: "Briefing", descripcion: "Você nos conta o que precisa, para qual evento ou canal, e para quando." },
        { titulo: "Proposta", descripcion: "Em 3 a 5 dias úteis entregamos design, prazos e valor líquido." },
        { titulo: "Amostra física", descripcion: "Uma peça de teste antes do volume, opcional. Zero surpresas." },
        { titulo: "Produção", descripcion: "Entre 7 e 15 dias úteis dependendo do volume e da complexidade." },
        { titulo: "Envio", descripcion: "Direto ao cliente ou a um ponto único. Chile e exportação sob consulta." },
      ],
    },
    materiales: {
      eyebrow: "Materiais e técnica",
      h2: "Uma única matéria-prima, levada ao detalhe",
      parrafos: [
        "Trabalhamos exclusivamente com compensado chileno —rosa de eucalipto por padrão, lenga e outras madeiras sob pedido—. A gravação a laser permite detalhe sub-milimétrico e curvas que o corte mecânico não alcança.",
        "Cada peça é selada contra umidade e, conforme o uso, recebe verniz. A materialidade não é uma limitação: é uma decisão de marca que privilegia o caloroso, o tátil e o durável sobre o plástico ou o metal estampado.",
        "Tarifa de atacado a partir de volumes coordenados segundo o tipo de peça. É confirmada na proposta junto com os prazos e as condições de envio.",
      ],
    },
    ctaFinal: {
      eyebrow: "Vamos conversar",
      h2: "Tem uma ideia para a sua marca? Vamos conversar.",
      lead:
        "Respondemos pelo WhatsApp em horário comercial chileno (segunda a sexta, das 9 às 18h). Para conversas mais longas, agendamos uma videochamada.",
      ctaWa: "Orçar pelo WhatsApp",
      ctaLinkedin: "Visitar LinkedIn",
      emailLabel: "Email",
    },
    footer: {
      razonSocial: "Borquez Solutions SpA · Marca registrada no INAPI",
      tagline: "Compensado chileno, gravado sob medida.",
      otrosIdiomas: "Outros idiomas",
      volverTienda: "Ir para a loja (catálogo pessoas)",
    },
  },

  en: {
    htmlLang: "en",
    meta: {
      title: "Custom wood products for brands — LáserCrafts",
      description:
        "Chilean digital-manufacturing workshop in laser-engraved plywood. Souvenirs, corporate gifts, packaging and merchandising tailored to your brand. Quotes via WhatsApp.",
    },
    switcher: { label: "Language" },
    hero: {
      eyebrow: "B2B · Wholesale · Corporate",
      h1Pre: "Custom wood products for",
      h1Highlight: "brands that tell a territory.",
      h1Post: "",
      lead:
        "We design and manufacture to order in Chilean plywood. Precision laser engraving, sealed finishes, and a process built for trade fairs, hotels, parks, wineries and brands that need pieces with soul.",
      ctaWa: "Get a quote on WhatsApp",
      ctaLinkedin: "Connect on LinkedIn",
      photoAlt: "Engraved plywood deer model from the Parque Futangue 2026 catalogue.",
    },
    trustStrip: [
      "Trademark registered with INAPI",
      "In-house workshop in Paillaco, Los Ríos",
      "Chilean plywood",
      "Domestic and international shipping",
    ],
    capacidades: {
      eyebrow: "What we make",
      h2: "Production lines we already ship at volume",
      lead:
        "Each line is designed around your identity: local fauna, regional flora, logos, copy, numbers. Whatever defines your brand, gets engraved.",
      cards: [
        {
          titulo: "Coasters & drinkware",
          descripcion:
            "Packs of 6, 10 cm diameter, sealed against moisture. Designed for hotels, restaurants and welcome kits.",
        },
        {
          titulo: "Keychains & small pieces",
          descripcion:
            "Keychains with premium rings, pins, miniatures. For souvenir shops, conferences and events.",
        },
        {
          titulo: "Bookmarks & editorial",
          descripcion:
            "High-detail botanical pieces for bookstores, boutique hotels and museums. Sub-millimetre laser detail.",
        },
        {
          titulo: "Wine boxes & packaging",
          descripcion:
            "Sleeves for 750cc bottles, gift boxes, presentation sets. For wineries, fairs and corporate gifting.",
        },
      ],
      custom: {
        kicker: "Made-to-order",
        texto:
          "If what you need isn't here, we'll design it. POS displays, medals, trophies, indoor signage, event kits, napkin rings, eyewear stands, wood gift cards.",
        cta: "Let's chat on WhatsApp",
      },
    },
    caso: {
      eyebrow: "Case study",
      h2: "Parque Futangue · 2026 Catalogue",
      intro:
        "We designed a four-line catalogue (coasters, keychains, bookmarks, wine boxes) featuring the fauna and flora of Parque Futangue. Each piece is a keepsake of the territory the park protects.",
      bullets: [
        "Cast: ringed kingfisher, chucao tapaculo, monito del monte, Darwin's frog, fern, Magellanic fungi.",
        "Material: pink-eucalyptus plywood, 3 mm.",
        "Net pricing with wholesale tariff and suggested retail price.",
        "Production and shipping from the workshop in Reumén, Paillaco.",
      ],
      galeriaAlt: [
        "Pack of 6 coasters engraved with native birds — Parque Futangue.",
        "Keychains featuring monito del monte, Darwin's frog and chucao tapaculo in plywood.",
        "Bookmarks featuring Magellanic fungi and ferns in plywood.",
        "Wine boxes engraved with botanical motifs of the Valdivian forest.",
      ],
      pieFoto: "Parque Futangue catalogue · 2026",
    },
    proceso: {
      eyebrow: "How we work",
      h2: "From brief to shipping, no surprises",
      pasos: [
        { titulo: "Brief", descripcion: "Tell us what you need, for which event or channel, and by when." },
        { titulo: "Proposal", descripcion: "Within 3–5 business days you'll get design, lead times and net pricing." },
        { titulo: "Physical sample", descripcion: "An optional test piece before volume production. Zero surprises." },
        { titulo: "Production", descripcion: "Between 7 and 15 business days depending on volume and complexity." },
        { titulo: "Shipping", descripcion: "Direct to client or to a single point. Chile and exports on request." },
      ],
    },
    materiales: {
      eyebrow: "Materials & technique",
      h2: "A single raw material, taken to the detail",
      parrafos: [
        "We work exclusively in Chilean plywood —pink eucalyptus by default, lenga and other woods on request—. Laser engraving allows sub-millimetre detail and curves mechanical cutting can't match.",
        "Each piece is sealed against moisture and, depending on use, varnished. Materiality isn't a constraint: it's a brand decision that favours warmth, touch and durability over plastic or stamped metal.",
        "Wholesale pricing kicks in at volumes coordinated by piece type. It's confirmed in the proposal along with lead times and shipping conditions.",
      ],
    },
    ctaFinal: {
      eyebrow: "Get in touch",
      h2: "Have an idea for your brand? Let's talk.",
      lead:
        "We reply on WhatsApp during Chilean business hours (Mon–Fri, 9 to 18). For longer conversations we schedule a video call.",
      ctaWa: "Get a quote on WhatsApp",
      ctaLinkedin: "Visit LinkedIn",
      emailLabel: "Email",
    },
    footer: {
      razonSocial: "Borquez Solutions SpA · Trademark registered at INAPI",
      tagline: "Chilean plywood, engraved to order.",
      otrosIdiomas: "Other languages",
      volverTienda: "Go to the consumer store",
    },
  },
};

export const empresasCopy = c;

export const LINKEDIN_URL = "https://www.linkedin.com/company/lasercrafts/";
export const EMAIL_B2B = "hola@lasercrafts.cl";
