const resultElement = document.getElementById("result");
const msgElement = document.getElementById("msg-imc")

function displayIMC(imc, msgIMC) {
    resultElement.textContent = "Seu IMC é: " + imc;
    msgElement.textContent = "Classificação: " + msgIMC;
}

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

const calculateIMC = (weight, height) => weight / (height * height);

function checkNumber (value1, value2) {
    
    if(value1 < 0 && value2 < 0){
        return false;
    } else if(value1 < value2){
        return false;
    } else if(value1 == null || value2 == null){
        return false
    } else if(Number.isNaN(value1) || Number.isNaN(value2)){
        return false
    } else {
        return true;
    }
} 

function execute(check, calculate, classification, display) {

        const weight  = parseFloat(document.getElementById("weight-element").value);
        const height = parseFloat(document.getElementById("height-element").value);

        if(check(weight, height)){
            const imc = calculate(weight, height).toFixed(1);
            const msgIMC = classification(imc)
            display(imc, msgIMC)        
        }

        else {
            throw new Error("Os valores de peso e altura não podem estar vazios e precisam ser maiores que zero, além disso a altura não pode ser maior que o peso!");        
        }
    
}

function checkParams (arrFunctions) {

    if(arrFunctions.length < 5){
        throw new Error("Quantidade de parâmetros inválida");  
    }

    for(fn of arrFunctions){
        if(typeof fn !== "function"){
            throw new Error("Parâmetros inválidos");   
        } 
    }
    return true;
}

document.getElementById("btn-send").addEventListener("click", () => { 

        try {
            checkParams( [execute, checkNumber, calculateIMC, classificationIMC, displayIMC] ) 
            execute(checkNumber, calculateIMC, classificationIMC, displayIMC)
        } catch (error) {
            msgElement.textContent = error.message;
        }  

})

document.getElementById("btn-clean").addEventListener("click", () => {
    resultElement.textContent = "";
    msgElement.textContent = "";
})










