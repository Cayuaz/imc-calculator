//Função que imprime o IMC do usuário e a sua classificação
function displayIMC(imc, msgIMC, result, msgElement) {
    result.textContent = "Seu IMC é: " + imc;
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
        throw new Error("Os valores de peso e altura precisam ser números e os campos não podem estar vazios");
    } else {
        return true;
    }
} 

export {displayIMC, classificationIMC, calculateIMC, checkNumber}