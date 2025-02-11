export interface Book {
  id: number
  title: string
  cover: string
  isRead: boolean
  author: string
  isbn: string
}

export const booksList: Book[] =  [
  {
    id: 1,
    title: "A Classe Média No Espelho",
    cover:
      "https://m.media-amazon.com/images/I/615tbyT39LL._AC_UF1000,1000_QL80_.jpg",
    isRead: false,
    author: "Jessé Souza",
    isbn: "978-8556080394" 
  },
  {
    id: 2,
    title: "O Homem Que Amava Os Cachorros",
    cover:
      "https://m.media-amazon.com/images/I/A1M1y56r1-L._SL1500_.jpg",
    isRead: true,
    author: "Leonardo Padura",
    isbn: "978-8575594452"
  },
  {
    id: 3,
    title: "Dom Quixote",
    cover:
      "https://m.media-amazon.com/images/I/91vMtIeykDL._SL1500_.jpg",
    isRead: false,
    author: "Miguel De Cervantes",
    isbn: "978-8563560551"
  }
]
