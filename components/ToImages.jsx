import React from 'react'
import leaf from "../public/assets/icon/leaf.svg"
import leaf_white from "../public/assets/icon/level_feher.svg"
import leaf_green from "../public/assets/icon/level_zold.svg"
import Link from 'next/link'
import Image from 'next/image'

const ToImages = () => {
    return (
        <section className=' py-5   items-center w-[95vw] text-center flex flex-col' >
            <h1 className='mt-3 mb-0 uppercase luthier-bold text-3xl md:text-4xl tracking-wider' >  <Link href="/gallery">Képtár</Link></h1>

            <Link href="/gallery">
                <div className=" cursor-pointer hidden  md:flex flex-col md:flex-row justify-center h-10 w-[100%]">
                    <Image width={130} src={leaf_white} />
                </div>
            </Link>
            <Link href="/gallery">
                <div className="flex cursor-pointer md:hidden flex-col md:flex-row justify-center h-10 w-[100%]">
                    <Image width={130} src={leaf_green} />
                </div>
            </Link>
        </section>
    )
}

export default ToImages