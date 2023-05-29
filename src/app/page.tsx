import { getAllAssets } from '@/api/assets'
import AssetsList from '@/components/assets/AssetsList'
import Drawer from '@/components/common/Drawer'

export default async function HomePage() {
  const assets = await getAllAssets()

  return (
    <div className="flex h-full">
      <section className="px-6 pt-8 w-full">
        <div className="flex h-8">
          <h1 className="text-neutral-navy-100">개별 에셋</h1>
          <span className="text-neutral-navy-200">(713)</span>
        </div>
        <AssetsList assets={assets} />
      </section>
      <Drawer />
    </div>
  )
}
