


// Declaração da variável do botão.
const calcular = document.getElementById("calcular")

function imc() {
    const txtNome = document.getElementById("nome").value 
    const txtAltura = document.getElementById("altura").value
    const txtPeso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if (txtNome !== '' && txtAltura !== '' && txtPeso !== '') {
            if(isNaN(txtNome)){
                if (isNaN(txtPeso) && isNaN(txtAltura)) {
            
                    resultado.textContent = 'Tipo de dado inválido'
                
                } else {
                    const valorIMC = (txtPeso / (txtAltura * txtAltura)).toFixed(2) 
        
                    let classificacao = '' 
        
                    if (valorIMC < 18.5) {
                        classificacao = 'abaixo do peso'
                    } else if (valorIMC < 24.9) {
                        classificacao = 'com peso ideal. Parabéns!!!'
                    } else if (valorIMC < 29.9) {
                        classificacao = 'acima do peso'
                    } else if (valorIMC < 34.9) {
                        classificacao = 'com obesidade grau I'
                    } else if (valorIMC < 40) {
                        classificacao = 'com obesidade grau II'
                    } else {
                        classificacao = 'com obesidade grau III. Cuidado!!!'
                    }
        
                    resultado.textContent = `${txtNome} seu IMC é ${valorIMC} e voçê está ${classificacao}`
        
                }
            }else{
                return resultado.textContent = "Tipo de dado inválido"
            }
        
    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
        }
}

calcular.addEventListener('click', imc) // Adicinando o botão calcular a função de imc
