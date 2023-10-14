import React from 'react'
import { FaSearch } from 'react-icons/fa'
const Banner = () => {
  return (
    <div>
      <div
        className='hero min-h-screen'
        style={{ backgroundImage: 'url(https://i.ibb.co/nfrvy3B/image-3.png)' }}
      >
        <div className='hero-overlay bg-opacity-20'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <h2 className='text-center text-[36px] font-bold text-white mt-[-200px]'>
              Make Your Interior More<br></br> Minimaistic & Modern
            </h2>
            <p className='mt-7 text-center mb-7 text-white'>
              Bringing interiors to life, understanding the person or people
              <br></br> living in a home is far greater need in design.
            </p>
            <div className='bg-white flex items-center space-x-2 mt-4 rounded-full h-[40px] p-2 opacity-40'>
              <input
                type='text'
                placeholder='Search...'
                className='flex-1 border-none outline-none focus:ring-0'
              />
              <FaSearch className='text-gray-500 text-lg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
