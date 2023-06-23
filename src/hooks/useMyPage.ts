import { getMyPageOrderHistory, getOrderHistory } from '@/api/service/myPage'
import { useQuery } from '@tanstack/react-query'

//
export const useGetOrderHistories = (page: number) => {
  const { data: orderHistories } = useQuery({
    queryKey: ['orderHistories', page],
    queryFn: () => getOrderHistory(page),
  })

  return { orderHistories }
}
// export const useGetOrderHistories = (id: number, startDate: Date, endDate: Date) => {
//   const { data: orderHistories } = useQuery({
//     queryKey: ['orderHistories', { id, startDate, endDate }],
//     queryFn: () => getMyPageOrderHistory(id, startDate, endDate),
//   })

//   return { orderHistories }
// }
