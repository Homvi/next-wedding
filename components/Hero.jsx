import React from 'react'
import Image from 'next/image'
import coverDesk from "../public/assets/img/hero-desktop.jpg"
import coverMobile from "../public/assets/img/hero-mobile.jpg"

const Hero = () => {
    return (
        <>
            {/*  access code */}
            <div className='relative  text-[#fdfbf7] flex flex-col h-screen z-20 w-screen items-center justify-center' >
                <h3 className='text-xl  drop-shadow-xl flex text-center p-2 luthier-regular' >Ide írhatod a meghívón található QR kód alatti számsort a belépéshez</h3>
                <input type="text" className='border-2 border-[#fdfbf7] m-2 rounded-xl bg-transparent px-2 ' />
                <button className='luthier-regular px-2 bg-[#fdfbf7] text-[#ffbd59] rounded-xl'>Küldés</button>
            </div>

            

            {/*  Desktop bcg */}
            <div className="absolute hidden lg:block top-0 left-0 h-screen overflow-y-hidden w-screen ">
                <Image src={coverDesk} layout="responsive" objectFit='cover'
                    priority />
            </div>

            {/*  Phone bcg */}
            <div className="absolute  lg:hidden top-0 left-0 h-screen overflow-y-hidden w-screen ">
                <Image src={coverMobile} layout="fill" objectFit='cover'
                    priority />
            </div>

            {/* Overlay */}
            <div className="absolute bg-white/[0.14] z-10 top-0 left-0 h-screen w-screen" ></div>
        </>
    )
}

export default Hero