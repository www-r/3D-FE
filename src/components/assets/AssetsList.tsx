import { Asset } from '@/api/assets'
import AssetItem from './AssetItem'

interface Props {
  assets: Asset[]
}

export default function AssetsList({ assets }: Props) {
  return (
    <ul className="flex flex-wrap gap-2 ">
      {assets.map((asset) => (
        <AssetItem key={asset.id} asset={asset} />
      ))}
    </ul>
  )
}

//mt-6 grid gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
