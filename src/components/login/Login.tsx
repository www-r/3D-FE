'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import { useLogin } from '@/hooks/useLogin'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [account, setAccount] = useState({ email: '', password: '' })
  const { mutate: loginUser } = useLogin()
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setAccount({
      ...account,
      [id]: value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginUser(account)
    router.push('/')
  }

  return (
    <>
      <section className="h-screen bg-[url('/background/login-bg.svg')] bg-cover bg-center">
        <div className="mx-auto flex flex-col items-end justify-center md:h-screen lg:py-0">
          <div className="rounded-lg m-8 h-[47.5rem] w-[36.8rem] justify-center bg-black bg-opacity-80">
            <div className="h-[47.5rem] w-[36.8rem] space-y-4 sm:p-8 md:space-y-6">
              <a href="#" className="mb-[11.8rem] flex items-center">
                <Image src="/logo-title.svg" alt="logo" width={155} height={54} />
              </a>
              <h1 className="text-3xl md:text-3xl dark:text-text-neutral-navy-100 font-bold text-neutral-navy-100">
                로그인
              </h1>
              <h4 className="text-xs font-bold text-neutral-navy-100 dark:text-neutral-navy-100 md:text-xs">
                가입하신 이메일 또는 간편 로그인
              </h4>
              <div className="border-t-2 border-blue-500"></div>

              <form onSubmit={handleSubmit} className="my-4 space-y-4  md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="rounded-lg focus:ring-primary-600 focus:border-primary-600 block h-[3.1rem] w-full border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    placeholder="E-mail"
                    onChange={handleChange}
                    value={account.email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="rounded-lg block h-[3.1rem] w-full border border-neutral-navy-300 bg-neutral-navy-950 p-2.5 text-gray-900 focus:border-primary-main focus:ring-primary-main dark:border-gray-600 dark:bg-neutral-navy-950 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    onChange={handleChange}
                    value={account.password}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="rounded dark:focus:ring-primary-600 h-5 w-5 border border-neutral-navy-300 accent-neutral-navy-850 dark:accent-neutral-navy-850 dark:ring-offset-gray-800"
                      />
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
                  <button className="border-white-0 rounded-lg flex h-[3.5rem] w-[11.5rem] items-center justify-between border bg-white px-4 py-2">
                    <Image src="/google.svg" alt="Google Logo" width={20} height={20} />
                    <span className="text-xs font-semibold">구글로 가입하기</span>
                  </button>
                </div>
                <button
                  type="submit"
                  className="rounded-full dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 h-[3.1rem] w-full bg-primary-darkblue-hover px-5 py-2.5 text-center text-sm text-neutral-white-50 focus:outline-none"
                >
                  Log in
                </button>
                <div className="flex items-center justify-between">
                  <a
                    href=""
                    className="text-primary-600 dark:text-primary-500 text-xs text-neutral-navy-100 hover:underline"
                  >
                    회원가입
                  </a>
                  <a
                    href=""
                    className="ext-primary-600 dark:text-primary-500 text-xs text-neutral-navy-100 hover:underline"
                  >
                    아이디/비밀번호 찾기
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
