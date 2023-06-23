'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import TermsModal from './TermsModal'
import { RegisterEnroll, RegisterRequest } from '@/api/interface/auth'
import { useRouter } from 'next/navigation'
import { useSignUp } from '@/hooks/useSignUp'
import CustomCheckbox from '../common/CustomCheckbox'

export default function SignUp() {
  const { joinMutation, emailCheckMutation } = useSignUp()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isValid },
  } = useForm<RegisterRequest>()

  // 이메일 중복확인 핸들러
  const handlerEmailCheck = () => {}

  // 비밀번호, 비밀번호확인 노출 토글
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevVisibility) => !prevVisibility)
  }
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility((prevVisibility) => !prevVisibility)
  }

  //이용약관 동의합니다 체크 여부 state
  const [termsAccepted, setTermsAccepted] = useState(false)
  //모달창 출력 여부 state
  const [isOpen, setIsOpen] = useState(false)
  // 약관에 동의하시겠습니까? state
  const [isAgreed, setIsAgreed] = useState(false)

  const handleModalClose = () => {
    setIsOpen(false)
    setTermsAccepted(false)
  }

  const handleTermCheck = () => {
    setTermsAccepted(!termsAccepted)
    setIsOpen(!isOpen)
  }

  const onSignup = (data: RegisterEnroll) => {
    const { email, firstName, lastName, password } = data
    setIsAgreed(true)
    joinMutation({
      firstName,
      lastName,
      email,
      password,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSignup)}>
      {/* 성, 이름 Input */}
      <div className="mb-1 mt-[1.7rem] flex justify-between">
        <div className="mr-2 flex w-full flex-col">
          <h4 className="px-1 text-xs font-semibold text-neutral-navy-100">성</h4>
          <input
            type="text"
            {...register('lastName', { required: true })}
            placeholder="성"
            className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mr-2 flex w-full flex-col">
          <h4 className="px-1 text-xs font-semibold text-neutral-navy-100">이름</h4>
          <input
            type="text"
            {...register('firstName', { required: true })}
            className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="이름"
          />
        </div>
      </div>

      {/* 이메일 중복확인, 인증코드 보내기 및 확인*/}
      <div className="mt-3 flex flex-col">
        <div className="mt-3 flex justify-between">
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
            className="focus:ring-primary-600 focus:border-primary-600 block w-[68%] rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-white focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          <button className="mx-1 flex w-[30%] items-center justify-center rounded-sm border border-primary-darkblue-hover bg-primary-darkblue-hover px-4 py-2">
            <span className="text-xs text-white">이메일 중복확인</span>
          </button>
        </div>
      </div>

      {/* 비밀번호 Input */}
      <div className="mt-3 flex flex-col">
        <div className="my-3">
          <label htmlFor="password" className="relative mb-2 block text-sm font-medium">
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
              className="w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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

        <label htmlFor="passwordConfirm" className="relative mb-2 block text-sm font-medium">
          <input
            type={confirmPasswordVisibility ? 'text' : 'password'}
            placeholder="비밀번호 확인"
            {...register('passwordConfirm', {
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,20}$/,
                message: '영문, 숫자, 특수문자를 각 1개 이상 사용하여 8~20자 이내로 작성해주세요.',
              },
              minLength: {
                value: 8,
                message: '최소 8자 입니다.',
              },
            })}
            className="w-full rounded-sm border border-neutral-navy-300 bg-neutral-navy-950 px-4 py-3 text-white focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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

      {/* 이용약관 동의 체크박스 */}
      <div className="my-[1.5rem] ml-2 flex">
        {/* <CustomCheckbox
            id="terms"
            aria-describedby="terms"
            checked={isAgreed}
            onChange={handleTermCheck}
          /> */}
        <input
          id="terms"
          aria-describedby="terms"
          type="checkbox"
          checked={isAgreed}
          onChange={handleTermCheck}
          className="rounded dark:focus:ring-primary-600 h-6 w-6 border border-neutral-navy-300 bg-bg-3 accent-neutral-navy-850 dark:accent-neutral-navy-850 dark:ring-offset-gray-800"
        />
        <label htmlFor="terms" className="ml-3 text-xs dark:text-neutral-navy-100 ">
          이용약관에 동의합니다
        </label>
      </div>
      <TermsModal
        isOpen={isOpen}
        isAgreed={isAgreed}
        setIsAgreed={setIsAgreed}
        onClose={handleModalClose}
      />

      {/* 회원가입 버튼 */}
      <button
        type="submit"
        disabled={!isValid && !isAgreed}
        className={`h-[3.1rem] w-full rounded-full px-5 py-3 text-center text-sm text-neutral-white-50 ${
          isValid ? 'bg-primary-darkblue-hover' : 'bg-neutral-navy-950'
        }
          ${isValid ? 'border-none' : 'border border-neutral-navy-300'}
          text-neutral-white-100 px-5 py-3 text-center text-sm`}
      >
        Sign up
      </button>
    </form>
  )
}
