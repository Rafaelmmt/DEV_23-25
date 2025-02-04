export const menuList = [
  {
    title: "Tela Principal",
    icon: "home",
    submenu: "",
    goTo: "/",
    flag: "",
  },
  {
    title: "Armas",
    icon: "fa-solid fa-gun",
    submenu: [
      {
        title: "Cadastrar Arma",
        icon: "fa-solid fa-circle-plus",
        goTo: "",
        flag: "",
      },
      {
        title: "Cadastrar Modelo de Arma",
        icon: "fa-solid fa-person-military-rifle",
        goTo: "",
        flag: "",
      },
    ],
  },

  {
    title: "Algemas",
    icon: "fa-solid fa-handcuffs",
    submenu: [{ title: "Cadastrar Algema", icon: "fa-solid fa-circle-plus" }],
  },
  {
    title: "Coletes",
    icon: "fa-solid fa-shield-halved",
    submenu: [{ title: "Cadastrar Colete", icon: "fa-solid fa-circle-plus" }],
  },
  {
    title: "Equipamentos",
    icon: "fa-solid fa-bolt",
    submenu: [
      { title: "Cadastrar Equipamentos", icon: "fa-solid fa-circle-plus" },
    ],
  },
  {
    title: "Munições",
    icon: "fa-solid fa-box",
    submenu: [
      { title: "Entrada de Munição", icon: "fa-solid fa-circle-plus" },
      {
        title: "Devolver Munição - Pessoa",
        icon: "fa-sharp fa-solid fa-person-circle-plus",
      },
      { title: "Devolver Munição - Unidade", icon: "fa-solid fa-square-plus" },
      {
        title: "Saída Munição - Pessoa",
        icon: "fa-sharp fa-solid fa-person-circle-minus",
      },
      { title: "Saída Munição - Unidade", icon: "fa-solid fa-square-minus" },
    ],
  },
  {
    title: "Administrativo",
    icon: "fa fa-gears",
    submenu: [{ title: "Gerenciar Usuários", icon: "fa-solid fa-user-gear" }],
  },
  {
    title: "Assinaturas",
    icon: "fa-solid fa-signature",
    flag: "fa-solid fa-circle-plus",
  },
];
