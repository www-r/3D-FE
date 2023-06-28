'use client'

import React, { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import PaymentInfo from '@/components/payment/PaymentInfo'
import OrderInfo from '@/components/payment/OrderInfo'
import PaymentMethod from '@/components/payment/PaymentMethod'
import Title from '@/components/common/Title'
import { SelectedItem } from '@/api/interface/cart'
import { PaymentPayload } from '@/api/interface/payment'
import { submitPayment } from '@/utils/paymentUtils'

export default function Payment() {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentPayload>()

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

  const onSubmit: SubmitHandler<PaymentPayload> = (data) => {
    const assetList = selectedItems.map((item) => item.asset.assetId)
    const totalPrice = selectedItems.reduce((total, item) => total + item.asset.discountPrice, 0)

    const payload: PaymentPayload = {
      assetList: assetList,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      totalPrice: totalPrice,
      paymentTool: data.paymentTool,
    }

    console.log(payload)
    submitPayment(payload)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex min-h-[calc(100vh-7.2rem)] text-neutral-navy-100">
        <div className="w-[74.82%] px-[2.2rem] py-[6.4rem] leading-[2.6rem]">
          <Title tit="결제" />
          <div className="flex w-full justify-between px-[2.3rem] py-[2.4rem] font-normal">
            <OrderInfo register={register} errors={errors} />
            <PaymentMethod register={register} errors={errors} />
          </div>
        </div>
        <PaymentInfo selectedItems={selectedItems} />
      </div>
    </form>
  )
}
