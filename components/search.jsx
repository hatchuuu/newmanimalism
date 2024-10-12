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
        <div className="input input-bordered flex items-center gap-2">
            <input type="text" placeholder="Search" className="grow  "
                ref={searchRef} onKeyDown={handleSearch}
            />
            <IoSearchOutline />
        </div>
    )
}

export default Search