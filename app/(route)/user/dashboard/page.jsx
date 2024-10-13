import React from 'react'
import { getUserSession } from '@/lib/login'
import Image from 'next/image'
import Link from 'next/link'

const DashboardPage = async () => {
    const user = await getUserSession()

    return (
        <div className='sm:mt-2 mt-5 flex justify-center mb-auto '>
            <div className="md:max-h-screen w-3/4">
                <div className="sm:border-4 border-[2px] border-gray-300 sm:p-10 p-4 mb-10 rounded-2xl">
                    <div className='flex sm:flex-row flex-col justify-center sm:gap-4 gap-2 items-center mb-10'>
                        <div className='sm:w-64 sm:h-64 w-32 h-32 rounded-full relative my-5'>
                            <Image src={user.image} alt={user.name} fill className='rounded-full' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-1 sm:flex-row flex-col'>
                                <h1 className='sm:text-base text-sm'>Nama: </h1>
                                <h1 className='w-full sm:text-base text-sm font-bold'>{user.name}</h1>
                            </div>
                            <div className='flex gap-1 sm:flex-row flex-col'>
                                <h1 className='sm:text-base text-sm'>Email: </h1>
                                <h1 className='sm:text-base text-sm font-bold'>{user.email}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex mb-10 gap-3 justify-center'>
                        <Link
                            href='/user/collections'
                            className='btn btn-sm sm:btn-md sm:text-base text-sm bg-lime-300 text-gray-900 hover:text-lime-300 hover:bg-gray-900'>
                            Collections
                        </Link>
                        <Link
                            href='/user/comments'
                            className='btn btn-sm sm:btn-md sm:text-base text-sm bg-lime-300 text-gray-900 hover:text-lime-300 hover:bg-gray-900'>
                            Comments
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage