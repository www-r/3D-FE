/**
 * 마이페이지-주문내역
 */

import { Asset } from '@/api/assets'
import { useState } from 'react'
import MyOrderHistoryItem from './MyOrderHistoryItem'

interface Props {
  assets: Asset[]
}

// export default function MyOrderHistoryList({ assets }: Props) {
export default function MyOrderHistoryList() {
  return (
    <>
      <ul className="flex">
        <MyOrderHistoryItem />
        {/* {assets.map((asset) => (
        <MyOrderHistoryItem key={asset.id} asset={asset} />
      ))} */}
      </ul>
    </>
  )
}
