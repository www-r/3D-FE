import { Asset } from '@/api/assets'
import Image from 'next/image'
import React from 'react'
import Star from '../common/Star'
import CreateReview from './CreateReview'

interface Props {
  asset: Asset
}

export default function AssetDetailReview({ asset }: Props) {
  return (
    <>
      <div className="pt-[4.7rem]"></div>
      <article className="p-6 h-full text-neutral-navy-100">
        <div className="flex justify-between border-transparent-navy-30 border-b py-[1.4rem] mb-[3.2rem]">
          <h3 className="leading-[1.936rem]">Up down run down stairs</h3>
          <Star star={0.5} size="lg" />
        </div>
        <div>
          <div className="flex justify-between h-[4rem] mb-[2rem]">
            <h3>리뷰 작성하기</h3>
            <div className="w-[18.1rem] h-[3.6rem] bg-neutral-navy-900 py-2 px-6 rounded">
              <Star star={3.5} size="sm" />
            </div>
          </div>
          <CreateReview />
        </div>
      </article>
    </>
  )
}
