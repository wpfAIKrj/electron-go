<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import listenerNetWork from './event/network'
export default {
  name: 'electron-wang',
  created () {
    console.log(this.$electron)
    listenerNetWork()
  }
}
</script>

<style>
  /* CSS */
  #app {
    height: 100%;
  }
</style>
