/*
Arrow functions são uma forma concisa de escrever funções em JavaScript. 
Introduzidas no ES6, elas oferecem uma sintaxe mais curta,
 eliminando a necessidade de usar a palavra-chave function. 
 Além disso, as arrow functions têm uma ligação lexical ao valor de this,
 o que significa que elas não alteram o contexto do this dentro do corpo da função.
*/

// Função tradicional
function soma(a, b) {
    return a + b;
}

const soma = (a, b) => a + b;

// Não é necessário usar function.
// Para funções de uma única linha, o return é implícito.
// javascript
// Copiar código

Prof° Danilo Bezerra
const dobro = x => x * 2; // `return` implícito

// Se houver apenas um parâmetro, os parênteses podem ser omitidos.
// Com mais de um parâmetro ou nenhum, os parênteses são obrigatórios.
// javascript

const saudacao = nome => `Olá, ${nome}!`; // Sem parênteses, um parâmetro
const soma = (a, b) => a + b; // Com parênteses, múltiplos parâmetros
const semParametros = () => "Sem parâmetros"; // Parênteses obrigatórios

// Retorno Explícito:
// Se o corpo da função for mais complexo, use {} e return.
// javascript

const multiplica = (a, b) => {
    const resultado = a * b;
    return resultado;
};