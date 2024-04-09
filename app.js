const express = require("express")
const app = express()

// const router = require("./routes/routes.js")
const PORT = 3000

//app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Servidor OK")
})

app.listen(PORT, () => {
    console.log(`Servidor escutando a porta ${PORT}`)
})
// versionar ao finalizar