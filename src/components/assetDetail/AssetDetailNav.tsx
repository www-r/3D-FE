'use client'

import { closeDrawer } from '@/store/drawerSlice'
import { useDispatch } from 'react-redux'

interface Props {
  setSelectedTab: (prev: boolean) => void
}

export default function AssetDetailNav({ setSelectedTab }: Props) {
  const dispatch = useDispatch()

  const handleCloseDrawer = () => {
    dispatch(closeDrawer())
  }

  return (
    <div className="w-full flex h-[50px] text-neutral-200">
      <div
        onClick={() => setSelectedTab(true)}
        className="w-[315px] flex justify-center items-center  border-transparent-navy-30 border-b-[3px] hover:bg-bg-2 hover:border-primary-main"
      >
        <button>Asset Detail</button>
      </div>
      <div
        onClick={() => setSelectedTab(false)}
        className="w-[315px] flex justify-center items-center border-transparent-navy-30 border-b-[3px] hover:bg-bg-2 hover:border-primary-main"
      >
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
