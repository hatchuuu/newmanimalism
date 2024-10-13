import Link from "next/link"
import Search from "@/components/search"
import Image from "next/image"
import LoginButton from "@/components/login-button"
import { IoPerson } from "react-icons/io5"

const NavigationBar = () => {
    return (
        <div className="
        flex px-2 py-4 bg-base-100 gap-1 w-full justify-between items-center fixed top-0 z-50
        sm:px-20 sm:py-6
        ">
            <Link href="/"
                className="btn btn-ghost text-blue-50 p-1 text-xl btn-sm 
                sm:btn-md 
            ">
                <Image src="/manimalism.png" width={30} height={30} alt="manimalism logo" className="scale-75" />
                <p className="sm:text-xl text-sm">MANIMALISM</p>
            </Link>


            <div className="flex justify-end items-center gap-2 
            sm:gap-4
            ">
                <Search />
                <LoginButton />

            </div>




        </div>
    )
}

export default NavigationBar