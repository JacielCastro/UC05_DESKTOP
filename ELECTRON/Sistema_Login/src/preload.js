import {contextBridge, ipcRenderer} from  'electron'

contextBridge.executeInMainWorld('api',{
    
})
