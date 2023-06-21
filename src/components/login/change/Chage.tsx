'use client'

import { LoginRequest, PasswordChangeRequest } from '@/api/interface/auth'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Change() {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<PasswordChangeRequest>()

  // 비밀번호, 비밀번호확인 노출 토글
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVisibility) => !prevVisibility)
  }
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility((prevVisibility) => !prevVisibility)
  }

  const onSubmit = (data: PasswordChangeRequest) => {
    const { email, verifiedCode, password } = data
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="  text-neutral-navy-100">
      <div className="mb-4 space-y-2 md:space-y-4">
        {/* 이메일 인증코드 보내기 및 확인*/}
        <div className="flex justify-between ">
          <input
            type="email"
            placeholder="E-mail"
            aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
            className="block w-[68%] rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <button className="mx-1 flex w-[30%] items-center justify-center rounded-sm border border-primary-darkblue-hover bg-primary-darkblue-hover px-4 py-2">
            <span className="text-xs">인증코드 보내기</span>
          </button>
        </div>

        {/* 인증코드 확인*/}
        <div className="flex justify-between ">
          <input
            type="text"
            placeholder="인증코드 입력"
            aria-invalid={!isDirty ? undefined : errors.verifiedCode ? 'true' : 'false'}
            {...register('email', {
              required: '이메일은 필수 입력입니다.',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
            className="block w-[68%] rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <button className="mx-1 flex w-[30%] items-center justify-center rounded-sm border border-primary-darkblue-hover bg-primary-darkblue-hover px-4 py-2">
            <span className="text-xs">인증코드 확인</span>
          </button>
        </div>
      </div>

      {/* 비밀번호 Input */}
      <div className="flex flex-col justify-between space-y-2 md:space-y-4">
        <label htmlFor="password" className="relative block text-sm font-medium">
          <input
            type={passwordVisibility ? 'text' : 'password'}
            placeholder="비밀번호 입력"
            aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
            {...register('password', {
              required: true,
              pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20}).*$/,
              minLength: {
                value: 8,
                message: '최소 8자 입니다.',
              },
            })}
            className="w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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

        <label htmlFor="passwordConfirm" className="relative block text-sm font-medium">
          <input
            type={confirmPasswordVisibility ? 'text' : 'password'}
            placeholder="비밀번호 확인"
            className="w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <Image
            onClick={toggleConfirmPasswordVisibility}
            src={confirmPasswordVisibility ? '/icons/eye.svg' : '/icons/eyeOff.svg'}
            alt="password cover"
            className="absolute bottom-3 right-5 hover:cursor-pointer"
            width={20}
            height={20}
          />
        </label>
      </div>

      {/* 회원가입 버튼 */}
      <button
        type="submit"
        disabled={!isValid}
        className={`mt-[15%] h-[3.1rem] w-full rounded-full ${
          isValid ? 'bg-primary-darkblue-hover' : 'bg-neutral-navy-950'
        } 
        ${isValid ? 'border-none' : 'border border-neutral-navy-300'}
        text-neutral-white-100 px-5 py-3 text-center text-sm`}
      >
        비밀번호 재설정
      </button>
    </form>
  )
}
