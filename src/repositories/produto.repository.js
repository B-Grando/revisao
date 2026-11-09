import db from "../config/knex.js"

async function listar(params) {
    return await db("produtos").select("*")
}

async function  buscarById(id) {
    return awaitdb("produtos")
    .where({id})
    .first()
}

async function criar(produto) {
    const [novoProduto] = await db("produtos")
    .insert(produto)
    .returing("*")

    return novoProduto
}

async function atualizar(id, dados) {
    const [produtoAtualizado] = await db("produtos")
    .where({id})
    .update(dados)
    .returing("*")

    return produtoAtualizado
}

async function delet(id) {
    return await db("produtos")
    .where("id")
    .del()
}