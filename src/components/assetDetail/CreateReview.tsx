'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function CreateReview() {
  const [editedReview, setEditedReview] = useState(null)

  const handleClick = () => {}

  return (
    <div className="bg-neutral-navy-900 px-[2.4rem] py-[1.2rem] mb-[2rem] h-[13.3rem] rounded flex flex-col justify-between">
      <p>해당 제품에 대한 리뷰를 작성해주세요</p>
      <div className="flex justify-center items-center bg-bg-0 py-[0.8rem] px-[2.4rem] rounded">
        <button onClick={handleClick} className="flex text-primary-main">
          <Image src="/icons/edit.svg" alt="edit" width={24} height={24} />
          <span className="ml-1">작성하기</span>
        </button>
      </div>
    </div>
  )
}
