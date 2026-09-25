let codigoPedido = document.querySelector('#codigo');
let quantidadePedida = document.querySelector('#quantidadePedidos');
let produto = document.querySelector('#produto');
let indice = document.querySelector('#indice');
let listaPedidos = document.querySelector('#lista-pedidos');

function carregarProdutos() {
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

function carregarPedidos() {
    fetch('../db/bancoDePedidos.php')
        .then(resposta => resposta.json())
        .then(resposta => {
            let listaHTML = '';

                for(let i= 0; i < resposta.length; i++){
                    listaHTML+= `<p>${resposta[i].quantidade} ${resposta[i].nome_produto} (${resposta[i].codigo_produto})</p>`
                }

                listaPedidos.innerHTML = listaHTML;
                
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

    fetch('../db/bancoDePedidos.php', {
        method:'POST',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `codigoProduto=${produto.value}&quantidade=${quantidadePedida.value}`
    })
    .then(r => r.json())
    .then(r => {
        if(r.info) {
            alert(r.info); return;
        }

        if(r.mensagem) {
            alert(r.mensagem);

            quantidadePedida.value = ''

            carregarPedidos();
            carregarProdutos();
        }

    })
}
    

carregarProdutos();
carregarPedidos();