import React from 'react'
import PhoneCode from './PhoneCode'

const LoginCard = () => {
  return (
    <div>
      <div className="flex flex-col h-52 justify-around items-center bg-whitebgColor w-[400px] rounded-lg p-4 font-semibold ">
        <div className="text-primaryColor text-base">
          Giriş yap veya kayıt ol
        </div>
        <div className="flex">
        <PhoneCode />
        <input type="tel"  placeholder='Telefon Numarası' className='border-2 border-borderColor h-11 w-full rounded-md ml-2 p-2 focus-visible:outline-primaryColor!'/>
        </div>
        <button className='bg-brandYellowColor py-4 rounded-xl w-[336px] text-sm text-primaryColor'>Telefon Numarası İle Devam Et</button>

      </div>
    </div>
  )
}

export default LoginCard
