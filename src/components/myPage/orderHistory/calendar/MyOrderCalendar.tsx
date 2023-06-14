'use client'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale' //한국어 설정
import Image from 'next/image'

export default function MyOrderCalendar() {
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(new Date())

  return (
    <div className="mb-8 mt-6 flex w-[65%] text-neutral-navy-200">
      <div className="rounded-lg flex border border-gray-600 bg-neutral-navy-950 p-2.5 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
        {/* 조회 시작날짜 캘린더 */}
        <DatePicker
          locale={ko}
          dateFormat="yyyy.MM.dd" // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
          maxDate={new Date()} // maxDate 이후 날짜 선택 불가
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => setStartDate(date)}
          className="border-non h-[2.3rem] bg-neutral-navy-950 pl-2.5 text-[1.6rem] text-neutral-navy-200"
        />
        <Image src="/icons/calendar.svg" alt="calendar icon" width={20} height={20} />
      </div>

      <span className="mx-8 pt-2 text-center text-[1.6rem]">~</span>

      <div className="rounded-lg flex border border-gray-600 bg-neutral-navy-950 p-2.5 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
        {/* 조회 종료날짜 캘린더 */}
        <DatePicker
          locale={ko}
          dateFormat="yyyy.MM.dd"
          shouldCloseOnSelect
          minDate={new Date('2000-01-01')}
          maxDate={new Date()}
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => setEndDate(date)}
          className="border-non h-[2.3rem] bg-neutral-navy-950 pl-2.5 text-[1.6rem] text-neutral-navy-200"
        />
        <Image src="/icons/calendar.svg" alt="calendar icon" width={20} height={20} />
      </div>

      <button
        type="submit"
        className="mx-8 mt-1 h-[3.1rem] w-[10rem] rounded-[9999px] border-gray-600 bg-primary-darkblue-hover px-6 py-3 text-center text-sm text-neutral-white-50"
      >
        조회하기
      </button>
    </div>
  )
}
