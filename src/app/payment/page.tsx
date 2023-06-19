import Layout from '@/components/common/Layout'
import PaymentInfo from '@/components/payment/PaymentInfo'
import OrderInfo from '@/components/payment/OrderInfo'
import PaymentMethod from '@/components/payment/PaymentMethod'

export default function PaymentPage() {
  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-7.2rem)] text-neutral-navy-100">
        <div className="w-[74.82%] px-[2.2rem] py-[6.4rem] leading-[2.6rem]">
          <h2 className="mb-[3.2rem] text-lg font-bold">결제</h2>
          <div className="flex w-full justify-between px-[2.3rem] py-[2.4rem] font-normal">
            <OrderInfo />
            <PaymentMethod />
          </div>
        </div>
        <PaymentInfo />
      </div>
    </Layout>
  )
}
