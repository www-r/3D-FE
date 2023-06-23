import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './drawerSlice'
import clickedAssetReducer from './clickedAssetSlice'
import categoryReducer from './setSelectedCategory'
import tagReducer from './tagSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    clickedAsset: clickedAssetReducer,
    category: categoryReducer,
    tag: tagReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
