import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface TagsProps {
  selectedTags: string[]
}

export default function Tags({ selectedTags }: TagsProps) {
  if (selectedTags.length === 0) {
    return null
  }

  return (
    <div className="px-[0.8rem]">
      <div className="flex justify-between items-center text-base text-primary-main">
        <Image
          src="/icons/tag.svg"
          alt="태그"
          width={32}
          height={32}
          className="p-[0.6rem] mr-[0.2rem]"
        />
        <p className="w-full">Detail Tags</p>
        <Image src="/icons/chevronDownBlue.svg" alt="아래 화살표" width={24} height={24} />
      </div>
      <ul className="flex flex-wrap gap-4 py-4 px-[0.8rem]">
        {selectedTags.map((tag) => (
          <li key={tag} className="">
            <Link
              href="#"
              className="block py-[0.4rem] px-[0.8rem] bg-neutral-navy-900 text-sm text-neutral-navy-200 border border-transparent-navy-30 rounded-[0.2rem]"
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
