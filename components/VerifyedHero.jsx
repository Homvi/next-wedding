import React from 'react'
import CountdownTimer from "../components/CountdownTimer"

const VerifyedHero = () => {
    return (
        <div className='relative  text-[#fdfbf7] left-0 flex flex-col h-screen z-20 w-screen items-center justify-center' >
            <h3 className=' max-w-[500px]  drop-shadow-xl parisienne text-5xl lg:text-8xl lg:max-w-none mb-3 flex text-center p-2 luthier-regular' >Brigi & Kálmi</h3>
            <div className="felx text-3xl lg:text-5xl luthier-regular justify-center">2023.08.26</div>
            <CountdownTimer countdownTimerstampMs={1693045620000} />
        </div>
    )
}

export default VerifyedHero