import http from "@/utils/http";
import type {ApiResponse} from '@/utils/http'

export interface ImageItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

export function getBannerAPI(): Promise<ApiResponse<ImageItem[]>> {
  return http.get<ImageItem[]>( '/home/banner')
}


export interface NewsItem {
  id: string,
  name: string,
  desc: string,
  orderNum: number,
  picture: string,
  price: string
}

export function findNewAPI(): Promise<ApiResponse<NewsItem[]>> {
  return http.get<NewsItem[]>('/home/new')
}

export interface HotItem {
  id: string,
  alt: string,
  picture: string,
  title: string
}

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

export function findGoodsAPI(): Promise<ApiResponse<GoodsItem[]>> {
  return http.get<GoodsItem[]>('/home/goods')
}