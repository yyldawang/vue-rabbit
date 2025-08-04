import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
import type {CategoryItem} from '@/apis/layout'
import type { ApiResponse } from '@/utils/http'

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref<CategoryItem[]>([])
  const getCategory = async () => {
    const res: ApiResponse<CategoryItem[]> = await getCategoryAPI()
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategory
  }
})
