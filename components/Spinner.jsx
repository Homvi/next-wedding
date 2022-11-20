import React from 'react'

const Spinner = ({ loadingMessage }) => {
    return (
        <div className='h-screen displa w-screen overflow-hidden flex items-center justify-center fixed top-0 left-0 bg-white/60 text-2xl z-50'>
            <span className="Parisienne-Regular text-[#333]">{loadingMessage}</span>
        </div>
    )
}

export default Spinner