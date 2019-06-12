<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Sidebar } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
  .app-wrapper {
    display: flex;
    flex-direction: row;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .sidebar-container {
    width: 200px;
    background-color: #001529;
  }
  .main-container {
    flex-grow: 1;
    background-color: antiquewhite;
  }
</style>
