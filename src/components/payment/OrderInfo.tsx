import React from 'react'

export default function OrderInfo() {
  return (
    <div className="w-[47.04%] py-[0.4rem]">
      <h3 className="border-b border-transparent-navy-30 text-sl leading-[5rem]">주문자 정보</h3>
      <ul className="flex flex-wrap justify-between text-neutral-navy-100">
        <li className="mt-[1.6rem] h-[6.8rem] w-[48.5%] rounded-sm border border-transparent-navy-30 bg-bg-1 px-[1.2rem] py-[0.8rem]">
          <p className="mb-[0.4rem] text-sm leading-[2.2rem]">성</p>
          <input
            type="text"
            placeholder="성"
            className="w-full bg-bg-transparent placeholder-neutral-navy-300"
          />
        </li>
        <li className="mt-[1.6rem] h-[6.8rem] w-[48.5%] rounded-sm border border-transparent-navy-30 bg-bg-1 px-[1.2rem] py-[0.8rem]">
          <p className="mb-[0.4rem] text-sm leading-[2.2rem]">이름</p>
          <input
            type="text"
            placeholder="이름"
            className="w-full bg-bg-transparent placeholder-neutral-navy-300"
          />
        </li>
        <li className="mt-[1.6rem] h-[5rem] w-full rounded-sm border border-transparent-navy-30 bg-bg-1 px-[1.6rem] py-[1.2rem]">
          <input
            type="text"
            placeholder="E-mail"
            className="w-full bg-bg-transparent placeholder-neutral-navy-300"
          />
        </li>
        <li className="mt-[1.6rem] h-[5rem] w-full rounded-sm border border-transparent-navy-30 bg-bg-1 px-[1.6rem] py-[1.2rem]">
          <input
            type="text"
            placeholder="휴대전화"
            className="w-full bg-bg-transparent placeholder-neutral-navy-300"
          />
        </li>
      </ul>
    </div>
  )
}
