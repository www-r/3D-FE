import React from 'react'
import Image from 'next/image'
import { relative } from 'path'

interface Props {
  star: number
}

function Star({ star }: Props) {
  const starWidth = 2.4
  const starsWidth = Math.round(starWidth * star * 100) / 100

  return (
    <>
      <div className={`flex z-10 absolute`}>
        <Image
          src="/icons/emptyStar.svg"
          alt="star"
          width={24}
          height={24}
          className=""
        />
        <Image
          src="/icons/emptyStar.svg"
          alt="star"
          width={24}
          height={24}
          className=""
        />
        <Image
          src="/icons/emptyStar.svg"
          alt="star"
          width={24}
          height={24}
          className=""
        />
        <Image
          src="/icons/emptyStar.svg"
          alt="star"
          width={24}
          height={24}
          className=""
        />
        <Image
          src="/icons/emptyStar.svg"
          alt="star"
          width={24}
          height={24}
          className=""
        />
      </div>
      <div style={{ width: `${starsWidth}rem` }} className={`flex z-10  absolute overflow-hidden`}>
        <Image
          src="/icons/filledStar.svg"
          alt="star"
          width={24}
          height={24}
          className=" shrink-0"
        />
        <Image
          src="/icons/filledStar.svg"
          alt="star"
          width={24}
          height={24}
          className=" shrink-0"
        />
        <Image
          src="/icons/filledStar.svg"
          alt="star"
          width={24}
          height={24}
          className=" shrink-0"
        />
        <Image
          src="/icons/filledStar.svg"
          alt="star"
          width={24}
          height={24}
          className=" shrink-0"
        />
        <Image
          src="/icons/filledStar.svg"
          alt="star"
          width={24}
          height={24}
          className=" shrink-0"
        />
      </div>
    </>
  )
}

export default Star
