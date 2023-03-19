import React from 'react'
import Card from '../common/Card'


const cards = [
  {
    id:0,
    img:"https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
    title:"Her siparişinize bir kampanya",
    desc:"Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz."
  }, 
  {
    id:1,
    img:"https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
    title:"Dakikalar içinde kapınızda",
    desc:"Getir’le siparişiniz dakikalar içinde kapınıza gelir."
  },
  {
    id:2,
    img:"https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
    title:"Binlerce çeşit mutluluk",
    desc:"Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz."
  }
]
const Cards = () => {
  return (
    <div className="container max-w-[1220px] mx-auto md:mt-36">
      <div className="md:flex justify-around  items-start space-y-10 md:space-y-0">
       {cards.map((card,key) => {
         return <Card card={card} key={key}/>
       })}
      </div>
    </div>
  )
}

export default Cards
