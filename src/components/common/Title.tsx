import React from 'react'

interface TitleProps {
  className?: string
  tit: string
  mb?: number
}

export default function Title({ className = '', tit, mb = 3.2 }: TitleProps) {
  return <h2 className={`mb-[${mb}rem] text-lg font-bold leading-[3rem] ${className}`}>{tit}</h2>
}
