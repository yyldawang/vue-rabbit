<template>
  <div>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script lang="ts" setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue'; 
import LayoutFixed from './components/LayoutFixed.vue';

import { useCategoryStore } from '@/stores/category'
import {onMounted} from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>

<style scoped lang="scss">

</style>