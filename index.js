//Variáveis que contém os elementos HTML que vão exibir as mensagem de resultado
const resultElement = document.getElementById("result");
const msgElement = document.getElementById("msg-imc")

//Variáveis que contém os botões de calcular e limpar
const btnCalc = document.getElementById("btn-send")
const btnClean = document.getElementById("btn-clean")


//Função que imprime o IMC do usuário e a sua classificação
function displayIMC(imc, msgIMC) {
    resultElement.textContent = "Seu IMC é: " + imc;
    msgElement.textContent = "Classificação: " + msgIMC;
}

//Função que retorna uma mensagem de classificação de IMC
function classificationIMC(imc){
    if(imc < 16){
        return "Extremamente abaixo do peso";
    } else if(imc < 16.9){
        return "Muito abaixo do peso";
    } else if(imc < 18.4){
        return "Abaixo do peso";
    } else if(imc < 24.9){
        return "Peso normal";
    } else if(imc < 29.9){
        return "Acima do peso";
    } else if(imc < 34.9){
        return "Obesidade grau 1";
    } else if(imc < 40){
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

//Função que calcula o IMC do usuário
const calculateIMC = (weight, height) => weight / (height * height);

//Função que faz uma verificação nos valores recebidos pelos inputs
function checkNumber (value1, value2) {
    
    if(value1 <= 0 || value2 <= 0){
        throw new Error("Os valores de peso e altura precisam ser maiores que zero");
    } else if(Number.isNaN(value1) || Number.isNaN(value2)){
        throw new Error("Os valores de peso e altura precisam ser números");
    } else {
        return true;
    }
} 

//Função principal que executa toda a lógica da aplicação
function execute(check, calculate, classification, display) {

        const weight  = parseFloat(document.getElementById("weight-element").value);
        const height = parseFloat(document.getElementById("height-element").value);

        check(weight, height)

        const imc = calculate(weight, height).toFixed(1);
        const msgIMC = classification(imc)
        display(imc, msgIMC)        
    
}

//Função com evento de clique que chama a função execute toda vez que o botão é clicado
btnCalc.addEventListener("click", () => { 

        try {
            execute(checkNumber, calculateIMC, classificationIMC, displayIMC)
        } catch (error) {
            msgElement.textContent = error.message;
        }  

})

//Função com evento de clique que limpa os resultados da tela
btnClean.addEventListener("click", () => {
    resultElement.textContent = "";
    msgElement.textContent = "";
})










