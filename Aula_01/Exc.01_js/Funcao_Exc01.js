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
function calculaNotas() {
    let nota_01 = document.getElementById('teste_nota01').value
    let nota_02 = document.getElementById('teste_nota02').value
    media01 = nota_01 * 0.4
    media02 = nota_02 * 0.6
    media_geral = media01 + media02
    alert(`A média geral ${media_geral}`)
}
// function calculandoMedia(valor01,valor02) {
//     let media_geral = document.getElementById('media').value
//     media_geral = media01 + media02
//     alert(`O resultado da sua media ${media_geral}`)

// }