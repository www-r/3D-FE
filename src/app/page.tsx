import { getAllAssets } from '@/api/assets'
import AssetDetail from '@/components/assets/AssetDetail'
import AssetsList from '@/components/assets/AssetsList'
import Drawer from '@/components/common/Drawer'

export default async function HomePage() {
  const assets = await getAllAssets()

  return (
    <div className="flex h-full">
      <section className="px-[23px] pt-8 w-full">
        <AssetsList assets={assets} />
      </section>
      <div className="sticky top-[7.2rem] h-[calc(100vh-7.2rem)]">
        <Drawer>
          <AssetDetail />
        </Drawer>
      </div>
    </div>
  )
}
