import React from 'react'
import CompleteItem from './CompleteItem'

export default function CompleteTable() {
  return (
    <table className="mx-auto mb-[11.1rem] w-[72.077%]">
      <thead>
        <tr className="h-[5rem] w-[100%] border-b-2 border-transparent-navy-15 text-neutral-200">
          <th className="w-[6.6%] text-sm">
            <p>대표이미지</p>
          </th>
          <th className="w-[70.7%] text-sm">
            <p>이름 및 상세설명</p>
          </th>
          <th className="w-[20.7%] pr-[2.4rem] text-right text-sm">
            <p>가격</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <CompleteItem />
      </tbody>
    </table>
  )
}
