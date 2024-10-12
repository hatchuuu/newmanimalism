'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { IoDocumentTextSharp } from 'react-icons/io5'

const Loading = () => {
    const router = useRouter()
    return (
        <div className='flex min-h-screen w-full  flex-col justify-center items-center gap-4'>
            <IoDocumentTextSharp size={90} className='text-lime-400'/>
            <h1 className='text-lime-300 font-semibold text-xl'>Halaman Tidak Ditemukan</h1>
            <button onClick={() => router.back()} className='btn btn-ghost text-lime-700 text-md'>
                Kembali
            </button>

        </div>
    )
}

export default Loading