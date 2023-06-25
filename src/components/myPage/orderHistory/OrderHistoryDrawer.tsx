'use client'

import { OrderHistoryState } from '@/store/orderHistoryStore'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

interface OrderHistoryDrawerProps {
  children: ReactNode
}

export default function OrderHistoryDrawer({ children }: OrderHistoryDrawerProps) {
  const isOpen = useSelector((state: OrderHistoryState) => state.drawer.isOpen)

  return isOpen ? (
    <div className="no-scrollbar min-h-[52rem] w-full overflow-y-scroll border-l border-transparent-navy-30 bg-bg-0">
      <section>{children}</section>
    </div>
  ) : null
}
