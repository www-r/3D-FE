'use client'

import { RootState } from '@/store/store'
import { ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface Props {
  children: ReactNode
}

export default function Drawer({ children }: Props) {
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen)
  console.log(isOpen)

  return isOpen ? (
    <div className="min-w-[711px] h-full bg-bg-0 border-transparent-navy-30 border-l">
      <section>{children}</section>
    </div>
  ) : null
}
