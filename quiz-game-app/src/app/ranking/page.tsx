'use client'
import React from 'react'
import Header from '../components/header'
import Navigation from '../components/navigation'

export default function Ranking() {

  const [ranking, setRanking] = React.useState({
    players: [
      {
        name: 'Jonh',
        postion: 1,
        score: 100,
      },
      {
        name: 'Bryan',
        postion: 2,
        score: 90,
      },
      {
        name: 'Jonh',
        postion: 3,
        score: 80,
      },
      {
        name: 'Ryan',
        postion: 4,
        score: 70,
      },
      {
        name: 'Carlos',
        postion: 5,
        score: 60,
      }
    ]
  })

  return (
    <main className='w-screen h-screen text-white px-10 py-10 flex flex-col' >
      <Header />
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <p className='text-3xl font-semibold mb-5 text-[#8663AA]'>Aqui estão os 5 melhores jogadores</p>
          <table className='w-7/12 h-full text-center mb-5 bg-[#333333] rounded-lg'>
            <thead className='h-auto bg-white '>
              <tr className='text-[#222222] text-xl'>
                <th className='w-1/6 rounded-l-lg'>Position</th>
                <th className='w-1/6'>Name</th>
                <th className='w-1/6 rounded-r-lg'>Score</th>
              </tr>
            </thead>
            <tbody className='mt-5 w-full items-center justify-center'>
              {ranking.players.map((player, index) => (
                <tr key={index} className='w-full text-white hover:bg-[#ffffff40] ease-in-out duration-150 cursor-pointer'>
                  <td className='text-lg'>{player.postion}</td>
                  <td className='text-lg'>{player.name}</td>
                  <td className='text-lg'>{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Navigation active='ranking' />
    </main >
  )
}
