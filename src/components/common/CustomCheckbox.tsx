import React from 'react'

type CustomCheckboxProps = {
  id: string
  className?: string
  width?: number
  height?: number
  children?: React.ReactNode
}

function CustomCheckbox({
  id,
  className,
  width = 3.2,
  height = 3.2,
  children,
}: CustomCheckboxProps) {
  return (
    <>
      <input type="checkbox" id={id} className="hidden" />
      <label htmlFor={id} className={`flex items-center ${className}`}>
        <div className={`mx-auto h-[${height}rem] w-[${width}rem] bg-checkbox-off bg-cover`}></div>
        {children}
      </label>
    </>
  )
}

export default CustomCheckbox
