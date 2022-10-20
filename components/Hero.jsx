import React, { useState } from 'react'
import Image from 'next/image'
import coverDesk from "../public/assets/img/hero-desktop.jpg"
import WrongAccesCode from "./WrongAccesCode"
import coverMobile from "../public/assets/img/hero-mobile.jpg"
import users from "../data/guests"
import VerifyedHero from "../components/VerifyedHero"

const Hero = () => {
    //must to save user to localStore

    const [accessCode, setAccessCode] = useState("")
    const [actualUser, setActualUser] = useState("")
    const [isError, setIsError] = useState(false)
    const [isCounterVisible, setIsCounterVisible] = useState(false)

    const handleSubmit = () => {
        setIsCounterVisible(!isCounterVisible)
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }



    return (
        <>

            <nav className='absolute w-screen z-30 top-0  flex justify-end' >{actualUser && <div className='luthier-regular italic text-[#fdfbf7] drop-shadow-lg  p-1' >Üdv, {actualUser}</div>}</nav>

            {/*  access code */}

            {isCounterVisible ? <VerifyedHero /> : (<div className='relative  text-[#fdfbf7] flex flex-col h-screen z-20 w-screen items-center justify-center md:justify-end md:pb-5' >
                {/* error message */}
                <WrongAccesCode />
                <h3 className='text-xl max-w-[500px]  drop-shadow-xl flex text-center p-2 luthier-regular md:mb-2 ' >Ide írhatod a meghívón található QR kód alatti számsort a belépéshez</h3>
                <input value={accessCode} onKeyPress={e => handleEnter(e)} onChange={e => setAccessCode(e.target.value)} type="text" className='border-4 border-[#fdfbf7]/80 m-2 rounded-xl bg-transparent px-2 md:min-w-[400px] ' />
                {/* submit btn */}
                <button onClick={handleSubmit} className='luthier-bold px-3 bg-[#fdfbf7] text-lg text-[#ffbd59] rounded-xl m-3 '>Küldés</button>
            </div>)}



            {/* hero after identification */}



            {/*  Desktop bcg */}
            <div className="absolute hidden lg:block top-0 left-0 h-screen overflow-y-hidden  w-screen ">
                <Image src={coverDesk} layout="responsive" objectFit='cover'
                />
            </div>

            {/*  Phone bcg */}
            <div className="absolute  lg:hidden top-0 left-0 h-screen overflow-y-hidden w-screen ">
                <Image src={coverMobile} layout="fill" objectFit='cover'
                />
            </div>

            {/* Overlay */}
            <div className="absolute bg-white/[0.0 z-10 top-0 left-0 h-screen w-screen" ></div>
        </>
    )
}

export default Hero