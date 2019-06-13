<template>
  <div>
    <a-alert message="点击下面按钮打开一个普通窗口" type="success" />
    <a-button @click="handleCreateWindow" style="margin-top: 20px">点我</a-button>
    <a-alert message="点击下面按钮打开一个无框窗口" type="info" style="margin-top: 20px" />
    <a-button @click="handleCreateNoBarWindow" style="margin-top: 20px">点我</a-button>
    <a-alert message="点击下面按钮打开一个本地窗口" type="info" style="margin-top: 20px" />
    <a-button @click="handleCreateVueWindow" style="margin-top: 20px">点我</a-button>
    <a-alert message="点击下面按钮从默认浏览器打开页面" type="info" style="margin-top: 20px" />
    <a-button @click="handleWeb" style="margin-top: 20px">点我</a-button>
  </div>
</template>
<script>
  import electron from 'electron'

  const { ipcRenderer, shell } = electron

  export default {
    name: 'second',
    components: {},
    methods: {
      handleCreateWindow () {
        ipcRenderer.send('create-window')
      },
      handleCreateNoBarWindow () {
        ipcRenderer.send('create-nobar-window')
      },
      handleCreateVueWindow () {
        ipcRenderer.send('create-vue-window', {
          path: 'third'
        })
      },
      handleWeb () {
        shell.openExternal('https://www.baidu.com')
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
