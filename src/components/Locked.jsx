import React from 'react'
import { money } from '../assets'

const Locked = () => {
  return (
    <div className="absolute z-50 inset-0 h-full w-full bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col rounded-[10px]">
      <img
        src={money}
        alt="loader"
        className="w-[70px] h-[70px] object-contain"
      />
      <p className="mt-[20px] font-epilogue font-bold text-[14px] text-white text-center">
        Campaign Expired!
      </p>
    </div>
  )
}

export default Locked