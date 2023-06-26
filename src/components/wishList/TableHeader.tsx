import React from 'react'
import CustomCheckbox from '../common/CustomCheckbox'

interface TableHeaderProps {
  text: string,
}

export default function TableHeader({text}:TableHeaderProps) {
  return (
  
    <thead className=''>
      <tr className="border-neutral-navy-300 border-b w-[100%] text-neutral-navy-200 text-sm">
        <td className="w-[7.5%] text-center text-sm h-[4rem]  py-[1rem]">
          <CustomCheckbox id="all" />
        </td>
        <td className="w-[6.6%] text-sm text-center h-[4rem] py-[1rem] ">
          <p>대표이미지</p>
        </td>
        <td className="w-[48.6%] text-sm h-[4rem] py-[1rem] ">
          <p>이름 및 상세설명</p>
        </td>
        <td className="w-[20.7%] pr-[2.4rem] text-right text-sm h-[4rem] py-[1rem] ">
          <p>가격</p>
        </td>
        <td className="w-[8.3%] text-sm text-center h-[4rem] py-[1rem] ">
          <p>{text}</p>
        </td>
        <td className="w-[8.3%] text-sm text-center h-[4rem] py-[1rem] ">
          <p>삭제</p>
        </td>
      </tr>
    </thead>

  )
}
