/**
 * 마이페이지-주문내역
 */

import MyOrderCalendar from './calendar/MyOrderCalendar'
import MyOrderHistoryList from './MyOrderHistoryList'

export default function MyOrderHistory() {
  return (
    <>
      <section className="flex w-[97%] flex-col">
        {/* 주문내역 타이틀, 내역 갯수 */}
        <div className=" mt-[9rem] h-full w-full">
          <h1 className="mt-10 w-full text-[23px] font-semibold dark:text-neutral-navy-100">
            주문내역 <span className="text-[18px] font-normal"> (100) </span>
          </h1>
        </div>
        <div className="mb-8 mt-6 w-full">
          <MyOrderCalendar />
        </div>

        <div className="h-[70%] w-full justify-center">
          <div className="mx-1 my-3 flex h-[2.5rem] w-full justify-between text-[14px] dark:text-neutral-navy-100">
            <h1 className="mr-[20rem]">주문일자</h1>
            <h1 className="mr-[36.2rem]">주문번호</h1>
            <h1 className="mr-[3.4rem]">구매한 에셋 수</h1>
            <h1 className="mr-[2.2rem]">결제금액</h1>
          </div>
          <MyOrderHistoryList />
          {/* <MyOrderHistoryList assets={[]} /> */}
        </div>
      </section>
    </>
  )
}
