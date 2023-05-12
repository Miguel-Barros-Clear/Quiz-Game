'use client'

import React from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Game() {

  const [gameData, setGameData] = React.useState({
    questions: [],
    answers: [],
    correctAnswer: '',
    score: 0,
    started: false,
  })

  const [timer, setTimer] = React.useState(60)

  React.useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    }
    if (timer === 0) {
      setGameData({ ...gameData, started: false })
      setTimer(60)
    }
  }, [timer, gameData.started, gameData])

  return (
    <main className='w-screen h-screen text-white px-10 py-10 flex flex-col'>
      <header className=' w-auto h-auto flex justify-between items-center '>
        <span className='w-auto h-full flex items-center'>
          <Icon icon="mdi:logout" className='w-16 h-16 text-[#8663AA] cursor-pointer' />
          <p className='font-semibold'>Exit</p>
        </span>
        {gameData.started && (
          <span className='w-auto h-full flex items-center'>
            <p className='font-semibold'>{timer}s</p>
            <Icon icon="mdi:clock" className='w-16 h-16 text-[#8663AA] ' />
          </span>
        )}
      </header>
      <div className='game w-full h-full flex flex-col items-center justify-center '>
        {!gameData.started && (
          <span className='game-start absolute z-10 flex items-center justify-center flex-col' onClick={() => setGameData({ ...gameData, started: true })}>
            <Icon icon="mdi:play-circle" className='w-36 h-36 text-[#8663AA] cursor-pointer hover:opacity-60 transition-all ease-in-out' />
            <p className='text-[#8663AA] text-2xl font-medium'>Start Game</p>
          </span>
        )}
        {gameData.started && (
          <p className='absolute top-36 text-2xl font-medium'>Your score is: <span className='text-[#8663AA]'>{gameData.score} points</span></p>
        )}
        <span className={`game-content flex flex-row w-1/2 h-4/6 bg-white rounded-xl ${(!gameData.started) ? 'blur-sm' : ''} `}>
          <Image className='absolute -mt-10 -ml-10 w-24 h-24' src='/assets/quiz-logo.png' alt='' width={723} height={1024} />
          <div className='question w-1/2 flex flex-col items-center pt-16'>
            <p className='question-number w-9/12 text-black text-3xl font-medium mb-5'>Question 1/12</p>
            <p className='question-description w-9/12 max-h-56 text-black text-lg font-regular text-ellipsis overflow-hidden'>Answer description?</p>
          </div>
          <div className='answers w-1/2 flex flex-col justify-evenly py-5 items-center'>
            <span className='answer w-11/12 h-10 rounded-lg px-2 flex justify-center items-center text-lg text-[#8663AA] border border-[#8663AA] cursor-pointer hover:bg-[#8663AA] hover:border-0 hover:text-white transition-all ease-in-out duration-300'>Answer</span>
            <span className='answer w-11/12 h-10 rounded-lg px-2 flex justify-center items-center text-lg text-[#8663AA] border border-[#8663AA] cursor-pointer hover:bg-[#8663AA] hover:border-0 hover:text-white transition-all ease-in-out duration-300'>Answer</span>
            <span className='answer w-11/12 h-10 rounded-lg px-2 flex justify-center items-center text-lg text-[#8663AA] border border-[#8663AA] cursor-pointer hover:bg-[#8663AA] hover:border-0 hover:text-white transition-all ease-in-out duration-300'>Answer</span>
            <span className='answer w-11/12 h-10 rounded-lg px-2 flex justify-center items-center text-lg text-[#8663AA] border border-[#8663AA] cursor-pointer hover:bg-[#8663AA] hover:border-0 hover:text-white transition-all ease-in-out duration-300'>Answer</span>
          </div>
        </span>
      </div>
    </main>
  )
}
