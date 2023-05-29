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
      <div className="sticky top-0 h-full">
        <Drawer>
          <AssetDetail />
        </Drawer>
      </div>
    </div>
  )
}
