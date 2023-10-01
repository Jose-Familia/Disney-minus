import React from 'react'
import Disney from './../assets/Images/disney.png'
import Marvel from './../assets/Images/marvel.png'
import NationalG from './../assets/Images/nationalG.png'
import Pixar from './../assets/Images/pixar.png'
import Starwar from './../assets/Images/starwar.png'
 
import StarwarV from './../assets/Videos/star-wars.mp4'
import DisneyV from './../assets/Videos/disney.mp4'
import MarvelV from './../assets/Videos/marvel.mp4'
import NationalGeographicV from './../assets/Videos/national-geographic.mp4'
import PixarV from './../assets/Videos/pixar.mp4'


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:Disney,
            video:DisneyV
        },
        {
            id:2,
            image:Pixar,
            video:PixarV
        },
        {
            id:3,
            image:Marvel,
            video:MarvelV
        },
        {
            id:4,
            image:Starwar,
            video:StarwarV
        },
        {
            id:5,
            image:NationalG,
            video:NationalGeographicV
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' /> 
               
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse