import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../reducers/categoriesReducer'
import CategorieCard from '../common/CategorieCard'
const Categories = () => {
  
  const dispatch = useDispatch()

  const {categories} = useSelector((state) => state.categories)
  console.log(categories);
  useEffect(() => {
   dispatch(getCategories())// eslint-disable-next-line
  },[]) 
  
  return (
    <div className="relative flex flex-col items-center before:shadow-[2px_20px_38px_-40px_rgba(88,63,181,0.8)] before:absolute before:inset-0 pb-10">
      <div className="container max-w-[1220px] ">
      <div className="ml-2 mt-6 font-semibold text-sm text-black">Kategoriler</div>
      <div className='flex flex-wrap justify-start'>
      {categories?categories.map((categorie,key) => {
        return (
         <div className="flex flex-wrap"  key={key}>
           <CategorieCard categorie={categorie}/>
           <CategorieCard categorie={categorie}/>
         </div>
          
        )
      }):null}
    
      
      
    </div>
   
    </div>
    </div>
  )
}

export default Categories