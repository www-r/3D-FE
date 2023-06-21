import Image from 'next/image'

import { Review } from '@/api/interface/review'
import Star from '../common/Star'

interface Props {
  review: Review
}

export default function ReviewItem({ review }: Props) {
  console.log({ review })
  return (
    <section className="mb-[0.8rem] w-full bg-neutral-navy-900">
      <div className="px-[1.2rem] py-[0.8rem]">
        <div className="mb-[0.8rem] flex h-[3.8rem] items-center justify-between text-mm font-normal">
          <div className="text-neutral-navy-200">
            <span>
              작성자 : {review.lastName}
              {review.firstName}
            </span>
          </div>
          <div className="flex">
            <Star star={review.rating} size="sm" />
            <Image src="/icons/moreVertical.svg" alt="menu" width={24} height={24} />
          </div>
        </div>
        <div className="mb-[0.8rem] text-mm  font-normal text-neutral-navy-100">
          <span>{review.content}</span>
        </div>
      </div>
    </section>
  )
}
