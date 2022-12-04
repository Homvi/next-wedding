import React from 'react'
import MyCarousel from "./MyCarousel"
import leaf_white from "../public/assets/icon/level_feher.svg"
import leaf_green from "../public/assets/icon/level_zold.svg"
import Image from 'next/image'


const Providers = () => {
  return (
    <section className='px-1 mx-auto w-full' >
      <h1 className='mt-5 mb-3 flex justify-center text-3xl md:text-4xl text-center tracking-wider uppercase luthier-regular' >Szolgáltatóink</h1>
      <div className=" cursor-pointer hidden  mb-10 md:flex flex-col md:flex-row justify-center h-10 w-[100%]">
        <Image width={130} src={leaf_white} />
      </div>
      <div className="flex cursor-pointer md:hidden mb-10 flex-col md:flex-row justify-center h-10 w-[100%]">
        <Image width={130} src={leaf_green} />
      </div>
      <MyCarousel />
    </section>
  )
}

export default Providers