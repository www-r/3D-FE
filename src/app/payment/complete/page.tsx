import React from 'react'
import Link from 'next/link'
import Layout from '@/components/common/Layout'
import Title from '@/components/common/Title'
import CompleteTable from '@/components/payment/complete/CompleteTable'

export default function Complete() {
  return (
    <Layout>
      <div className="py-[3.2rem] text-neutral-navy-100">
        <Title className="py-[3.2rem] text-center" tit="구매가 완료되었습니다!" />
        <CompleteTable />
        <div className="mx-auto w-[30.5rem] text-center text-sm font-semibold">
          <div className="mb-[1.6rem] rounded-sm border border-primary-darkblue leading-[3.6rem]">
            <Link href="/" className="block text-primary-main">
              메인으로 가기
            </Link>
          </div>
          <div className="rounded-sm bg-primary-darkblue leading-[3.8rem]">
            <Link href="/my-assets" className="block text-neutral-white-50">
              내 에셋으로 가기
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
