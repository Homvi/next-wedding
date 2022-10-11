import React from 'react'
import CountdownTimer from "../components/CountdownTimer"

const VerifyedHero = () => {
    return (
        <div className='relative  text-[#fdfbf7] flex flex-col h-screen z-20 w-screen items-center justify-center' >
            <h3 className=' max-w-[500px]  drop-shadow-xl parisienne text-5xl mb-3 flex text-center p-2 luthier-regular' >Brigi & Kálmi</h3>
            <div className="felx text-3xl luthier-regular justify-center">2023.08.26</div>
            <CountdownTimer countdownTimerstampMs={1693045620000} />
        </div>
    )
}

export default VerifyedHero