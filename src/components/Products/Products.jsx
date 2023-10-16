import React from 'react'
import './Products.css'
const Products = () => {
  return (
    <div className='mt-20  container-Product '>
    
        <h2 className='text-center text-[36px] font-bold text-[#564E4E] title'>Featured Product</h2>
     
      <div className='mt-11 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center place-items-center gap-5 lg:ml-20 lg:mr-20'>
        <div >
          <figure className='w-[300px] bg-[#F6F6F6]'>
            <img
              className='w-[251px] h-[300px] '
              src='https://i.ibb.co/QQLrgXd/image-10.png'
              alt='Chair'
            />
          </figure>
          <div className='mt-5 text-left'>
             <h3 className='text-xl mb-3'>Product</h3>
            <p className='mt-2 text-[#C4C4C4]' >Category</p>
            <p className='rating rating-sm mt-2'>
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
                checked
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
                checked
              />
            </p>
            <p className='mt-2'>IDR 795.000</p>
          </div>
        </div>
        <div >
          <figure className='w-[300px] bg-[#F6F6F6]'>
            <img
              className='w-[251px] h-[300px] '
              src='https://i.ibb.co/9ZfvqTR/image-8.png'
              alt='Chair'
            />
          </figure>
          <div className='mt-5 text-left'>
             <h3 className='text-xl mb-3  '>Product</h3>
            <p className='mt-2 text-[#C4C4C4]' >Category</p>
            <p className='rating rating-sm mt-2'>
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
                checked
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
                checked
              />
            </p>
            <p className='mt-2'>IDR 595.000</p>
          </div>
        </div>
        <div >
          <figure className='w-[300px] bg-[#F6F6F6]'>
            <img
              className='w-[251px] h-[300px] '
              src='https://i.ibb.co/sbHrWjj/image-9.png'
              alt='Chair'
            />
          </figure>
          <div className='mt-5 text-left'>
             <h3 className='text-xl mb-3  '>Product</h3>
            <p className='mt-2 text-[#C4C4C4]' >Category</p>
            <p className='rating rating-sm mt-2'>
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
                checked
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
                checked
              />
            </p>
            <p className='mt-2'>IDR 2.555.000</p>
          </div>
        </div>
        <div>
          <figure className='w-[300px] bg-[#F6F6F6]'>
            <img
              className='w-[251px] h-[300px] '
              src='https://i.ibb.co/gP6kjSb/image-7.png'
              alt='Chair'
            />
          </figure>
          <div className='mt-5 text-left'>
             <h3 className='text-xl mb-3  '>Product</h3>
            <p className='mt-2 text-[#C4C4C4]' >Category</p>
            <p className='rating rating-sm mt-2'>
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
                checked
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
              />
              <input
                type='radio'
                name='rating-6'
                className='mask mask-star-2 bg-[#FFCB45]'
                checked
              />
            </p>
            <p className='mt-2'>IDR 1.500.000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
