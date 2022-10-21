import React from 'react'

const Intro = () => {
    return (
        <section className=' py-3  min-h-screen items-center text-center flex flex-col bg-[#62622a] ' >
            <div className="flex w-[90%] custom-border">
                <div className="text-[#fdfbf7] flex text-lg md:text-2xl justify-center items-center text-center w-[50%] p-20 luthier-bold-italic">
                    Minden kisfiú és kislány megálmodja milyen lesz, ha egyszer neki is eljön a Nagy nap!
                    A mi Nagy napunk 2023. augusztus 26.-a.
                    Osztozzatok örömünkben mikor örök hűséget fogadunk egymásnak!
                    Szeretettel várunk benneteket!
                </div>
                <div className="image-container border-2 h-[500px] m-5 w-[100%]">

                </div>
            </div>
        </section>
    )
}

export default Intro