import React from 'react'
import kissOnHead from "../public/assets/img/kissOnHead.jpg"
import Image from 'next/image'
import greenLeaves from "../public/assets/icon/green/alakzat_green.svg"
import whiteLeaves from "../public/assets/icon/white/alakzat_white.svg"

const OurStory = () => {
    return (
       /*  border-b-4 border-[#ffbd59] md:border-[#faf8ebc3] */
        <section className=' py-10 w-[95vw]  min-h-screen  items-center  text-center flex flex-col' >
            <div className="">
                <div className=" h-full flex flex-col max-w-md relative  mx-auto  ">
                    <h1 className='luthier-bold text-3xl md:text-4xl mt-3   w-fit mx-auto tracking-wider text-center uppercase' >A mi kis<br /> történetünk...</h1>
                    <span className='mt-[-25px] md:mt-[-45px]  md:hidden' ><Image src={greenLeaves} /></span>
                    <span className='mt-[-25px] md:mt-[-45px] hidden md:block ' ><Image src={whiteLeaves} /></span>
                </div>
            </div>
            <div className="flex w-[100%] justify-around p-5 items-center ">
                <div className="image-container">
                    <div className="relative  hidden rounded-sm mx-auto md:block overflow-y-hidden w-[55vh]">
                        <Image alt='BrigiEsKalmi' src={kissOnHead} layout="responsive" objectFit='cover'
                        />
                    </div>
                </div>
                <div className="flex tracking-wider md:tracking-widest leading-loose text-2xl items-center text-center md:h-[90vh] md:w-[60%] luthier-italic">
                    Minden ember reméli és tudja, hogy van egy másik fele valahol a világban.
                    Mi megtaláltuk egymást!
                    Megismerkedésünket egy néptáncos rendezvénynek köszönhetjük. Első pillanattól fontos szerepet töltöttünk be a másik életében, mint barátok. Sok-sok éven át
                    sokszor csak a hajnalig tartó beszélgetéseink miatt maradtunk fent, hogy támogassuk és biztassuk egymást.
                    
                </div>
            </div>
        </section>
    )
}

export default OurStory