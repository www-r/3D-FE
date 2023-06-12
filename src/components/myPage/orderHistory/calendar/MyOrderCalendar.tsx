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
    <div className="flex w-[45%]">
      <div className="flex h-full w-full rounded-lg border p-2.5 text-neutral-navy-200 dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm">
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
          className="border-non h-[2.3rem] w-[12.5rem] pl-2.5 text-[16px] dark:bg-neutral-navy-950 dark:text-neutral-navy-200"
        />
        <Image src="/icons/calendar.svg" alt="calendar icon" width={20} height={20} />
      </div>

      <span className="mx-2 h-full w-full text-center text-[16px] dark:text-neutral-navy-100">
        ~
      </span>
      <div className="flex h-full w-full rounded-lg border p-2.5 text-neutral-navy-200 dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm">
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
          className="border-non h-[2.3rem] w-[12.5rem] pl-2.5 text-[16px] dark:bg-neutral-navy-950 dark:text-neutral-navy-200"
        />
        <Image src="/icons/calendar.svg" alt="calendar icon" width={20} height={20} />
      </div>
    </div>
  )
}
