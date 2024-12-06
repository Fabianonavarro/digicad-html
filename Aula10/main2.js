// https://cdnjs.com/libraries/jquery  end para acessar

// document.getElementById("titulo").style.color = "red"; // pelo DOM

$("#titulo").css("color", "red"); //jquery

// function mudar () {
//    $('#resultado').text('Você clicou no botão') // Corrigido de #resultador para #resultado
// }

const mudar = () => $('#resultado').text('Você clicou no botão!')
let botao = $('#meuBotao')
botao.on('click', mudar)

// Quando o botão for clicado
$('#carregarDados').on('click', function() {
    // Fazendo a requisição no AJAX para uma API pública

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',  // URL corrigida
        type: 'GET', // Método HTTP
        success: function (resposta) {  
            // Limpa a lista antes de popular
            $('#listaUsuarios').empty()

            // Alterar sobre os dados recebidos e adicionar na lista
            resposta.forEach(function(usuario) {                
                $('#listaUsuarios').append(
                    `<li>Nome: ${usuario.name} - E-mail: ${usuario.email}</li>`
                )
            })
        },
        error: function (erro) {
            // Caso ocorra um erro
            console.error('Erro ao carregar os Dados:', erro)
            alert('Não foi possível carregar os dados')
        }
    });
});
