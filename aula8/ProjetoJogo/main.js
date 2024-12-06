// inicializar as variáveis do jogo
let num = Math.floor(Math.random() * 100) + 1;
let vidas = 7;

// selecionar os elementos do DOM
const form = document.getElementById('guess-form');
const input = document.getElementById('guess-input');  // Alterado para o ID correto
const message = document.getElementById('message');
const livesCount = document.getElementById('lives-count'); // Corrigido para o ID correto do contador de vidas

// Inicializa a contagem de vidas
livesCount.textContent = vidas;

// função para verificar o chute
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita recarregar a página

    const chute = parseInt(input.value);
    if (isNaN(chute) || chute < 1 || chute > 100) {
        message.textContent = 'Por favor, digite um número válido entre 1 e 100';
        message.style.color = 'red'; // Mudando a cor da mensagem de erro
        return;
    }

    if (chute === num) {
        message.textContent = 'Parabéns, qual é sua chave pix?';
        message.style.color = 'green';
        form.querySelector('button').disabled = true; // desabilitar o botão
    } else {
        vidas--;
        livesCount.textContent = vidas; // Atualiza o contador de vidas na tela

        if (vidas === 0) {
            message.textContent = `Acabaram suas chances! O número era ${num}.`;
            form.querySelector('button').disabled = true; // desabilitar o botão
        } else {
            if (chute > num) {
                message.textContent = `Dica: Escolha um número menor, Você ainda tem ${vidas} chance(s).`;
            } else {
                message.textContent = `Dica: Escolha um número maior, Você ainda tem ${vidas} chance(s).`;
            }
        }
        message.style.color = 'blue'; // Mudando a cor da mensagem de dica
    }

    input.value = ''; // limpa o campo de entrada
});
