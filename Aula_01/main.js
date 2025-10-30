import { app, BrowserWindow } from "electron";

const criarjanela = () => {
    const janela = new BrowserWindow({
    width: 800,
    height: 800,
    title: "Exemplo - Aplicação Desktop",
    webPreferences:{
        nodeIntegration: false,
        contextIsolation: true,
        devTools: true
    }
    })
    janela.loadFile("./aula02_html/calculadora.html")
    janela.webContents.openDevTools()
    janela.removeMenu()
}
app.whenReady().then(() => {
    criarjanela()
    console.log('Electron funcionando!!');
})
.catch((erro)=> {
    console.error(erro);
})


app.on('window-all-closed',()=>{
    if(process.platform !== 'drawin'){
        app.quit()
    }
    })
