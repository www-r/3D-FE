import { getAllAssets } from '@/api/assets'
import AssetsList from '@/components/assets/AssetsList'

export default async function HomePage() {
  const assets = await getAllAssets()
  console.log(assets)

  return (
    <section className="mx-6 mt-8">
      <div className="flex h-8">
        <h1>개별 에셋</h1>
        <span>(713)</span>
      </div>
      <AssetsList assets={assets} />
    </section>
  )
}
