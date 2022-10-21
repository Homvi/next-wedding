import React from 'react'

const Loading = () => {
    return (
        <div className="flex absolute top-0 left-0 z-40 h-screen w-screen bg-white  items-center justify-center ">
            <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    )
}

export default Loading