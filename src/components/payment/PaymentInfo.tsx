import React from 'react'
import { formatPrice } from '@/utils/formatPrice'
import PaymentItem from './PaymentItem'

export default function PaymentInfo() {
  return (
    <div className="sticky flex w-[23.9%] min-w-[26rem] flex-col justify-between border-l border-transparent-navy-30 px-[1.432%] pb-[3.222%] pt-[2.864%]">
      <div>
        <h2 className="mb-[3.2rem] text-lg font-bold leading-[3rem]">상세정보</h2>
        <ul className="max-h-[59vh] overflow-y-auto">
          <PaymentItem />
        </ul>
      </div>
      <div>
        <ul className="border-b border-neutral-navy-800 px-[0.4rem] text-ms">
          <li className="flex justify-between leading-[4.8rem] text-neutral-navy-300">
            <p>구매할 에셋 : 3개</p>
            <p>{formatPrice(-25000)}</p>
          </li>
          <li className="flex justify-between leading-[5.6rem]">
            <p>총 추가 혜택</p>
            <p>{formatPrice(-25000)}</p>
          </li>
        </ul>
        <div className="flex w-full justify-between leading-[5.4rem]">
          <p>결제 예정 금액</p>
          <p>{formatPrice(154000)}</p>
        </div>
        <button className="h-[4.4rem] w-full rounded-sm bg-primary-main font-semibold text-neutral-white-50">
          결제하기
        </button>
      </div>
    </div>
  )
}
