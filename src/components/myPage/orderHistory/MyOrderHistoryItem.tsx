'use client'

import { Asset } from '@/api/service/assets'
import { formatPrice } from '@/utils/formatPrice'
import Link from 'next/link'
import DetailList from './orderHistoryDetail/DetailList'

interface Props {
  asset: Asset
}

// export default function MyOrderHistoryItem({ asset }: Props) {
export default function MyOrderHistoryItem() {
  const handleOrderNumberClick = () => {
    console.log('주문번호 클릭!')
  }

  return (
    <>
      <li
        onClick={handleOrderNumberClick}
        className="my-4 flex h-[3.75rem] w-full justify-between border-b border-neutral-navy-300 pb-3 text-[14px] hover:cursor-pointer hover:border-b hover:border-sky-500"
      >
        <span className="ml-[0.5rem] mr-[9.8rem] pt-3">2023-06-02</span>
        <Link
          href=""
          onClick={handleOrderNumberClick}
          className="mr-[18rem] text-[18px] underline underline-offset-4"
        >
          20230602-0000001
        </Link>
        <span className="mr-[0.5rem] pt-3">3개</span>
        <span className="mr-[0.5rem] text-[18px]">{formatPrice(183500)}</span>
        {/* <span className="mr-[0.5rem] text-[18px]">￦ {formatPrice(asset.price)}</span> */}
      </li>
      <DetailList />
    </>
  )
}
