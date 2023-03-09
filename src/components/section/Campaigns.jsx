import React from 'react'

const Campaigns = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-10  bg-whitebgColor ">
        <div className="container max-w-[1220px] ">
          <div className="ml-2 font-semibold text-sm my-8 text-black">
            Kampanyalar
          </div>
          <div className="flex justify-between items-center">
            <div className="ml-10 flex flex-col justify-around min-h-[180px] items-start">
              <div className="relative top-0 left-0 z-20 text-2xl font-bold text-white">Getir'i indirin!</div>
              <div className="relative top-0 left-0 z-20 text-base font-semibold max-w-sm text-white">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</div>
              <div className="flex space-x-2">
                <a href="/">
                  <img className='relative top-0 left-0 z-20' src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                </a>
                <a href="/">
                  <img className='relative top-0 left-0 z-20' src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                </a>
                <a href="/">
                  <img className='relative top-0 left-0 z-20' src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                </a>
              </div>
            </div>
            <img
              className="bg-primaryColor absolute max-w-[1220px] rounded-2xl"
              src="https://cdn.getir.com/getirweb-images/common/illustration/doodle.png"
              alt=""
            />
            <img
              className="relative  top-0 left-0 z-10 max-h-[259px]"
              src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campaigns
