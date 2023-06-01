import { Category } from '@/interface/category'

export async function getAllCategories(): Promise<Category[]> {
  try {
    const response = await import('@/data/category.json')
    const data = response.default as Category[]
    return data
  } catch (error) {
    console.error('카테고리 가져오기 오류:', error)
    return []
  }
}
