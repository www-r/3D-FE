'use client'

import { RootState } from '@/store/store'
import { ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface Props {
  children: ReactNode
}

export default function Drawer({ children }: Props) {
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen)

  return isOpen ? (
    <div className="min-w-[71rem] h-full bg-bg-0 border-transparent-navy-30 border-l overflow-y-scroll no-scrollbar">
      <section>{children}</section>
    </div>
  ) : null
}
