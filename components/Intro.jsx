import React from 'react'
import holdingHands from "../public/assets/img/holdingHands.jpg"
import Image from 'next/image'

const Intro = () => {
    return (
        <section className=' py-3 max-h-screen items-center  text-center flex flex-col' >
            <div className="flex w-[90%] custom-border custom-border-top p-5 items-center">
                <div className="text-[#fdfbf7] flex tracking-wider leading-10 text-2xl items-center text-center md:h-[90vh] md:w-[50%] md:p-10 p-1 luthier-bold-italic">
                    Minden kisfiú és kislány megálmodja milyen lesz, ha egyszer neki is eljön a Nagy nap!
                    A mi Nagy napunk 2023. augusztus 26.-a.
                    Osztozzatok örömünkben mikor örök hűséget fogadunk egymásnak!
                    Szeretettel várunk benneteket!
                </div>
                <div className="relative hidden rounded-sm mx-auto md:block overflow-y-hidden w-[55vh]">
                    <Image src={holdingHands} layout="responsive" objectFit='cover'
                    />
                </div>
            </div>
        </section>
    )
}

export default Intro