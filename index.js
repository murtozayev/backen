const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.json({ name: "Jahongir" })
})

app.post("/post", (req, res) => {
    res.json("Everything is correct")
})

module.exports = app