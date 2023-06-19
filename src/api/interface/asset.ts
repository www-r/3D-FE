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

interface AssetData {
  assetList: Asset[]
  size: number
  currentPage: number
  totalPage: number
  totalElement: number
}

export type AssetReponse = ApiResponse<AssetData>
