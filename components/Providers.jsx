import React from 'react'
import MyCarousel from "./MyCarousel"


const Providers = () => {
  return (
    <section className='px-1 mx-auto w-full' >
      <h1 className='mt-3 mb-3 flex justify-center text-3xl md:text-4xl text-center tracking-wider uppercase luthier' >Szolgáltatóink</h1>
      <MyCarousel />
    </section>
  )
}

export default Providers