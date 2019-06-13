import { Menu } from 'electron'

let menus = [
  {
    label: '文件',
    submenu: [
      {
        label: '新建文件',
        accelerator: 'CmdOrCtrl+n', // 快捷键
        click: () => {
          console.log('点击了新建文件1')
        }
      },
      {
        label: '新建窗口',
        click: () => {
          console.log('点击了新建窗口1')
        }
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      {
        label: '复制',
        role: 'copy' // 调用内置角色实现功能
      },
      {
        label: '剪切',
        role: 'cut'
      }
    ]
  }
]

export default function createMenu () {
  let m = Menu.buildFromTemplate(menus)
  Menu.setApplicationMenu(m)
}
