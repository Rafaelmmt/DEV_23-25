interface User {
  id: number
  name: string
  idade: number
  email?: string
  perfil_id: number
}

interface Perfil {
  id: number
  name: string
}

export const usuarios:User[] = [
  { id: 1, name: 'Ana Clara', idade: 30, email: 'anaaclara37@hjfmail.com', perfil_id: 1 },
  { id: 2, name: 'Beatriz Oliveira', idade: 22, email: 'bo19@hjfmail.com', perfil_id: 2 },
  { id: 3, name: 'Carlos Alberto', idade: 67, perfil_id: 3 },
  { id: 4, name: 'Fátiam de Souza', idade: 65, perfil_id: 3 },
  { id: 5, name: 'Fernando Perez', idade: 33, email: 'feperez_z@hjfmail.com', perfil_id: 1 },
  { id: 6, name: 'Gustavo Almeida', idade: 27, perfil_id: 1 },
  { id: 7, name: 'Matheus Andrade', idade: 23, email: 'andradematheus@hjfmail.com', perfil_id: 1 },
  { id: 8, name: 'Olinda Magalhães', idade: 39, email: 'omgl@hjfmail.com', perfil_id: 1 },
  { id: 9, name: 'Raul Alberto', idade: 55, perfil_id: 4 },
  { id: 10, name: 'Vinicius Perez', idade: 30, email: 'vp@hjfmail.com', perfil_id: 2 }
]

export const perfilUsuario:Perfil[] = [
  { id: 1, name: 'Vendedor' },
  { id: 2, name: 'Gerente' },
  { id: 3, name: 'Administrador' },
  { id: 4, name: 'Master' },
]