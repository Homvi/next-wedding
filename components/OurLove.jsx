import React from 'react'
import laugh from "../public/assets/img/laugh.jpg"
import Image from 'next/image'

const OurLove = () => {
    return (
        <section className=' py-3 max-h-screen items-center  text-center flex flex-col' >
            <div className="flex w-[90%] custom-border  p-5 items-center">
                <div className="text-[#fdfbf7] flex tracking-wider leading-10 text-2xl items-center text-center md:h-[90vh] md:w-[50%] md:p-10 p-1 luthier-bold-italic">
                    Az a szerelem mely életünk során egyszer adódik meg igazán. Szerelmünk első percétől kezdve tudtuk, hogy mi ketten egy családot szeretnénk alkotni melyben a családtagjaink és barátaink is részesei lesznek.
                    Ezért tehát összekötjük életünket meg alapozva családunk bővülését. Bízva abba, hogy együtt éljük le életünket sok élménnyel és örömmel gazdagodva.
                </div>
                <div className="relative hidden rounded-sm mx-auto md:block overflow-y-hidden w-[55vh]">
                    <Image src={laugh} layout="responsive" objectFit='cover'
                    />
                </div>
            </div>
        </section>
    )
}

export default OurLove