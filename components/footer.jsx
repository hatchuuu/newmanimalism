import Link from 'next/link'
import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp, IoMail, IoSparkles } from 'react-icons/io5'

const Footer = () => {
    const email = 'kusuma.nayr@gmail.com';
    const subject = '-';
    const message = 'Halo, Ryan Kusuma 😊';

    const linkedinLink = 'https://www.linkedin.com/in/kusumaryan/';
    const instagramLink = 'https://www.instagram.com/habisdibagidua/';
    const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    return (
        <footer className="flex justify-between bg-gradient-to-b from-slate-800 from-20% to-slate-900 to-100% text-base-content p-4 sm:py-10 sm:px-16 relative bottom-0">
            <nav className='flex gap-5'>
                <IoSparkles size={70} className='sm:block hidden' />
                <div className='flex sm:mt-5 flex-col'>
                    <h6 className="font-semibold sm:text-lg text-sm text-gray-300">Manimalism Anime Search</h6>
                    <h6 className="font-semibold sm:text-base text-xs text-gray-500 sm:mb-4 mb-3">Searching for your favorite anime</h6>
                </div>
            </nav>

            <nav>
                <div className='flex flex-col'>
                    <a href='https://kusumanayr.vercel.app' className="font-semibold sm:text-lg text-sm text-gray-300 mb-3 sm:mb-4">Contact</a>
                </div>
                <div className="flex sm:gap-4 gap-2">
                    <a href={emailLink} className='hover:text-lime-300'>
                        <IoMail className='text-lg sm:text-4xl' />
                    </a>
                    <a href={linkedinLink} className='hover:text-lime-300'>
                        <IoLogoLinkedin className='text-lg sm:text-4xl' />
                    </a>
                    <a href={instagramLink} className='hover:text-lime-300'>
                        <IoLogoInstagram className='text-lg sm:text-4xl' />
                    </a>

                </div>
            </nav>
        </footer>
    )
}

export default Footer