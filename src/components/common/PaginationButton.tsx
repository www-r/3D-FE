'use client'

import React from 'react'
import Image from 'next/image'

interface Props {
  activePage: number
  pages: number | undefined
  setActivePage: (page: number) => void
}

export default function PaginationButton({ activePage, pages, setActivePage }: Props) {

  const getPages = () => {
    const elements = []
    // const startPage = activePage * 10 + 1
    // const endPage = startPage + 10
    if (typeof pages === 'number') {
      for (let i = 0; i < pages; i++) {
        elements.push(
          <button
            className={`${
              activePage === i
                ? 'bg-neutral-navy-100 text-neutral-navy-950'
                : 'text-neutral-navy-200'
            } w-[2.4rem] rounded-[0.4rem]`}
            onClick={() => setActivePage(i)}
            key={i}
          >
            {i < 10 ? `${i + 1}` : i + 1}
          </button>,
        )
      }
      return elements
    }
  }

  const handleNavigate = (action: 'prev' | 'next') => {
    if (action === 'prev') {
      if (typeof pages === 'number' && activePage !== 0) {
        setActivePage(activePage - 1)
      }
    }
    if (action === 'next') {
      if (typeof pages === 'number' && activePage !== pages - 1) {
        setActivePage(activePage + 1)
      }
    }
  }

  return (
    <nav className="mb-[6.4rem] flex justify-center">
      <ul className="inline-flex items-center gap-3 -space-x-px">
        <li>
          <button
            onClick={() => handleNavigate('prev')}
            className="rounded ml-0 rounded-[0.4rem] px-3 py-2 leading-tight
             text-gray-500"
          >
            <Image src="/icons/chevronLeft.svg" alt="left" width={24} height={24} />
          </button>
        </li>
        {getPages()}
        <li>
          <button
            onClick={() => handleNavigate('next')}
            className="rounded ml-0 rounded-[0.4rem] px-3 py-2 leading-tight
             text-gray-500 "
          >
            <Image src="/icons/chevronRight.svg" alt="right" width={24} height={24} />
          </button>
        </li>
      </ul>
    </nav>
  )
}
