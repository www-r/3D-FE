import { getAssets } from '@/api/service/asset'
import AssetDetail from '@/components/assetDetail/AssetDetail'
import AssetsList from '@/components/assets/AssetsList'
import IndividualAsset from '@/components/assets/IndividualAsset'
import Drawer from '@/components/common/Drawer'
import Footer from '@/components/common/Footer'
import Layout from '@/components/common/Layout'
import PaginationButton from '@/components/common/PaginationButton'
import { useGetAssets } from '@/hooks/useGetAssets'

export default function HomePage() {
  // const { data } = await getAssets(0)

  return (
    <Layout>
      <div className="flex">
        <div className="h-[100%]">
          <section className="min-h-[calc(100vh-12.3rem)] w-full px-[2.3rem] pt-8">
            <IndividualAsset />
          </section>
          <Footer />
        </div>
        <section className="sticky top-[7.2rem] h-[calc(100vh-7.2rem)] ">
          <Drawer>
            <AssetDetail />
          </Drawer>
        </section>
      </div>
    </Layout>
  )
}
