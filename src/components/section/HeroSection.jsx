import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LoginCard from '../common/LoginCard'

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
    
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
  
    ]
  }

  return (
    <div className="relative md:flex hidden before:bg-gradient-to-r before:from-primaryColor  before:to-transparent before:absolute before:inset-0 before:w-full before:z-10">
      <Slider className='h-[500px] md:w-full' {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt="#"
          />
        </div>
        <div className="">
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt="#"
          />
        </div>
      </Slider>
      <div className="container max-w-[1220px] mx-auto flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div className="flex flex-col justify-center items-start">
          <img
            className="min-w-[180px] min-h-[180px]"
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="#"
          />
          <h3 className="text-4xl mt-10 text-white font-semibold">
            Dakikalar içinde <br />
            kapınızda
          </h3>
        </div>
        
        <div className="w-[400px] ">
        <LoginCard />
        </div>
        
      </div>
    </div>
  )
}

export default HeroSection
