// Dados no quiz
const questions = [
    {
      question: "Qual linguagem é usada para utilizar páginas web",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      answer: "CSS",
    },
    {
      question: "Qual linguagem é usada para manipular o Dom",
      options: ["CSS", "Python", "JavaScript", "C=="],
      answer: "JavaScript",
    },
    {
      question: "O que significa HTML",
      options: [
        "Hyper Trainer Marketing Language",
        "Hyper Text Markup Language",
        "Hyper Text Manipulation Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
  ];
  
  // Elementos do DOM
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  
  // Variáveis de controle
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Função que carrega uma pergunta
  function loadQuestion() {
    // Limpa o container e vai para a próxima pergunta
    quizContainer.innerHTML = "";
  
    // Verifica se há mais perguntas
    if (currentQuestionIndex >= questions.length) {
      showResult();
      return;
    }
  
    // Carrega a pergunta atual
    const questionObj = questions[currentQuestionIndex];
  
    // Adiciona a pergunta ao container
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.textContent = questionObj.question;
    quizContainer.appendChild(questionElement);
  
    // Adiciona as opções
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";
    questionObj.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  
    quizContainer.appendChild(optionsContainer);
  }
  
  // Função para verificar a resposta
  function checkAnswer(selectedOption) {
    const questionObj = questions[currentQuestionIndex];
    if (selectedOption === questionObj.answer) {
      score++;
    }
    currentQuestionIndex++;
    loadQuestion();
  }
  
  // Função para mostrar o resultado final
  function showResult() {
    quizContainer.innerHTML = "";
    resultContainer.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
  }
  
  // Função para reiniciar o quiz
  function restartPage() {
    // Reseta as variáveis
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.innerHTML = "";  // Limpa o resultado final
    loadQuestion();  // Carrega a primeira pergunta novamente
  }
  
  // Inicia o quiz
  loadQuestion();