import Link from 'next/link'
import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp, IoMail } from 'react-icons/io5'

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
        <footer className="flex justify-between bg-base-300 text-base-content p-4">
            <nav className='flex- flex-col'>
                <h6 className="font-semibold text-sm text-gray-200 mb-3">Project</h6>
                <a href='https://kusumanayr.vercel.app' className="hover:text-lime-300 block text-xs mb-1">Portfolio</a>
                <a href='https://newmanimalism.vercel.app' className="hover:text-lime-300 block text-xs">Manimalism</a>
            </nav>

            <nav>
                <div className='flex flex-col mb-3'>
                    <a href='https://kusumanayr.vercel.app' className="font-semibold text-sm text-gray-200 mb-3">Contact</a>
                    <a href={emailLink} className='hover:text-lime-300 block text-xs mb-1'>kusuma.nayr@gmail.com</a>
                    <a href={whatsappLink} className='hover:text-lime-300 block text-xs mb-1'>+(62) 895-3209-87471</a>
                </div>
                <div className="flex sm:gap-4 gap-2">
                    <a href={linkedinLink} className='hover:text-lime-300'>
                        <IoLogoLinkedin className='text-lg' />
                    </a>
                    <a href={whatsappLink} className='hover:text-lime-300'>
                        <IoLogoWhatsapp className='text-lg' />
                    </a>
                    <a href={instagramLink} className='hover:text-lime-300'>
                        <IoLogoInstagram className='text-lg' />
                    </a>

                </div>
            </nav>
        </footer>
    )
}

export default Footer