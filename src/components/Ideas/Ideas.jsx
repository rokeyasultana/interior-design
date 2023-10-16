import React from 'react'
import './Ideas.css'
const Ideas = () => {
  return (
    <div className='container mt-20 grid lg:grid-cols-2  sm:grid-cols-1 md:grid-cols-1 justify-center place-items-center mt-11 lg:ml-[20px]'>
      <div className='lg:ml-[70px]'>
        <h2 className='text-[36px] font-bold text-[#564E4E]'>
          Visualize your ideas with us
        </h2>
        <p className='mt-5'>
          We are ready to help you build and also realize the room design that
          you dream of, with<br></br> our experts and also the best category{' '}
          <br></br>recommendations from us <br></br>
          <br></br>
          Modern<br></br>
        </p>
        <p className='mt-3'>
          Modern design is a term in the design world that refers to a house
          with <br></br>a clean design, simple color choices, the use of
          materials including metal, glass, and steel, and is usually
          accompanied by clean lines.
        </p>
        <p className='mt-3'>Contemporary</p>
        <p className='mt-3'> Minimalis</p>
        <p className='mt-3'> Industrial</p>
        <p className='text-[#F79489] mt-3'>See more catagory</p>
      </div>
      <div>
        <img
          className='rounded-tl rounded-tr rounded-br  w-[500px] h-[400px]'
          src='https://i.ibb.co/fqZ5NC9/image-5.png'
          alt=''
        />
      </div>
    </div>
  )
}

export default Ideas
