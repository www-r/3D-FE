/**
 * 로그인, 회원가입 등 인증관련 Interface
*/
import { FieldValues } from 'react-hook-form'

export interface LoginResponseData {
  data?:
    | {
        id: number
        email: string
        loginChecked: boolean
      }
    | undefined
}

export interface LoginRequest {
  email: string
  password: string
  loginChecked: boolean
}

export interface RegisterRequest extends LoginRequest {
  firstName: string
  lastName: string
  email: string
  password: string
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

export interface WithdrawalResponseData {
  status: number
  msg: string
}

export interface EditProfileHookFormProps extends EditProfileRequest {
  curPassword: string
  newPassword: string
  passwordConfirm: string
}
