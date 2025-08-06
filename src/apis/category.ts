import http from '@/utils/http'
import type { ApiResponse } from '@/utils/http'

// 商品信息类型
export interface GoodsItem {
  id: string;         // 商品ID（如"1369155859933827074"）
  name: string;       // 商品名称（如"钻石陶瓷涂层多用锅18cm 小奶锅"）
  desc: string | null;// 商品描述（可能为null）
  price: string;      // 商品价格（字符串形式，如"149.00"）
  picture: string;    // 商品图片URL
  orderNum: number;   // 商品排序号/销量相关（如277）
}

// 子分类信息类型
export interface CategoryChild {
  id: string;                 // 子分类ID（如"1005999003"）
  name: string;               // 子分类名称（如"居家生活用品"）
  picture: string | null;     // 子分类图片（可能为null）
  parentId: string | null;    // 父分类ID（可能为null）
  parentName: string | null;  // 父分类名称（可能为null）
  goods: GoodsItem[];         // 子分类下的商品列表
  categories: null;           // 预留字段（当前为null）
  brands: null;               // 预留字段（当前为null）
  saleProperties: null;       // 预留字段（当前为null）
}

// 主分类信息类型（包含子分类）
export interface CategoryResult {
  id: string;               // 主分类ID（如"1005000"）
  name: string;             // 主分类名称（如"居家"）
  picture: string | null;   // 主分类图片（可能为null）
  children: CategoryChild[];// 子分类列表
}

// 接口返回数据的完整类型（结合基础响应类型）
export type CategoryResponse = ApiResponse<CategoryResult>;


export const getCategoryFilterAPI = (id: string | string[]): Promise<ApiResponse<CategoryResult>> => {
  return http.get<CategoryResult>('/category', { 
    params: { id }
  })
}
