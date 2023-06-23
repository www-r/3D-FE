import React, { useState, useEffect } from 'react'
import { getAllReviews } from '@/api/service/review'
import { Review, ReviewData } from '@/api/interface/review'
import ReviewItem from './ReviewItem'
import { useReview } from '@/hooks/useReview'


interface Props {
  id: number
  setIsWritten: (isWritten: boolean) => void
}

export default function ReviewList({ id, setIsWritten }: Props) {
  const { reviews } = useReview(id)

  // setIsWritten()
  //   setReviews(res.data.reviewList)

  //   const reviewList = res.data.reviewList
  //   const data = reviewList.filter((item) => item.id === userId)

  return (
    <ul className="mb-[0.8rem]">
      {reviews?.hasReview ? (
        reviews.reviewList.map((review: Review) => (
          <ReviewItem key={review.reviewId} review={review} />
        ))
      ) : (
        <section className="items-center justify-between mb-[0.8rem] flex h-[8rem] flex-col bg-neutral-navy-900 px-[1.6rem] py-[1.2rem]">
          <div className="h-[2.4rem] text-sl text-neutral-navy-200">아직 리뷰가 없습니다</div>
          <div className="text-mm text-neutral-navy-300">리뷰를 작성해보세요!</div>
        </section>
      )}
    </ul>
  )
}
