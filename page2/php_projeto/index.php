<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style2.css">
    <title>Conversor de Moedas v1.0</title>
</head>
<body>
    <header>
        <h1>Trabalhando com números Aleatórios</h1>
    </header>
    <section>
        <form >
        <?php 
            $min = 0;
            $max = 100;
            $num = mt_rand($min,$max);
            echo "<p>Gerando um número aleatório entre $min e $max... <br>O valor gerado foi <strong>$num</strong></p>"
            ?>
        <button onclick="javascript:document.location.reload()">&#x1F504;Gerar outro</button>
        </form>
    </section>
</body>
</html>