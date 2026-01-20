const products = [
  {
    id: "01",
    name: "Balanceado Premium para Perros",
    description: "Alimento completo para perros adultos de todas las razas",
    stock: 25,
    price: 18990,
    category: "perros-alimento",
    img: "https://placedog.net/500/500?random",
  },
  {
    id: "02",
    name: "Shampoo Hipoalergénico",
    description: "Shampoo suave para piel sensible de perros y gatos",
    stock: 18,
    price: 7990,
    category: "higiene",
    img: "https://placedog.net/500/500?random",
  },
  {
    id: "03",
    name: "Juguete Cuerda Resistente",
    description: "Juguete para morder y tirar, ideal para perros medianos",
    stock: 40,
    price: 4990,
    category: "juguetes",
    img: "https://placedog.net/500/500?random",
  },
  {
    id: "04",
    name: "Arenero para Gatos",
    description: "Bandeja sanitaria con borde alto anti-derrame",
    stock: 12,
    price: 12990,
    category: "gatos-accesorios",
    img: "https://placedog.net/500/500?random",
  },
  {
    id: "05",
    name: "Correa Reflectiva",
    description:
      "Correa ajustable con material reflectivo para paseos nocturnos",
    stock: 30,
    price: 6990,
    category: "perros-accesorios",
    img: "https://placedog.net/500/500?random",
  },
];

let error = false;

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente más tarde");
      } else {
        resolve(products);
      }
    }, 2000);
  });
};
