const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let albums = [
  {
    id: "1",
    title: "Go Robot",
    artist: "Red Hot Chili Peppers",
    price: 120.99
  },
  {
    id: "2",
    title: "Dear God",
    artist: "Avenged Sevenfold",
    price: 99.80
  }
]

app.get("/albums", (req, res) => {
  res.status(200).json(albums)
})

app.get("/albums/:id", (req, res) => {
  const { id } = req.params
  const album = albums.find(item => item.id == id)

  res.status(200).json(album)
})

app.delete("/albums/:id", (req, res) => {
  const { id } = req.params
  albums = albums.filter(item => item.id !== id)

  res.status(200).json(albums)
})

app.post("/albums", (req, res) => {
  const { id, title, artist, price } = req.body

  albums.push({ id, title, artist, price })
  res.status(201).json(albums)
})

app.listen(8080, () => {
  console.log(`app listening on localhost:8080`)
})