'use client'
import { useState } from 'react'
// import PaginationButton from '../common/PaginationButton'
import MyAssetList from './MyAssetList'
import { useGetAssets } from '@/hooks/useGetAssets'
import Image from 'next/image'

export default function MyAsset() {
  const [activePage, setActivePage] = useState(0)
  const { assets } = useGetAssets(activePage, '', '')

  return (
    <section className="my-8 text-[1.4rem] text-neutral-navy-100">
      <div className="flex justify-between">
        <div className="flex">
          <h1 className="text-[2.4rem]">내 에셋 </h1>
          <p className="text-[1.8rem]">(2/100)</p>
        </div>
        <div className="flex">
          <div>드롭다운자리</div>
          <div className="flex h-[3rem] w-[16.3%] rounded-[0.4rem] border border-transparent-navy-30 bg-bg-2 px-[1.2rem]">
            <Image src="/icons/search.svg" alt="검색" width={24} height={24} />
            <input type="text" className="ml-[0.8rem] w-full bg-bg-2 text-neutral-white-50" />
          </div>
        </div>
      </div>
      <MyAssetList />
      {/* <MyAssetList assets={assets?.data?.assetList} /> */}
      {/* 페이지네이션 추가 */}
      {/* <PaginationButton
        activePage={activePage}
        setActivePage={setActivePage}
        pages={assets?.data?.totalPage}
      /> */}
    </section>
  )
}
