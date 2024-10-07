import Link from "next/link"
import Search from "@/components/search"
import Image from "next/image"
import LoginButton from "@/components/login-button"

const NavigationBar = () => {
    return (
        <div className="navbar justify-between bg-base-100 fixed z-10 py-5 top-0 ps-6 pe-[76px]">
            <Link href="/" className="btn btn-ghost text-xl text-blue-50">
                <Image src="/manimalism.png" width={30} height={30} alt="manimalism logo" />
                <p>MANIMALISM</p>
            </Link>
            <div className="flex gap-2 w-1/2 justify-end">
                <Search />
                <LoginButton/>
            </div>

        </div>
    )
}

export default NavigationBar