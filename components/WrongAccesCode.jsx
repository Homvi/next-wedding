import React from 'react'

const WrongAccesCode = () => {
    return (
        <div className='relative luthier-regular max-w-[400px] rounded-3xl m-3  p-1 text-[#ff0000] bg-white/60' >
            <div className=" absolute right-4 top-2 flex justify-end">x</div>
            <div className="flex text-center text-lg py-6 px-2">
                Sajnos helytelenül írtad be a számsort,<br/> kérlek próbáld meg újra!
            </div>
        </div>
    )
}

export default WrongAccesCode