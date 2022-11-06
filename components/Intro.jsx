import React from 'react'
import holdingHands from "../public/assets/img/holdingHands.jpg"
import Image from 'next/image'
import flower1 from "../public/assets/icon/white/virag1.svg"
import flower2 from "../public/assets/icon/white/virag2.svg"
import flower1Green from "../public/assets/icon/green/virag1.svg"
import flower2Green from "../public/assets/icon/green/virag2.svg"

const Intro = () => {
    return (
        <section className=' py-10 relative max-h-[100vh] box-border max-w-[95vw] border-b-4 border-[#ffbd59] md:border-[#faf8ebc3] items-center justify-center text-center flex flex-col' >
            {/* flowers for flip scale-x-[-1] */}
            {/* dekstop */}
            <span className='w-[80px] m-2 hidden md:block absolute bottom-0 left-[-35px] sm:left-[-75px] sm:w-[110px]' ><Image src={flower1} /></span>
            <span className='w-[80px] m-2 hidden md:block absolute rotate-[330deg] top-[30px] right-[-35px] sm:right-[-85px] sm:w-[150px]' ><Image src={flower2} /></span>
            {/* mobile */}
            <span className='w-[60px] m-2 absolute md:hidden bottom-0 left-[-35px] sm:left-[-60px] sm:w-[110px]' ><Image src={flower1Green} /></span>
            <span className='w-[60px] m-2 absolute md:hidden rotate-[330deg] top-[30px] right-[-35px] sm:right-[-75px] sm:w-[150px]' ><Image src={flower2Green} /></span>
            <div className="flex w-[100%]  min-h-[80vh]  p-5 items-center">
                <div className=" flex tracking-wider md:tracking-widest leading-10 text-2xl items-center text-center md:h-[90vh] md:w-[60%] md:p-10 p-1 luthier-bold-italic">
                    Minden kisfiú és kislány megálmodja milyen lesz, ha egyszer neki is eljön a Nagy nap!
                    A mi Nagy napunk 2023. augusztus 26.-a.
                    Osztozzatok örömünkben mikor örök hűséget fogadunk egymásnak!
                    Szeretettel várunk benneteket!
                </div>
                <div className="relative hidden rounded-sm mx-auto md:block overflow-y-hidden w-[55vh]">
                    <Image alt='BrigiEsKalmi' src={holdingHands} layout="responsive" objectFit='cover'
                    />
                </div>
            </div>
        </section>
    )
}

export default Intro