document.getElementById("btn-send").addEventListener("click", (event) => { 

    const weight  = parseFloat(document.getElementById("peso").value);
    const height = parseFloat(document.getElementById("altura").value);
    const result = document.getElementById("result");
    const msgImc = document.getElementById("msg-imc");
    let imc = 0;

    if(checkNumber(weight, height)){
        imc = calculateImc(weight, height).toFixed(1);
        result.textContent = "Seu IMC é: " + imc;
        msgImc.textContent = "Classificação: " + returnMsg(imc);
    }
    else {
        result.textContent = "Por favor, digite um valor válido!"
        msgImc.textContent = "";
    }

})

function checkNumber(value1, value2) {
    return value1 > 0 && value2 > 0
}

function calculateImc(weight, height){
     return weight / (height * height)
}

function returnMsg(imc){
    if(imc < 18.5){
        return "abaixo do peso";
    } else if(imc >= 18.5 && imc < 24.9){
        return "peso normal";
    } else if(imc >= 25 && imc < 29.9){
        return "sobrepeso";
    } else if(imc >= 30 && imc < 34.9){
        return "obesidade grau 1";
    } else if(imc >= 35 && imc < 39.9){
        return "obesidade grau 2";
    } else {
        return "obesidade grau 3";
    }
}

document.getElementById("btn-clean").addEventListener("click", () => {
    const result = document.getElementById("result");
    const msgImc = document.getElementById("msg-imc")

    result.textContent = "";
    msgImc.textContent = "";
})


