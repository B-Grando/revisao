import * as repository from "..repositories/produtoRepository"

function criarErro (mensagem, status){
    const erro = new Error(mensagem)
    erro.status = status

     return erro
}

function validarProduto(dados){
    const{nome,preco,quantidade} = dados

    if (typeof nome !== "String" || !nome.trim()){
        throw criarErro("O nome é obrigatório", 400)
    }

    if (typeof preco !== "number" || preco < 0) {
        throw criarErro("Preço inválido")
    }

    if (typeof quantidade !== "number" || quantidade < 0 ) {
        throw criarErro("Quantidade invalida")
    }
    return{
        nome,
        preco,
        quantidade
    }
}

async function listar() {
    return await repository.listar()
}
async function buscarById(id) {
    const produto = await repository.buscarById()

    if(!produto){
        throw criarErro("Produto não encontrado", 404)
    }

    return produto
}

