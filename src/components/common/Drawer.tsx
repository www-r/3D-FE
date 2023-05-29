'use client'

import { closeDrawer } from '@/store/drawerSlice'
import { RootState } from '@/store/store'
import { ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface Props {
  children: ReactNode
}

export default function Drawer({ children }: Props) {
  const dispatch = useDispatch()
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen)
  console.log(isOpen)

  const handleCloseDrawer = () => {
    dispatch(closeDrawer())
  }

  return isOpen ? (
    <div className="min-w-[711px] h-full bg-blue-300">
      <div onClick={handleCloseDrawer}>닫기</div>
      <section>{children}</section>
    </div>
  ) : null
}
