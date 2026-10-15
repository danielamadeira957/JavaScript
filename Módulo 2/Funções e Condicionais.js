
//const soma = (num1, num2) => num1 + num2;
//const subtrai = (num1, num2) => num1 - num2;
//const multiplica = (num1, num2) => num1 * num2;
//const divide = (num1, num2) => num1 / num2;

function Soma (num1, num2) {
     const calculo = num1 + num2;
     return calculo;
}
function Subtrai (num1, num2) {
     const calculo = num1 - num2;
     return calculo;
}
function Multiplica (num1, num2) {
     const calculo = num1 * num2;
     return calculo;
}
function Divide (num1, num2) {
     const calculo = num1 / num2;
     return calculo;
}

const MostraResultado = (num1, num2) => {
     console.log (`Soma entre ${num1} e ${num2}: ${Soma (num1, num2)}`);
     console.log (`Diferença entre ${num1} e ${num2}: ${Subtrai (num1, num2)}`);
     console.log (`Produto entre ${num1} e ${num2}: ${Multiplica (num1, num2)}`);
     console.log (`Quociente de ${num1} por ${num2}: ${Divide (num1, num2)}`);
};

// Execução de teste
MostraResultado(10,5);