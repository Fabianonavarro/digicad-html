// Quando o botão for clicado
$('#meuBotao').on('click', function() {
    // Fazendo a requisição no AJAX para a API de dicas motivacionais
    $.ajax({
        url: 'https://api.adviceslip.com/advice',  // URL da API de dicas motivacionais
        type: 'GET',  // Método HTTP
        success: function(resposta) {  
            console.log("Resposta recebida:", resposta);
            
            // Convertendo o JSON em objeto 
            const dica = JSON.parse(resposta);
            
            // Exibe a dica motivacional recebida da API
            $('#dica').text(dica.slip.advice);
        },
        error: function (erro) {
            // Caso ocorra um erro, exibe a mensagem de erro
            console.error('Erro ao carregar os dados:', erro);
            $('#dica').text('Não foi possível carregar a dica. Tente novamente.');
        }
    });
});
