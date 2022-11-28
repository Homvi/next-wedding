import React from 'react'
import CountdownTimer from "../components/CountdownTimer"
import { motion, AnimatePresence } from "framer-motion"


const VerifyedHero = () => {
    return (
        <div className='relative  text-[#fdfbf7]  left-0 flex flex-col h-screen z-20 w-screen items-center justify-center' >
            <AnimatePresence>
                <div key={1} className="flex justify-center relative w-fit   mb-1">
                    <motion.h3 className='w-0 flex text-5xl top-0 left-0 pb-5 absolute overflow-hidden  justify-start whitespace-nowrap  noto-light text-5x lg:text-8xl'
                        animate={{ width: "fit-content" }}
                        transition={{ duration: 5 }}
                    >Brigi & Kálmi <span className='opacity-0' >,</span>
                    </motion.h3>
                    <div className="w-fit  opacity-0 pb-5 whitespace-nowrap noto-light   text-5xl lg:text-8xl">
                        Brigi & Kálmi &nbsp;
                    </div>
                </div>
                <motion.div className="felx text-3xl lg:text-5xl luthier-regular flex justify-center border-red-500 "
                >
                    {/* date */}
                    <div className=" libre overflow-hidden pb-10 pt-5 text-center justify-center relative top-0 left-0"
                    >
                        <motion.div className="overflow-hidden w-0  absolute"
                            animate={{ width: "fit-content" }}
                            transition={{ duration: 5 }}>
                            2023.08.26
                        </motion.div>
                        <div className="w-fit  opacity-0">
                            2023.08.26
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <CountdownTimer countdownTimerstampMs={1693047600000
            } />
        </div>
    )
}

{
    /*    https://www.timestamp-converter.com/*/
}

export default VerifyedHero