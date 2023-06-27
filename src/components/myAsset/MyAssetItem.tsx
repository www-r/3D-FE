import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'

export default function MyAssetItem() {
  return (
    <li>
      <button
        className="h-[30.4rem] min-w-[22.4rem] hover:rounded-[0.4rem] hover:border-2 hover:border-primary-main
    focus:rounded-[0.4rem] focus:border-2 focus:border-primary-main"
      >
        <div className="p-[0.4rem]">
          <div className="rounded h-[26.6rem] rounded-[0.4rem] bg-gray-100">이미지 자리</div>
          <div>
            <h3 className="flex h-[2.8rem] items-center text-base  leading-[2.178rem] text-neutral-navy-100">
              에셋 제목
              {/* {asset.assetName} */}
            </h3>
          </div>
        </div>
      </button>
    </li>
  )
}
