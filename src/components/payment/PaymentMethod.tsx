import React from 'react'
import Image from 'next/image'

export default function PaymentMethod() {
  return (
    <div className="w-[47.04%] py-[0.4rem]">
      <h3 className="border-b border-transparent-navy-30 text-sl leading-[5rem]">결제 수단</h3>
      <ul>
        <li className="mt-[2.4rem] h-[7.2rem] rounded-sm border border-transparent-navy-30 bg-bg-1">
          <input type="radio" id="i1" className="hidden" />
          <label
            htmlFor="i1"
            className="flex items-center justify-between py-[1.6rem] pl-[2.4rem] pr-[1.6rem]"
          >
            <div className="flex items-center">
              <div className="mx-auto mr-[0.8rem] h-[3.2rem] w-[3.2rem] bg-radio-off bg-cover"></div>
              <p>간편결제 : Kakao pay</p>
            </div>
            <Image src="/icons/payment-kakaoPay.svg" alt="kg" width={40} height={40} />
          </label>
        </li>
      </ul>
    </div>
  )
}
