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
  picture: string | undefined;     // 子分类图片（可能为null）
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


export const getCategoryAPI = (id: string | string[]): Promise<ApiResponse<CategoryResult>> => {
  return http.get<CategoryResult>('/category', { 
    params: { id }
  })
}

// 商品信息类型
export interface GoodsItem {
  id: string;
  name: string;
  desc: string | null;
  price: string;
  picture: string;
  orderNum: number;
}

// 分类信息类型（categories 数组中的元素类型）
export interface CategoryInfo {
  id: string;
  name: string;
  layer: number;
  parent: null; // 若实际可能有值，可根据情况调整类型
}

// 品牌信息类型
export interface BrandItem {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  picture: string;
  type: null; // 若实际可能有值，可根据情况调整类型
  desc: string;
  place: string;
}

// 销售属性值类型（saleProperties 中 properties 数组的元素类型）
export interface SalePropertyValue {
  id: string;
  name: string;
}

// 销售属性类型（saleProperties 数组中的元素类型）
export interface SaleProperty {
  id: string;
  name: string;
  properties: SalePropertyValue[];
}

// 最外层 result 对应的类型
export interface CategoryFilterResult {
  id: string;
  name: string;
  picture: string | null;
  parentId: string;
  parentName: string;
  goods: GoodsItem[];
  categories: CategoryInfo[];
  brands: BrandItem[];
  saleProperties: SaleProperty[];
}

// 完整的接口响应类型，结合基础响应类型
export type CategoryFilterResponse = ApiResponse<CategoryFilterResult>;

export const getCategoryFilterAPI = ( id: string | string[]): Promise<ApiResponse<CategoryFilterResult>> => {
  return http.get<CategoryFilterResult>('/category/sub/filter', { 
    params: { id }
  })
}

export interface reqData {
  categoryId: string | string[] ,
     page: number,
     pageSize: number;
     sortField: string;
}

interface pageResultItem {
  count: number
  pageSize: number
  pages: number
  page: number
  items: SalesGoodItem[]
}

export interface SalesGoodItem {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  orderNum: number
}

// export type ApiGoodItem = ApiResponse<SalesGoodItem>
export type ApiPageResultItem = ApiResponse<pageResultItem>

export const getSubCategoryGoodsAPI = (data: reqData): Promise<ApiResponse<pageResultItem>> => {
  return http.post<pageResultItem>('/category/goods/temporary',{data})
}