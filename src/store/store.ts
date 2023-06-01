'use client'

import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './drawerSlice'
import clickedAssetReducer from './clickedAssetSlice'

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    clickedAsset: clickedAssetReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
