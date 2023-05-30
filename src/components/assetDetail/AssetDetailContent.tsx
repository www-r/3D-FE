'use client'

import { RootState } from '@/store/store'
import { useSelector } from 'react-redux'

export default function AssetDetailContent() {
  const asset = useSelector((state: RootState) => state.clickedAsset)
  console.log({ asset })

  return (
    <article className="px-6 h-full text-neutral-navy-100">
      <div className="flex h-[3.5rem] items-center justify-around my-6 ">
        <div className="text-lg  font-semibold">
          <h2>{asset.title}</h2>
        </div>
        <div>
          <button>URL Copy</button>
          <span>Icon</span>
        </div>
        <div>
          <button>
            <span>Icon</span>
          </button>
        </div>
      </div>
      <div>
        <div className="h-[2.75rem] border-transparent-navy-30 border-t">
          <h3>확장자</h3>
        </div>
        <div className="h-[2.75rem] border-transparent-navy-30 border-t">
          <h3>평점</h3>
        </div>
        <div className="h-[2.75rem] border-transparent-navy-30 border-t">
          <h3>방문자 수</h3>
        </div>
        <div className="h-[2.75rem] border-transparent-navy-30 border-t">
          <h3>찜하기 수</h3>
        </div>
        <div className="h-[2.75rem] border-transparent-navy-30 border-t">
          <h3>파일 크기</h3>
        </div>
        <div className="h-[2.75rem] border-transparent-navy-30 border-y">
          <h3>제작자</h3>
        </div>
      </div>
    </article>
  )
}
