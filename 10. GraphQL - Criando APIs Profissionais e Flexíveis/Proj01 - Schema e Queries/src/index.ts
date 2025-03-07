import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { usuarios, perfilUsuario } from './usuarios'

// 1. DEFINE O SCHEMA DO GRAPHQL
const typeDefs = ` 
  
  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: String
  }

  type Obj {
    id: ID!
    descricao: String!
    chaveestrangeira: ID
  }

  type Perfil {
    id: Int
    nomr: String
  }

  type Usuario {
    id: Int
    nome: String
    idade: Int
    perfil: Perfil
  }

  type Query {
    hello: String
    horaAtual: String
    age: Int
    produtoEmDestaque: Produto
    arrayNumeros: [Int!]!
    listaObj(id:ID): Obj
  }
`
const numerais = [ 5, 20, 32, 55, 98, 150 ]
const objetos = [
  { id: 1, descricao: 'camiseta', chaveEstrangeira: 3  },
  { id: 2, descricao: 'calça', chaveEstrangeira: 5  },
  { id: 3, descricao: 'chapéu', chaveEstrangeira: 1  },
  { id: 4, descricao: 'óculos', chaveEstrangeira: 2  },
  { id: 5, descricao: 'sapato', chaveEstrangeira: 4  }
]
// 2. IMPLEMENTA OS RESOLVERS
const resolvers = {
  
  Produto: {
    precoComDesconto(obj:any) {
      if(obj.desconto) {
        return `R$ ${obj.preco * (1 - obj.desconto)}`
      } else {
        return `R$ ${obj.preco}`  
      }
    }
  },

  Usuario: {
    perfil(usuario) {
      const sels = perfilUsuario.filter(p => p.id === usuario.perfil_id)
      return sels ? sels[0] : null
    }
  },

  Query: {
    hello: () => 'Olá, mundo!',
    horaAtual: () => `${new Date}`,
    age: () => 45,
    produtoEmDestaque: () => ({ nome: 'Notebook Gamer', preco: 4890.89, desconto: 0.15 }),
    arrayNumeros: () => {
      const crescente = (a:number,b:number) => b-a
      return numerais.sort(crescente)
    },
    listaObj: (_:any,args:any) => {
      const temp = objetos.filter(x => x.id == args.id)
      return temp ? temp[0] : null
    },
    usuario: () => 
  }

}

// 3. CRIAR UM INSTÂNCIA DO APOLLO SERVER
const server = new ApolloServer({ typeDefs, resolvers })

// 4. INICIA O SERVIDOR
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)