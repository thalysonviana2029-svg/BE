const pedidos = require("../../dados/pedido.json")

function subotais() {
    pedidos.forEach(p => {
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1 //autoIncrement
    pedidos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    subtotais()
    res.json(pedidos)
}

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    clientes.forEach((item) => {
        if(item.id == id) {
            item.cpf = dados.cpf;
            item.nome = dados.nome;
        }
        res.send("Alterado com sucesso")
    })
}
const excluir = (req, res) => {
    const id = req.params.id;
    const indice = clientes.findIndex((item) => item.id == id);
    if (indice !== -1) {
        clientes.splice(indice, 1);
        res.status(200).json({ message: "Cliente excluído com sucesso" });
        } else {
            res.status(404).json({ message: "Cliente não encontrado" });
        }
        res.send("Excluido com sucesso")
    }

module.exports = {
    criar, listar, alterar, excluir
}