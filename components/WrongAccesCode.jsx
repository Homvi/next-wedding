import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const WrongAccesCode = ({ unvisible }) => {
    return (
        <div className={unvisible ? 'relative hidden  luthier-regular max-w-[400px] rounded-3xl m-3  p-1 text-[#ff0000] bg-white/60' : 'relative luthier-regular max-w-[400px] rounded-3xl m-3  p-1 text-[#ff0000] bg-white/60'} >
            {/* <div className=" absolute cursor-pointer right-4 top-2 flex justify-end"><AiOutlineClose /></div> */}
            <div className="flex text-center text-lg py-6 px-4">
                Sajnos helytelenül írtad be a számsort,<br /> kérlek próbáld meg újra!
            </div>
        </div>
    )
}

export default WrongAccesCode