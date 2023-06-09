import Layout from '@/components/common/Layout'
import Image from 'next/image'
import { formatPrice } from '@/utils/formatPrice'

export default function CartPage() {
  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-7.2rem)] pr-[2.4rem] pt-[2.4rem] text-neutral-navy-100">
        <div className="w-[75.79%] px-[2.2rem] py-[4rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline">
              <h2 className="text-lg font-bold">장바구니</h2>
              <p className="ml-[0.8rem] text-sl text-neutral-navy-200">
                &#40;<span className="text-primary-main">2</span>/4&#41;
              </p>
            </div>
            <div className="flex">
              <button className="h-[2.8rem] w-[12rem] rounded-sm border border-transparent-navy-30 text-sm">
                전체 삭제
              </button>
              <button className="ml-[1.6rem] h-[2.8rem] w-[12rem] rounded-sm border border-transparent-navy-30 text-sm">
                선택 항목 삭제
              </button>
            </div>
          </div>
          <table className="mt-[3.2rem]">
            <thead>
              <tr className="w-[100%] text-neutral-200">
                <th className="w-[7.5%] text-center text-sm">
                  <input type="checkbox" id="all" className="hidden" />
                  <label htmlFor="all">
                    <div className="mx-auto h-[3.2rem] w-[3.2rem] bg-checkbox-off bg-cover"></div>
                  </label>
                </th>
                <th className="w-[6.6%] text-sm">
                  <p>대표이미지</p>
                </th>
                <th className="w-[48.6%] text-sm">
                  <p>이름 및 상세설명</p>
                </th>
                <th className="w-[20.7%] pr-[2.4rem] text-right text-sm">
                  <p>가격</p>
                </th>
                <th className="w-[8.3%] text-sm">
                  <p>찜</p>
                </th>
                <th className="w-[8.3%] text-sm">
                  <p>삭제</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" id="i1" className="hidden" />
                  <label htmlFor="i1">
                    <div className="mx-auto h-[3.2rem] w-[3.2rem] bg-checkbox-off bg-cover"></div>
                  </label>
                </td>
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
                      <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem] after:w-[0.1rem] after:bg-transparent-navy-30">
                        데이터 용량 : 1.2GB
                      </li>
                      <li className="flex items-center after:m-[0.8rem] after:h-[1.2rem] after:w-[0.1rem] after:bg-transparent-navy-30">
                        특화분야 : 게임
                      </li>
                      <li>사용 프로그램 : iClone, CC4, Unity</li>
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
                <td>
                  <Image
                    src="/icons/heart.svg"
                    alt="찜"
                    width={24}
                    height={24}
                    className="mx-auto cursor-pointer"
                  />
                </td>
                <td>
                  <Image
                    src="/icons/trash.svg"
                    alt="삭제"
                    width={24}
                    height={24}
                    className="mx-auto cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sticky w-[24.21%] border-l border-transparent-navy-30">
          <h3>결제 정보</h3>
        </div>
      </div>
    </Layout>
  )
}
