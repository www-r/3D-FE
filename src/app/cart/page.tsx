import Layout from '@/components/common/Layout'
import Cart from '@/components/cart/Cart'
import CartInfo from '@/components/cart/CartInfo'
import { cartList } from '@/api/service/cart'
import { CartItemProps } from '@/api/interface/cart'

export default async function CartPage() {
  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-7.2rem)] pt-[2.4rem] text-neutral-navy-100">
        <Cart />
        <CartInfo />
      </div>
    </Layout>
  )
}
