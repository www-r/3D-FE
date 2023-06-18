import { axiosInstance } from '../axios'
import { LoginRequest } from '../interface/auth'

export const login = async (account: LoginRequest) => {
  const res = await axiosInstance.post(`/login`, account)
  return res
}

export const getUser = async (user: number) => {
  if (!user) return null
  const res = await axiosInstance.get(`/s/user/${user}`)
  return res
}
