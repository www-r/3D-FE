'use client'

import { Asset } from '@/api/interface/asset'
import { formatPrice } from '@/utils/formatPrice'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import DetailList from './orderHistoryDetail/DetailList'
import { OrderHistory, OrderHistoryResponseData } from '@/api/interface/payment'
import { useDispatch } from 'react-redux'
import { setClickedOrderHistory } from '@/store/clickedOrderHistorySlice'
import { showOrderHistoryDetail } from '@/store/orderHistoryDetailSlice'

interface MyOrderHistoryItemProps {
  orderHistory: OrderHistory
}

export default function MyOrderHistoryItem({ orderHistory }: MyOrderHistoryItemProps) {
  const dispatch = useDispatch()

  const handleOrderNumberClick = () => {
    console.log('주문번호 클릭!')
    dispatch(setClickedOrderHistory(orderHistory.orderId))
    dispatch(showOrderHistoryDetail())
  }

  return (
    <>
      <li
        onClick={handleOrderNumberClick}
        className="my-4 flex h-[3.75rem] w-full justify-between border-b border-neutral-navy-300 pb-3 text-[0.8rem] hover:cursor-pointer hover:border-b hover:border-sky-500"
      >
        <span className="ml-[0.5rem] mr-[8.4rem] pt-3">{orderHistory.orderDate}</span>
        <span className="mr-[18rem] text-[1.2rem] underline underline-offset-4">
          {orderHistory.orderNumber}
        </span>
        <span className="mr-[0.5rem] pt-3">{orderHistory.assetCount}개</span>
        <span className="mr-[0.5rem] text-[1.2rem]">{formatPrice(orderHistory.totalPrice)}</span>
        {/* <span className="mr-[0.5rem] text-[18px]">￦ {formatPrice(asset.price)}</span> */}
      </li>
    </>
  )
}
