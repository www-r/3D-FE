/**
 * 마이페이지-주문내역
 */
'use client'
import { useState } from 'react'
import MyOrderCalendar from './calendar/MyOrderCalendar'
import MyOrderHistoryList from './MyOrderHistoryList'
import PaginationButton from '@/components/common/PaginationButton'
import { useGetOrderHistories } from '@/hooks/useMyPage'

export default function MyOrderHistory() {
  const [activePage, setActivePage] = useState(0)
  const [showOrderHistory, setShowOrderHistory] = useState(false)
  const { orderHistories } = useGetOrderHistories(activePage)

  return (
    <section className="flex w-[97%] flex-col">
      {/* 주문내역 타이틀, 내역 갯수 */}
      <div className="h-full w-full">
        <h1 className="mt-10 w-full text-[2.4rem] font-semibold dark:text-neutral-navy-100">
          주문내역
          <span className="text-[1.8rem] font-normal">({orderHistories?.data?.totalElement})</span>
        </h1>
      </div>
      <div className="mb-8 mt-6 w-full">
        <MyOrderCalendar />
      </div>
      <div className="h-[70%] w-full justify-center">
        <div className="mx-1 my-3 flex h-[2.5rem] w-full justify-between text-[1.2rem] dark:text-neutral-navy-100">
          <span className="mr-[20rem]">주문일자</span>
          <span className="mr-[36.2rem]">주문번호</span>
          <span className="mr-[3.4rem]">구매한 에셋 수</span>
          <span className="mr-[2.2rem]">결제금액</span>
        </div>
        {showOrderHistory ? (
          <>
            <MyOrderHistoryList
              orderHistories={orderHistories?.data?.orderHistoryList}
            />
            {/* <MyOrderHistoryList orderHistories={orderHistories?.data?.orderHistoryList} /> */}
            <PaginationButton
              activePage={activePage}
              setActivePage={setActivePage}
              pages={orderHistories?.data.totalPage}
            />
          </>
        ) : (
          <>
            <div className="text-[2.2rem]">주문 내역이 없습니다.</div>
          </>
        )}
      </div>
      {/* <MyOrderDetail /> */}
    </section>
  )
}
