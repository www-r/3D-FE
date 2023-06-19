import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/common/Layout'
import { formatPrice } from '@/utils/formatPrice'

export default function Complete() {
  return (
    <Layout>
      <div className="py-[3.2rem] text-neutral-navy-100">
        <h2 className="mb-[3.2rem] py-[3.2rem] text-center text-lg font-bold">
          구매가 완료되었습니다!
        </h2>
        <table className="mx-auto mb-[11.1rem] w-[72.077%]">
          <thead>
            <tr className="h-[5rem] w-[100%] border-b-2 border-transparent-navy-15 text-neutral-200">
              <th className="w-[6.6%] text-sm">
                <p>대표이미지</p>
              </th>
              <th className="w-[70.7%] text-sm">
                <p>이름 및 상세설명</p>
              </th>
              <th className="w-[20.7%] pr-[2.4rem] text-right text-sm">
                <p>가격</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-transparent-navy-15">
              <td className="py-[0.8rem]">
                <Image
                  src="/image.svg"
                  alt="asset"
                  width={80}
                  height={100}
                  className="min-w-[8rem]"
                />
              </td>
              <td>
                <div className="px-[1.2rem]">
                  <h4 className="text-[2rem] font-bold">Run</h4>
                  <ul className="flex flex-wrap items-center text-sm">
                    <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem] after:w-[0.1rem] after:bg-transparent-navy-30">
                      확장자 : FBX
                    </li>
                    <li className="flex items-center">데이터 용량 : 1.2GB</li>
                  </ul>
                </div>
              </td>
              <td>
                <div className="px-[2.4rem] text-right text-sl">
                  <p>{formatPrice(18500)}</p>
                  <p className="text-mm font-normal text-neutral-navy-800 line-through">
                    {formatPrice(22000)}
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mx-auto w-[30.5rem] text-center text-sm font-semibold">
          <div className="mb-[1.6rem] rounded-sm border border-primary-main leading-[3.6rem]">
            <Link href="/" className="block text-primary-main">
              메인으로 가기
            </Link>
          </div>
          <div className="rounded-sm bg-primary-main leading-[3.8rem]">
            <Link href="/my-assets" className="block text-neutral-white-50">
              내 에셋으로 가기
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
