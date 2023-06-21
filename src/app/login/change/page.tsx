import Change from '@/components/login/change/Chage'

export default function ChangePage() {
  return (
    <section className="h-screen bg-[url('/background/login-bg.svg')] bg-cover bg-center">
      <div className="mx-auto flex flex-col items-end justify-center text-neutral-navy-100 md:h-screen lg:py-0">
        <div className="mr-[3%] h-auto w-[25%] justify-center rounded-sm bg-neutral-navy-950 bg-opacity-90 p-8">
          <div className="mb-5 mt-[52%] flex flex-col">
            <span className="text-[2.3rem] font-bold ">비밀번호 재설정</span>
            <span className="text-xs">
              가입하신 메일 주소를 인증해 새로운 비밀번호를 등록하세요
            </span>
          </div>
          <div className="my-5 border-t-2 border-blue-500"></div>
          <Change />
        </div>
      </div>
    </section>
  )
}
