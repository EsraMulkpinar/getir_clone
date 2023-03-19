import React from 'react'

const Card = ({ card }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-36 h-36 ">
        <img className="w-full h-full object-contain" src={card.img} alt="" />
      </div>
      <div className="font-semibold text-primaryColor text-lg mt-6">
        {card.title}
      </div>
      <div className="md:max-w-[380px] text-center text-textGrayStormColor text-base">
        {card.desc}
      </div>
    </div>
  )
}

export default Card
