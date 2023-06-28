import { getAssets, getSubCategories } from '@/api/service/asset'
import { useQuery } from '@tanstack/react-query'

export const useGetAssets = (page: number, category: string, subCategory: string) => {
  const { data: assets } = useQuery({
    queryKey: ['assets', page],
    queryFn: () => getAssets(page),
    keepPreviousData: true,
  })

  const { data: subCategoryAssets } = useQuery({
    queryKey: ['assets', category, subCategory, page],
    queryFn: () => getSubCategories(page, category, subCategory),
    keepPreviousData: true,
  })

  return { assets, subCategoryAssets }
}
