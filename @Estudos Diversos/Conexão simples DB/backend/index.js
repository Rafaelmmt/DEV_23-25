const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const port = 3000

// Configuração do CORS
app.use(cors()) // Habilita o CORS para todas as rotas

// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  senha: '',
  database: 'sisbelico'
})

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
      console.error('Erro ao conectar ao banco de dados:', err)
      return
  }
  console.log('Conectado ao banco de dados MySQL!')
})

// Rota para listar tabela
app.get('/armas', (req, res) => {
  connection.query('SELECT * FROM armas', (err, results) => {
      if (err) {
          res.status(500).send('Erro ao buscar tabela armas')
          return
      }
      res.json(results)
  })
})

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})