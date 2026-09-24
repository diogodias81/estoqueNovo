<?php
session_start();



if(!isset($_SESSION['listaDeProdutos'])){
    $_SESSION['listaDeProdutos'] = [];
}
if(isset($_POST) && count($_POST) > 0) {

    if(!$_POST['codigo']) {
        die(json_encode(['mensagem' => 'O campo Código é obrigatório']));
    }

    if(!$_POST['nome']) {
        die(json_encode(['mensagem' => 'O campo Nome é obrigatório']));
    }

    if(!$_POST['quantidade']) {
        die(json_encode(['mensagem' => 'O campo Quantidade é obrigatório']));
    }

    
    //alteração
    if(isset($_POST['indice']) && is_numeric($_POST['indice'])) {
        $indice = $_POST['indice'];

        $_SESSION['listaDeProdutos'][$indice]['codigo'] = $_POST['codigo'];
        $_SESSION['listaDeProdutos'][$indice]['nome'] = $_POST['nome'];
        $_SESSION['listaDeProdutos'][$indice]['quantidade'] = $_POST['quantidade'];
    }
    //cadastro
    else {
        $_SESSION['listaDeProdutos'][] = [
            'codigo'     => $_POST['codigo'],
            'nome'       => $_POST['nome'],
            'quantidade' => $_POST['quantidade']
        ];
    }
     
}

if(isset($_GET['indice']) && is_numeric($_GET['indice']) && isset($_GET['deletar'])) {
    $indice = $_GET['indice'];

    unset($_SESSION['listaDeProdutos'][$indice]);
}


echo json_encode($_SESSION['listaDeProdutos']);
?>