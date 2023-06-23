/**
 * 마이페이지
 */
import Layout from '@/components/common/Layout'
import AccountSettingPage from './setting/page'
import OrderHistoryPage from './orderHistory/page'

type accountInfoProps = {
  userId: number
}

export default function MyPage({ userId }: accountInfoProps) {
  return (
    <Layout>
      <AccountSettingPage />
      <OrderHistoryPage />
    </Layout>
  )
}
