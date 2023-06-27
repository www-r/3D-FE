/**
 * 결제관련(결제하기, 결제내역, 주문내역 등) API
 */
import { readFile } from 'fs/promises'
import path from 'path'
import { OrderHistory, OrderResponse, PaymentPayload } from '../interface/payment'
import { axiosInstance } from '../axios'

export async function getAllOrderHistory(): Promise<OrderHistory[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'assets.json')
  return readFile(filePath, 'utf-8').then<OrderHistory[]>(JSON.parse)
}

// 주문하기
export const order = async (T: PaymentPayload): Promise<OrderResponse> => {
  const res = await axiosInstance.post<OrderResponse>('/s/order', T)
  return res.data
}
