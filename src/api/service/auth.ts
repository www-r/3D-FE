/**
 * 로그인, 회원가입 등 인증관련 API
 */

import { setToken } from '@/utils/token'
import { axiosInstance } from '../axios'
import {
  EmailCheckResponseData,
  LoginRequest,
  LoginResponse,
  PasswordChangeRequest,
  RegisterEnroll,
  WithdrawalRequest,
} from '../interface/auth'

export const login = async <T = LoginResponse>(account: LoginRequest): Promise<T> => {
  const res = await axiosInstance.post<T>(`/login`, account)
  if ((res.status = 200)) {
    setToken(res.headers.authorization)
  }
  return res.data
}

export const getUser = async (user: number) => {
  if (!user) return null
  const res = await axiosInstance.get(`/s/user/${user}`)
  return res
}

export const logout = async () => {
  const { data } = await axiosInstance.post('/logout')
  return data
}

export const passwordChange = async (user: PasswordChangeRequest) => {
  try {
    const { data } = await axiosInstance.post('/login/change', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const join = async (user: RegisterEnroll) => {
  try {
    const { data } = await axiosInstance.post('/signup', user)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const emailDuplicateCheck = async (email: string) => {
  try {
    const data = await axiosInstance.post<EmailCheckResponseData>('/signup/duplicate', {
      email,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const emailCheck = async (email: string) => {
  try {
    const data = await axiosInstance.post<EmailCheckResponseData>('/signup/check', {
      email,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const withdrawal = async ({ userId, userData }: WithdrawalRequest) => {
  const { email, password } = userData
  const { data } = await axiosInstance.post(`/s/user/${userId}/withdraw`, {
    email,
    password,
  })
  return data
}
