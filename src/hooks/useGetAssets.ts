import { getAssets } from '@/api/service/asset'
import { useQuery } from '@tanstack/react-query'

export const useGetAssets = (page: number) => {
  const { data: assets } = useQuery({
    queryKey: ['assets', page],
    queryFn: () => getAssets(page),
    keepPreviousData: true,
  })

  return { assets }
}
