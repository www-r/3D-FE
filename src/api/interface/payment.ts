import { FieldValues } from 'react-hook-form'
import { ApiResponse } from '.'

/**
 * 결제, 결제 내역 관련 Interface
 */
export interface OrderHistory {
  orderId: number
  orderNumber: string
  orderDate: string
  totalPrice: number
  assetCount: number
}

export interface OrderHistoryDetail {
  assetId: number
  assetName: string
  extension: string
  price: number
  discountPrice: number
  size: number
}

export interface OrderHistoryData {
  orderHistoryList: OrderHistory[]
  currentPage: number
  totalPage: number
  totalElement: number
}

//주문 내역
export interface OrderHistoryResponseData extends FieldValues {
  data: {
    orderList: [
      {
        orderId: number
        orderNumber: string
        // orderDate: Date
        orderDate: string
        // orderDate: Date | string
        totalPrice: number
        assetCount: number
      },
    ]
    size: number
    currentPage: number
    totalPage: number
    totalElement: number
  }
}

//주문내역 상세보기
export interface OrderHistoryDetailResponseData extends FieldValues {
  data: {
    //주문한 에셋들
    orderProductList: [
      {
        assetId: number
        assetName: string
        extension: string
        price: number
        discountPrice: number
        size: number
      },
    ]
    // 주문정보
    orderDetail: {
      orderId: number
      orderNumber: number
      orderDate: Date | string
      totalPrice: number
      assetCount: number
    }
  }
}

export type OrderHistoryResponse = ApiResponse<OrderHistoryResponseData>
export type OrderHistoryDetailResponse = ApiResponse<OrderHistoryDetailResponseData>

// 주문하기
export interface PaymentPayload {
  assetList: number[]
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  totalPrice: number
  paymentTool: string
}

export interface OrderResponseData {
  orderId: number
}

export type OrderResponse = ApiResponse<OrderResponseData>
