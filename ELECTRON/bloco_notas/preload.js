
import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld('api', {
    salvar: (texto) => ipcRenderer.invoke('salvar-arq', texto),

    abrir: () => ipcRenderer.invoke('abrir-arq'),

    salvarComo: (texto) => ipcRenderer.invoke('salvarComo-arq', texto),

    abrirMenu:(callback) => ipcRenderer.on('abrir', () => callback()),

    salvarArquivo:(callback) => ipcRenderer.on('salvar', () => callback()),

    salvarComo:(callback) =>ipcRenderer.on('salvar-Como', () => callback())
})