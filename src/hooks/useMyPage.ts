import { getMyPageOrderHistory, getOrderHistory, getUserInfo } from '@/api/service/myPage'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export const useGetUserInfo = () => {
  const userId = useSelector((state: RootState) => state.user.userId)
  const { data: myUser, refetch } = useQuery({
    queryKey: ['myUser', userId],
    queryFn: () => getUserInfo(userId),
    select: (data) => {
      return data.data
    },
  })

  return { refetch, myUser }
}

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
