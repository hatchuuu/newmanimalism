'use client'
import React, { useState } from 'react'
import YouTube from 'react-youtube'
import { IoChevronForwardOutline, IoPlayCircleOutline } from 'react-icons/io5'

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen((prevOpen) => !prevOpen)
    }

    const option = {
        height: '120',
        width: '220',
    }

    return (
        <>
            <button type="button" onClick={handleClick} className={` md:block hidden mb-2 p-3 text-gray-900 rounded-md bg-lime-300 `}>
                {
                    isOpen ?
                        <IoChevronForwardOutline size={30} /> 
                        : 
                    
                        <IoPlayCircleOutline size={30} /> 
                        
                }
            </button>
            <div className={`flex justify-center w-max h-max ${isOpen ? 'md:block' : 'md:hidden'}`}>
                <div className=' w-max h-max border p-2 rounded-md border-white'>
                    <YouTube
                        videoId={youtubeId}
                        onReady={(event) => event.target.pauseVideo()}
                        className=''
                        opts={option}
                    />
                </div>
            </div>
        </>
    )
}

export default VideoPlayer