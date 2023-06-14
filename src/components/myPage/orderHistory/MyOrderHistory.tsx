/**
 * 마이페이지-주문내역
 */

import MyOrderCalendar from './calendar/MyOrderCalendar'
import MyOrderHistoryList from './MyOrderHistoryList'

export default function MyOrderHistory() {
  return (
    <section>
      <div className="flex flex-col">
        {/* 주문내역 타이틀, 내역 갯수 */}
        <h2 className="mt-10 w-full text-[2.4rem] font-semibold ">
          주문내역 <span className="text-[1.8rem] font-normal"> (100) </span>
        </h2>

        <MyOrderCalendar />

        <div className="h-[70%] w-full justify-center">
          <div className="mx-1 mb-3 mt-6 flex h-[2.5rem] w-full justify-between text-[1.4rem]">
            <p className="mr-[16rem]">주문일자</p>
            <p className="mr-[30rem]">주문번호</p>
            <p className="mr-[2rem]">구매한 에셋 수</p>
            <p className="mr-[2.6rem]">결제금액</p>
          </div>
          <MyOrderHistoryList />
          {/* <MyOrderHistoryList assets={[]} /> */}
        </div>
      </div>
      {/* pagenation */}
    </section>
  )
}
