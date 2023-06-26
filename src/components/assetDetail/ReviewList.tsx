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
  console.log(reviews)

  // setIsWritten()
  //   setReviews(res.data.reviewList)

  //   const reviewList = res.data.reviewList
  //   const data = reviewList.filter((item) => item.id === userId)

  return (
    <ul className="mb-[0.8rem]">
      {reviews &&
        reviews.reviewList.map((review: Review) => (
          <ReviewItem key={review.reviewId} review={review} />
        ))}
    </ul>
  )
}