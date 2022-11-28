import React from 'react'
import leaf from "../public/assets/icon/leaf.svg"
import Link from 'next/link'
import Image from 'next/image'

const ToImages = () => {
    return (
        <section className=' py-5   items-center w-[95vw] text-center flex flex-col' >
            <h1 className='mt-3 mb-0 uppercase luthier-bold text-3xl md:text-4xl tracking-wider' >  <Link href="/gallery">Képtár</Link></h1>

            <Link href="/gallery">
                <div className="flex cursor-pointer flex-col md:flex-row justify-center h-20 w-[100%]">
                    <Image width={130} src={leaf} />
                </div>
            </Link>
        </section>
    )
}

export default ToImages