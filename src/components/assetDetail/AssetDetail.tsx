'use client'

import { useState } from 'react'
import AssetDetailContent from './AssetDetailContent'
import AssetDetailNav from './AssetDetailNav'
import AssetDetailWishlist from './AssetDetailWishlist'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function AssetDetail() {
  const asset = useSelector((state: RootState) => state.clickedAsset)

  const [selectedTab, setSelectedTab] = useState(true)

  return (
    <div>
      <AssetDetailNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab ? (
        <>
          <div className="h-[52.3rem] bg-bg-2 border-transparent-navy-30 border-b">three.js</div>
          <AssetDetailContent asset={asset} />
        </>
      ) : (
        <div>review</div>
      )}
      <AssetDetailWishlist asset={asset} />
    </div>
  )
}
