import React, { useState } from 'react'
import Image from 'next/image'
import coverDesk from "../public/assets/img/hero-desktop.jpg"
import coverMobile from "../public/assets/img/hero-mobile.jpg"
import users from "../data/guests"

const Hero = () => {
    //must to save user to localStore

    const [accessCode, setAccessCode] = useState("")
    const [actualUser, setActualUser] = useState("")
    const [isError, setIsError] = useState(false)

    const handleSubmit = () => {
        
    }

    return (
        <>

            <nav className='absolute w-screen z-30 top-0 flex justify-end' >{actualUser && <div className='luthier-regular italic text-[#fdfbf7] drop-shadow-lg  p-1' >Üdv, {actualUser}</div>}</nav>

            {/*  access code */}
            <div className='relative  text-[#fdfbf7] flex flex-col h-screen z-20 w-screen items-center justify-center' >
                <h3 className='text-xl max-w-[500px]  drop-shadow-xl flex text-center p-2 luthier-regular' >Ide írhatod a meghívón található QR kód alatti számsort a belépéshez</h3>
                <input value={accessCode} onChange={e => setAccessCode(e.target.value)} type="text" className='border-4 border-[#fdfbf7] m-2 rounded-xl bg-transparent px-2 ' />
                {/* error message */}
                <div className={isError ? "text-red-600 bg-white rounded-lg px-1 max-w-[500px]  border-red-500 border-2 m-1 text-center" : "text-red-600 bg-white rounded-lg px-1 max-w-[500px]  border-red-500 hidden border-2 m-1 text-center"}>A megadott számsor nem tartozik egyetlen vendéghez sem!</div>
                {/* submit btn */}
                <button onClick={handleSubmit} className='luthier-regular px-2 bg-[#fdfbf7] text-[#ffbd59] rounded-xl'>Küldés</button>
            </div>

            {/* hero after identification */}



            {/*  Desktop bcg */}
            <div className="absolute hidden lg:block top-0 left-0 h-screen overflow-y-hidden w-screen ">
                <Image src={coverDesk} layout="responsive" objectFit='cover'
                />
            </div>

            {/*  Phone bcg */}
            <div className="absolute  lg:hidden top-0 left-0 h-screen overflow-y-hidden w-screen ">
                <Image src={coverMobile} layout="fill" objectFit='cover'
                />
            </div>

            {/* Overlay */}
            <div className="absolute bg-white/[0.14] z-10 top-0 left-0 h-screen w-screen" ></div>
        </>
    )
}

export default Hero