const conversor_Dolar = () => {
    let resultado, moeda = Number(document.getElementById('moeda').value)
    resultado = moeda / 5.424
    alert(`O valor da converção --> ${resultado.toFixed(2)}`)
}
const conversor_Euro = () => {
    let resultado, moeda = Number(document.getElementById('moeda').value)
    resultado = moeda / 6.353 
    alert(`O valor da converção --> ${resultado.toFixed(2)}`)
}
// FUNCÕES DA CALCULADORA
const limpar = () =>{
    document.getElementById('limpar').value = " "
}
const numero_botão = () => {
    let 
}