import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './AboutServices.css';
const AboutServices = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 768, 
              settings: {
                slidesToShow: 1, 
                centerMode: true, 
                centerPadding: '0', 
              },
            },
          ],
      };
    
  return (
    <div className='mt-20 bg-[#FAF5F2] service'>
      <h2 className=' py-7 text-[36px] font-bold text-[#564E4E] text-center'>
        What they say about our services
      </h2>
      <Slider {...settings} className='slider-container lg:ml-24 lg:mr-20 py-11 mb-11'>
        <div className='card w-[400px]'>
          <h2 className='text-[#564E4E] font-semibold mb-3 text-[18px]'>
            Best planning service
          </h2>
          <p>
            I had fantastic experience at shady rhymes with pax <br></br>
            planner, shady rhymes was so helpful and friendly<br></br> and went
            above and beyond to help me configure<br></br> my perfect walk in
            wardobe room.
          </p>
          <div className='flex gap-3 mt-5'>
            <div className='avatar'>
              <div className='w-12 rounded-full'>
                <img src='https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600' />
              </div>
            </div>
            <div>
              <p>John doe</p>
              <p>Project manager of cupalo</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-[#564E4E] font-semibold mb-3 text-[18px]'>
            Flexible and reliable
          </h2>
          <p>
            Terrific work from beginning to end can work any angle<br></br> from
            minimal help to complete project handling<br></br> professional
            without a doubt! Love!
          </p>
          <div className='flex gap-3 mt-11'>
            <div className='avatar'>
              <div className='w-12 rounded-full'>
                <img src='https://images.pexels.com/photos/1382726/pexels-photo-1382726.jpeg?auto=compress&cs=tinysrgb&w=600' />
              </div>
            </div>
            <div>
              <p>Woods Moniq</p>
              <p>Freelancer</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className='text-[#564E4E] font-semibold mb-3 text-[18px]'>
            Solution innovative
          </h2>
          <p>
            "I loved working with Darla shady rhymes for about 2 years<br></br>{' '}
            and highly recommend anyone looking for an interior<br></br>{' '}
            designer agency who brings creativity but designs<br></br> something
            that fits YOU and your style.
          </p>
          <div className='flex gap-3 mt-5'>
            <div className='avatar'>
              <div className='w-12 rounded-full'>
                <img src='https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=600s' />
              </div>
            </div>
            <div>
              <p>Denis Rara</p>
              <p>Architect at BPPLU</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default AboutServices
