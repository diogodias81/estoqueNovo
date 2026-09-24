<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Produtos</title>
</head>
<body>
    <h1>Tela de Produtos</h1>

    <form action="">
        <input type="hidden" id="indice">
        <div>
            <label for="codigo">Código</label>
            <input type="number" id="codigo">
        </div>
        <div>
            <label for="nome">Nome</label>
            <input type="text" id="nome">
        </div>
        <div>
            <label for="quantidade">Quantidade</label>
            <input type="number" id="quantidade">
        </div>
        <div>
            <button type="button" onclick="adicionarProduto()">Salvar</button>
            <button type="button" onclick="limpar()">Limpar</button>
        </div>
    </form>

    <div id="lista-Produtos"></div>
    <a href="telaPedidos.php">pagina de pedido</a>
    <script src="../js/produto.js"></script>
</body>
</html>