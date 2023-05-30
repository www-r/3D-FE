import AssetDetailContent from './AssetDetailContent'
import AssetDetailNav from './AssetDetailNav'

export default function AssetDetail() {
  return (
    <div>
      <AssetDetailNav />
      <div className="h-[523px] bg-bg-2 border-transparent-navy-30 border-b">three.js</div>
      <AssetDetailContent />
    </div>
  )
}
