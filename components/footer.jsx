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
        <footer className="footer bg-base-300 text-base-content p-10 ps-16">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a href="https://kusumanayr.vercel.app/" className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href={linkedinLink} className='hover:text-lime-300'>
                        <IoLogoLinkedin size={25} />
                    </a>
                    <a href={emailLink} className='hover:text-lime-300'>
                        <IoMail size={25} />
                    </a>
                    <a href={whatsappLink} className='hover:text-lime-300'>
                        <IoLogoWhatsapp size={25} />
                    </a>
                    <a href={instagramLink} className='hover:text-lime-300'>
                        <IoLogoInstagram size={25} />
                    </a>

                </div>
            </nav>
        </footer>
    )
}

export default Footer