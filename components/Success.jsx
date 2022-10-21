import React from 'react'
import Link from 'next/link'

const Success = () => {
    return (
        <div className='flex luthier-regular felx-col h-screen w-screen justify-center items-center bg-[#62622a] fixed top-0 left-0 text-green-900' >
            <div className="max-w-[400px] rounded-2xl border-white border-4 bg-white/50 px-12 py-5">
                <div className="text-center">
                    Sikeresen elküldted az adatokat!
                </div>
                <div className="text-center mt-5">
                    <Link className='m-5' href="/">
                        <a className='underline' >Vissza a főoldalra</a>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Success