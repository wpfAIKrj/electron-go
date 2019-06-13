<template>
  <div>
    <a-alert message="点击下面按钮打开一个警告弹窗" type="success" />
    <a-button @click="handleShowError" style="margin-top: 20px">点我</a-button>
    <a-alert message="点击下面按钮打开一个消息弹窗" type="info" style="margin-top: 20px" />
    <a-button @click="handleShowMsg" style="margin-top: 20px">点我</a-button>
    <a-alert message="点击下面按钮打开一个文件弹窗" type="info" style="margin-top: 20px" />
    <a-button @click="handleOpenDialog" style="margin-top: 20px">点我</a-button>
    <a-alert message="点击下面按钮打开一个保存弹窗" type="info" style="margin-top: 20px" />
    <a-button @click="handleSaveDialog" style="margin-top: 20px">点我</a-button>
  </div>
</template>
<script>
  import electron from 'electron'

  const { remote } = electron

  export default {
    name: 'second',
    components: {},
    methods: {
      handleShowError () {
        remote.dialog.showErrorBox('警告', '操作有误')
      },
      handleShowMsg () {
        remote.dialog.showMessageBox({
          type: 'info',
          title: '提示信息',
          message: '内容',
          buttons: ['确定', '取消']
        }, (index) => {
          console.log(index)
        })
      },
      handleOpenDialog () {
        remote.dialog.showOpenDialog({
          // 打开文件夹
          properties: ['openDirectory', 'openFile']

          // 打开文件
          // properties: ['openFile']
        }, (path) => {
          // 返回打开的文件或者文件夹路径
          console.log(path)
        })
      },
      handleSaveDialog () {
        remote.dialog.showSaveDialog({
          title: 'Save File',
          defaultPath: '/User/Poetry/Downloads/',
          // filters 制定了一个文件类型数组，用于规定用户可见或者可选的特定类型范围
          filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
            { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
            { name: 'Custom File Type', extensions: ['as'] },
            { name: 'All Files', extensions: ['*'] }
          ]
        }, (path) => {
          // 不是真的保存，只是返回路径，具体需要node操作
          console.log(path)
        })
      }
    }
  }
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#home-page-menu {
  background-color: transparent;
  height: 100vh;
  width: 100vw;
}
</style>
