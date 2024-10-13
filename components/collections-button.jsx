'use client'
import React, { useState, useEffect } from 'react'
import { IoAddOutline, IoCheckmark } from 'react-icons/io5'

const Collectionsbutton = ({ animeId, animeTitle, animeImage, userEmail }) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleClick = async (event) => {
        event.preventDefault()

        const data = { animeId, animeTitle, animeImage, userEmail }

        const response = await fetch('/api/v1/collection', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        const collection = await response.json()
        if (collection.isCreated) {
            setIsCreated(true)
        }
    }

    return (
        <>
            {
                isCreated ?
                    <button className='btn btn-disabled sm:rounded-md rounded-full'>
                        <div className="hidden sm:block">Anime Added</div>
                        <div className="sm:hidden block">
                            <IoCheckmark size={15} />
                        </div>
                    </button>
                    :
                    <button onClick={handleClick}
                        className='btn rounded-full sm:rounded-md sm:px-4 sm:py-2 border-0 bg-lime-300 hover:bg-lime-200 text-gray-900 font-semibold text-sm sm:text-base'>
                        <div className="hidden sm:block">
                            <IoAddOutline size={15} /> Add to Collections
                        </div>
                        <div className="sm:hidden block">
                            <IoAddOutline size={15} />
                        </div>


                    </button>
            }
        </>
    )
}

export default Collectionsbutton
