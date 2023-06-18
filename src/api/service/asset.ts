/**
 * 에셋 관련 API
 */
import { readFile } from 'fs/promises'
import path from 'path'
import { axiosInstance } from '../axios'
import { AssetList } from '../interface/asset'

// export interface Asset {
//   id: number
//   title: string
//   price: number
//   discount: number
//   categories: Categories
//   createdAt: string
//   updatedAt: string
// }

// interface Categories {
//   title: string
//   tags: string[]
// }

// export async function getAllAssets(): Promise<Asset[]> {
//   const filePath = path.join(process.cwd(), 'src', 'data', 'assets.json')
//   return readFile(filePath, 'utf-8').then<Asset[]>(JSON.parse)
// }

export const getAssets = async <T = AssetList>(page: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets?page=${page}`)
  return res.data
}
