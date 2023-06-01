'use client'

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { RootState, AppDispatch } from '@/store/store'
import { setSelectedCategory } from '@/store/setSelectedCategory'
import { Category } from '@/interface/category'
import { getAllCategories } from '@/api/category'

export default function Category() {
  const [categories, setCategories] = useState<Category[]>([])
  const selectedCategory = useSelector((state: RootState) => state.category.selectedCategory)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getAllCategories()
        setCategories(data)
      } catch (error) {
        console.error('카테고리 가져오기 오류:', error)
      }
    }

    fetchCategories()
  }, [])

  const handleCategoryClick = (category: Category) => {
    if (selectedCategory === category.name) return
    dispatch(setSelectedCategory(category.name))
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.name}>
          <Link href="#" onClick={() => handleCategoryClick(category)}>
            <p>
              {category.name}{' '}
              {category.subcategories.length > 0 && (
                <Image
                  src="/icons/icon=arrow_drop_down.svg"
                  alt="아래화살표"
                  width={18}
                  height={18}
                />
              )}
            </p>
            <span>{category.totalCount}</span>
          </Link>
          {selectedCategory === category.name && (
            <ul>
              {category.subcategories.map((subcategory) => (
                <li key={subcategory.name}>
                  <Link href="#">
                    <p>{subcategory.name}</p>
                    <span>{subcategory.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
