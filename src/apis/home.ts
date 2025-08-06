import http from "@/utils/http";
import type {ApiResponse} from '@/utils/http'

export interface ImageItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

export type ImageResponse = ApiResponse<ImageItem[]>

// 定义参数类型
interface BannerParams {
  distributionSite?: string; // 可选属性，因为 params 可能不传
}

export function getBannerAPI(params: BannerParams = {}): Promise<ApiResponse<ImageItem[]>> {
  const { distributionSite = '1' } = params
  return http.get<ImageItem[]>( '/home/banner', { params: { distributionSite } })
}


export interface NewsItem {
  id: string,
  name: string,
  desc: string,
  orderNum: number,
  picture: string,
  price: string
}

export type NewsImemResponse = ApiResponse<NewsItem[]>

export function findNewAPI(): Promise<ApiResponse<NewsItem[]>> {
  return http.get<NewsItem[]>('/home/new')
}

export interface HotItem {
  id: string,
  alt: string,
  picture: string,
  title: string
}

export type HotImemResponse = ApiResponse<HotItem[]>

export function findHotAPI(): Promise<ApiResponse<HotItem[]>> {
  return http.get<HotItem[]>('/home/hot')
}

interface GoodParent {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  orderNum: number;
}

interface GoodChild {
  id: string;
  name: string;
  layer: number;
  parent: null | string; // 根据实际情况，parent 可能是其他类型，这里先写 null
}

export interface GoodsItem {
  id: string;
  name: string;
  picture: string;
  saleInfo: string;
  children: GoodChild[];
  goods: GoodParent[];
}

export type goodsItemResponse = ApiResponse<GoodsItem[]>

export function findGoodsAPI(): Promise<ApiResponse<GoodsItem[]>> {
  return http.get<GoodsItem[]>('/home/goods')
}