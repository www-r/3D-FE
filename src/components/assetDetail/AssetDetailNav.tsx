'use client'

import { closeDrawer } from '@/store/drawerSlice'
import { useDispatch } from 'react-redux'

export default function AssetDetailNav() {
  const dispatch = useDispatch()

  const handleCloseDrawer = () => {
    dispatch(closeDrawer())
  }

  return (
    <div className="w-full flex h-[50px] text-neutral-200">
      <div className="w-[315px] flex justify-center items-center  border-transparent-navy-30 border-b-[3px] hover:bg-bg-2 hover:border-primary-main">
        <button>Asset Detail</button>
      </div>
      <div className="w-[315px] flex justify-center items-center border-transparent-navy-30 border-b-[3px] hover:bg-bg-2 hover:border-primary-main">
        <button>
          Review <span>(0)</span>
        </button>
      </div>
      <div
        className="w-[80px] flex justify-center items-center  border-transparent-navy-30 border-b-[3px] hover:bg-bg-2 hover:border-primary-main"
        onClick={handleCloseDrawer}
      >
        <button>닫기</button>
      </div>
    </div>
  )
}
