import Link from "next/link"
import Search from "@/components/search"
import Image from "next/image"
import LoginButton from "@/components/login-button"

const NavigationBar = () => {
    return (
        <div className="navbar justify-between bg-base-100 fixed z-10 sm:gap-0 gap-1 sm:py-5 sm:flex-nowrap flex-wrap top-0  sm:ps-6 ps-2 pe-[50px] sm:pe-[76px]">
            <Link href="/" className="btn btn-ghost text-xl text-blue-50 sm:ms-3">
                <Image src="/manimalism.png" width={30} height={30} alt="manimalism logo" />
                <p className="sm:text-xl text-sm">MANIMALISM</p>
            </Link>
            <div className="flex sm:gap-2 gap-1 sm:w-1/2 sm:justify-end justify-between w-full">
                <Search />
                <LoginButton/>
            </div>

        </div>
    )
}

export default NavigationBar