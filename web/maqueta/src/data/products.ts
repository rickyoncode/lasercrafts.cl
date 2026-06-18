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

export const products: Product[] = [
  {
    slug: "posavasos-personalizado",
    nombre: "Set de posavasos personalizados",
    ocasion: "cumpleanos",
    ocasionesExtra: ["dia-del-padre", "matrimonios"],
    precio: 14900,
    descripcionCorta: "Set de 4 posavasos en terciado con grabado láser. Personaliza con nombre, frase o monograma.",
    descripcionLarga:
      "Cuatro piezas circulares de terciado, lijadas a mano y grabadas con láser. El grabado se quema sobre la veta: queda con el contorno caramelo característico, no impreso. Vienen amarrados con hilo crudo y entran en cualquier bolsa de regalo. Útiles todos los días, no solo para mostrarlos en la repisa.",
    opciones: {
      texto: { label: "Texto a grabar", placeholder: "Ej: Para la mejor mamá" },
      cantidad: { default: 1, min: 1, max: 10 }
    },
    plazoDias: { min: 3, max: 5 },
    imagen: "/img/products/posavasos.svg"
  },
  {
    slug: "llavero-nombre",
    nombre: "Llavero con nombre",
    ocasion: "cumpleanos",
    ocasionesExtra: ["nacimientos", "decoracion"],
    precio: 6900,
    descripcionCorta: "Llavero de terciado con el nombre grabado. Sutil, ligero, no se rompe en el bolsillo.",
    descripcionLarga:
      "Pieza pequeña pensada para acompañar las llaves todos los días. El grabado es por las dos caras: nombre adelante, una pequeña marca del taller atrás. Anillo metálico estándar, resistente. Para regalar o para uno mismo cuando se cansa del llavero de plástico que viene con el departamento.",
    opciones: {
      texto: { label: "Nombre a grabar", placeholder: "Ej: Camila" },
      cantidad: { default: 1, min: 1, max: 20 }
    },
    plazoDias: { min: 2, max: 4 },
    imagen: "/img/products/llavero.svg"
  },
  {
    slug: "recuerdo-matrimonio-circular",
    nombre: "Recuerdo de matrimonio · pack 30",
    ocasion: "matrimonios",
    precio: 35000,
    descripcionCorta: "Pack de 30 souvenirs circulares para invitados, con los nombres y la fecha grabados.",
    descripcionLarga:
      "Pieza pensada para souvenir de mesa: 5 cm de diámetro, perforada en un extremo para colgar de la servilleta o del centro de mesa. Mismo diseño en las 30, con tus nombres y la fecha. Si quieres más unidades, conversémoslo por WhatsApp.",
    opciones: {
      texto: { label: "Nombres y fecha", placeholder: "Ej: Felipe & Camila · 15.03.2026" },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 7, max: 12 },
    imagen: "/img/products/recuerdo-matri.svg"
  },
  {
    slug: "recuerdo-nacimiento",
    nombre: "Recuerdo de nacimiento",
    ocasion: "nacimientos",
    precio: 18900,
    descripcionCorta: "Placa con el nombre, fecha y datos del bebé. Para colgar en la pieza o regalar a los abuelos.",
    descripcionLarga:
      "Placa rectangular en terciado, 18 × 12 cm, con el grabado del nombre, fecha de nacimiento, peso y talla. Acabado lijado fino, listo para colgar (incluye el huequito atrás). Hay quienes prefieren regalársela a los abuelos antes que a los papás — funciona en ambos casos.",
    opciones: {
      texto: {
        label: "Datos a grabar",
        placeholder: "Ej: Martín / 12.04.2026 / 3.250 kg / 49 cm"
      },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 4, max: 6 },
    imagen: "/img/products/nacimiento.svg"
  },
  {
    slug: "cartel-familia",
    nombre: "Cartel \"Familia\" para entrada",
    ocasion: "decoracion",
    ocasionesExtra: ["matrimonios"],
    precio: 24900,
    descripcionCorta: "Cartel para colgar en la entrada, con el apellido o frase de la familia.",
    descripcionLarga:
      "Pieza grande, 35 × 18 cm, pensada para el recibidor o sobre el comedor. El grabado es generoso: se lee desde lejos, pero no grita. Llega con la herramienta para colgar incluida y una tarjeta con instrucciones de cuidado de la madera.",
    opciones: {
      texto: { label: "Texto a grabar", placeholder: "Ej: Los Bórquez" },
      cantidad: { default: 1, min: 1, max: 3 }
    },
    plazoDias: { min: 4, max: 7 },
    imagen: "/img/products/cartel-familia.svg"
  },
  {
    slug: "tabla-quesos",
    nombre: "Tabla de quesos personalizada",
    ocasion: "dia-del-padre",
    ocasionesExtra: ["matrimonios", "cumpleanos"],
    precio: 28900,
    descripcionCorta: "Tabla para picoteo en terciado tratado, con el nombre o frase grabada en el canto.",
    descripcionLarga:
      "Tabla rectangular 35 × 22 cm, terciado tratado con aceite de linaza para uso con alimentos (no se mete en el lavavajillas, se limpia con paño húmedo). El grabado va en el canto largo: discreto, no estorba al picoteo. Buena para regalo de casa nueva y para los que arman tablas los domingos.",
    opciones: {
      texto: { label: "Texto a grabar en el canto", placeholder: "Ej: La tabla del Felipe" },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 5, max: 7 },
    imagen: "/img/products/tabla-quesos.svg"
  },
  {
    slug: "cofre-recuerdos",
    nombre: "Cofre de recuerdos",
    ocasion: "cumpleanos",
    ocasionesExtra: ["dia-de-la-madre", "matrimonios"],
    precio: 32900,
    descripcionCorta: "Cofre con tapa, grabado por fuera. Para guardar fotos, cartas o lo que sea.",
    descripcionLarga:
      "Caja de terciado con tapa abisagrada (bisagra de metal, no de plástico), 20 × 15 × 8 cm. El grabado va en la tapa: un nombre, una fecha, o una frase corta. Por dentro queda en madera viva, lijada pero sin tratar — el olor a terciado nuevo dura unas semanas y después se va.",
    opciones: {
      texto: { label: "Grabado en la tapa", placeholder: "Ej: Nuestras cosas · 2026" },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 5, max: 8 },
    imagen: "/img/products/cofre.svg"
  },
  {
    slug: "placa-nombre-escritorio",
    nombre: "Placa con nombre para escritorio",
    ocasion: "decoracion",
    ocasionesExtra: ["cumpleanos"],
    precio: 12900,
    descripcionCorta: "Placa pequeña, vertical, con base. Nombre y cargo si quieres.",
    descripcionLarga:
      "10 × 4 cm, con base que la mantiene de pie sola. Se le ve bien tanto en una oficina seria como en un escritorio de la casa. El grabado lleva nombre y, opcional, una segunda línea (cargo, área, lo que sirva). Funciona para regalar a alguien que recién armó su rincón de teletrabajo.",
    opciones: {
      texto: { label: "Nombre + cargo (opcional)", placeholder: "Ej: Camila Soto / Gerenta" },
      cantidad: { default: 1, min: 1, max: 20 }
    },
    plazoDias: { min: 3, max: 5 },
    imagen: "/img/products/placa-escritorio.svg"
  },
  {
    slug: "marco-foto-grabado",
    nombre: "Marco para foto con grabado",
    ocasion: "dia-de-la-madre",
    ocasionesExtra: ["nacimientos", "matrimonios"],
    precio: 19900,
    descripcionCorta: "Marco para foto 13 × 18 cm, con frase grabada en el borde inferior.",
    descripcionLarga:
      "Marco de terciado para foto formato 13 × 18 cm (la foto se imprime aparte, el marco viene con vidrio y soporte). El grabado va en el borde inferior y se ve abajo de la foto, no encima. Buena para el regalo que pide una foto que no estás dispuesto a poner en Instagram pero sí en la repisa.",
    opciones: {
      texto: { label: "Frase a grabar", placeholder: "Ej: Septiembre 2025" },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 4, max: 6 },
    imagen: "/img/products/marco-foto.svg"
  },
  {
    slug: "mini-mapa-personalizado",
    nombre: "Mini mapa personalizado",
    ocasion: "matrimonios",
    ocasionesExtra: ["dia-de-la-madre", "cumpleanos"],
    precio: 22900,
    descripcionCorta: "Mapa grabado del lugar que importa: ciudad, barrio, coordenadas. Cuadrado 20 × 20.",
    descripcionLarga:
      "Mapa grabado a láser de la zona que tú elijas: una calle, un barrio entero, una ciudad. El grabado dibuja calles, manzanas y, si quieres, un corazoncito en el punto exacto. 20 × 20 cm, marco incluido. Es el regalo para personas que tienen una historia con un lugar específico.",
    opciones: {
      texto: { label: "Dirección o coordenadas", placeholder: "Ej: Maipú 412, Valdivia" },
      cantidad: { default: 1, min: 1, max: 5 }
    },
    plazoDias: { min: 6, max: 9 },
    imagen: "/img/products/mapa.svg"
  },
  {
    slug: "tarjeta-aniversario",
    nombre: "Tarjeta de aniversario en madera",
    ocasion: "cumpleanos",
    ocasionesExtra: ["dia-de-la-madre", "matrimonios"],
    precio: 8900,
    descripcionCorta: "Tarjeta de terciado fino con frase grabada. Acompaña un regalo o va sola.",
    descripcionLarga:
      "Tarjeta delgada de terciado, 14 × 10 cm, con un grabado del lado A y el otro lado liso para escribir a mano un mensaje. Llega con un sobre de papel kraft. Funciona como reemplazo a la tarjeta de cartón que se rompe en una semana — esta dura años.",
    opciones: {
      texto: { label: "Frase grabada (lado A)", placeholder: "Ej: 5 años contigo" },
      cantidad: { default: 1, min: 1, max: 30 }
    },
    plazoDias: { min: 2, max: 4 },
    imagen: "/img/products/tarjeta.svg"
  },
  {
    slug: "reloj-pared",
    nombre: "Reloj de pared en terciado",
    ocasion: "decoracion",
    ocasionesExtra: ["matrimonios", "cumpleanos"],
    precio: 34900,
    descripcionCorta: "Reloj redondo 28 cm de diámetro, con grabado opcional alrededor del 12.",
    descripcionLarga:
      "Reloj funcional de pared en terciado, 28 cm, con maquinaria silenciosa (no se escucha el tic-tac en la noche). Los números pueden ir grabados o quedar sin marcar — depende del estilo de la casa. Opcionalmente se graba una frase corta alrededor del 12. Funciona con una pila AA que el cliente compra aparte.",
    opciones: {
      texto: { label: "Frase alrededor del 12 (opcional)", placeholder: "Ej: El tiempo es lo que importa" },
      cantidad: { default: 1, min: 1, max: 3 }
    },
    plazoDias: { min: 6, max: 9 },
    imagen: "/img/products/reloj.svg"
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
