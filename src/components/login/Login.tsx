'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import { useLogin } from '@/hooks/useLogin'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { LoginRequest } from '@/api/interface/auth'
import CustomCheckbox from '../common/CustomCheckbox'

type TermsProps = {
  checked: boolean
}

export default function Login() {
  const { mutate: loginUser } = useLogin()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<LoginRequest>()

  // 비밀번호 노출 토글
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVisibility) => !prevVisibility)
  }

  const onSubmit = (data: LoginRequest) => {
    const { email, password, loginChecked } = data
    loginUser({ email, password, loginChecked })
    router.push('/')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2  text-neutral-navy-100 md:space-y-4"
    >
      {/* 이메일(계정) Input*/}
      <div>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="E-mail"
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
            className="w-full rounded-lg border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </label>
      </div>
      {/* 비밀번호 Input */}
      <div>
        <label htmlFor="password" className="relative mb-2 block text-sm font-medium">
          <input
            type={passwordVisibility ? 'text' : 'password'}
            placeholder="Password"
            aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
            {...register('password', {
              required: '비밀번호는 필수입력입니다.',
              minLength: {
                value: 8,
                message: '8자 이상 비밀번호를 입력하세요.',
              },
            })}
            className="w-full rounded-lg border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <Image
            onClick={togglePasswordVisibility}
            src={passwordVisibility ? '/icons/eye.svg' : '/icons/eyeOff.svg'}
            alt="password"
            className="absolute bottom-3 right-5 hover:cursor-pointer"
            width={20}
            height={20}
          />
        </label>
      </div>
      {/* 로그인유지 Checkbox */}
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center">
            <CustomCheckbox id="remember" />
            {/* <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="rounded mt-2 h-5 w-5 border border-neutral-navy-300 accent-neutral-navy-850 dark:accent-neutral-navy-850 dark:ring-offset-gray-800"
            /> */}
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="remember"
              className="text-xs text-neutral-navy-100 dark:text-neutral-navy-100 "
            >
              로그인 상태 유지
            </label>
          </div>
        </div>
      </div>
      {/* 로그인 버튼 */}
      <button
        type="submit"
        disabled={!isValid}
        className={`dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-[3.1rem] w-full rounded-full px-5 py-2.5 text-center text-sm text-neutral-white-50  ${
          isValid ? 'bg-primary-darkblue-hover' : 'bg-neutral-navy-950'
        } 
        ${isValid ? 'border-none' : 'border border-neutral-navy-300'}
        text-neutral-white-100 px-5 py-3 text-center text-sm`}
      >
        Log in
      </button>
    </form>
  )
}
