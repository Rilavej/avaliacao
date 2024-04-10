const express = require("express")
const app = express()

const router = require("./routes/routes.js")

//app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor escutando a porta ${PORT}`)
})
