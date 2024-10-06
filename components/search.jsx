'use client'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const Search = () => {
    const router = useRouter()
    const searchRef = useRef()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if (!keyword || (keyword.trim() === "")) return
        if (event.key == "Enter") {
            event.preventDefault()
            router.push(`/search/${keyword}`)

        }

    }
    return (
        <div className="relative">
            <input type="text" placeholder="Search" className="ps-12 input input-bordered w-full "
                ref={searchRef} onKeyDown={handleSearch}
            />
            <IoSearchOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
        </div>
    )
}

export default Search