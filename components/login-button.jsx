import Link from 'next/link'
import React from 'react'
import { getUserSession } from '@/lib/login'
import Image from 'next/image'

const LoginButton = async () => {
    const user = await getUserSession()

    return (
        <div>
            {
                !user ?
                    <Link href="/api/auth/signin" className="btn btn-ghost text-base ">Sign In</Link>
                    :
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    fill
                                    alt="Avatar Github"
                                    src={user.image}
                                    className='rounded-full'
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-48 p-4 shadow">
                            <li><Link href={`/user/dashboard`} className="justify-between text-lg">Profile</Link></li>
                            <li><Link href={`/`} className="justify-between text-lg">Setting</Link></li>
                            <li><Link href='/api/auth/signout' className="justify-between text-lg">Sign Out</Link></li>
                        </ul>
                    </div>
            }

        </div>

    )
}

export default LoginButton