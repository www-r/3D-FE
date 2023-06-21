import React from 'react'
import Image from 'next/image'
import { formatPrice } from '@/utils/formatPrice'

export default function CompleteItem() {
  return (
    <tr className="border-b border-transparent-navy-15">
      <td className="py-[0.8rem]">
        <Image src="/image.svg" alt="asset" width={80} height={100} className="min-w-[8rem]" />
      </td>
      <td>
        <div className="px-[1.2rem]">
          <h4 className="text-[2rem] font-bold">Run</h4>
          <ul className="flex flex-wrap items-center text-sm">
            <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem] after:w-[0.1rem] after:bg-transparent-navy-30">
              확장자 : FBX
            </li>
            <li className="flex items-center">데이터 용량 : 1.2GB</li>
          </ul>
        </div>
      </td>
      <td>
        <div className="px-[2.4rem] text-right text-sl">
          <p>{formatPrice(18500)}</p>
          <p className="text-mm font-normal text-neutral-navy-800 line-through">
            {formatPrice(22000)}
          </p>
        </div>
      </td>
    </tr>
  )
}
