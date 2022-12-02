import React, { useEffect, useState } from 'react'
import { getRemainingTimeUntilMsTimestamp } from "./utils/CountownTimerUtils"
import { motion, AnimatePresence } from "framer-motion"

const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
}

const countDownTimer = ({ countdownTimerstampMs }) => {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimerstampMs);
        }, 1000);

        return () => clearInterval(intervalId)
    }, [countdownTimerstampMs])


    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 2,
                    y: { duration: 2 },
                    opacity: { duration: 2 },
                    default: { ease: 'easeInOut' }
                }}
            >
                <div className="flex justify-center prata pb-2 lg:text-xl">
                    <span>{remainingTime.days}</span>
                    <span className='leading-[23px]  px-[2px]' >&nbsp;nap &nbsp;:&nbsp; </span>
                    <span className='two-numbers text-center'>{remainingTime.hours}</span>
                    <span className='leading-[23px]  px-[2px]' >&nbsp;óra &nbsp;:&nbsp; </span>
                    <span className='two-numbers  text-center' >{remainingTime.minutes} </span>
                    <span className='leading-[23px]  px-[2px]' >&nbsp;perc &nbsp;:&nbsp; </span>
                    <span className='two-numbers  text-center' >{remainingTime.seconds} </span>
                    <span className='leading-[23px]  px-[2px]' >&nbsp;másodperc </span>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default countDownTimer