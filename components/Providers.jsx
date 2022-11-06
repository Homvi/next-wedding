import Image from 'next/image'
import React from 'react'
import photo from "../public/assets/img/photo.jpg"
import video from "../public/assets/img/video.jpeg"
import bestMan from "../public/assets/img/bestMan.jpg"
import sokoro from "../public/assets/img/sokoro.jpg"
import sokoroHouse from "../public/assets/img/sokoroHouse.jpg"
import band from "../public/assets/img/band.jpg"

const Providers = () => {
  return (
    <section className='border-b-4 py-5 border-[#ffbd59] md:border-[#faf8ebc3]  min-h-[50vh] items-center w-[95vw]  text-center flex flex-col' >
      <h1 className='mt-3 mb-10 text-3xl md:text-4xl tracking-wider uppercase luthier-bold' >Szolgáltatóink</h1>
      <div className="gap-5 grid w-full grid-cols-2 xl:grid-cols-3 p-2 xl:p-0">

        {/* grid element photo*/}
        <div className=" w-full">
          <div className="image-container flex justify-center items-center relative  h-fit w-[100%]">
            <Image
              alt='photo'
              src={photo}
              objectFit="contain"
              widt={500}
            />
          </div>
          <div className="text-center flex items-end justify-center luthier-bold-italic">Zengő Ferenc - fotó</div>
        </div>


        {/* grid element video*/}
        <div className=" w-full">
          <div className="image-container flex justify-center items-center relative  h-fit w-[100%]">
            <Image
              alt='video'
              src={video}
              objectFit="contain"
              widt={500}
            />
          </div>
          <div className="text-center flex items-end justify-center luthier-bold-italic">KuriMedia - videó</div>
        </div>

        {/* grid element best man */}
        <div className=" w-full">
          <div className="image-container flex justify-center items-center relative  h-fit w-[100%]">
            <Image
              alt='best Man'
              src={bestMan}
              objectFit="contain"
              height={507}
            />
          </div>
          <div className="text-center flex items-end justify-center luthier-bold-italic">Papp Ferenc - vőfély</div>
        </div>

        {/* grid element Band*/}
        <div className=" w-full">
          <div className="image-container flex justify-center items-center relative  h-fit w-[100%]">
            <Image
              alt='Band'
              src={band}
              objectFit="contain"
              widt={500}
            />
          </div>
          <div className="text-center flex items-end justify-center luthier-bold-italic">Zé Klub zenekar - zene</div>
        </div>

        {/* grid element sokoro*/}
        <div className=" w-full">
          <div className="image-container flex justify-center items-center relative  h-fit w-[100%]">
            <Image
              alt='sokoro'
              src={sokoro}
              objectFit="contain"
              widt={500}
            />
          </div>
          <div className="text-center flex items-end justify-center luthier-bold-italic">Sokoró fogadó - Lakodalmas helyszín</div>
        </div>

        {/* grid element sokoro house*/}
        <div className=" w-full">
          <div className="image-container flex justify-center items-center relative  h-fit w-[100%]">
            <Image
              alt='sokoro'
              src={sokoroHouse}
              objectFit="contain"
              widt={500}
            />
          </div>
          <div className="text-center flex items-end justify-center luthier-bold-italic">Sokoró fogadó - Lakodalmas helyszín</div>
        </div>



      </div>
    </section>
  )
}

export default Providers