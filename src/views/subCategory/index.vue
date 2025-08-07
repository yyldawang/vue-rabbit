<script setup lang="ts">
import { getCategoryFilterAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import type { CategoryFilterResult, CategoryFilterResponse, reqData } from "@/apis/category";
import { getSubCategoryGoodsAPI } from "@/apis/category";
import type { ApiPageResultItem, SalesGoodItem } from "@/apis/category";
import GoodsItem from "@/views/Home/components/GoodsItemCom.vue";

const route = useRoute();

const filterData = ref<CategoryFilterResult>({
  id: "",
  name: "",
  picture: "",
  parentId: "",
  parentName: "",
  goods: [],
  categories: [],
  brands: [],
  saleProperties: [],
});
const getCategory = async (id = route.params.id) => {
  const res: CategoryFilterResponse = await getCategoryFilterAPI(id);
  filterData.value = res.result;
};
onMounted(() => getCategory());
onBeforeRouteUpdate((to) => getCategory(to.params.id));

// const reqData: reqData = {
//   categoryId: route.params.id as string,
//   page: 1,
//   pageSize: 20,
//   sortField: 'publishTime'
// }
const reqData = ref<reqData>({
  categoryId: route.params.id as string,
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});
const goodsList = ref<SalesGoodItem[]>([]);
const getGooddResult = async () => {
  const res: ApiPageResultItem = await getSubCategoryGoodsAPI(reqData.value);
  goodsList.value = res.result.items;
};
onMounted(() => getGooddResult());

const tabChange = () => {
  reqData.value.page = 1;
  getGooddResult();
};

const disabled = ref<boolean>(false);
const load = async () => {
  reqData.value.page++;
  const res: ApiPageResultItem = await getSubCategoryGoodsAPI(reqData.value);
  goodsList.value = [...goodsList.value, ...res.result.items];
  if (res.result.items.length === 0) {
    disabled.value = true;
  }
};
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">{{
          filterData.parentName
        }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load">
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodsList" :key="good.id" :goods="good"></GoodsItem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
