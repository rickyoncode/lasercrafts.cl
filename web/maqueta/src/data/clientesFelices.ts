export type ClienteFeliz = {
  nombre: string;
  ocasion: string;
  ciudad: string;
  imagen: string; // placeholder
};

export const clientesFelices: ClienteFeliz[] = [
  {
    nombre: "La Vale",
    ocasion: "Cumpleaños de su mamá",
    ciudad: "Osorno",
    imagen: "/img/products/feliz-1.svg"
  },
  {
    nombre: "Cami y Diego",
    ocasion: "Souvenirs de matrimonio",
    ciudad: "Valdivia",
    imagen: "/img/products/feliz-2.svg"
  },
  {
    nombre: "Familia Riquelme",
    ocasion: "Nacimiento de Martín",
    ciudad: "Temuco",
    imagen: "/img/products/feliz-3.svg"
  },
  {
    nombre: "El Andrés",
    ocasion: "Día del Padre",
    ciudad: "Santiago",
    imagen: "/img/products/feliz-4.svg"
  }
];
