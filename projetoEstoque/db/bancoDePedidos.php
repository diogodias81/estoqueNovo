<?php
    session_start();

    //criando a lista de dados se nao existe    
    if(!isset($_SESSION['listaDePedidos'])){
        $_SESSION['listaDePedidos'] = [];
    }

    //validando se o js mandou dados
    if(isset($_POST) && count($_POST) > 0){

        //verificar nessa lista, qual item possui o código informado
        $_SESSION['listaDeProdutos'];

        $_SESSION['listaDePedidos'][] = [
            'codigoProduto'   => $_POST['codigoProduto'],
            'quantidade' => $_POST['quantidade']
        ];
    }

    echo json_encode($_SESSION['listaDePedidos']);
?>