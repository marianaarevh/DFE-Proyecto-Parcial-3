export enum VideojuegoEstatus{
    Disponible = "Disponible",
    Agotado = "Agotado"
  }
  
export interface Videojuego{
    id: number;
    titulo: string;
    imagen: string;
    estatus: VideojuegoEstatus;
    notas: string;
    precioVenta: number;
    cliente: string;
    vendedor: string;
  }

export const listaVideojuegosDummy: Videojuego[] = [
    {
      id: 1,
      titulo: "Just Dance",
      imagen:"1.png",
      estatus: VideojuegoEstatus.Disponible,
      notas: "Gran videojuego",
      precioVenta: 1249.00,
      cliente: "Ana Beltran",
      vendedor:"Maria Gutierrez",
    },
    {
        id: 2,
        titulo: "The Legend of Zelda: Breath of the Wild",
        imagen: "2.jpg",
        estatus: VideojuegoEstatus.Disponible,
        notas: "Increíble aventura épica",
        precioVenta: 1999.00,
        cliente: "Carlos Rodriguez",
        vendedor: "Luisa Sanchez"
      },
      {
        id: 3,
        titulo: "FIFA 23",
        imagen: "3.jpg",
        estatus: VideojuegoEstatus.Agotado,
        notas: "El mejor juego de fútbol",
        precioVenta: 1499.00,
        cliente: "David Gomez",
        vendedor: "Juan Perez"
      },
      {
        id: 4,
        titulo: "Super Mario Odyssey",
        imagen: "4.jpeg",
        estatus: VideojuegoEstatus.Disponible,
        notas: "Aventuras coloridas con Mario",
        precioVenta: 1799.00,
        cliente: "Elena Navarro",
        vendedor: "Pedro Fernandez"
      }

]