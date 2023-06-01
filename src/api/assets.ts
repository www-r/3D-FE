import { readFile } from 'fs/promises'
import path from 'path'

export interface Asset {
  id: number
  title: string
  price: number
  discount: number
  categories: Categories
  createdAt: string
  updatedAt: string
}

interface Categories {
  title: string
  tags: string[]
}

export async function getAllAssets(): Promise<Asset[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'assets.json')
  return readFile(filePath, 'utf-8').then<Asset[]>(JSON.parse)
}
