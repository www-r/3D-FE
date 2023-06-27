import AssetItem from '../assets/AssetItem'
import { Asset } from '@/api/interface/asset'
import MyAssetItem from './MyAssetItem'

interface Props {
  assets: Asset[] | undefined
}
export default function MyAssetList() {
  // export default function MyAssetList({ assets }: Props) {
  // if (!assets) return null

  return (
    <ul className="mb-[6.4rem] flex flex-wrap gap-2">
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
      <MyAssetItem />
    </ul>
    // <ul className="mb-[6.4rem] flex flex-wrap gap-2">
    //   {assets.map((asset) => (
    //     <AssetItem key={asset.assetId} asset={asset} />
    //   ))}
    // </ul>
  )
}
