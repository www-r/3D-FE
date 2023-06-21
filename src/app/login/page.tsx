import Login from '@/components/login/Login'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <section className="h-screen bg-[url('/background/login-bg.svg')] bg-cover bg-center">
      <div className="mx-auto flex flex-col items-end justify-center md:h-screen lg:py-0">
        <div className="mr-[3%] h-auto w-[25%] justify-center rounded-sm bg-black bg-opacity-80 text-neutral-navy-100">
          <div className="sm:p-8 md:space-y-6">
            <a href="#" className="mb-[46%] flex items-center">
              <Image src="/logo-title.svg" alt="logo" width={155} height={54} />
            </a>
            <div className="my-5 flex flex-col">
              <span className="text-[2.3rem] font-bold ">로그인</span>
              <span className="text-xs">가입하신 이메일 또는 간편 로그인</span>
            </div>
            <div className="my-5 border-t-2 border-blue-500"></div>
            <Login />
            <div className="flex items-center justify-between">
              <a
                href="/signup"
                className="text-primary-600 dark:text-primary-500 text-xs  hover:underline"
              >
                회원가입
              </a>
              <a
                href="/login/change"
                className="ext-primary-600 dark:text-primary-500 text-xs  hover:underline"
              >
                비밀번호 재설정하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
