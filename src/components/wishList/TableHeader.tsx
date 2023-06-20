import React from 'react'
import CustomInput from '@/components/common/CustomInput'

export default function TableHeader({text}) {
  return (
  
    <thead className='border-neutral-navy-300 border-b'>
      <tr className="w-[100%] text-neutral-navy-200 py-[0.8rem] text-sm">
        <td className="w-[7.5%] text-center text-sm h-[4rem]">
          <CustomInput id="all" />
        </td>
        <td className="w-[6.6%] text-sm text-center h-[4rem]">
          <p>대표이미지</p>
        </td>
        <td className="w-[48.6%] text-sm h-[4rem]">
          <p>이름 및 상세설명</p>
        </td>
        <td className="w-[20.7%] pr-[2.4rem] text-right text-sm h-[4rem]">
          <p>가격</p>
        </td>
        <td className="w-[8.3%] text-sm text-center h-[4rem]">
          <p>{text}</p>
        </td>
        <td className="w-[8.3%] text-sm text-center h-[4rem]">
          <p>삭제</p>
        </td>
      </tr>
    </thead>

  )
}
