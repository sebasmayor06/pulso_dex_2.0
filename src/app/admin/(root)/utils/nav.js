import {
  Pedidos,
  Clientes,
  Codigo,
  Categorias,
  Transaccion,
  Marca,
  Dashboard,
  AddProducts,
  ListProducts,
  Administrar,
  Roles
} from "./svg";

export const datosNav = [
  {
    name: "Dashboard",
    href: "/Dashboard",
    img: Dashboard,
  },
  {
    name: "Gestion de pedidos",
    href: "/Pedidos",
    img: Pedidos,
  },
  {
    name: "Clientes",
    href: "/Clientes",
    img: Clientes,
  },
  {
    name: "Código promocional",
    href: "/Codigo",
    img: Codigo,
  },

  {
    name: "Categorias",
    href: "/Categorias",
    img: Categorias,
  },
  {
    name: "Transaccion",
    href: "/Transaccion",
    img: Transaccion,
  },
  {
    name: "Marca",
    href: "/Marca",
    img: Marca,
  },
  {
    name: "Agregar Prodouctos",
    href: "/agregar-productos",
    img: AddProducts,
    id: 1,
  },
  {
    name: "Lista de productos",
    href: "/listar-prodcutos",
    img: ListProducts,
    id: 1
  },
  {
    name: "Agregar Prodouctos",
    href: "/administrar-partners",
    img: Administrar,
    id: 2
  },
  {
    name: "Lista de productos",
    href: "/listar-administrativos",
    img: Roles,
    id: 2
  },
  
];
