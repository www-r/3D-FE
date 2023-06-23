import { ApiResponse } from '.'

export interface Asset {
  assetId: number
  assetName: string
  price: number
  releaseDate: string
  rating: number
  reviewCount: number
  wishCount: number
  wishlistId: number | null
  cartId: number | null
}

export interface AssetDetail {
  assetId: number
  assetName: string
  price: number
  fileSize: number
  fileUrl: string
  creator: string
  rating: number
  reviewCount: number
  wishCount: number
  visitCount: number
  wishlistId: number
  tagList: string[]
}

interface AssetData {
  assetList: Asset[]
  size: number
  currentPage: number
  totalPage: number
  totalElement: number
}

export type AssetDetailResponse = ApiResponse<AssetDetail>

export type AssetResponse = ApiResponse<AssetData>
