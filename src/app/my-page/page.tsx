/**
 * 마이페이지
 */
import Layout from '@/components/common/Layout'
import MyPageAll from '@/components/myPage/MyPageAll'

export default function MyPage() {
  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-7.2rem)] pt-[2.4rem] text-neutral-navy-100">
        <MyPageAll />
      </div>
    </Layout>
  )
}
