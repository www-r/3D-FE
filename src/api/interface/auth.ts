/**
 * 로그인, 회원가입 등 인증관련 Interface
 */
import { FieldValues } from 'react-hook-form'
import { ApiResponse } from '.'

// export interface User {
//   id: string
//   password: string
// }

// export type UserRequest = User

export interface LoginRequest {
  email: string
  password: string
}

export interface UserId {
  userId: number
}

export type LoginResponse = ApiResponse<UserId>

export interface RegisterRequest extends LoginRequest {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm?: string
}

export interface UserPayload {
  id: number
  email: string
  firstName: string
  lastName: string
}

export interface User {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface EmailCheckRequest {
  email: string
}

export interface RegisterEnroll {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface JoinResponseData {
  status: number
  msg: string
  data: boolean
}
export interface EmailCheckResponseData {
  status: number
  msg: string
  data: boolean
}
export interface EmailCheckRequest {
  email: string
}

export interface WithdrawalRequest extends FieldValues {
  userId: number | undefined
  userData: {
    email: string | undefined
    password: string | undefined
  }
  email?: string
  password?: string
}

export interface EditProfileRequest {
  userId: number | undefined
  userData: {
    curPassword: string
    newPassword: string
  }
}

// 회원 탈퇴
export interface WithdrawalResponseData {
  status: number
  msg: string
}

export interface EditProfileHookFormProps extends EditProfileRequest {
  curPassword: string
  newPassword: string
  passwordConfirm: string
}
