import { Asset } from '@/api/interface/asset'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Asset = {
  assetId: 0,
  assetName: '',
  price: 0,
  releaseDate: '',
  rating: 0,
  reviewCount: 0,
  wishCount: 0,
  wishlistId: 0,
  cartId: 0,
}

const clickedAssetSlice = createSlice({
  name: 'clickedAsset',
  initialState,
  reducers: {
    setClickedAsset: (state: Asset, action) => {
      return action.payload
    },
    clearAsset: (state: Asset) => {
      return initialState
    },
  },
})

export const { setClickedAsset, clearAsset } = clickedAssetSlice.actions
export default clickedAssetSlice.reducer
