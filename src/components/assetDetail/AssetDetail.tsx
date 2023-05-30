'use client'

import { useState } from 'react'
import AssetDetailContent from './AssetDetailContent'
import AssetDetailNav from './AssetDetailNav'

export default function AssetDetail() {
  const [selectedTab, setSelectedTab] = useState(true)

  return (
    <div>
      <AssetDetailNav setSelectedTab={setSelectedTab} />
      {selectedTab ? (
        <>
          <div className="h-[52.3rem] bg-bg-2 border-transparent-navy-30 border-b">three.js</div>
          <AssetDetailContent />
        </>
      ) : (
        <div>review</div>
      )}
    </div>
  )
}
