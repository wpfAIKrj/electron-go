import { ipcMain, BrowserWindow } from 'electron'

function createWindow () {
  ipcMain.on('create-window', (event, data) => {
    let win = new BrowserWindow({
      width: 800,
      height: 600
    })
    win.on('close', () => { win = null })
    win.loadURL('http://www.baidu.com')
  })
}

function createNoBarWindow () {
  ipcMain.on('create-nobar-window', (event, data) => {
    let win = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false
    })
    win.on('close', () => { win = null })
    win.loadURL('http://www.baidu.com')
  })
}

function createVueWindow () {
  ipcMain.on('create-vue-window', (event, data) => {
    const winURL = process.env.NODE_ENV === 'development'
      ? `http://localhost:9080/#/` + data.path
      : `file://${__dirname}/index.html`
    console.log(winURL)
    let win = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false
    })
    win.on('close', () => { win = null })
    win.loadURL(winURL)
  })
}

export default function handleMessage () {
  createWindow()
  createNoBarWindow()
  createVueWindow()
}
