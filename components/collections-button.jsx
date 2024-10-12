'use client'
import React, { useState, useEffect } from 'react'
import { IoAddOutline } from 'react-icons/io5'

const Collectionsbutton = ({ malId, email }) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleClick = async (event) => {
        event.preventDefault()

        const data = { malId, email }

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
                    <button className='btn btn-disabled'>
                        Collection Added
                    </button>
                    :
                    <button onClick={handleClick}
                        className='btn rounded-md px-4 py-2 border-0 bg-lime-300 hover:bg-lime-200 text-gray-900 font-semibold text-sm sm:text-md'>
                        <IoAddOutline size={15} /> Add to Collections
                    </button>
            }
        </>
    )
}

export default Collectionsbutton
