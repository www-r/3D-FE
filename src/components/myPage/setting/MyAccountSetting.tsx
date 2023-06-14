/**
 * 마이페이지-내계정페이지
 */
'use client'
import React, { useState } from 'react'
import AccountDeleteModal from './AccountDelete'

export default function MyAccountSetting() {
  //탈퇴 동의 체크 여부 state
  const [deleteAccepted, setDeleteAccepted] = useState(false)
  //모달창 출력 여부 state
  const [showModal, setShowModal] = useState(false)

  const handleModalClose = () => {
    setShowModal(false)
    setDeleteAccepted(false)
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-[4rem] mt-[3rem] text-[24px] font-semibold">내 계정</h1>
        <form className="mb-[19%] flex">
          {/* 성, 이름 Input */}
          <div className="flex flex-col">
            <div className="mx-1 my-5 flex flex-col">
              <h4 className="my-1 text-[12px]">이름</h4>
              <input
                type="text"
                name="firstName"
                placeholder="이름"
                className="focus:ring-primary-600 focus:border-primary-600 rounded-lg h-[2.6rem] w-[24.3rem] border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 dark:border-gray-600 dark:bg-neutral-navy-950 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="mx-1 my-5 flex flex-col">
              <h4 className="my-1 text-[12px] ">성</h4>
              <input
                type="text"
                name="lastName"
                className="focus:ring-primary-600 focus:border-primary-600 rounded-lg h-[2.6rem] w-[24.3rem] border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 dark:border-gray-600 dark:bg-neutral-navy-950 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="성"
              />
            </div>
          </div>

          <div className="mx-[4.5rem] h-[18rem] border border-transparent-navy-30"></div>

          {/* 가입한 이메일 주소, 비밀번호 */}
          <div className="flex flex-col">
            <h4 className="mb-1 text-[12px] ">가입한 이메일 주소</h4>
            <input
              type="email"
              className="focus:ring-primary-600 focus:border-primary-600 rounded-lg mx-1 h-[2.6rem] w-[24.3rem] border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              placeholder="E-mail"
            />

            {/* 비밀번호 Input */}
            <div className="mt-6 flex flex-col">
              <h4 className="my-1 text-[12px] ">비밀번호</h4>
              <input
                type="password"
                className="focus:ring-primary-600 focus:border-primary-600 rounded-lg mx-1 mb-2 h-[2.6rem] w-[24.3rem] border border-neutral-navy-300 bg-neutral-navy-950 p-2.5  dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="새 비밀번호"
              />
              <input
                type="passwordCheck"
                className="focus:ring-primary-600 focus:border-primary-600 rounded-lg mx-1 mb-4 h-[2.6rem] w-[24.3rem] border border-neutral-navy-300 bg-neutral-navy-950 p-2.5  dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="새 비밀번호 확인"
              />
            </div>

            {/* 변경내용 저장버튼 */}
            <button
              type="submit"
              className="bg-transparent rounded-lg h-[3.1rem] w-full border border-gray-600 px-5 py-3 text-center text-sm "
            >
              저장하기
            </button>
          </div>
        </form>
      </div>
      <div className="w-full border-b-2 border-transparent-navy-30"></div>

      <div
        className="mt-6 flex"
        onClick={() => {
          setShowModal(true)
        }}
      >
        <a
          href="#"
          className="dark:text-primary-500 text-[16px] text-neutral-navy-300 underline underline-offset-4"
        >
          탈퇴하기
        </a>
      </div>
      <AccountDeleteModal isOpen={showModal} onClose={handleModalClose} />
    </section>
  )
}
