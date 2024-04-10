const lista = require("../base.js")
var lastId = lista.length

const controller = {}

controller.getAll = (req, res) => {
    res.status(200).send(lista)
}
controller.getById = (req, res) => {
    let status
    for (let i = 0; i < lista.length ; i++) {
        if (lista[i].id == req.params.id) {
            res.status(200).send(lista[i])
            status = true
        }
    }
    if (status != true) {
        res.status(404).send(`O id ${req.params.id} não consta na base`)
    }
}
controller.post = (req, res) => {
    let objeto = req.body
    objeto.id = lastId + 1
    lista.push(objeto)
    res.status(200).send(`${objeto} \ncadastrado com sucesso`)

}

module.exports = controller