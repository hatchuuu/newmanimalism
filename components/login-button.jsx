import Link from 'next/link'
import React from 'react'
import { getUserSession } from '@/lib/login'
import Image from 'next/image'
import { IoPerson } from 'react-icons/io5'

const LoginButton = async () => {
    const user = await getUserSession()

    return (
        <div>
            {
                !user ?
                    <Link href="/api/auth/signin"
                        className="btn btn-sm p-1 btn-ghost border-gray-200 rounded-full border-[2px] text-base text-gray-200 
                    sm:btn-md sm:rounded-lg">
                        <IoPerson className='sm:text-xl' />
                        <p className='hidden sm:inline'>Sign In</p>
                    </Link>
                    :
                    <div>
                        {/* Dropdown for larger screens */}
                        <div className="hidden md:block dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image
                                        fill
                                        alt="Avatar"
                                        src={user.image}
                                        className="rounded-full"
                                    />
                                </div>
                            </div>

                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 p-4 shadow">
                                <li><Link href={`/user/dashboard`} className="justify-between text-lg">Profile</Link></li>
                                <li><Link href='/api/auth/signout' className="justify-between text-lg">Sign Out</Link></li>
                            </ul>
                        </div>

                        {/* Drawer for smaller screens */}
                        <div className="md:hidden drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer-4">
                                    <div className=" w-8 h-8 rounded-full cursor-pointer">
                                        <Image
                                            fill
                                            alt="Avatar"
                                            src={user.image}
                                            className="rounded-full"
                                        />
                                    </div>
                                </label>
                            </div>

                            <div className="drawer-side">
                                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 text-base-content min-h-full w-40 p-3 flex flex-col justify-between">
                                    {/* Sidebar content here */}
                                    <div>
                                        <li><Link href={`/user/dashboard`}>Profile</Link></li>
                                        <li><Link href='/api/auth/signout'>Sign Out</Link></li>
                                    </div>

                                    {/* User avatar and name at the bottom */}
                                    <li className="mt-auto">
                                        <div className="flex flex-col items-center justify-between">
                                            <div className="rounded-full w-10 h-10">
                                                <Image
                                                    width={250}
                                                    height={250}
                                                    alt="Avatar"
                                                    src={user.image}
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div><p>{user.name}</p></div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
            }

        </div>

    )
}

export default LoginButton