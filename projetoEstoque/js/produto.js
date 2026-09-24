
let listaProdutos = document.querySelector('#lista-Produtos');
let codigo        = document.querySelector('#codigo');
let nome          = document.querySelector('#nome');
let quantidade    = document.querySelector('#quantidade');
let indice        = document.querySelector('#indice');


function carregarListaDeProdutos() {
    
    fetch('../db/bancoProdutos.php')
        .then(resposta => resposta.json())
        .then(resposta => {
            let produtosHtml     = '';

            for(let i= 0; i < resposta.length; i++){
                produtosHtml     += `<div id="produto-${i}" class="produto">    
                                <p>
                                    Nome: ${resposta[i].nome}<br> Código: ${resposta[i].codigo} <br>Quantidade: <strong>${resposta[i].quantidade}</strong>
                                    <button type="button" onclick="editarProduto(${i}, ${resposta[i].codigo}, '${resposta[i].nome}', ${resposta[i].quantidade})">Editar</button>
                                    <button type="button" onclick="deletarProduto(${i})">Deletar</button>
                                </p> 
                            </div>`
            }

            listaProdutos.innerHTML = produtosHtml  ;
    })
}

function adicionarProduto() {
    
   if(!codigo.value ){
        alert("Insira o codigo!");
        return;
    }else if(!nome.value){
        alert("Insira o Nome Do Produto")
        return;
    }else if(!quantidade.value){
        alert("Insira a quantidade do Produto")
        return;
    }

    fetch('../db/bancoProdutos.php',{
        method:'POST',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `codigo=${codigo.value}&nome=${nome.value}&quantidade=${quantidade.value}&indice=${indice.value}`
    })
        .then(r => r.json())
        .then(r =>{            
            limpar();
            carregarListaDeProdutos();
        })
}

function editarProduto(indiceEditado, codigoEditado, nomeEditado, quantidadeEditada) {
    codigo.value = codigoEditado;
    indice.value = indiceEditado;
    nome.value = nomeEditado;
    quantidade.value = quantidadeEditada;
}

function deletarProduto(indice) {
    fetch(`../db/bancoProdutos.php?indice=${indice}&deletar='DELETE'`)
        .then(resposta => resposta.json())
        .then(resposta => {
            carregarListaDeProdutos();
    })
}


function limpar(){
    codigo.value = "";
    indice.value = "";
    nome.value = "";
    quantidade.value = "";
}


carregarListaDeProdutos();
