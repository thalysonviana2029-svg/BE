const clientes = require("../../dados/cliente.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1 //autoIncrement
    clientes.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(clientes)
}
// const alterar = (req, res) => {
//     const id = req.params.id;
//     const dados = req.body;

//     clientes.forEach((item) => {
//         if(item.id == id) {
//             item.cpf = dados.cpf;
//             item.nome = dados.nome;
//         }
//         res.send("Alterado com sucesso")
//     })
// }

const alterar = (req, res) => {
    const id = req.params.id;
    const info = req.body;

    const busca = clientes.find((cliente) => cliente.id == id);

    Object.keys(info).forEach((i) => {
        busca[i] = info[i];
    });
     
    res.send("Atualizado com Sucesso");
};
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