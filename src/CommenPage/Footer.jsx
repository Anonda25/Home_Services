import React from 'react';
import footer from '../assets/creative-logo.avif'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside>
                <img src={footer} alt="" className='w-20 h-20' />
                <p>
                    Home Services Ltd.
                    <br />
                    Providing reliable tech since 2024
                </p>
                <div>
                    <div className="mt-4 flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Roofing Services</a>
                <a className="link link-hover">Cleaning Services</a>
                <a className="link link-hover">Painting Services</a>
                <a className="link link-hover">Welding Services</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Provide Jobs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;