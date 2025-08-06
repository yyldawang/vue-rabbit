<template>
  <div class="top-category">
    <div class="container m-top-20">
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCategoryFilterAPI } from '@/apis/category';
import { getBannerAPI } from '@/apis/home';
import type { ImageItem, ImageResponse } from '@/apis/home';
import type { CategoryResult, CategoryResponse  } from '@/apis/category';
import { ref, onMounted, onBeforeUpdate } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const categoryData = ref<CategoryResult>({
  id: '',
  name: '',
  picture: '',
  children: []
})
const getCategory = async () => {
  const res: CategoryResponse = await getCategoryFilterAPI(route.params.id)
  categoryData.value = res.result
}

onMounted(() => getCategory())
onBeforeUpdate(() => getCategory())

const bannerList = ref<ImageItem[]>([])
const getBanner = async () => {
  const res: ImageResponse = await getBannerAPI({distributionSite: '2'})
  bannerList.value = res.result
}
onMounted(() => getBanner())
</script>


<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}
.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>