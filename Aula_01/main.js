import { app, BrowserWindow } from "electron";

const criarjanela = () => {
    const janela = new BrowserWindow({
    width: 800,
    height: 800
     })
     janela.loadFile("index.html")
}
app.whenReady().then(() => {
    criarjanela()
    console.log('Electron funcionando!!');
})
.catch((erro)=> {
    console.error(erro);
})