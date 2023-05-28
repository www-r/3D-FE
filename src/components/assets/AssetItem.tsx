'use client'

import { Asset } from '@/api/assets'
import { formatPrice } from '@/utils/formatPrice'

import Link from 'next/link'

interface Props {
  asset: Asset
}

export default function AssetItem({ asset }: Props) {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <li
      onClick={handleClick}
      className="w-[226px] h-[358px] hover:cursor-pointer focus:bg-#fff  focus:outline-none"
    >
      <div className="rounded bg-gray-100 h-[268px]"></div>
      <div>
        <div className="text-neutral-navy-200">
          <span>4.9(38k)</span>
          <span className="text-transparents-navy"> | </span>
          <span>612k</span>
        </div>
        <h3 className="text-neutral-navy-100">{asset.title}</h3>
        <div className="flex justify-between">
          <p className="text-neutral-white-0">{formatPrice(asset.price)}</p>
          <p className="text-primary-newlloyd-button">70%</p>
        </div>
      </div>
    </li>
  )
}
