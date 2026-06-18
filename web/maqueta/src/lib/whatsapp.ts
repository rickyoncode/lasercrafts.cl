export const PHONE = "56926449047";
export const SITE_URL = "https://lasercrafts.cl";

export type Lang = "es" | "pt" | "en";

type Contexto =
  | { kind: "comprar"; productName: string; productSlug: string }
  | { kind: "duda"; productName: string; productSlug: string }
  | { kind: "home" }
  | { kind: "flotante" }
  | { kind: "ocasion"; ocasion: string }
  | { kind: "empresas"; lang: Lang };

const productUrl = (slug: string) => `${SITE_URL}/producto/${slug}`;

const messageFor = (ctx: Contexto): string => {
  switch (ctx.kind) {
    case "comprar":
      return `Hola, vi este producto en la página y me gustaría comprarlo: ${ctx.productName} - ${productUrl(ctx.productSlug)}`;
    case "duda":
      return `Hola, tengo una duda sobre ${ctx.productName} (${productUrl(ctx.productSlug)})`;
    case "home":
      return "Hola, te escribo desde lasercrafts.cl, me gustaría conversar sobre un regalo.";
    case "flotante":
      return "Hola, te escribo desde lasercrafts.cl";
    case "ocasion":
      return `Hola, te escribo desde lasercrafts.cl. Estoy buscando algo para ${ctx.ocasion.toLowerCase()}.`;
    case "empresas":
      return empresasMessages[ctx.lang];
  }
};

const empresasMessages: Record<Lang, string> = {
  es: "Hola, los contacto desde lasercrafts.cl/empresas. Estoy evaluando un proyecto B2B (regalos corporativos, souvenirs, merchandising, packaging) y me gustaría cotizar. ¿Conversamos?",
  pt: "Olá, entro em contato a partir de lasercrafts.cl/empresas. Estou avaliando um projeto B2B (brindes corporativos, souvenirs, merchandising, embalagens) e gostaria de fazer um orçamento. Podemos conversar?",
  en: "Hi, I'm reaching out from lasercrafts.cl/empresas. I'm exploring a B2B project (corporate gifts, souvenirs, merchandising, packaging) and would like a quote. Can we talk?",
};

export const waLink = (ctx: Contexto): string => {
  const text = encodeURIComponent(messageFor(ctx));
  return `https://wa.me/${PHONE}?text=${text}`;
};

export const phoneDisplay = "+56 9 2644 9047";
export const horario = "Lun a Vie · 9:00 a 18:00";
