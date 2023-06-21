import { getAssets } from '@/api/service/asset'
import { getAllReviews } from '@/api/service/review'
import { useQuery } from '@tanstack/react-query'

export const useReview = (id: number) => {
  const { data: reviews } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => getAllReviews(id),
    onSuccess: (data) => {
      console.log(data)
    },
  })

  return { reviews }
}
