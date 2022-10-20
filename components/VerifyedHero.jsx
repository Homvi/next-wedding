import React from 'react'
import CountdownTimer from "../components/CountdownTimer"
import { Typewriter } from 'react-simple-typewriter'


const VerifyedHero = () => {
    return (
        <div className='relative  text-[#fdfbf7] left-0 flex flex-col h-screen z-20 w-screen items-center justify-center' >
            <h3 className=' max-w-[500px]  drop-shadow-xl parisienne text-5xl lg:text-8xl lg:max-w-none mb-3 flex text-center p-2 luthier-regular' >

                <Typewriter
                    words={['Brigi & Kálmi']}
                    typeSpeed={130}
                    delaySpeed={2000}
                />
            </h3>
            <div className="felx text-3xl lg:text-5xl luthier-regular justify-center">
                <Typewriter
                    words={['2023.08.26']}
                    typeSpeed={130}
                    delaySpeed={2000}
                />
            </div>
            <CountdownTimer countdownTimerstampMs={1693047600000
            } />
        </div>
    )
}

{
    /*    https://www.timestamp-converter.com/*/
}

export default VerifyedHero