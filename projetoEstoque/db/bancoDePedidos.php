<?php
    session_start();

    //criando a lista de dados se nao existe    
    if(!isset($_SESSION['listaDePedidos'])){
        $_SESSION['listaDePedidos'] = [];
    }

    //validando se o js mandou dados
    if(isset($_POST) && count($_POST) > 0){

        // Percorrendo a lista de produtos
        for($i = 0; $i < count($_SESSION['listaDeProdutos']); $i++){

            // Verificando se o código do produto é igual ao código enviado
            if($_SESSION['listaDeProdutos'][$i]['codigo'] == $_POST['codigoProduto']){

                // Verificando se existe estoque suficiente
                if($_POST['quantidade'] <= $_SESSION['listaDeProdutos'][$i]['quantidade']){

                    // Adicionando o pedido
                    $_SESSION['listaDePedidos'][] = [
                        'codigo_produto' => $_POST['codigoProduto'],
                        'nome_produto' => $_SESSION['listaDeProdutos'][$i]['nome'],
                        'quantidade' => $_POST['quantidade']
                    ];

                    //atualizo a quantidade na lista de produtos
                    $_SESSION['listaDeProdutos'][$i]['quantidade'] = ($_SESSION['listaDeProdutos'][$i]['quantidade'] - $_POST['quantidade']);


                    die(json_encode(['mensagem' => 'Item adicionado com sucesso']));

                } else {

                    die(json_encode(['info' => 'Quantidade maior que o estoque']));
                }

            }
        }
    }

    echo json_encode($_SESSION['listaDePedidos']);
?>