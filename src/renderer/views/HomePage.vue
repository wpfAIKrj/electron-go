<template>
  <div>
    <p>node版本是：{{ nodeVersion }}</p>
    <p>chrome版本是：{{ chromeVersion }}</p>
    <p>electron版本是：{{ electronVersion }}</p>
  </div>
</template>
<script>
  export default {
    name: 'home-page',
    data () {
      return {
      }
    },
    computed: {
      nodeVersion () {
        return process.versions.node
      },
      chromeVersion () {
        return process.versions.chrome
      },
      electronVersion () {
        return process.versions.electron
      }
    },
    components: {},
    methods: {
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
