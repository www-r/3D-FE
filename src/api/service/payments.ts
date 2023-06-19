/**
 * 결제관련(결제하기, 결제내역, 주문내역 등) API
 */
import { readFile } from 'fs/promises'
import path from 'path'

export interface OrderHistory {
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

export async function getAllOrderHistory(): Promise<OrderHistory[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'assets.json')
  return readFile(filePath, 'utf-8').then<OrderHistory[]>(JSON.parse)
}
