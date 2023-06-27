'use client'
import React, { useState, useEffect } from 'react'
import { formatPrice } from '@/utils/formatPrice'
import PaymentItem from './PaymentItem'
import Title from '../common/Title'
import { useRouter } from 'next/navigation'
import { CartItemProps, Asset, SelectedItem } from '@/api/interface/cart'

export default function PaymentInfo() {
  const route = useRouter()
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([])

  useEffect(() => {
    const selectedItemsString = localStorage.getItem('selectedItems')
    const parsedItems = selectedItemsString ? JSON.parse(selectedItemsString) : null
    if (parsedItems === null) {
      route.push('/cart')
    } else {
      setSelectedItems(parsedItems)
    }

    return () => {
      localStorage.removeItem('selectedItems')
    }
  }, [route])

  const totalPrice = selectedItems.reduce((acc, item) => acc + item.asset.price, 0)
  const totalDiscount = selectedItems.reduce((acc, item) => acc + item.asset.discountPrice, 0)

  return (
    <div className="sticky flex w-[23.9%] min-w-[26rem] flex-col justify-between border-l border-transparent-navy-30 px-[1.432%] pb-[3.222%] pt-[2.864%]">
      <div>
        <Title tit="상세정보" />
        <ul className="max-h-[55vh] overflow-y-auto">
          {selectedItems.map((item: CartItemProps['item']) => (
            <PaymentItem key={item.cartId} item={item} />
          ))}
        </ul>
      </div>
      <div>
        <ul className="border-b border-neutral-navy-800 px-[0.4rem] text-ms">
          <li className="flex justify-between leading-[4.8rem] text-neutral-navy-300">
            <p>구매할 에셋 : {selectedItems.length}개</p>
            <p>{formatPrice(totalPrice)}</p>
          </li>
          <li className="flex justify-between leading-[5.6rem]">
            <p>총 추가 혜택</p>
            <p>{formatPrice(0)}</p>
          </li>
        </ul>
        <div className="flex w-full justify-between leading-[5.4rem]">
          <p>결제 예정 금액</p>
          <p>{formatPrice(totalDiscount)}</p>
        </div>
        <button className="h-[4.4rem] w-full rounded-sm bg-primary-main font-semibold text-neutral-white-50">
          결제하기
        </button>
      </div>
    </div>
  )
}
