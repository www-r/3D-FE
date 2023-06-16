/**
 * 마이페이지-주문내역
 */

import MyOrderCalendar from './calendar/MyOrderCalendar'
import MyOrderHistoryList from './MyOrderHistoryList'
import MyOrderDetail from './orderHistoryDetail/MyOrderDetail'

export default function MyOrderHistory() {
  return (
    <>
      {/* <MyOrderHistoryList /> */}
      <MyOrderDetail />
    </>
  )
}
