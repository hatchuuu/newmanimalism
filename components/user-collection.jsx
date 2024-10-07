import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserCollections = () => {
    return (
        <div className='w-full max-h-screen'>
            <div className="flex flex-wrap gap-4 justify-center ">
                <div className='flex border-4 rounded-lg '>
                    <Link href="" className='relative w-64 h-64' >
                        <Image src="" fill alt="" className='rounded-xl'/>
                        <div className='transition-transform duration-1000 ease-out'>
                        <div className='absolute bottom-0 flex justify-center items-center py-2 w-full bg-lime-300'>
                            <h1>Judul</h1>
                            <h1>2021</h1>
                        </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserCollections