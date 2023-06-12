'use client'

import { Asset } from '@/api/assets'
import { formatPrice } from '@/utils/formatPrice'
import Link from 'next/link'

interface Props {
  asset: Asset
}

// export default function MyOrderHistoryItem({ asset }: Props) {
export default function MyOrderHistoryItem() {
  const handleOrderNumberClick = () => {
    console.log('주문번호 클릭!')
  }

  return (
    <li className="flex w-full justify-between border-b pb-5 text-[14px] text-neutral-navy-100 hover:cursor-pointer hover:border-b hover:border-sky-500 dark:text-neutral-navy-100">
      <span className="w-full ">2023-06-02</span>
      <Link
        href=""
        onClick={handleOrderNumberClick}
        className="w-full  text-[18px] underline underline-offset-4"
      >
        20230602-0000001
      </Link>
      <span className="w-full ">3개</span>
      <span className="flex-end w-full text-[18px]">￦ 183,500</span>
    </li>
  )
}
