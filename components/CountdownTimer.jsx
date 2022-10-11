import React, { useEffect, useState } from 'react'
import { getRemainingTimeUntilMsTimestamp } from "./utils/CountownTimerUtils"
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
        <div className="flex justify-cente prata p-2 lg:text-xl">
            <span>{remainingTime.days}</span>
            <span className='leading-[23px]  px-[2px]' > : </span>
            <span className='two-numbers'>{remainingTime.hours}</span>
            <span className='leading-[23px]  px-[2px]' > : </span>
            <span className='two-numbers' >{remainingTime.minutes}</span>
            <span className='leading-[23px]  px-[2px]' > : </span>
            <span className='two-numbers' >{remainingTime.seconds}</span>
        </div>
    )
}

export default countDownTimer