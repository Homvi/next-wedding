import React from 'react'
import kissOnHead from "../public/assets/img/kissOnHead.jpg"
import Image from 'next/image'

const OurStory = () => {
    return (
        <section className=' py-10 w-[95vw] border-b-4 border-[#ffbd59] md:border-[#faf8ebc3] min-h-screen  items-center  text-center flex flex-col' >
            <h1 className='luthier-bold text-3xl md:text-4xl mt-3  tracking-wider text-center uppercase' >A mi kis<br /> történetünk...</h1>
            <div className="flex w-[100%] justify-around p-5 items-center ">
                <div className="image-container">
                    <div className="relative  hidden rounded-sm mx-auto md:block overflow-y-hidden w-[55vh]">
                        <Image alt='BrigiEsKalmi' src={kissOnHead} layout="responsive" objectFit='cover'
                        />
                    </div>
                </div>
                <div className="flex tracking-wider md:tracking-widest leading-10 text-2xl items-center text-center md:h-[90vh] md:w-[60%] luthier-bold-italic">
                    Minden ember reméli és tudja, hogy van egy másik fele valahol a világban.
                    Mi megtaláltuk egymást!
                    Megismerkedésünket egy néptáncos rendezvénynek köszönhetjük. Első pillanattól fontos szerepet töltöttünk be a másik életében, mint barátok. Sok-sok éven át
                    sokszor csak a hajnalig tartó beszélgetéseink miatt maradtunk fent, hogy támogassuk és biztassuk egymást.
                    Ám eljött az életünkbe az a pillanat amikor már mindketten másképp gondoltunk a másikra.
                    Barátságunkat felváltotta a szerelem.
                </div>
            </div>
        </section>
    )
}

export default OurStory