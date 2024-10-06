import Link from "next/link"
import Search from "./search"

const NavigationBar = () => {
    return (
        <div className="navbar justify-between bg-base-100 fixed z-10 py-5 top-0 ps-6 pe-[76px]">
            <Link href="/" className="btn btn-ghost text-xl text-blue-50">MANIMALISM</Link>
            <div className="flex gap-2 w-1/2 justify-end">
                <Search/>
                {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default NavigationBar