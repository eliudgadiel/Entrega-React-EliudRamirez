const misProductos = [
  {
    id: "1",
    nombre: "Saco de Hombre",
    precio: 5000,
    img: "../img/img-1.png",
    idCat: "1",
  },
  {
    id: "2",
    nombre: "Saco de Hombre Marron",
    precio: 7000,
    img: "../img/img-2.png",
    idCat: "1",
  },
  {
    id: "3",
    nombre: "Saco de Hombre Marron Largo",
    precio: 5500,
    img: "../img/img-3.png",
    idCat: "1",
  },
  {
    id: "4",
    nombre: "Conjunto de Ropa de Mombre",
    precio: 11000,
    img: "../img/img-4.png",
    idCat: "1",
  },
  {
    id: "5",
    nombre: "Saco Morado de Hombre",
    precio: 6000,
    img: "../img/img-5.png",
    idCat: "1",
  },
  {
    id: "6",
    nombre: "Traje Gris de Hombre",
    precio: 9000,
    img: "../img/img-6.png",
    idCat: "1",
  },
  {
    id: "7",
    nombre: "Conjunto Blanco Con Cartera Blanca de Mujer",
    precio: 12000,
    img: "../img/img-7.png",
    idCat: "2",
  },
  {
    id: "8",
    nombre: "Cartera Con Saco de Cuadro de Mujer",
    precio: 15000,
    img: "../img/img-8.png",
    idCat: "2",
  },
  {
    id: "9",
    nombre: "Cartera, Botas y Gorro Blanco de Mujer",
    precio: 9090,
    img: "../img/img-9.png",
    idCat: "2",
  },
  {
    id: "10",
    nombre: "Buso, Riñonera y Falda Larga de Mujer",
    precio: 8800,
    img: "../img/img-10.png",
    idCat: "2",
  },
  {
    id: "11",
    nombre: "Saco y Gorro Marron de Mujere",
    precio: 19000,
    img: "../img/img-11.png",
    idCat: "2",
  },
  {
    id: "12",
    nombre: "Conjunto de Ropa Con Cartera de Mujer",
    precio: 16000,
    img: "../img/img-12.png",
    idCat: "2",
  },
];

export const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(misProductos);
    }, 100);
  });
};

export const getUnproducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    });
  }, 100);
};

export const getProductoPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
