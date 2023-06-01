'use client'

import { Asset } from '@/api/assets'
import AssetTag from '../assets/AssetTags'
import WishlistButton from '../common/WishlistButton'

interface Props {
  asset: Asset
}

export default function AssetDetailContent({ asset }: Props) {
  return (
    <article className="px-6 h-full text-neutral-navy-100 pt-6 pb-10">
      <div className="flex h-[5.6rem] items-center mb-6">
        <div className="text-lg font-semibold w-[44.1rem]">
          <h2>{asset.title}</h2>
        </div>
        <div>
          <button>URL Copy</button>
          <span>Icon</span>
        </div>
        <div>
          <WishlistButton />
        </div>
      </div>
      <div className="mb-6">
        <div className="h-[4.4rem] border-transparent-navy-30 border-t flex items-center">
          <h3>확장자</h3>
        </div>
        <div className="h-[4.4rem] border-transparent-navy-30 border-t flex items-center">
          <h3>평점</h3>
        </div>
        <div className="h-[4.4rem] border-transparent-navy-30 border-t flex items-center">
          <h3>방문자 수</h3>
        </div>
        <div className="h-[4.4rem] border-transparent-navy-30 border-t flex items-center">
          <h3>찜하기 수</h3>
        </div>
        <div className="h-[4.4rem] border-transparent-navy-30 border-t flex items-center">
          <h3>파일 크기</h3>
        </div>
        <div className="h-[4.4rem] border-transparent-navy-30 border-y flex items-center">
          <h3>제작자</h3>
        </div>
      </div>
      <div className="bg-neutral-navy-900 py-4 px-3">
        <div>
          이 패키지는 러너 게임 또는 액션 캐릭터를 만드는데 필요한 킹니메이션입니다. 관련 태그를
          검색하여 비슷한 365종의 에셋을 더 탑색해보세요.
        </div>
      </div>
      <AssetTag tags={asset.categories.tags} />
      <div className="h-[10.5rem]"></div>
    </article>
  )
}
