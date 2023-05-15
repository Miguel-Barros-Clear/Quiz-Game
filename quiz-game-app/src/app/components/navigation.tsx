import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export default function Navigation(props: any) {
  const { active } = props

  return (
    <div className=' w-2/12 h-1/6 flex items-center justify-evenly self-center'>
      <Link href='/ranking'>
        <div className={`${(active === 'ranking') ? 'bg-[#8663AA] text-white' : ''} w-[75px] h-[75px] p-3 text-xs font-medium text-[#8663AA] flex flex-col justify-center items-center border-[#8663AA] border rounded-[100%] cursor-pointer transition-all ease-in-out hover:bg-[#8663AA] hover:text-white`}>
          <Icon icon="mdi:trophy" className='w-10 h-10' />
          Ranking
        </div>
      </Link>
      <Link href='/game'>
        <div className={`${(active === 'game') ? 'bg-[#8663AA] text-white' : ''} w-[75px] h-[75px] p-3 text-xs font-medium text-[#8663AA] flex flex-col justify-center items-center border-[#8663AA] border rounded-[100%] cursor-pointer transition-all ease-in-out hover:bg-[#8663AA] hover:text-white`}>
          <Icon icon="mdi:play-circle" className='w-10 h-10 ' />
          Play
        </div>
      </Link>
    </div >
  )
}
