import { getAllAssets } from '@/api/service/assets'
import { useQuery } from '@tanstack/react-query'

export const useGetAssets = () => {
  const { data: assets } = useQuery({ queryKey: ['assets'], queryFn: getAllAssets })
  return { assets }
}
