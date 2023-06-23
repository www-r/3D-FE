import SignUp from '@/components/signup/SignUp'
import Image from 'next/image'

export default function SignUpPage() {
  return (
    <section className="h-screen bg-[url('/background/signup-bg.svg')] bg-cover bg-center">
      <div className="mx-auto flex flex-col items-end justify-center md:h-screen lg:py-0">
        <div className="mr-[3%] h-auto w-[30%] justify-center rounded-sm bg-black bg-opacity-80">
          <div className="h-full w-full sm:p-8 md:space-y-10">
            <a href="#" className="mb-[10rem] flex items-center">
              <Image src="/logo-title.svg" alt="logo" width={155} height={54} />
            </a>
            <div className="my-5 flex flex-col">
              <span className="md:text-3xl dark:text-text-neutral-navy-100 text-[2.3rem] font-bold text-neutral-navy-100">
                회원가입
              </span>
              <span className="text-xs font-bold text-neutral-navy-100 dark:text-neutral-navy-100 md:text-xs">
                이메일 주소 또는 간편 가입으로 시작해보세요
              </span>
              <div className="mt-5 border-t-2 border-neutral-navy-900"></div>
            </div>
            <SignUp />
            <div className="flex justify-end">
              <a href="/login" className="text-xs text-neutral-navy-100 hover:underline">
                로그인 하러가기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
