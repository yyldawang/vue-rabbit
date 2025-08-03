<script setup lang="ts"></script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li><RouterLink to="/">居家</RouterLink></li>
        <li><RouterLink to="/">美食</RouterLink></li>
        <li><RouterLink to="/">服饰</RouterLink></li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>
      <!-- 头部购物车 -->
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  background: #fff;
  .container {
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      a {
        background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
      }
    }
    .app-header-nav {
      display: flex;
      align-self: center;
      width: 980px;
      padding-left: 40px;
      position: relative;
      z-index: 990;
      li {
        text-align: center;
        width: 38px;
        margin-right: 40px;
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
      }
      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
    .search {
      width: 170px;
      height: 32px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      line-height: 32px;
      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }
      input {
        width: 120px;
        padding-left: 4px;
        color: #666;
      }
    }
  }
}
</style>
