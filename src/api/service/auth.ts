/**
 * 로그인, 회원가입 등 인증관련 API
 */

import { axiosInstance } from '../axios'
import { LoginRequest, LoginResponse } from '../interface/auth'

export const login = async <T = LoginResponse>(account: LoginRequest): Promise<T> => {
  const res = await axiosInstance.post<T>(`/login`, account)
  return res.data
}

export const getUser = async (user: number) => {
  if (!user) return null
  const res = await axiosInstance.get(`/s/user/${user}`)
  return res
}
