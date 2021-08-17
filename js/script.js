
// Declaração da variável do botão.
const calcular = document.getElementById("calcular")

function imc() {
    const txtNome = document.getElementById("txtNome").value 
    const txtAltura = document.getElementById("txtAltura").value
    const txtPeso = document.getElementById("txtPeso").value
    const resultado = document.getElementById("resultado")

    if (txtNome !== '' && txtAltura !== '' && txtPeso !== '') {
        if (txtNome == NaN || txtAltura !== NaN || txtPeso !== NaN) {
            resultado.textContent = 'Tipo de dado inválido'
        } else {
            const valorIMC = (txtPeso / (txtAltura * txtAltura)).toFixed(1) 

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

    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
}

calcular.addEventListener('click', imc) // Adicinando o botão calcular a função de imc
