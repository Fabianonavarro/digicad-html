let pessoa_1 = {
    nome: 'Scooby',
    sexo: 'M',
    peso: 5.00,
    engordar(peso){
        this.peso += peso;
    },
    emagrecer(peso){
        this.peso -= peso;
    },
};

let pessoa_2 = {
    nome: 'Brow',
    sexo: 'M',
    peso: 20.00,
    engordar(peso){
        this.peso += peso;
    },
    emagrecer(peso){
        this.peso -= peso;
    },
};

let pessoa_3 = {
    nome: 'Lamica',
    sexo: 'F',
    peso: 70,
    engordar(peso){
        this.peso += peso;
    },
    emagrecer(peso){
        this.peso -= peso;
    },
};

// lista de pessoas usando as variáveis existentes
const pessoas = [pessoa_1, pessoa_2, pessoa_3];

// função para renderizar os dados no DOM
function renderPessoas() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    pessoas.forEach((pessoa, index) => {
        const card = document.createElement('div');
        card.classList.add('cad');

        card.innerHTML = `
        <h2>${pessoa.nome}</h2>
        <p>Sexo: ${pessoa.sexo}</p>
        <p>Peso: <span id="peso=${index}">${pessoa.peso.toFixed(1)}  Kg </span></p>
        <button onclick="alterarPeso(${index}, 5)">+5 kg </button>
        <button onclick="alterarPeso(${index}, -5)">-5 kg </button>
        `;

        app.appendChild(card);     
    });
}

// função para alterar o peso
function alterarPeso(index, valor) {
    const pessoa = pessoas[index];

    if (valor > 0) {
        pessoa.engordar(valor); // Aumenta o peso
    } else {
        pessoa.emagrecer(-valor); // Diminui o peso
    }
    renderPessoas();
}

// inicializa o DOM
renderPessoas();
