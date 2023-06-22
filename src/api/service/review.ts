import { axiosInstance } from '../axios'
import { ReviewReponse } from '../interface/review'

export const getAllReviews = async <T = ReviewReponse>(id: number): Promise<T> => {
  const res = await axiosInstance.get<T>(`/assets/${id}/reviews`)
  return res.data
}
