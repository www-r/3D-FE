/**
 * 마이페이지 전체 컴포넌트
 */
'use client'
import React, { useState } from 'react'

import MyPageNav from './MyPageNav'
import MyAccountSetting from './setting/MyAccountSetting'
import MyOrderHistory from './orderHistory/MyOrderHistory'

export default function MyPageAll() {
  const [selectedTab, setSelectedTab] = useState(true)
  return (
    <div className="mx-[4.9rem] flex w-full flex-col">
      <MyPageNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab ? <MyAccountSetting /> : <MyOrderHistory />}
    </div>
  )
}
