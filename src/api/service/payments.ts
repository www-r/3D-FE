/**
 * 결제관련(결제하기, 결제내역, 주문내역 등) API
 */
import { readFile } from 'fs/promises'
import path from 'path'
import { OrderHistory } from '../interface/payment'

export async function getAllOrderHistory(): Promise<OrderHistory[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'assets.json')
  return readFile(filePath, 'utf-8').then<OrderHistory[]>(JSON.parse)
}
