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
limpar.addEventListener('click',() =>{
    visualViewport.value = " "
})
let butoes = document.querySelectorAll('button')
butoes.forEach((botao) => {
    botao.addEventListener('click', ()=>{
        if (botao.className === 'num') {
            visor.value += botao.textContent.trim()
        }else if (botao.className === 'op' ) {
            visor.value += botao.textContent
            op = botao.textContent.trim()
            console.log(op);
        }else if (botao.id === 'igual') {
            document.getElementById('').style.visibility = 'visoble'
        let conteudo =  visor.value.split(op)
        
            switch (op) {
                case '+':
                    visor.value = Number(conteudo[0]) + Number(conteudo[1])
                    break;
                case '-':
                    visor.value = Number(conteudo[0]) - Number(conteudo[1])
                    break
                case '*':
                    visor.value =  Number(conteudo[0]) * Number(conteudo[1])
                    break
                case '/':
                    visor.value = Number(conteudo[0]) / Number(conteudo[1])
                    break
                case '%':
                    visor.visor = Number(conteudo[0]) % Number(conteudo[1])
                default:
                    break;
            }

        }
    })
})