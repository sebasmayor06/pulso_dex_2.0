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
  Roles,
} from "./svg";

export const datosNav = [
  {
    name: "Dashboard",
    href: "/admin",
    img: Dashboard,
  },
  {
    name: "Gestion de pedidos",
    href: "/admin/pedidos",
    img: Pedidos,
  },
  {
    name: "Clientes",
    href: "/admin/clientes",
    img: Clientes,
  },
  {
    name: "Código promocional",
    href: "/admin/codigo",
    img: Codigo,
  },

  {
    name: "Categorias",
    href: "/admin/categorias",
    img: Categorias,
  },
  {
    name: "Transaccion",
    href: "/admin/transaccion",
    img: Transaccion,
  },
  {
    name: "Marca",
    href: "/admin/marca",
    img: Marca,
  },
  {
    name: "Agregar Prodouctos",
    href: "/admin/agregar-productos",
    img: AddProducts,
    id: 1,
  },
  {
    name: "Lista de productos",
    href: "/admin/listar-productos",
    img: ListProducts,
    id: 1,
  },
  {
    name: "Administrar partners",
    href: "/admin/administrar-partners",
    img: Administrar,
    id: 2,
  },
  {
    name: "Roles administrativos",
    href: "/admin/roles-administrativos",
    img: Roles,
    id: 2,
  },
];
