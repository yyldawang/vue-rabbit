<script setup lang="ts">
import {  RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div class="test">
    test text
  </div>
</template>

<style scoped lang="scss">
.test {
  color: $warnColor;
}
</style>
