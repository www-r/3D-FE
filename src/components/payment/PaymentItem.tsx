import React from 'react'
import Image from 'next/image'
import { formatPrice } from '@/utils/formatPrice'

export default function PaymentItem() {
  return (
    <li className="flex items-center px-[0.4rem] py-[0.65rem]">
      <div>
        <Image
          src="/image.svg"
          alt="asset"
          width={68}
          height={85}
          className="mr-[1.6rem] min-w-[6.8rem]"
        />
      </div>
      <div>
        <h4 className="mb-[0.8rem] leading-[2.2rem]">Fast running</h4>
        <div className="flex items-center text-base leading-[2rem]">
          <p className="mr-[0.4rem] text-primary-main">{formatPrice(18500)}</p>
          <span className="text-ms text-neutral-navy-800 line-through">{formatPrice(22000)}</span>
        </div>
      </div>
    </li>
  )
}
