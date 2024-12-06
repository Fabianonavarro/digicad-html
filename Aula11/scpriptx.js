// buscando id, evento click
$('#buscar').on('click', function () {
    // fazendo a requisicao /// Get para api
    $.ajax({
        url: 'https://reqres.in/api/users', // endpoint da API
        type: 'GET', // tipo de requisição GET
        success: function (response) {
            // Limpa a lista de usuario antes de exibir os dados
            $('#usuarios-lista').empty() 

            // Percorrer a lista de usuarios e exibir os dados
            response.data.forEach(function (usuario) {
                // cria um item para cada usuario
                const listaItem = $('<li>').text(
                    `${usuario.first_name} ${usuario.last_name}` 
                )
                // adiciona o item na lista
                $('#usuarios-lista').append(listaItem) // 
            })
        }, 
        error: function (erro) {
            // Caso ocorra um erro exiba mensagem de erro
            $('#usuarios-lista').html('<li>Erro ao carregar os dados.</li>') 
        }
    })
})
