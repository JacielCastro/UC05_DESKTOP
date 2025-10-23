import { app, BrowserWindow } from "electron";

const criarjanela = () => {
    const janela = new BrowserWindow({
    width: 800,
    height: 800
     })
     janela.loadFile("./Exc.01_html/Ques02.html")
}
app.whenReady().then(() => {
    criarjanela()
    console.log('Electron funcionando!!');
})
.catch((erro)=> {
    console.error(erro);
})