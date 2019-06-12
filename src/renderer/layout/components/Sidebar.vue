<template>
  <div>
    <a-layout-sider
      :trigger="null"
      collapsible
    >
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <!-- <router-link v-for="route in permissionRouter" :key="route.path" :to="route.path">
          <a-menu-item>
            <span>nav 1</span>
          </a-menu-item>
        </router-link> -->
        <a-menu-item v-for="route in permissionRouter" :key="route.path">
          <router-link :to="route.path">
            <span>{{ route.name }}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { constantRoutes } from '@/router'

export default {
  components: {},
  computed: {
    permissionRouter () {
      console.log(constantRoutes)
      return constantRoutes
    }
  }
}
</script>
