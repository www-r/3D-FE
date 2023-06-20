"use client"
import { useState } from "react";

interface IconProps {
  size?: number;
  fillColor?: string;
  color?: string;
  isClickedColor?: string;
}

export const CartIcon = ({size=24, color='#C7D1DB', isClickedColor='#3399FF'}:IconProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const clickHandler = () => {
    setIsClicked(!isClicked)
  }
  return (<div className="flex justify-center align-center hover:cursor-pointer">
    <svg  width={size} height={size} viewBox="0 0 24 24" fill='none' xmlns="http://www.w3.org/2000/svg" onClick={clickHandler}>
    <path d="M1.19922 4.15234H3.75793L8.46531 13.2365H16.2686C16.6499 13.2365 17.0067 13.035 17.1953 12.7087L21.2466 5.74358" stroke={isClicked?isClickedColor:color} strokeWidth="2" strokeMiterlimit="10"/>
    <path d="M12.5469 2.3999V10.2513" stroke={isClicked?isClickedColor:color} strokeWidth="2" strokeMiterlimit="10"/>
    <path d="M8.55273 6.32373H16.5446" stroke={isClicked?isClickedColor:color} strokeWidth="2" strokeMiterlimit="10"/>
    <path d="M8.46682 13.2366L6.90453 15.4885C6.30996 16.3465 6.93323 17.5107 7.99116 17.5107H19.5997" stroke={isClicked?isClickedColor:color} strokeWidth="2" strokeMiterlimit="10"/>
    <path d="M7.34315 22.3973C7.79155 22.3973 8.15505 22.0402 8.15505 21.5996C8.15505 21.1591 7.79155 20.802 7.34315 20.802C6.89475 20.802 6.53125 21.1591 6.53125 21.5996C6.53125 22.0402 6.89475 22.3973 7.34315 22.3973Z" fill="#C7D1DB" stroke={isClicked?isClickedColor:color} strokeWidth="2" strokeMiterlimit="10"/>
    <path d="M17.9545 22.3731C18.4029 22.3731 18.7664 22.016 18.7664 21.5755C18.7664 21.1349 18.4029 20.7778 17.9545 20.7778C17.5061 20.7778 17.1426 21.1349 17.1426 21.5755C17.1426 22.016 17.5061 22.3731 17.9545 22.3731Z" fill="#C7D1DB" stroke={isClicked?isClickedColor:color} strokeWidth="2" strokeMiterlimit="10"/>
    </svg>
  </div>
  )
}

export const TrashIcon = ({size=24,color='#C7D1DB', isClickedColor='#3399FF'}:IconProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const clickHandler = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div className="flex justify-center align-center hover:cursor-pointer">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={clickHandler}>
      <path d="M3 6H5H21" stroke={isClicked?isClickedColor:color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
      <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke={isClicked?isClickedColor:color} strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
      </svg>
    </div>

  )
}