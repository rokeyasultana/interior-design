import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
const Room = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-2  sm:grid-cols-1 md:grid-cols-1 justify-center place-items-center mt-11 ml-7 mr-7'>
        <div>
          <img
            className='rounded w-[500px] h-[400px]'
            src='https://i.ibb.co/jhVtDK8/image-11.png'
            alt=''
          />
        </div>
        <div className=''>
          <h2 className='text-[36px] font-bold text-[#564E4E]'>
            Make your room feel homey
          </h2>
          <p className=' mt-5 '>
            We help people not only to make the room at home better, but we help
            people to feel a<br></br> more homey and comfortable room, you don’t
            have to worry about the result because of<br></br> these interiors
            are made by people who are professionals in their dields with an
            elegant <br></br>and lucuriois style and with premium quality
            materials
          </p>
          <p className='mt-5'>
            Contact us if you are interested in working with us
          </p>

          <div className='flex gap-10 mt-11 border-2 border-[#FADCD9] rounded-full w-[400px] h-[60px]'>
            <p className='text-[#F79489] text-xl px-3 py-3 ml-9'>
              Insert your email address
            </p>
            <p>
              <BsArrowRightCircleFill
                className='mt-4'
                color='#F79489'
                size='25px'
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room
