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
    janela.loadFile("./aula02_html/ques01.html")
    janela.webContents.openDevTools()
    janela.remotoMenu()
}
app.whenReady().then(() => {
    criarjanela()
    console.log('Electron funcionando!!');
})
app.on('window-all-closed',()=>{
    if(process.platform !== 'drawin'){
        app.quit()
    }
    })
.catch((erro)=> {
    console.error(erro);
})