
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pedidos</title>
</head>
<body>
    <h1>Solicite seus pedidos</h1>

    <form action="">
        <input type="hidden" id="indice">
        
        <div>
            <label for="produto">Produto:</label>
            <br>
            <select id="produto"></select>
        </div>
        <div>
            <label for="quantidadePedidos">Quantidade:</label>
            <br>
            <input type="number" id="quantidadePedidos">
        </div>
        <div>
            <button type="button" onclick="adicionarPedido()">Adicionar pedido</button>
        </div>
    </form>

    <h2>Lista de Pedidos</h2>

    <div id="lista-pedidos"></div>

    <a href="telaProdutos.php">voltar</a>

    <script src="../js/pedidos.js"></script>

</body>
</html>