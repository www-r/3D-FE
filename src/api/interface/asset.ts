import { ApiResponse } from '.'

export interface Asset {
  assetId: number
  assetName: string
  price: number
  releaseDate: string
  rating: number
  reviewCount: number
  wishCount: number
  wishListId: number | null
  cartId: number | null
}

export interface AssetList {
  AssetList: Asset[]
}
