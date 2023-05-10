"use client"; // This file will be parsed as a client-side script

import React, { useState } from 'react';
import Image from 'next/image'

export default function Register() {

  const [userData, setUserData]: any = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      label: 'Username',
      type: 'text',
      placeholder: 'Jonh',
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Jonh@email.com',
    },
    {
      label: 'Password',
      type: 'password',
      placeholder: '*********',
    },
    {
      label: 'Confirm Password',
      type: 'password',
      placeholder: '*********',
    },
  ]

  return (
    <main className='container flex w-screen h-screen'>
      <div className='left flex w-1/2 h-full overflow-hidden'>
        <div className='absolute -z-10 h-full'>
          <svg className='object-cover h-full' viewBox="0 0 723 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H667.88C667.88 0 730.03 173 596.454 216C509.807 243.893 606.934 384.662 667.88 434.5C884.941 612 369.189 793.5 596.454 853C823.719 912.5 667.88 1024 667.88 1024H0V0Z" fill="white" />
          </svg>
        </div>
        <div className='w-2/3 h-full flex flex-col justify-center items-center'>
          <p className='text-3xl font-semibold'>Quiz Game</p>
          <Image className='w-36 h-36' src='/assets/quiz-logo.png' alt='' width={723} height={1024} />
          <p className='text-1xl opacity-70'>Let us know your reasoning</p>
        </div>
      </div>
      <div className='right flex flex-col items-center justify-center w-1/2 h-full'>
        <span className='text-white text-sm text-center font-medium py-1 bg-[#8663AA] w-32 rounded-t-lg opacity-70 cursor-pointer transition-all ease-in-out hover:opacity-100'>Login</span>
        <div className='modal w-4/6 h-4/5 rounded-xl bg-white'>
          <div className="modal-header">
            <h1 className="modal-title w-full h-10 flex items-center justify-center text-2xl font-semibold">Register to play</h1>
          </div>
          <div className="modal-body flex justify-center">
            <form className="w-9/12 flex center flex-col mt-2">
              {inputs.map((input, index) => (
                <div key={index}>
                  <label className="text-sm font-semibold mt-4">{input.label}</label>
                  <input className="w-full h-12 px-5 outline-none text-white font-medium bg-[#BDBDBD] rounded-lg transition-all ease-in-out placeholder:text-white placeholder:opacity-60 focus:bg-[#9F9F9F] hover:opacity-90 mb-5" type={input.type} placeholder={input.placeholder} onChange={(e) => {
                    setUserData({ ...userData, [input.label.toLowerCase()]: e.target.value })
                  }} value={userData[input.label.toLowerCase()]} />
                </div>
              ))}
              <svg className='mt-2 w-14 self-center cursor-pointer transition-all ease-in-out hover:ml-5' width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37 73.5C31.9162 73.5 27.1388 72.5347 22.6675 70.6041C18.1962 68.6735 14.3069 66.0557 10.9994 62.7506C7.69187 59.4431 5.07405 55.5537 3.1459 51.0825C1.21775 46.6112 0.25245 41.8337 0.25 36.75C0.25 31.6662 1.2153 26.8888 3.1459 22.4175C5.0765 17.9462 7.69432 14.0569 10.9994 10.7494C14.3069 7.44187 18.1962 4.82405 22.6675 2.8959C27.1388 0.96775 31.9162 0.00245 37 0C42.0837 0 46.8612 0.9653 51.3325 2.8959C55.8037 4.8265 59.6931 7.44432 63.0006 10.7494C66.3081 14.0569 68.9272 17.9462 70.8578 22.4175C72.7884 26.8888 73.7524 31.6662 73.75 36.75C73.75 41.8337 72.7847 46.6112 70.8541 51.0825C68.9235 55.5537 66.3057 59.4431 63.0006 62.7506C59.6931 66.0581 55.8037 68.6772 51.3325 70.6078C46.8612 72.5384 42.0837 73.5024 37 73.5ZM37.735 40.425L34.4275 43.7325C33.7537 44.4062 33.4169 45.2637 33.4169 46.305C33.4169 47.3462 33.7537 48.2037 34.4275 48.8775C35.1012 49.5512 35.9587 49.8881 37 49.8881C38.0412 49.8881 38.8987 49.5512 39.5725 48.8775L49.1275 39.3225C49.8625 38.5875 50.23 37.73 50.23 36.75C50.23 35.77 49.8625 34.9125 49.1275 34.1775L39.5725 24.6225C38.8987 23.9487 38.0412 23.6119 37 23.6119C35.9587 23.6119 35.1012 23.9487 34.4275 24.6225C33.7537 25.2962 33.4169 26.1537 33.4169 27.195C33.4169 28.2362 33.7537 29.0938 34.4275 29.7675L37.735 33.075H25.975C24.9337 33.075 24.0603 33.4278 23.3547 34.1334C22.6491 34.839 22.2975 35.7112 22.3 36.75C22.3 37.7912 22.6528 38.6647 23.3584 39.3703C24.064 40.0759 24.9362 40.4274 25.975 40.425H37.735Z" fill="#8663AA" />
              </svg>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
