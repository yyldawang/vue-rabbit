<template>
  <div>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script lang="ts" setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<style scoped lang="scss">

</style>