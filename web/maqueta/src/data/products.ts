export type Product = {
  slug: string;
  nombre: string;
  ocasion: string; // slug de la ocasion principal
  ocasionesExtra?: string[]; // ocasiones secundarias
  precio: number; // CLP
  descripcionCorta: string;
  descripcionLarga: string;
  opciones: {
    texto: { label: string; placeholder: string };
    color?: { label: string; valores: string[] };
    cantidad: { default: number; min: number; max: number };
  };
  plazoDias: { min: number; max: number };
  imagen: string; // ruta a public/img/products/...
};

// NOTA: precios y plazos son PLACEHOLDERS — Felipe los confirma vía
// branding/catalogo-productos.xlsx. Los textos vienen del catálogo
// redactado en branding/catalogo-productos.md (registro taller
// arquitectónico, voz-de-marca §4.2).
export const products: Product[] = [
  {
    slug: "posavasos-valdivia",
    nombre: "Posavasos Valdivia",
    ocasion: "cumpleanos",
    ocasionesExtra: ["decoracion", "matrimonios"],
    precio: 6900,
    descripcionCorta: "Posavasos cuadrado en terciado con un pájaro geométrico y la palabra Valdivia.",
    descripcionLarga:
      "Lo grabamos cuadrado, con un pájaro de líneas geométricas y \"Valdivia\" en cursiva al lado. Atrás lleva imán, así también sirve de souvenir de refrigerador. Sale solo o en sets de 4 y 6.",
    opciones: {
      texto: { label: "Palabra a grabar (en vez de Valdivia)", placeholder: "Ej: Niebla 2026" },
      cantidad: { default: 1, min: 1, max: 12 }
    },
    plazoDias: { min: 3, max: 5 },
    imagen: "/img/products/catalogo/posavasos-valdivia.jpg"
  },
  {
    slug: "posavasos-fauna-nativa",
    nombre: "Posavasos fauna nativa",
    ocasion: "decoracion",
    ocasionesExtra: ["matrimonios", "cumpleanos"],
    precio: 7900,
    descripcionCorta: "Posavasos redondos con grabado de fauna nativa y su nombre científico.",
    descripcionLarga:
      "Cada pieza es una especie del sur de Chile, grabada en línea fina con nombre común y científico al borde. Hoy hemos hecho cisne cuello negro, martín pescador y otras aves del bosque valdiviano. Se piden por especie o como set temático (parques, viñas, hoteles).",
    opciones: {
      texto: { label: "Especie o set", placeholder: "Ej: Cisne cuello negro" },
      cantidad: { default: 1, min: 1, max: 12 }
    },
    plazoDias: { min: 4, max: 7 },
    imagen: "/img/products/catalogo/posavasos-fauna-nativa.jpg"
  },
  {
    slug: "set-posavasos-geometricos",
    nombre: "Set posavasos geométricos + cofre",
    ocasion: "matrimonios",
    ocasionesExtra: ["dia-de-la-madre", "cumpleanos"],
    precio: 24900,
    descripcionCorta: "Cuatro posavasos calados con patrones geométricos, presentados en cofre con la firma LáserCrafts.",
    descripcionLarga:
      "Cuatro patrones distintos —asanoha, seigaiha y dos más— calados en terciado, listos para servir en mesa de café. Vienen en un cofre cuadrado con la firma del taller grabada al fondo. Es nuestro regalo corporativo más pedido.",
    opciones: {
      texto: { label: "Grabado en el cofre (opcional)", placeholder: "Ej: Familia Soto · 2026" },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 5, max: 8 },
    imagen: "/img/products/catalogo/set-posavasos-geometricos.jpg"
  },
  {
    slug: "bandeja-portavasos",
    nombre: "Bandeja porta-posavasos",
    ocasion: "decoracion",
    ocasionesExtra: ["matrimonios"],
    precio: 19900,
    descripcionCorta: "Bandeja baja con la firma LáserCrafts grabada al frente, lista para una mesa de café.",
    descripcionLarga:
      "La bandeja sostiene seis posavasos y una taza al medio. La grabamos al frente con el nombre de quien la regala o la marca del local que la pide. Cabe en mesa de centro o repisa de cocina.",
    opciones: {
      texto: { label: "Texto al frente", placeholder: "Ej: Casa de los Bórquez" },
      cantidad: { default: 1, min: 1, max: 3 }
    },
    plazoDias: { min: 4, max: 6 },
    imagen: "/img/products/catalogo/bandeja-portavasos.jpg"
  },
  {
    slug: "cofre-tapa-hojas",
    nombre: "Cofre tapa de hojas",
    ocasion: "matrimonios",
    ocasionesExtra: ["nacimientos", "dia-de-la-madre", "cumpleanos"],
    precio: 28900,
    descripcionCorta: "Cofre rectangular con tapa de hojas caladas, para guardar lo que sea importante.",
    descripcionLarga:
      "La tapa es una composición de hojas caladas que se cruzan; la luz pasa entre ellas. Adentro cabe joyería, un anillo de matrimonio, recuerdos. Es el cofre que más pedimos para nacimientos y aniversarios.",
    opciones: {
      texto: { label: "Grabado interior (opcional)", placeholder: "Ej: Para Camila · 14.02.2026" },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 5, max: 8 },
    imagen: "/img/products/catalogo/cofre-tapa-hojas.jpg"
  },
  {
    slug: "cofre-cuadrado-firma",
    nombre: "Cofre cuadrado firma LáserCrafts",
    ocasion: "cumpleanos",
    ocasionesExtra: ["matrimonios", "decoracion"],
    precio: 18900,
    descripcionCorta: "Cofre cuadrado con la firma del taller grabada al fondo.",
    descripcionLarga:
      "Lo armamos a la medida del set de posavasos, pero también funciona como cofre solo. La firma queda escondida al fondo, así el cliente la descubre al abrir.",
    opciones: {
      texto: { label: "Mensaje al fondo (sustituye la firma)", placeholder: "Ej: Para María · 50 años" },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 5, max: 7 },
    imagen: "/img/products/catalogo/cofre-cuadrado-firma.jpg"
  },
  {
    slug: "soporte-celular-plegable",
    nombre: "Soporte de celular plegable",
    ocasion: "dia-del-padre",
    ocasionesExtra: ["cumpleanos", "decoracion"],
    precio: 12900,
    descripcionCorta: "Soporte de celular que se pliega, con grabado al frente.",
    descripcionLarga:
      "Lo grabamos con el logo de un equipo, una marca o una frase. Se pliega cuando no se usa y queda como pieza de escritorio. Sirve para celular y para tablet pequeña.",
    opciones: {
      texto: { label: "Grabado al frente", placeholder: "Ej: Colo-Colo / Logo / nombre" },
      cantidad: { default: 1, min: 1, max: 10 }
    },
    plazoDias: { min: 3, max: 5 },
    imagen: "/img/products/catalogo/soporte-celular-plegable.jpg"
  },
  {
    slug: "soporte-celular-engranaje",
    nombre: "Soporte de celular engranaje",
    ocasion: "dia-del-padre",
    ocasionesExtra: ["decoracion", "cumpleanos"],
    precio: 16900,
    descripcionCorta: "Soporte para celular con engranaje calado y madera oscura.",
    descripcionLarga:
      "El detalle del engranaje queda visible al apoyar el celular. Lo entregamos en madera oscura para que el contraste con el grabado sea fuerte. Es nuestro soporte más vendido a personas que trabajan en escritorio.",
    opciones: {
      texto: { label: "Grabado lateral (opcional)", placeholder: "Ej: Iniciales" },
      cantidad: { default: 1, min: 1, max: 10 }
    },
    plazoDias: { min: 4, max: 6 },
    imagen: "/img/products/catalogo/soporte-celular-engranaje.jpg"
  },
  {
    slug: "pins-imanes-naturaleza",
    nombre: "Set pins/imanes naturaleza",
    ocasion: "cumpleanos",
    ocasionesExtra: ["decoracion", "dia-de-la-madre"],
    precio: 11900,
    descripcionCorta: "Set de cuatro pins pintados a mano: hongo amanita, pino con luna, hongo violeta, mariposa luna.",
    descripcionLarga:
      "Cada pieza la pintamos a mano sobre el grabado, así no hay dos exactamente iguales. Se piden sueltos o en sets de cuatro. Se usan como pin de mochila, imán de refrigerador o adorno de planta.",
    opciones: {
      texto: { label: "Especies a incluir", placeholder: "Ej: hongo, mariposa, pino, luna" },
      cantidad: { default: 1, min: 1, max: 6 }
    },
    plazoDias: { min: 5, max: 8 },
    imagen: "/img/products/catalogo/pins-imanes-naturaleza.jpg"
  },
  {
    slug: "llaveros-fauna-nativa",
    nombre: "Llaveros fauna nativa",
    ocasion: "cumpleanos",
    ocasionesExtra: ["nacimientos"],
    precio: 6900,
    descripcionCorta: "Llaveros de pájaros y mamíferos del bosque valdiviano, con nombre al lado.",
    descripcionLarga:
      "Hoy tenemos chucao y monito del monte; vamos sumando especies según pedidos. El reverso queda limpio para grabar el logo de quien los regala (parque, hotel, viña). Llevan anilla metálica y cadena corta.",
    opciones: {
      texto: { label: "Especie o logo al reverso", placeholder: "Ej: Chucao" },
      cantidad: { default: 1, min: 1, max: 20 }
    },
    plazoDias: { min: 3, max: 5 },
    imagen: "/img/products/catalogo/llaveros-fauna-nativa.jpg"
  },
  {
    slug: "marcapaginas-fauna",
    nombre: "Marcapáginas fauna nativa",
    ocasion: "dia-de-la-madre",
    ocasionesExtra: ["cumpleanos", "decoracion"],
    precio: 8900,
    descripcionCorta: "Marcapáginas en terciado con flora y hongos del sur, nombre común y científico.",
    descripcionLarga:
      "La forma sigue al organismo —el digüeñe es una cabeza de racimos, el campañita magallánica es un hongo entero con su raíz, otros son árboles con copa y raíz. En el cabezal va el nombre común y el científico abajo. Pensados para librería independiente, museo o regalo botánico.",
    opciones: {
      texto: { label: "Especies o logo en el cabezal", placeholder: "Ej: Digüeñe + campañita" },
      cantidad: { default: 1, min: 1, max: 20 }
    },
    plazoDias: { min: 4, max: 6 },
    imagen: "/img/products/catalogo/marcapaginas-fauna.jpg"
  },
  {
    slug: "cuadro-3d-pez-betta",
    nombre: "Cuadro 3D pez betta",
    ocasion: "decoracion",
    ocasionesExtra: ["cumpleanos", "dia-del-padre"],
    precio: 45900,
    descripcionCorta: "Cuadro enmarcado con un pez betta en relieve sobre fondo de peces grabados.",
    descripcionLarga:
      "El pez se arma en varias capas de madera teñida, así sus aletas tienen profundidad real (no es solo grabado). El fondo es una trama de peces más pequeños grabados en plano. Marco oscuro, listo para colgar.",
    opciones: {
      texto: { label: "Tono del pez", placeholder: "Ej: Rojo / Azul / Dorado" },
      cantidad: { default: 1, min: 1, max: 3 }
    },
    plazoDias: { min: 8, max: 12 },
    imagen: "/img/products/catalogo/cuadro-3d-pez-betta.jpg"
  },
  {
    slug: "cuadro-3d-manga",
    nombre: "Cuadro 3D personaje manga/anime",
    ocasion: "decoracion",
    ocasionesExtra: ["cumpleanos"],
    precio: 59900,
    descripcionCorta: "Retrato 3D armado en capas: personaje sobre fondo decorativo, marco listo para colgar.",
    descripcionLarga:
      "Lo hacemos a pedido sobre un personaje que mande el cliente. Se arma en cuatro a seis capas, con colores planos en rojo, azul, gris y negro. Llega con bastidor, listo para colgar.",
    opciones: {
      texto: { label: "Personaje y referencias", placeholder: "Ej: Vegeta · imagen adjunta" },
      cantidad: { default: 1, min: 1, max: 2 }
    },
    plazoDias: { min: 12, max: 18 },
    imagen: "/img/products/catalogo/cuadro-3d-manga.jpg"
  },
  {
    slug: "carta-pokemon-3d",
    nombre: "Carta Pokémon 3D",
    ocasion: "cumpleanos",
    ocasionesExtra: ["dia-del-padre"],
    precio: 35900,
    descripcionCorta: "Reproducción 3D de carta Pokémon armada en capas y pintada a mano.",
    descripcionLarga:
      "El holograma de la carta se reemplaza por capas de madera grabadas y pintadas: el Pokémon en relieve, el fondo, el contorno y el texto. Cada una toma tiempo, así que las hacemos a pedido. Hoy hemos hecho Leafeon Vmax, Pikachu y Wartortle, pero se puede pedir otra.",
    opciones: {
      texto: { label: "Pokémon y carta", placeholder: "Ej: Charizard ex Obsidian Flames" },
      cantidad: { default: 1, min: 1, max: 3 }
    },
    plazoDias: { min: 10, max: 15 },
    imagen: "/img/products/catalogo/carta-pokemon-3d.jpg"
  },
  {
    slug: "medallas-pokemon",
    nombre: "Set medallas de gimnasio",
    ocasion: "cumpleanos",
    ocasionesExtra: ["dia-del-padre"],
    precio: 22900,
    descripcionCorta: "Set de seis medallas de gimnasio pintadas a mano.",
    descripcionLarga:
      "Reproducimos las medallas clásicas: roca, agua, fuego, hoja, espina, planta, alma y otras. Se piden por unidad o como set completo, atrás llevan imán. Es regalo cumpleaños fan #1 del año.",
    opciones: {
      texto: { label: "Medallas en el set", placeholder: "Ej: Kanto completo (8)" },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 7, max: 10 },
    imagen: "/img/products/catalogo/medallas-pokemon.jpg"
  },
  {
    slug: "casa-halloween-armable",
    nombre: "Casa Halloween armable",
    ocasion: "cumpleanos",
    ocasionesExtra: ["decoracion"],
    precio: 32900,
    descripcionCorta: "Casa fantasma armable en madera, con espacio para vela LED y figuras alrededor.",
    descripcionLarga:
      "Llega plana, se arma por encastre. Lleva fachada con telarañas grabadas, ventanas troqueladas, calabaza al frente, fantasma colgando y carteles de \"Ghost Crossing\" y \"Witches Way\". El espacio interior recibe una vela LED para que las ventanas brillen.",
    opciones: {
      texto: { label: "Nombre y año (opcional)", placeholder: "Ej: Martín · 2026" },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 6, max: 9 },
    imagen: "/img/products/catalogo/casa-halloween-armable.jpg"
  },
  {
    slug: "placa-direccion-escena",
    nombre: "Placa de dirección con escena",
    ocasion: "decoracion",
    ocasionesExtra: ["matrimonios"],
    precio: 38900,
    descripcionCorta: "Placa para la entrada con número de calle y una escena grabada del lugar.",
    descripcionLarga:
      "El cliente manda foto de su casa, dibujo o referencia; nosotros la traducimos a grabado. Va con el número de calle grabado grande y la escena al lado. Se cuelga afuera o en el living como recuerdo del lugar.",
    opciones: {
      texto: { label: "Dirección y referencia visual", placeholder: "Ej: Caupolicán 275 + foto" },
      cantidad: { default: 1, min: 1, max: 2 }
    },
    plazoDias: { min: 10, max: 14 },
    imagen: "/img/products/catalogo/placa-direccion-escena.jpg"
  },
  {
    slug: "letrero-exterior-tienda",
    nombre: "Letrero exterior para tienda",
    ocasion: "decoracion",
    precio: 89900,
    descripcionCorta: "Letrero colgante en madera con grabado del logo y tagline de la marca.",
    descripcionLarga:
      "Lo hacemos para comercios pequeños que quieren un cartel exterior que no parezca impreso. Trabajamos con vectorial del cliente o lo redibujamos juntos. Va terminado con barniz exterior y herrajes para colgar.",
    opciones: {
      texto: { label: "Marca, logo y tagline", placeholder: "Ej: HOJA · Cosmética & Natural" },
      cantidad: { default: 1, min: 1, max: 2 }
    },
    plazoDias: { min: 14, max: 21 },
    imagen: "/img/products/catalogo/letrero-exterior-tienda.jpg"
  },
  {
    slug: "expositor-hot-wheels",
    nombre: "Expositor Hot Wheels",
    ocasion: "decoracion",
    ocasionesExtra: ["dia-del-padre", "cumpleanos"],
    precio: 49900,
    descripcionCorta: "Expositor mural en MDF para colección de Hot Wheels con logo grabado.",
    descripcionLarga:
      "Lo armamos para coleccionistas serios: tres columnas, soportes para que las cajas queden inclinadas y visibles, logo Hot Wheels grabado al frente. Cabe en muro y se llena de a poco.",
    opciones: {
      texto: { label: "Tipo de colección y cantidad de columnas", placeholder: "Ej: Hot Wheels · 4 columnas" },
      cantidad: { default: 1, min: 1, max: 3 }
    },
    plazoDias: { min: 10, max: 14 },
    imagen: "/img/products/catalogo/expositor-hot-wheels.jpg"
  }
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const productsByOcasion = (ocasionSlug: string) =>
  products.filter((p) => p.ocasion === ocasionSlug || p.ocasionesExtra?.includes(ocasionSlug));

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(n);

export const calcFechaLlegada = (plazoMax: number) => {
  const fecha = new Date();
  fecha.setDate(fecha.getDate() + plazoMax + 2); // + 2 días estimados de despacho
  return fecha.toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "long" });
};
