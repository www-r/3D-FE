'use client'

import React from 'react'

interface Props {
  activePage: number
  pages: number | undefined
  setActivePage: (page: number) => void
}

export default function PaginationButton({ activePage, pages, setActivePage }: Props) {
  const handlePageClick = (page: number) => {
    setActivePage(page)
  }

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
      activePage !== 1 && setActivePage(activePage - 1)
    }
    if (action === 'next') {
      activePage !== pages && setActivePage(activePage + 1)
    }
  }

  return (
    <nav className=" flex justify-center">
      <ul className="inline-flex items-center gap-3 -space-x-px">
        <li>
          <button
            onClick={() => handleNavigate('prev')}
            className="rounded ml-0 rounded-[0.4rem] px-3 py-2 leading-tight
             text-gray-500 hover:bg-neutral-navy-100 hover:text-neutral-navy-950"
          >
            prev
          </button>
        </li>
        {getPages()}
        <li>
          <button
            onClick={() => handleNavigate('next')}
            className="rounded ml-0 rounded-[0.4rem] px-3 py-2 leading-tight
             text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
          >
            next
          </button>
        </li>
      </ul>
    </nav>
  )
}
