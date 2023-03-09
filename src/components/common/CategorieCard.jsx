import React from 'react'

const CategorieCard = ({categorie}) => {
  return (
    <div><div className="hover:bg-cardbgColor hover:text-brandColor text-textGrayColor font-semibold transition-all duration-200 w-24 h-24 flex flex-col items-center justify-start m-2 rounded-md">
    <a href='/'><img className='w-14 h-14 object-cover rounded-md mt-2' src={categorie.image} alt="" /></a>
    <div className="mt-1">{categorie.name}</div>
  </div></div>
  )
}

export default CategorieCard