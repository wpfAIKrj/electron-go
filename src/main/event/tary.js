import { app, BrowserWindow, Tray, Menu } from 'electron'
const path = require('path')

let tray
global.tray = tray

export default function createTray () {
  const mainWindow = BrowserWindow.fromId(global.mainId)
  tray = new Tray(path.join(__dirname, '../../img/icon.png'))
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '显示主页',
      click: () => {
        console.log('点击了显示主页')
      }
    },
    {
      label: '退出',
      click: () => {
        mainWindow.destroy()
        app.quit()
      }
    }
  ])
  tray.on('double-click', (e) => {
    console.log('老铁双击666')
  })
  tray.setToolTip('王亚立')
  tray.setContextMenu(contextMenu)
}
