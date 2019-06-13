'use strict'

import { app, BrowserWindow } from 'electron'
import handleMessage from './event/message'
import createMenu from './event/menu'
import createTray from './event/tary'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  const options = {
    height: 540, // 高度
    width: 960, // 宽度
    show: false, // 创建完毕是否显示
    frame: true, // 是否有顶部
    center: true, // 是否出现在屏幕居中位置
    fullscreenable: false, // 是否允许全局
    resizable: false, // 是否允许拉伸大小
    title: 'chun', // 标题
    vibrancy: 'ultra-dark', // 模糊样式，仅支持mac
    transparent: true, // 透明样式，仅支持mac
    titleBarStyle: 'hidden', // 标题栏样式
    webPreferences: {
      backgroundThrottling: false
    }
  }
  if (process.platform === 'win32') {
    options.show = true
    // options.frame = false
    options.backgroundColor = '#3f3c37'
  }
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow(options)

  mainWindow.loadURL(winURL)

  // console.log('------->>>>>>>>>')
  // console.log(global.mainId)
  // console.log(mainWindow.id)
  global.mainId = mainWindow.id
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  Promise.resolve()
    .then(() => createWindow())
    .then(() => handleMessage())
    .then(() => createMenu())
    .then(() => createTray())
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
