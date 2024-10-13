import Link from 'next/link'
import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp, IoMail, IoSparkles } from 'react-icons/io5'

const Footer = () => {
    const email = 'kusuma.nayr@gmail.com';
    const phoneNumber = '62895320987471';
    const subject = '-';
    const message = 'Halo, Ryan Kusuma 😊';

    const linkedinLink = 'https://www.linkedin.com/in/kusumaryan/';
    const instagramLink = 'https://www.instagram.com/yankuniku/';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    return (
        <footer className="flex justify-between bg-base-300 text-base-content p-4 sm:py-10 sm:px-16">
            <nav className='flex gap-5'>
                <IoSparkles size={70} className='sm:block hidden'/>
                <div className='flex- flex-col'>
                    <h6 className="font-semibold sm:text-lg text-sm text-gray-300 sm:mb-4 mb-3">Project</h6>
                    <a href='https://kusumanayr.vercel.app' className="hover:text-lime-300 block text-xs sm:text-sm sm:mb-2 mb-1">Portfolio</a>
                    <a href='https://newmanimalism.vercel.app' className="hover:text-lime-300 block text-xs sm:text-sm">Manimalism</a>
                </div>
            </nav>

            <nav>
                <div className='flex flex-col mb-3'>
                    <a href='https://kusumanayr.vercel.app' className="font-semibold sm:text-lg text-sm text-gray-300 mb-3 sm:mb-4">Contact</a>
                    <a href={emailLink} className='hover:text-lime-300 block text-xs sm:text-sm sm:mb-2 mb-1'>kusuma.nayr@gmail.com</a>
                    <a href={whatsappLink} className='hover:text-lime-300 block text-xs sm:text-sm sm:mb-2 mb-1'>+(62) 895-3209-87471</a>
                </div>
                <div className="flex sm:gap-4 gap-2">
                    <a href={linkedinLink} className='hover:text-lime-300'>
                        <IoLogoLinkedin className='text-lg sm:text-2xl' />
                    </a>
                    <a href={whatsappLink} className='hover:text-lime-300'>
                        <IoLogoWhatsapp className='text-lg sm:text-2xl' />
                    </a>
                    <a href={instagramLink} className='hover:text-lime-300'>
                        <IoLogoInstagram className='text-lg sm:text-2xl' />
                    </a>

                </div>
            </nav>
        </footer>
    )
}

export default Footer