export type Ocasion = {
  slug: string;
  nombre: string;
  descripcion: string;
  copyHero: string;
};

export const ocasiones: Ocasion[] = [
  {
    slug: "cumpleanos",
    nombre: "Cumpleaños",
    descripcion: "Regalos personalizados para cualquier cumple del año.",
    copyHero: "Queda como rey con un producto Lasercrafts, todos tus regalos tendrán un toque único y con personalidad"
  },
  {
    slug: "matrimonios",
    nombre: "Matrimonios",
    descripcion: "Souvenirs, recordatorios y regalos para parejas y testigos.",
    copyHero: "Aunque a caballo regalado no se le miran los dientes. Nuestros souvenirs y recordatorios no pasarán desapercibidos y seran un lindo recuerdo de tus momentos especiales."
  },
  {
    slug: "nacimientos",
    nombre: "Nacimientos",
    descripcion: "Para baby showers, nacimientos y bautizos.",
    copyHero: "Algo que duure tanto como crezca el niño o la niña."
  },
  {
    slug: "dia-de-la-madre",
    nombre: "Día de la Madre",
    descripcion: "Regalos que no compraste apurado en el supermercado.",
    copyHero: "Algo hecho a propósito para ella, no comprado a último minuto."
  },
  {
    slug: "dia-del-padre",
    nombre: "Día del Padre",
    descripcion: "Regalos que no son la misma corbata de siempre.",
    copyHero: "Para que no le regalen la misma billetera por décima vez."
  },
  {
    slug: "decoracion",
    nombre: "Decoración",
    descripcion: "Para tu casa, tu escritorio o un regalo a ti.",
    copyHero: "Madera honesta para los espacios que importan."
  }
];

export const ocasionBySlug = (slug: string) => ocasiones.find((o) => o.slug === slug);
