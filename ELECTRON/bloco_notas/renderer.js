
let texto = document.getElementById("texto")    

function salvarArq(){
    window.api.salvar(texto.value).then((caminho) =>{
        document.getElementById("caminho").innerHTML = `Caminho: ${caminho}`
    })    
}

function abrirArq(){
    window.api.abrir().then((conteudo) => {
        texto.value = conteudo
    })
}

function salvarComoArq(){
    window.api.salvarComo(texto.value).then((caminho) =>{
        document.getElementById("caminho").innerHTML = `Caminho: ${caminho}`
    })
}
function sair() {
    window.api
}
// PASSANDO A FUNÇÃO DE SALVAR PARA O MENU DO ELECTRON
window.api.abrirMenu(()=>{
    abrirArq()
})
// PASSANDO A FUNÇÃO DE SALVAR PARA O MENU DO ELECTRON
Window.ipc.salvarArquivo(()=>{
    salvarArq()
})
// PASSANDO A FUNÇÃO DE SALVAR COMO PARA O MENU DO ELECTRON
Window.ipc.salvarComo(()=>{
    salvarComoArq()
})