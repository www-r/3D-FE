import React from 'react'
import Image from 'next/image'
import { formatPrice } from '@/utils/formatPrice'

export default function CartInfo() {
  return (
    <div className="sticky flex w-[24.21%] min-w-[26rem] flex-col justify-between border-l border-transparent-navy-30 px-[1.453%] py-[1.695%]">
      <div>
        <h2 className="mb-[2.4rem] text-lg font-bold">결제 정보</h2>
        <ul className="text-ms">
          <li className="flex w-full justify-between border-b border-dashed border-transparent-navy-30 px-[0.4rem] leading-[5.6rem]">
            <p>구매할 에셋 : 4개</p>
            <p>{formatPrice(-25000)}</p>
          </li>
          <li className="border-b border-dashed border-transparent-navy-30 text-neutral-navy-300">
            <div className="flex w-full justify-between px-[0.4rem] leading-[4.4rem]">
              <p>쿠폰 할인 금액</p>
              <p>-</p>
            </div>
            <div className="mb-[1.6rem] flex h-[4.8rem] w-full items-center justify-between rounded-sm border border-transparent-navy-30 px-[1.2rem]">
              <div className="flex items-center text-sm">
                <Image
                  src="/icons/coupon-dis.svg"
                  alt="쿠폰"
                  width={24}
                  height={24}
                  className="invert-48 sepia-19 saturate-210 hue-rotate-169 brightness-96 contrast-90 filter"
                />
                <p className="ml-[0.8rem]">할인쿠폰 찾아보기</p>
              </div>
              <Image
                src="/icons/chevronRight-dis.svg"
                alt="화살표"
                width={20}
                height={20}
                className="invert-48 sepia-19 saturate-210 hue-rotate-169 brightness-96 contrast-90 filter"
              />
            </div>
          </li>
          <li className="flex w-full justify-between border-b border-transparent-navy-30 px-[0.4rem] leading-[5.6rem]">
            <p>자체 할인 금액</p>
            <p>{formatPrice(-25000)}</p>
          </li>
          <li className="flex w-full justify-between border-b border-transparent-navy-30 px-[0.4rem] leading-[5.6rem]">
            <p>총 추가 혜택</p>
            <p>{formatPrice(-25000)}</p>
          </li>
        </ul>
      </div>
      <div>
        <div className="mb-[1.2rem] flex w-full justify-between text-sl leading-[5.4rem]">
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
