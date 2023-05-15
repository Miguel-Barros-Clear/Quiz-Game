import { Icon } from '@iconify/react'
import React from 'react'

export default function Header(props: any) {
  const { gameData, setGameData } = props

  return (
    <header className=' w-auto h-auto flex justify-between items-center '>
      <span className='w-auto h-full flex items-center'>
        <Icon icon="mdi:logout" className='w-16 h-16 text-[#8663AA] cursor-pointer' />
        <p className='font-semibold'>Exit</p>
      </span>
      {gameData?.started && (
        <span className='w-auto h-full flex items-center'>
          <p className='font-semibold'>{gameData.timer}s</p>
          <Icon icon="mdi:clock" className='w-16 h-16 text-[#8663AA] ' />
        </span>
      )}
    </header>
  )
}
