import { app, BrowserWindow, nativeTheme, Menu } from "electron"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename) 

const criarjanela = () => {
    const janela = new BrowserWindow({
        width: 800,
        height: 800,
        title: " PROJETO EM ELECTRON ",
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname,'preload.js'),
            sandbox: false,
            setZoomFactor: 1.0
}
})
// LIGANDO A TELA DE INTERAÇÃO DO JS COM O ELECTRON
janela.loadFile(
   path.join(__dirname,'src','paginas','style','login.js')
)
// MODO CLARO/ESCURO DA JANELA
nativeTheme.themeSource = 'dark'
// CAMINHO DO HTML DA JANELA
janela.loadFile(
    path.join(__dirname,"paginas","login.html")
)
// abre o console para DEBUG
janela.webContents.openDevTools()
// DECLARANDO OBJETO MENU NA APLICAÇÃO
Menu.setApplicationMenu(null)

}

app.whenReady().then(() => {
    criarjanela()
})

app.on('window-all-closed', () =>{
   app.quit()
})

    
/* janela.loadFile("./aula01_html/ques02.html")
    // janela.webContents.openDevTools()
    janela.removeMenu()
    janela.webContents.on('did-finish-load',() => {// EVENTO DISPARADO QUANDO A JANELA TERMINA DE CARREGAR
        janela.webContents.setZoomFactor(1.0)
    })
    Menu.setApplicationMenu(Menu.buildFromTemplate(template))// criação do menu
}
const template = [
    {label: "Aplicação",  
        submenu:[
            {label: "Novo", click: () => criarjanela()},
            {type: "separator"},
            {label: "Sair", role: 'quit'}]},
    {label: "sobre"},
    {label: "Exibir",
        submenu: [{label: "Aparência",
            submenu:[
                {label: "Zoom+", type: "radio", checked: false,
                    click: () => {
                        let janelaatual = janela.webContents.getZoomFactor()
                        janela.webContents.setZoomFactor(0.1 + janelaatual)},
                accelerator: "ctrl + = ",},
                {label: "zoom-", role:"zoomout"},
                {label: "Trocar tema", type: "checkbox", checked: false, 
                    click: () => nativeTheme.themeSource = "dark"}
            ]
        }]}
]
app.whenReady().then(() => {
    criarjanela()
})

app.on('window-all-closed',()=>{
    if(process.platform !== 'drawin'){
        app.quit()
    }
})

ipcMain.on('mudar-tema', () => { // RECEBA O EVENTO DO RENDERER PARA MUDAR O TEMA 
   if (nativeTheme.themeSource === 'dark') {
        nativeTheme.themeSource = 'light'
   } else {
        nativeTheme.themeSource ='dark'
   }
})

ipcMain.on('mudar-Zoom', () => {
    let janelaatual = janela.webContents.getZoomFactor()
    janela.webContents.setZoomFactor(0.1 + janelaatual)
})

ipcMain.on('mudar-Zoom', () => {
    let janelaatual = janela.webContents.getZoomFactor()
    janela.webContents.setZoomFactor(0.1 - janelaatual)
})
ipcMain.on('criar-janela', () => {
    criarJanela()
})
ipcMain.handle('calc-soma', (Event, n1, n2) => {
    return n1+n2
})

ipcMain.on('envia-msg', (event, msg) => {
    console.log('Mensagem do Rederer: ', msg)
    event.reply('devolver-msg', 'Olá')
})
*/






