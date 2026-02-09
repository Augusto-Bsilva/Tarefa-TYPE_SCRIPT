type  StatusRequisicao = "sucesso"|"erro"|"carregando";
function mostrarMensagemStatus(status:StatusRequisicao){
    if (status==="sucesso"){
        return "Dados carregados com sucesso"

    }else if (status==="carregando"){
        return "Aguarde... carregando dados"

    }else{
        return "Erro ao carregar dados"
    }
}

console.log(mostrarMensagemStatus("carregando"))