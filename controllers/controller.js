const lista = require("../base.js")

const controller = {}

controller.get_all = (req, res) => {
    res.status(200).send(lista)
}

module.exports = controller