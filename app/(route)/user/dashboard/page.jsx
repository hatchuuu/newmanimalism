import React from 'react'
import { getUserSession } from '@/lib/login'
import Image from 'next/image'
import Link from 'next/link'

const DashboardPage = async () => {
    const user = await getUserSession()

    return (
        <div className=' mx-4 md:mx-10 mt-20 mb-10 sm:mb-0'>
            <div className="md:max-h-screen w-full">
                <div className="border-4 border-white p-10 mb-10 rounded-2xl">
                    <div className='flex justify-center gap-4 items-center mb-10'>
                        <div className='w-64 h-64 rounded-full relative'>
                            <Image src={user.image} alt={user.name} fill className='rounded-full' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1>Nama : <span className='font-bold'>{user.name}</span></h1>
                            <h1>Email : <span className='font-bold'>{user.email}</span></h1>
                        </div>
                    </div>
                    <div className='flex mb-10 gap-3 justify-center'>
                        <Link
                            href='/user/collections'
                            className='btn bg-lime-300 text-gray-900 hover:text-lime-300 hover:bg-gray-900'>
                            Collections
                        </Link>
                        <Link
                            href='/user/comments'
                            className='btn bg-lime-300 text-gray-900 hover:text-lime-300 hover:bg-gray-900'>
                            Comments
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage