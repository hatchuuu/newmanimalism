'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Loading = () => {
    const router = useRouter()
    return (
        <div className='flex min-h-screen w-full  flex-col justify-center items-center gap-2'>
            <h1 className='text-lime-300 font-semibold text-xl'>Not Found</h1>
            <button onClick={() => router.back()} className='btn btn-ghost text-lime-700 text-md'>
                Kembali
            </button>

        </div>
    )
}

export default Loading