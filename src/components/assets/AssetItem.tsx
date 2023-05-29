'use client'

import { Asset } from '@/api/assets'
import { openDrawer } from '@/store/drawerSlice'
import { formatPrice } from '@/utils/formatPrice'
import { useDispatch } from 'react-redux'

interface Props {
  asset: Asset
}

export default function AssetItem({ asset }: Props) {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(openDrawer())
  }
  return (
    <li
      onClick={handleClick}
      className="min-w-[226px] h-[358px] hover:cursor-pointer  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
    >
      <div className="w-[218px] h-[350px] m-auto">
        <div className="rounded bg-gray-100 h-[268px]"></div>
        <div>
          <div className="text-neutral-navy-200 text-sm h-[1.875rem]">
            <span>4.9(38k)</span>
            <span className="text-transparents-navy-15"> | </span>
            <span>612k</span>
          </div>
          <h3 className="text-neutral-navy-100 text-base leading-[21.78px] h-[1.75rem]">
            {asset.title}
          </h3>
          <div className="flex justify-between h-[1.5rem]">
            <p className="text-neutral-white-0 text-[1.125rem] leading-[1.5rem]">
              {formatPrice(asset.price)}
            </p>
            <p className="text-primary-newlloyd-button">70%</p>
          </div>
        </div>
      </div>
    </li>
  )
}
