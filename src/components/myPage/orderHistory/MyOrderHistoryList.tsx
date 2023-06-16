/**
 * 마이페이지-주문내역
 */

import { Asset } from '@/api/service/assets'
import MyOrderHistoryItem from './MyOrderHistoryItem'
import MyOrderCalendar from './calendar/MyOrderCalendar'

interface Props {
  assets: Asset[]
}

// export default function MyOrderHistoryList({ assets }: Props) {
export default function MyOrderHistoryList() {
  return (
    <>
      <section className="flex w-[97%] flex-col">
        {/* 주문내역 타이틀, 내역 갯수 */}
        <div className=" mt-[9rem] h-full w-full">
          <h1 className="mt-10 w-full text-[1.5rem] font-semibold dark:text-neutral-navy-100">
            주문내역 <span className="text-[1.1rem] font-normal"> (100) </span>
          </h1>
        </div>
        <div className="mb-8 mt-6 w-full">
          <MyOrderCalendar />
        </div>
        <div className="h-[70%] w-full justify-center">
          <div className="mx-1 my-3 flex h-[2.5rem] w-full justify-between text-[0.8rem] dark:text-neutral-navy-100">
            <h1 className="mr-[20rem]">주문일자</h1>
            <h1 className="mr-[36.2rem]">주문번호</h1>
            <h1 className="mr-[3.4rem]">구매한 에셋 수</h1>
            <h1 className="mr-[2.2rem]">결제금액</h1>
          </div>
          <ul className="flex flex-col">
            <MyOrderHistoryItem />
            {/* {assets.map((asset) => (
        <MyOrderHistoryItem key={asset.id} asset={asset} />
      ))} */}
          </ul>
          {/* <MyOrderHistoryList /> */}
          {/* <MyOrderHistoryList assets={[]} /> */}
        </div>
      </section>
    </>
  )
}
