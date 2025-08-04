

import http from '@/utils/http';
// 引入通用的 ApiResponse 类型
import type { ApiResponse } from '@/utils/http';

// 商品信息接口（每个分类下的goods数组项）
export interface CategoryGoods {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  orderNum: null | number; // 实际返回为null，预留number类型应对未来可能的数值
}

// 子分类接口（每个分类下的children数组项）
export interface CategoryChild {
  id: string;
  name: string;
  picture: string;
  children: null | CategoryChild[]; // 子分类的子分类（实际返回为null）
  goods: null | CategoryGoods[]; // 子分类下的商品（实际返回为null）
}

// 顶级分类接口（getCategoryAPI返回的result数组项）
export interface CategoryItem {
  id: string;
  name: string;
  picture: string;
  children: CategoryChild[]; // 子分类数组
  goods: CategoryGoods[]; // 该分类下的商品数组
}

// 接口返回的整体结构应与 ApiResponse 对齐
export function getCategoryAPI(): Promise<ApiResponse<CategoryItem[]>> {
  // 返回类型为 Promise<ApiResponse<CategoryItem[]>>
  return http.get<CategoryItem[]>('/home/category/head');
}