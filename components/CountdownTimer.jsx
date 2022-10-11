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
        <div className="flex justify-center bg-black p-2">
            <span>{remainingTime.days}</span>
            <span>:</span>
            <span>{remainingTime.hours}</span>
            <span>:</span>
            <span>{remainingTime.minutes}</span>
            <span>:</span>
            <span>{remainingTime.seconds}</span>
        </div>
    )
}

export default countDownTimer