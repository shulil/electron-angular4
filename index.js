const {app, BrowserWindow,ipcMain} = require('electron');

const ipc = require('electron').ipcMain;
const fs = require("fs");
let win;
const createWindow = () =>{
    win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
    });
    win.loadURL(`file://${__dirname}/dist/index.html`);
   // win.webContents.openDevTools();
    win.on('closed', () => win = null)
    win.on('ready-to-show', () =>{
        win.show()
        win.focus()
    })
}

app.on('ready', _ => createWindow())
app.on('window-all-closed', _ => process.platform !== 'darwin'&& app.quit())
app.on('activate', _ => win === null&& createWindow())
ipc.on('done', (event, setting) => {
  

    fs.appendFile('setting.ini', '', 'utf8');
    fs.appendFile('setting.ini', setting, 'utf8');
})  
ipc.on("close", (event, arg) =>{
    win.close();
})
