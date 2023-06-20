import React from 'react'
import CustomInput from '@/components/common/CustomInput'
import {TrashIcon} from '@/components/common/Icon/Icons'
import { formatPrice } from '@/utils/formatPrice'

export default function TableItem({assetId, image, assetName, extension, size, price , icon   }) {
  return (
    <>
      <tr className="py-[0.8rem] border-b border-neutral-navy-300 ">
      <td className='h-[10rem]'>
        <CustomInput id={assetId} />
      </td>
      <td className='h-[10rem]'> 
        {/* <Image src={image} alt="asset" width={80} height={100} className="min-w-[8rem]" /> */}
      </td>
      <td className='h-[10rem]'>
        <div className="px-[1.2rem]">
          <h4 className="text-[2rem] font-medium">{assetName}</h4>
          <ul className="flex flex-wrap items-center text-sm">
            <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem] after:w-[0.1rem] after:bg-transparent-navy-30">
              {`확장자 : ${extension}`}
            </li>
            <li className="flex items-center after:bg-transparent-navy-30">
              {`데이터 용량 : ${size}`}
            </li>
          </ul>
        </div>
      </td>
      <td className='h-[10rem]'>
        <div className="px-[2.4rem] text-right text-sl">
          <p>{formatPrice({price})}</p>
        </div>
      </td>
      <td className='h-[10rem]'>
       {icon}
      </td>
      <td className='h-[10rem]'>
       <TrashIcon/>
      </td>
        </tr>
    </>
  )
}
