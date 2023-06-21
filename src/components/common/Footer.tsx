'use client'

import Image from 'next/image'
import Link from 'next/link'
import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export default function Footer() {
  const isDrawerOpen = useSelector((state: RootState) => state.drawer.isOpen)

  if (isDrawerOpen) return null
  return (
    <footer className="w-full border-t border-transparent-navy-30 bg-bg-2">
      <div className="m-auto flex h-[5rem] w-[70%] items-center justify-between">
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
