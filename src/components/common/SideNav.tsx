import Categories from '@/app/categories/page'
import Image from 'next/image'
import Link from 'next/link'
import Category from './Category'

export default function SideNav() {
  return (
    <aside className="fixed h-screen h min-w-[24.4rem] z-10 bg-bg-1 border-r border-solid border-transparent-navy-30">
      <div className="logo">
        <Image src="/logo-title.svg" alt="로고" width={156} height={36} />
      </div>
      <div>
        <Image src="/icons/icon=minimize menu.svg" alt="메뉴" width={32} height={32} />
      </div>
      <ul>
        <li>
          <Link href="#">
            <Image src="/icons/icon=asset list icon.svg" alt="개별 에셋" width={24} height={24} />
            <p>에셋 리스트</p>
          </Link>
          <ul>
            <li>
              <Link href="#">
                <Image
                  src="/icons/icon=asset list icon.svg"
                  alt="개별 에셋"
                  width={20}
                  height={20}
                />
                <p>개별 에셋</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/icons/icon=asset list icon.svg"
                  alt="개별 에셋"
                  width={20}
                  height={20}
                />
                <p>패키지 에셋</p>
              </Link>
            </li>
          </ul>
          <div>
            <div>
              <Image src="/icons/icon=list.svg" alt="개별 에셋" width={20} height={20} />
              <p>카테고리별</p>
            </div>
            <Category />
          </div>
        </li>
      </ul>
    </aside>
  )
}
