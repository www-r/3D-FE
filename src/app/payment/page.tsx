import Image from 'next/image'
import Layout from '@/components/common/Layout'
import { formatPrice } from '@/utils/formatPrice'

export default function PaymentPage() {
  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-7.2rem)] text-neutral-navy-100">
        <div className="w-[74.82%] px-[2.2rem] py-[6.4rem] leading-[2.6rem]">
          <h2 className="mb-[3.2rem] text-lg font-bold">결제</h2>
          <div className="flex w-full justify-between px-[2.3rem] py-[2.4rem] font-normal">
            <div className="w-[47.04%] py-[0.4rem]">
              <h3 className="border-b border-transparent-navy-30 text-sl leading-[5rem]">
                주문자 정보
              </h3>
              <ul className="flex flex-wrap justify-between text-neutral-navy-100">
                <li className="mt-[1.6rem] h-[6.8rem] w-[48.5%] rounded-sm border border-transparent-navy-30 bg-bg-1 px-[1.2rem] py-[0.8rem]">
                  <p className="mb-[0.4rem] text-sm leading-[2.2rem]">성</p>
                  <input
                    type="text"
                    placeholder="성"
                    className="w-full bg-bg-transparent placeholder-neutral-navy-300"
                  />
                </li>
                <li className="mt-[1.6rem] h-[6.8rem] w-[48.5%] rounded-sm border border-transparent-navy-30 bg-bg-1 px-[1.2rem] py-[0.8rem]">
                  <p className="mb-[0.4rem] text-sm leading-[2.2rem]">이름</p>
                  <input
                    type="text"
                    placeholder="이름"
                    className="w-full bg-bg-transparent placeholder-neutral-navy-300"
                  />
                </li>
                <li className="mt-[1.6rem] h-[5rem] w-full rounded-sm border border-transparent-navy-30 bg-bg-1 px-[1.6rem] py-[1.2rem]">
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="w-full bg-bg-transparent placeholder-neutral-navy-300"
                  />
                </li>
                <li className="mt-[1.6rem] h-[5rem] w-full rounded-sm border border-transparent-navy-30 bg-bg-1 px-[1.6rem] py-[1.2rem]">
                  <input
                    type="text"
                    placeholder="휴대전화"
                    className="w-full bg-bg-transparent placeholder-neutral-navy-300"
                  />
                </li>
              </ul>
            </div>
            <div className="w-[47.04%] py-[0.4rem]">
              <h3 className="border-b border-transparent-navy-30 text-sl leading-[5rem]">
                결제 수단
              </h3>
              <ul>
                <li className="mt-[2.4rem] h-[7.2rem] rounded-sm border border-transparent-navy-30 bg-bg-1">
                  <input type="radio" id="i1" className="hidden" />
                  <label
                    htmlFor="i1"
                    className="flex items-center justify-between py-[1.6rem] pl-[2.4rem] pr-[1.6rem]"
                  >
                    <div className="flex items-center">
                      <div className="mx-auto mr-[0.8rem] h-[3.2rem] w-[3.2rem] bg-radio-off bg-cover"></div>
                      <p>간편결제 : Kakao pay</p>
                    </div>
                    <Image src="/icons/payment-kakaoPay.svg" alt="kg" width={40} height={40} />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sticky flex w-[23.9%] min-w-[26rem] flex-col justify-between border-l border-transparent-navy-30 px-[1.432%] pb-[3.222%] pt-[2.864%]">
          <div>
            <h2 className="mb-[3.2rem] text-lg font-bold leading-[3rem]">상세정보</h2>
            <ul className="max-h-[59vh] overflow-y-auto">
              <li className="flex items-center px-[0.4rem] py-[0.65rem]">
                <div>
                  <Image
                    src="/image.svg"
                    alt="asset"
                    width={68}
                    height={85}
                    className="mr-[1.6rem] min-w-[6.8rem]"
                  />
                </div>
                <div>
                  <h4 className="mb-[0.8rem] leading-[2.2rem]">Fast running</h4>
                  <div className="flex items-center text-base leading-[2rem]">
                    <p className="mr-[0.4rem] text-primary-main">{formatPrice(18500)}</p>
                    <span className="text-ms text-neutral-navy-800 line-through">
                      {formatPrice(22000)}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="border-b border-neutral-navy-800 px-[0.4rem] text-ms">
              <li className="flex justify-between leading-[4.8rem] text-neutral-navy-300">
                <p>구매할 에셋 : 3개</p>
                <p>{formatPrice(-25000)}</p>
              </li>
              <li className="flex justify-between leading-[5.6rem]">
                <p>총 추가 혜택</p>
                <p>{formatPrice(-25000)}</p>
              </li>
            </ul>
            <div className="flex w-full justify-between leading-[5.4rem]">
              <p>결제 예정 금액</p>
              <p>{formatPrice(154000)}</p>
            </div>
            <button className="h-[4.4rem] w-full rounded-sm bg-primary-main font-semibold text-neutral-white-50">
              결제하기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
