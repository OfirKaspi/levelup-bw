import React, { ReactNode } from 'react'

interface IphoneContainerProps {
    children: ReactNode
}

const IphoneContainer = ({ children }: IphoneContainerProps) => {
    return (
        <div className="relative flex-1 w-full max-w-[270px] aspect-[9/16] mx-auto">
            {/* Top center notch/speaker */}
            <div className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[30%] h-[6px] z-30 bg-gray-700 rounded-md shadow-md" />

            {/* Right side power button - positioned outside the container */}
            <div className="absolute top-[30%] -right-[3px] w-[8px] h-[15%] z-[-10] bg-gray-700 rounded-r-md" />

            {/* Left side buttons - positioned outside the container */}
            {/* Volume up button */}
            <div className="absolute top-[20%] -left-[3px] w-[8px] h-[8%] z-[-10] bg-gray-700 rounded-l-md" />
            {/* Volume down button */}
            <div className="absolute top-[31%] -left-[3px] w-[8px] h-[9%] z-[-10] bg-gray-700 rounded-l-md" />
            {/* Mute switch */}
            <div className="absolute top-[40%] -left-[3px] w-[8px] h-[9%] z-[-10] bg-gray-700 rounded-l-md" />
            
            {/* Screen container - just the visual frame */}
            <div className='overflow-hidden rounded-3xl border-4 border-gray-700 shadow-lg h-full w-full'>
                {children}
            </div>
        </div>
    )
}

export default IphoneContainer