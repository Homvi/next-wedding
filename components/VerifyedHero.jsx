import React from 'react'
import CountdownTimer from "../components/CountdownTimer"
import { motion } from "framer-motion"

let title = "Brigi & Kálmi"
let date = "2023.08.26"

const arrayOfLetters = [];
const arrayOfNumbers = [];

for (let i = 0; i < title.length; i++) {
    const letter = title[i];
    arrayOfLetters.push(letter)
}
for (let i = 0; i < date.length; i++) {
    const letter = date[i];
    arrayOfNumbers.push(letter)
}

const VerifyedHero = () => {
    return (
        <div className='relative  text-[#fdfbf7]  left-0 flex flex-col h-screen z-20 w-screen items-center justify-end md:justify-end pb-52' >
            <div className="flex text-5xl md:text-6xl noto-light mb-10 tracking-widest">
                {arrayOfLetters.map((letter, index) => {
                    return (
                        <motion.div
                            className='opacity-0'
                            key={`letter_index${index}`}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: `${index * 0.1}`,
                                duration: 1

                            }}
                        >
                            {letter}
                        </motion.div>
                    )
                }
                )}
            </div>
            <div className="flex text-4xl md:text-6xl noto-light mb-10">
                {arrayOfNumbers.map((letter, index) => {
                    return (
                        <motion.div
                            className='opacity-0'
                            key={`letter_index${index}`}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: `${index * 0.2}`,
                                duration: 1

                            }}
                        >
                            {letter}
                        </motion.div>
                    )
                }
                )}
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