import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import leaf_white from "../public/assets/icon/level_feher.svg"
import leaf_green from "../public/assets/icon/level_zold.svg"

const Success = () => {
    return (
        <div className='flex luthier-regular felx-col tracking-wider md:tracking-widest leading-loose h-screen w-screen text-[#62622a] bg-[#faf8eb] md:bg-[#62622a]/70 justify-center items-center  fixed top-0 left-0 ' >
            <div className=" px-12 py-5">
                <div className="text-center text-5xl ">
                    Sikeres <br /> visszajelzés!
                </div>
                <div className=" hidden  mb-10 md:flex flex-col md:flex-row justify-center h-10 w-[100%]">
                    <Image width={130} src={leaf_white} />
                </div>
                <div className="flex  md:hidden mb-10 flex-col md:flex-row justify-center h-10 w-[100%]">
                    <Image width={130} src={leaf_green} />
                </div>
                <div className="text-center mt-5">
                    <Link className='m-5' href="/">
                        <a className=' text-4xl text-center' >Várunk szeretettel!</a>
                    </Link>
                </div>
                <div className="text-center mt-5">
                    <Link className='m-5' href="/">
                        <a className='underline text-lg' >Vissza a főoldalra</a>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Success