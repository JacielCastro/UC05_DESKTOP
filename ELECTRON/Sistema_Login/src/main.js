import {app, browserWindow, nativeTheme, ipcMain, Menu, BrowserWindow} from 'electron';
import path from 'node: path'
import { fileURLToPath } from 'node:url';

let janela = null

const criarjanela = 

() => {
    nativeTheme.themeSource = 'light'
    const janela = new BrowserWindow({
        width: 800,
        height: 800,
        title: 'Exemplo - Aplicação Desktop',
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname,'preload.js'),
            sandbox: false
        }
    })
}