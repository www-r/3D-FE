import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-bg-2 border-t border-transparent-navy-30">
      <div className="flex w-[70%] h-[5rem] m-auto items-center justify-between">
        <div>
          <Image src="/logo-footer.svg" alt="neuroidAsset" width={156} height={36} />
        </div>
        <ul className="flex text-[1.4rem]">
          <li>
            <Link href="#" className="text-neutral-navy-200">
              저작권
            </Link>
          </li>
          <li className="ml-[3.2rem]">
            <Link href="#" className="text-neutral-navy-200">
              서비스 이용약관
            </Link>
          </li>
          <li className="ml-[3.2rem]">
            <Link href="#" className="text-neutral-navy-200">
              쿠키 설정
            </Link>
          </li>
          <li className="ml-[3.2rem]">
            <Link href="#" className="text-neutral-navy-200">
              언어설정
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
