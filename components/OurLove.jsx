import React from 'react'
import laugh from "../public/assets/img/laugh.jpg"
import Image from 'next/image'

const OurLove = () => {
    return (
       /*  border-b-4 border-[#ffbd59] md:border-[#faf8ebc3] */
        <section className=' py-5 w-[95vw] min-h-screen  items-center  justify-center text-center flex flex-col' >
            <div className="flex w-[100%] p-5  items-center">
                <div className="flex tracking-wider md:tracking-widest leading-loose text-2xl items-center text-center md:h-[90vh] md:w-[60%] luthier-italic">
                    Ám eljött az életünkbe az a pillanat amikor már mindketten másképp gondoltunk a másikra.
                    Barátságunkat felváltotta a szerelem.
                    Az a szerelem mely életünk során egyszer adódik meg igazán. Szerelmünk első percétől kezdve tudtuk, hogy mi ketten egy családot szeretnénk alkotni melyben a családtagjaink és barátaink is részesei lesznek.
                    Ezért tehát összekötjük életünket meg alapozva családunk bővülését. Bízva abba, hogy együtt éljük le életünket sok élménnyel és örömmel gazdagodva.
                </div>
                <div className="relative hidden rounded-sm mx-auto md:block overflow-y-hidden w-[55vh]">
                    <Image alt='BrigiEsKalmi' src={laugh} layout="responsive" objectFit='cover'
                    />
                </div>
            </div>
        </section>
    )
}

export default OurLove