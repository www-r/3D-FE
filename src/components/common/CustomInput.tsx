import React from 'react'

type CustomInputProps = {
  type?: 'checkbox' | 'radio'
  id: string
  className?: string
  width?: number
  height?: number
  children?: React.ReactNode
}

function CustomInput({
  type = 'checkbox',
  id,
  className,
  width = 3.2,
  height = 3.2,
  children,
}: CustomInputProps) {
  return (
    <>
      <input type={type} id={id} className="hidden" />
      <label htmlFor={id} className={`flex items-center ${className}`}>
        <div className={`mx-auto h-[${height}rem] w-[${width}rem] bg-${type}-off bg-cover`}></div>
        {children}
      </label>
    </>
  )
}

export default CustomInput
