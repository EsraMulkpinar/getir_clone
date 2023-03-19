import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram} from "react-icons/bs"
import {BiGlobe} from "react-icons/bi"
import { current } from '@reduxjs/toolkit'

const Footer = () => {
  return (
    <div className='container max-w-[1220px] mx-auto mt-36'>
      <div className="md:flex block justify-between md:items-start border-b-[1px] pb-3 ml-5 lg:ml-0 border-cardbgColor">
        <div className="flex flex-col">
          <div className="text-lg text-primaryColor font-normal">Getir'i indirin!</div>
          <div className="flex flex-col ">
                <a href="/" className='my-2'>
                  <img className='' src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                </a>
                <a href="/" className='my-2'>
                  <img className='' src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                </a>
                <a href="/" className='my-2'>
                  <img className='' src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-lg text-primaryColor font-normal">Getir'i keşfedin</div>
          <div className="flex flex-col  ">
                <a href="/" className='my-2 text-textBlackColor text-sm'>Hakkımızda</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>Kariyer</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>Teknoloji Kariyerleri</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>İletişim</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>Sosyal Sorumluluk Projeleri</a>
               
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-lg text-primaryColor font-normal">Yardıma mı ihtiyacınız var?</div>
          <div className="flex flex-col  ">
                <a href="/" className='my-2 text-textBlackColor text-sm'>Sıkça Sorulan Sorular</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>Kişisel Verilerin Korunması</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>Gizlilik Politikası</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>Kullanım Koşulları</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>Çerez Politikası</a>
               
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-lg text-primaryColor font-normal">İş Ortağımız Olun</div>
          <div className="flex flex-col  ">
                <a href="/" className='my-2 text-textBlackColor text-sm'>Bayimiz Olun</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>Deponuzu Kiralayın</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>GetirYemek Restoranı Olun</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>GetirÇarşı İşletmesi Olun</a>
                <a href="/" className='my-2 text-textBlackColor text-sm'>Zincir Restoranlar</a>
               
          </div>
        </div>
        <div className="flex flex-col">
          <a href="/" className='w-20 h-24 mt-2'>
          <img src="https://cdn.getir.com/getirweb-images/common/etbis.png" alt="/" />

          </a>
        </div>
        
        
        
      </div>
      
     <div className="flex items-center md:justify-between flex-col md:flex-row justify-center my-7">
     <div className="flex">
      <div className="text-xs font-normal text-footerTextColor">© 2023 Getir</div>
      <div className="ml-7">
        <ol className='list-disc text-xs font-normal text-footerTextColor'>
          <li className='list-item text-xs font-normal text-primaryColor'>Bilgi Toplumu Hizmetleri</li>
        </ol>
      </div>
      </div>
      <div className="flex space-x-4 text-textGrayStormColor items-center">
        <button className=' border-cardbgColor p-1 outline-none rounded-lg
        hover:bg-cardbgColor hover:text-textPurpleColor'>
        <BsFacebook color={current} size={20}/>
        </button>
        <button className=' border-cardbgColor p-1 outline-none rounded-lg
        hover:bg-cardbgColor hover:text-textPurpleColor'>
          <BsTwitter size={20}/>
        </button>
        <button className=' border-cardbgColor p-1 outline-none rounded-lg
        hover:bg-cardbgColor hover:text-textPurpleColor'>
         <BsInstagram size={20}/>
        </button>
        <button className="flex items-center space-x-1 border-[1px] border-cardbgColor p-1 outline-none rounded-lg
        hover:bg-cardbgColor hover:text-textPurpleColor">
        <BiGlobe size={20}/>
        <span className='text-sm px-1'>Türkçe (TR)</span>
        </button>
       
      </div>
     </div>
     
    </div>
  )
}

export default Footer