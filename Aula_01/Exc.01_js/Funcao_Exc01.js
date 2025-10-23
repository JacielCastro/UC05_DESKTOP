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
    let nota_01 = parseFloat(document.getElementById('nota_01').value)// parseFloat() CONVERTE O TEXTO DIGITADO PARA NÚMERO DECOMAL
    let nota_02 = parseFloat(document.getElementById('nota_02').value)
    
    if (isNaN (nota_01) || isNaN (nota_02)) {
        alert(`Por favor, informe as duas notas`)
        return;
    }
    media01 = nota_01 * 0.4
    media02 = nota_02 * 0.6
    media_geral = media01 + media02
    alert(`Média da primeira nota --> ${media01}\nMédia da segunda nota --> ${media02}\nA média geral ${media_geral.toFixed(2)}`).toFixed(2)
}
function limparCampos() {
    // Pega os elementos dos inputs
    document.getElementById("nota_01").value = "";
    document.getElementById("nota_02").value = "";
    alert("Os campos foram limpos!");// Mostra uma mensagem opcional
}