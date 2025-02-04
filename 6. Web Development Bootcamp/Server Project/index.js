import express from "express"
const app = express()

const port = 3000

app.get("/", (req, res) => {
  res.send("Hello, world!")
})

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1>")
})

app.post("/register", (req, res) => {
  res.sendStatus(201)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})
