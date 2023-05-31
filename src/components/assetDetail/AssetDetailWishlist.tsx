import { Asset } from '@/api/assets'
import WishlistButton from '../common/WishlistButton'
import { formatPrice } from '@/utils/formatPrice'

interface Props {
  asset: Asset
}

export default function AssetDetailWishlist({ asset }: Props) {
  return (
    <div className="h-[10.5rem] w-[71.1rem] bg-bg-2 border-t border-transparent-navy-30 fixed bottom-0">
      <div className="p-[2.7rem]">
        <div className="flex w-[65.7rem]">
          <div className="flex flex-col w-[32.972rem] gap-y-[1rem]">
            <h3 className="text-neutral-navy-100 text-base leading-[1.936rem]">{asset.title}</h3>
            <div className="text-neutral-white-0 text-[1.8rem]">{formatPrice(asset.price)}</div>
          </div>
          <button
            className="w-[26.311rem] h-[4rem] py-3 px-20 mr-3 leading-[1.936rem]
          font-semibold text-neutral-white-0 rounded bg-primary-main
          flex items-center justify-center"
          >
            장바구니에 담기
          </button>
          <WishlistButton />
        </div>
      </div>
    </div>
  )
}
