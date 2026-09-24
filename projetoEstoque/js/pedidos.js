let codigoPedido = document.querySelector('#codigo');
let quantidadePedida = document.querySelector('#quantidadePedidos');
let produto = document.querySelector('#produto');
let indice = document.querySelector('#indice');

function carregarProdutos(){
    fetch('../db/bancoProdutos.php')
        .then(resposta => resposta.json())
        .then(resposta => {
            let listaHTML = '<option value="">SELECIONE...</option>';

                for(let i= 0; i < resposta.length; i++){
                    listaHTML+= ` <option value="${resposta[i].codigo}">    
                                    ${resposta[i].nome} -
                                    Estoque: ${resposta[i].quantidade}
                                    </option>`
                }

                produto.innerHTML = listaHTML;
                
    });
}

function adicionarPedido(){

    if(!produto.value){
        alert("Selecione um Produto!");
        return;
    }
    if(!quantidadePedida.value){
        alert("Informe a quantidade!");
        return;
    }

    fetch('../db/bancoPedidos.php', {
        method:'POST',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `codigoProduto=${produto.value}&quantidade=${quantidadePedida.value}`
    })
    .then(r => r.json())
    .then(r => {
        console.log(r);
    })
}
    


carregarProdutos()