'use client'

import { Asset } from '@/api/interface/asset'
import WishlistButton from '../common/WishlistButton'
import Image from 'next/image'

interface Props {
  asset: Asset
}

export default function AssetDetailContent({ asset }: Props) {
  return (
    <>
      <div className="h-[52.3rem] border-b border-transparent-navy-30 bg-bg-2 pt-[4.7rem]">
        three.js
      </div>
      <article className="h-full px-6 pb-10 pt-6 text-neutral-navy-100">
        <div className="mb-6 flex h-[5.6rem] items-center justify-between">
          <div className="w-[44.1rem] text-lg font-semibold">
            <h2>{asset.assetName}</h2>
          </div>
          <div className="flex">
            <div className="mr-[1.2rem] flex h-[4rem] w-[15.7rem] cursor-pointer justify-center rounded-[0.4rem] bg-transparent-navy-15 text-neutral-100">
              <button className="flex items-center">
                <span className="block">URL Copy</span>
                <Image
                  src="/icons/copy.svg"
                  alt="copy"
                  width={24}
                  height={24}
                  className="ml-[0.9rem]"
                />
              </button>
            </div>
            <div>
              <WishlistButton />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex h-[4.4rem] w-[100%] items-center border-t border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">확장자</h3>
          </div>
          <div className="flex h-[4.4rem] w-[100%] items-center border-t border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">평점</h3>
            <div className="flex">
              <Image
                src="/icons/thumbsUp.svg"
                alt="left"
                width={13}
                height={13}
                className="ml-[1.6rem]"
              />
              <p className="ml-[0.4rem]">
                {asset.rating}점({asset.reviewCount}개)
              </p>
            </div>
          </div>
          <div className="flex h-[4.4rem] w-[100%] items-center border-t border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">방문자 수</h3>
            <div className="flex">
              <Image
                src="/icons/eye.svg"
                alt="left"
                width={13}
                height={13}
                className="ml-[1.6rem]"
              />
              <p className="ml-[0.4rem]"></p>
            </div>
          </div>
          <div className="flex h-[4.4rem] w-[100%] items-center border-t border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">찜하기 수</h3>
            <div className="flex">
              <Image
                src="/icons/heart.svg"
                alt="left"
                width={13}
                height={13}
                className="ml-[1.6rem]"
              />
              <p className="ml-[0.4rem]">{asset.wishCount}</p>
            </div>
          </div>
          <div className="flex h-[4.4rem] items-center border-t border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">파일 크기</h3>
            <div className="flex w-1/2">
              <Image
                src="/icons/file.svg"
                alt="left"
                width={13}
                height={13}
                className="ml-[1.6rem]"
              />
              <p className="ml-[0.4rem]"></p>
            </div>
          </div>
          <div className="flex h-[4.4rem] items-center border-y border-transparent-navy-30">
            <h3 className="w-1/2 border-r border-transparent-navy-30">제작자</h3>
            <div className="flex w-1/2">
              <Image
                src="/icons/user.svg"
                alt="left"
                width={13}
                height={13}
                className="ml-[1.6rem]"
              />
              <p className="ml-[0.4rem]">NationA</p>
            </div>
          </div>
        </div>
        <div className="bg-neutral-navy-900 px-3 py-4">
          <div>
            이 패키지는 러너 게임 또는 액션 캐릭터를 만드는데 필요한 킹니메이션입니다. 관련 태그를
            검색하여 비슷한 365종의 에셋을 더 탑색해보세요.
          </div>
        </div>
        {/* <AssetTag tags={asset.categories.tags} /> */}
        <div className="h-[10.5rem]"></div>
      </article>
    </>
  )
}
