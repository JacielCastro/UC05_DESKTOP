//  FUNÇÕES DO EXERCÍCIOS DA AULA 01
function verificacao_Numero() {
    let teste_numero = document.getElementById('numero').value
        if (teste_numero  >= 0) {
            alert (`O número ${teste_numero} é positivo `)
        }else{
            alert(`O número ${teste_numero} é negativo`)       
        } 
}
function par_Impar() {
    let numero_p_i = Number(document.getElementById('teste_impar_Par').value)
    if (numero_p_i % 2 === 0) {
        alert(`O número ${numero_p_i} é PAR`)
    } else {
        alert(`O número ${numero_p_i} é IMPAR`)
    }    
}
function calculaMedia() {
    let nota_01 = (document.getElementById('nota_01').value)
    let nota_02 = (document.getElementById('nota_02').value)
    
    if (isNaN (nota_01) || isNaN (nota_02)) {
        alert(`Por favor, informe as duas notas`)
        return;
    }
    media01 = nota_01 * 0.4
    media02 = nota_02 * 0.6
    media_geral = media01 + media02
    alert(`Média da primeira nota --> ${media01}\nMédia da segunda nota --> ${media02}\nA média geral ${media_geral}`).toFixed(2)
}
function calculaKelvin() {
    let convesor = Number(document.getElementById('celsius').value)
    let resultado 
    resultado = convesor + 273.15
    alert(`O valor convertido em KELVIN --> ${resultado.toFixed(2)}`) 
}
function calculaFahrenheit(){
    let valor = Number(document.getElementById('celsius').value)
    let resultado
    resultado = valor * 1.8 + 32
    alert (`O valor convertido em FAHRENHEIT --> ${resultado.toFixed(2)}`)
}
function limparCampos01() {
    // Pega os elementos dos inputs
    document.getElementById("numero").value = "";
    document.getElementById("teste_impar_Par").value = "";
    alert("Os campos foram limpos!");// Mostra uma mensagem opcional
}
function limparCampos02() {
    // Pega os elementos dos inputs
    document.getElementById("nota_01").value = "";
    document.getElementById("nota_02").value = "";
    alert("Os campos foram limpos!");// Mostra uma mensagem opcional
}
function limparCampos03() {
    // Pega os elementos dos inputs
    document.getElementById("celsius").value = "";
    alert("Os campos foram limpos!");// Mostra uma mensagem opcional
}