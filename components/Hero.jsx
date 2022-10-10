import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='flex flex-col h-screen w-screen items-center justify-center' >
                <h3 className='flex text-center p-2 luthier-regular' >Ide írhatod a meghívón található QR kód alatti számsort a belépéshez</h3>
                <input type="text" className='border-2 m-2' />
            </div>
        </>
    )
}

export default Hero