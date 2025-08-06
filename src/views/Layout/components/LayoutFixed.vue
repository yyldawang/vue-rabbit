<script setup lang="ts"> 
import { useScroll } from '@vueuse/core'
import { computed } from 'vue'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
// 获取滚动位置对象
const { y } = useScroll(window)
// 计算导航栏是否显示
const isShow = computed(() => y.value > 78)
</script>

<template>
  <div class="app-header-sticky" :class="{ show: isShow }">
    <div class="container">
      <router-link class="logo" to="/"></router-link>
      <ul class="app-header-nav">
        <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink :to="`/category/${item.id}`">{{item.name}}</RouterLink>
        </li>
      </ul>
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 80px;
  transform: translateY(-100%);
  background-color: #fff;
  opacity: 0;
  &.show {
    transition: all 0.1s linear;
    transform: none;
    opacity: 1;
  }
  .container {
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      height: 80px;
      background: url("@/assets/images/logo.png") no-repeat right 2px;
      background-size: 160px auto;
    }
    .app-header-nav {
      display: flex;
      width: 820px;
      padding-left: 40px;
      position: relative;
      list-style: none;
      li {
        margin-right: 40px;
        width: 38px;
        text-align: center;
        a {
          font-size: 16px;
          line-height: 32px;
          height: 32px;
          display: inline-block;
          &:hover {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
          }
        }
        .active {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
    }
    .right {
      width: 220px;
      display: flex;
      align-items: center;
      padding-left: 40px;
      border-left: 2px solid $xtxColor;
      a {
        width: 38px;
        margin-right: 40px;
        font-size: 16px;
        line-height: 1;
        &:hover {
          color: $xtxColor;
        }
      }
    }
  }
}
</style>
