/**
 * 마이페이지 전체 컴포넌트
 */
'use client'
import React, { useState } from 'react'

import MyPageNav from './MyPageNav'
import MyAccountSetting from './setting/MyAccountSetting'
import MyOrderHistory from './orderHistory/MyOrderHistroy'

export default function MyPageAll() {
  const [selectedTab, setSelectedTab] = useState(true)
  console.log({ selectedTab })
  return (
    <>
      <MyPageNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab ? <MyAccountSetting /> : <MyOrderHistory />}
    </>
  )
}
