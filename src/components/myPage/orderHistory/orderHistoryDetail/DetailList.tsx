/**
 * 마이페이지-주문내역-주문내역상세-주문상품 내역 전체
 */
import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'
import DetailListItem from './DetailListItem'

export default function DetailList() {
  return (
    <div className="mt-8">
      <tr className="flex flex-col">
        <td>
          <p className="mb-6 flex text-[1.8rem] font-normal">주문상품</p>
        </td>
        <td className="flex h-[4rem] w-[100%] justify-between bg-bg-3 px-[5rem] text-[1.4rem] font-normal text-neutral-100">
          <p className="flex w-[45%] items-center">결제수단 : BC카드</p>
          <div className="flex w-[38%] items-center justify-between py-4 text-[1.15rem]">
            <Image src="/icons/plus.svg" alt="plus" width={18} height={18} />
            <p>상품금액</p>
            <p>{formatPrice(200000)}</p>
            <Image src="/icons/minus.svg" alt="minus" width={18} height={18} />
            <p>할인금액</p>
            <p>{formatPrice(50000)}</p>
            <Image src="/icons/equal.svg" alt="equal" width={18} height={18} />
          </div>
          <p className="flex items-center">
            <p className="mr-2">결제 금액</p>
            <p className="text-[2rem]">{formatPrice(150000)}</p>
          </p>
        </td>
      </tr>
      <tbody>
        <DetailListItem />
      </tbody>
    </div>
  )
}
