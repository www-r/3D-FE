"use client"
import React, { MouseEventHandler, useState } from 'react'

interface Button {
  clickHandler: Function,
  children:string,
}

export default function Button({ clickHandler, children}:Button) {

  const [isClicked, setIsClicked] = useState(false)
  const onClick = () => {
    clickHandler()
    setIsClicked(!isClicked)
  }
  return (
    
      <button className={isClicked?'w-[12rem] h-[2.8rem] border rounded-sm text-sm text-primary-main border-primary-main' : 'w-[12rem] h-[2.8rem] border rounded-sm  text-sm  border-transparent-navy-30 text-neutral-navy-100'} onClick={onClick}>{children}</button> 
  )
}
