import React from 'react'
import PhoneCode from './PhoneCode'

const LoginCard = () => {
  return (
    <div>
      <div className="flex flex-col  justify-around items-center bg-whitebgColor md:rounded-lg space-y-6 p-4 font-semibold ">
        <div className="text-primaryColor text-base">
          Giriş yap veya kayıt ol
        </div>
        <div className="flex w-full">
        <PhoneCode />
        <input type="tel"  placeholder='Telefon Numarası' className='border-2 border-borderColor h-11 w-full rounded-md ml-2 p-2 focus-visible:outline-primaryColor!'/>
        </div>
        <button className='bg-brandYellowColor py-4 rounded-xl w-full text-sm text-primaryColor'>Telefon Numarası İle Devam Et</button>

      </div>
    </div>
  )
}

export default LoginCard
