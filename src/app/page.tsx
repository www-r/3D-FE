import { getAssets } from '@/api/service/asset'
import AssetDetail from '@/components/assetDetail/AssetDetail'
import AssetList from '@/components/assets/AssetList'
import IndividualAsset from '@/components/assets/IndividualAsset'
import Drawer from '@/components/common/Drawer'
import Footer from '@/components/common/Footer'
import Layout from '@/components/common/Layout'

export default function HomePage() {
  return (
    <Layout>
      <div className="flex">
        <div className="h-[100%] w-full">
          <IndividualAsset />
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
