/*
 *
 *
 * 
 * @param
 * @param
 * @resultado
 * 
 *
 * 
 *  
 */
function calcularIMC(peso, altura){
    return peso / (altura ** 2)
}

function classificar(imc){
    let categoria

    if (imc < 18.5){
        categoria = " abaixo do peso."
    }else if(imc < 25){
        categoria = " peso ideal. <span class='green'>Parabéns!</span>"
    }else if(imc < 30){
        categoria = "levemente acima do peso."
    }else if(imc < 35){
        categoria = "com obesidade grau I."
    }else if(imc < 40){
        categoria = "com obesidade grau II."
    }else{
        categoria = "com obesidade grau III. <span class='red'> classCuidado!!</span>"
    }

    return categoria
}

function camposValidos(){
    return document.querySelector("form").reportValidity()
}

function exibirResultado(){
    const resultado = document.getElementById("resultado")
    /*
    const nome = document.querySelector("#nome")
    
    identifica pelos seletores do css
    #nome
    .nome
    etc.
    */
    const nome = document.getElementById("nome").value
    const peso = document.getElementById("peso").value.replace(",",".")
    const altura = document.getElementById("altura").value.replace(",",".")

    if (camposValidos()){
    const imc = calcularIMC (peso, altura)/* toFixed(2) fixa as casas decimais */
    const classificacao = classificar(imc)

    resultado.innerHTML = `${nome} seu IMC é ${imc.toFixed(2)} e você está${classificacao}`
    }else{
        resultado.textContent = "Preencha todos os dados"
    }
}

function capturarEnter(evento) {
    if (evento.key === "Enter"){
        exibirResultado()
    }
}
// eventos
document.getElementById('calcular')
    .addEventListener('click', exibirResultado)

document.querySelector('form')
    .addEventListener('keypress', capturarEnter)