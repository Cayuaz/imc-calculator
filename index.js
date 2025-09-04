import {displayIMC, classificationIMC, calculateIMC, checkNumber} from './logic.js'

//Variáveis que contém os elementos HTML que vão exibir as mensagem de resultado
const resultElement = document.getElementById("result");
const msgElement = document.getElementById("msg-imc");

//Variáveis que contém os botões de calcular e limpar
const btnCalc = document.getElementById("btn-send")
const btnClean = document.getElementById("btn-clean")



//Função principal que executa toda a lógica da aplicação
function execute(check, calculate, classification, display) {

        const weight  = parseFloat(document.getElementById("weight-element").value);
        const height = parseFloat(document.getElementById("height-element").value);

        check(weight, height)

        const imc = calculate(weight, height).toFixed(1);
        const msgIMC = classification(imc)
        display(imc, msgIMC, resultElement, msgElement)        
    
}

//Função com evento de clique que chama a função execute toda vez que o botão é clicado
btnCalc.addEventListener("click", () => { 

        try {
            execute(checkNumber, calculateIMC, classificationIMC, displayIMC)
        } catch (error) {
            resultElement.textContent = "";
            msgElement.textContent = error.message;
        }  

})

//Função com evento de clique que limpa os resultados da tela
btnClean.addEventListener("click", () => {
    resultElement.textContent = "";
    msgElement.textContent = "";
})










