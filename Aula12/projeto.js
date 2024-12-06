$(document).ready(function () {
    // Ao clicar no botão "Carregar Posts"
    $('#carregarPosts').on('click', function () {
        // Realizando a requisição GET para a API JSONPlaceholder (posts)
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',  
            type: 'GET', // Método HTTP GET
            success: function (resposta) {  
                // Limpa a lista antes de popular
                $('#listaPosts').empty();

                // Alterar sobre os dados recebidos e adicionar na lista
                resposta.forEach(function(post, index) {                
                    $('#listaPosts').append(
                        `<li><strong>Título:</strong> ${post.title} <br><strong>Conteúdo:</strong> ${post.body}</li>`
                    );
                    
                    // Adiciona uma linha horizontal <hr> após cada post, exceto o último
                    if (index < resposta.length - 1) {
                        $('#listaPosts').append('<hr>'); // Adiciona a linha horizontal entre os posts
                    }
                });
            },
            error: function (erro) {
                // Caso ocorra um erro
                console.error('Erro ao carregar os Dados:', erro);
                alert('Não foi possível carregar os dados');
            }
        });
    });
});
