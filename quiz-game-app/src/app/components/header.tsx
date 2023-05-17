import { Icon } from '@iconify/react'
import ApiController from '@/controllers/apiController'
import React from 'react'

const apiController = new ApiController()

export default function Header(props: any) {
  const { gameData } = props

  return (
    <header className=' w-auto h-auto flex justify-between items-center '>
      <span className='w-auto h-full flex items-center' onClick={() => apiController.logout()}>
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
