import React from 'react'
import holdingHands from "../public/assets/img/holdingHands.jpg"
import Image from 'next/image'

const Intro = () => {
    return (
        <section className=' py-3  items-center text-center flex flex-col bg-[#62622a] ' >
            <div className="flex w-[90%] custom-border">
                <div className="text-[#fdfbf7] flex text-lg md:text-2xl justify-center items-center text-center h-[60vh] md:h-[90vh] md:w-[50%] md:p-10 p-1 luthier-bold-italic">
                    Minden kisfiú és kislány megálmodja milyen lesz, ha egyszer neki is eljön a Nagy nap!
                    A mi Nagy napunk 2023. augusztus 26.-a.
                    Osztozzatok örömünkben mikor örök hűséget fogadunk egymásnak!
                    Szeretettel várunk benneteket!
                </div>
                <div className="relative hidden md:block overflow-y-hidden w-[60vh] p-10 ">
                    <Image src={holdingHands} layout="responsive" objectFit='cover'
                    />
                </div>
            </div>
        </section>
    )
}

export default Intro