import React from 'react'
import { useForm } from 'react-hook-form'

export default function OrderInfo({ register, errors }: any) {
  const { setValue } = useForm()
  console.log(errors)

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawValue = e.target.value.replace(/-/g, '') // 입력된 값에서 모든 하이픈 제거
    let formattedValue = ''
    if (rawValue.length > 3) {
      formattedValue += rawValue.slice(0, 3) + '-'
      if (rawValue.length > 7) {
        formattedValue += rawValue.slice(3, 7) + '-' + rawValue.slice(7, 11)
      } else {
        formattedValue += rawValue.slice(3, 7)
      }
    } else {
      formattedValue += rawValue
    }
    e.target.value = formattedValue // 입력된 값에 하이픈이 추가된 값을 설정
    setValue('phoneNumber', formattedValue) // 필드 값을 업데이트
  }

  return (
    <div className="w-[47.04%] py-[0.4rem]">
      <h3 className="border-b border-transparent-navy-30 text-sl leading-[5rem]">주문자 정보</h3>
      <ul className="flex flex-wrap justify-between text-neutral-navy-100">
        <li
          className={`mt-[1.6rem] h-[6.8rem] w-[48.5%] rounded-sm border ${
            errors.lastName ? 'border-point-red' : 'border-transparent-navy-30'
          } bg-bg-1 px-[1.2rem] py-[0.8rem]`}
        >
          <p className="mb-[0.4rem] text-sm leading-[2.2rem]">성</p>
          <input
            type="text"
            placeholder="성"
            className="w-full bg-bg-transparent placeholder-neutral-navy-300"
            {...register('lastName', { required: true })}
          />
        </li>
        <li
          className={`mt-[1.6rem] h-[6.8rem] w-[48.5%] rounded-sm border ${
            errors.firstName ? 'border-point-red' : 'border-transparent-navy-30'
          } bg-bg-1 px-[1.2rem] py-[0.8rem]`}
        >
          <p className="mb-[0.4rem] text-sm leading-[2.2rem]">이름</p>
          <input
            type="text"
            placeholder="이름"
            className="w-full bg-bg-transparent placeholder-neutral-navy-300"
            {...register('firstName', { required: true })}
          />
        </li>
        <li
          className={`mt-[1.6rem] h-[5rem] w-full rounded-sm border ${
            errors.email ? 'border-point-red' : 'border-transparent-navy-30'
          } bg-bg-1 px-[1.6rem] py-[1.2rem]`}
        >
          <input
            type="text"
            placeholder="E-mail"
            className="w-full bg-bg-transparent placeholder-neutral-navy-300"
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: '유효한 이메일 주소를 입력해주세요.',
              },
            })}
          />
          {errors.email && (
            <p className="ml-[-1.6rem] mt-4 text-sm text-point-red-text">{errors.email.message}</p>
          )}
        </li>
        <li
          className={`mt-[1.6rem] h-[5rem] w-full rounded-sm border ${
            errors.phoneNumber ? 'border-point-red' : 'border-transparent-navy-30'
          } bg-bg-1 px-[1.6rem] py-[1.2rem] ${errors.email && 'mt-12'}`}
        >
          <input
            type="text"
            placeholder="휴대전화"
            className="w-full bg-bg-transparent placeholder-neutral-navy-300"
            {...register('phoneNumber', {
              required: true,
              pattern: {
                value: /^\d{3}-\d{3,4}-\d{4}$/,
                message: '유효한 전화번호를 입력해주세요. (예: 010-1234-5678)',
              },
            })}
            onChange={handlePhoneNumberChange}
          />
          {errors.phoneNumber && (
            <p className="ml-[-1.6rem] mt-4 text-sm text-point-red-text">
              {errors.phoneNumber.message}
            </p>
          )}
        </li>
      </ul>
    </div>
  )
}
