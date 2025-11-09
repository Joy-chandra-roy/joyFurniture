import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-20 mt-5 pb-5'>
            <div className='section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 px-8'>
                {/* logo and details */}
                <div className='md:col-span-2'>
                    <h1 className="text-2xl font-bold mb-5"><NavLink to="" >JoyF</NavLink></h1>
                    <p className='md:mr-12'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>
                {/* Services */}
                <div>
                    <h2 className='text-xl font-semibold text-primary mb-3'>Services</h2>
                    <ul className='text-sm space-y-3'>
                        <li>
                            <NavLink to="/" className="hover:text-primary">Email Marketing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="hover:text-primary">Campaigns</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="hover:text-primary">Branding</NavLink>
                        </li>
                        
                    </ul>
                </div>
                {/* Furniture */}
                <div>
                    <h2 className='text-xl font-semibold text-primary mb-3'>Furniture</h2>
                    <ul className='text-sm space-y-3'>
                        <li>
                            <NavLink to="/" className="hover:text-primary">Beds</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="hover:text-primary">Chair</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="hover:text-primary">All</NavLink>
                        </li>
                        
                    </ul>
                </div>
                {/* Customer Care */}
                <div>
                    <h2 className='text-xl font-semibold text-primary mb-3'>Customer</h2>
                    <ul className='text-sm space-y-3'>
                        <li>
                            <NavLink to="/" className="hover:text-primary">FAQ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="hover:text-primary">Return</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="hover:text-primary">Support</NavLink>
                        </li>
                        
                    </ul>
                </div>
                {/* Follow Us */}
                <div>
                    <h2 className='text-xl font-semibold text-primary mb-3'>Follow Us</h2>
                    <ul className='text-sm space-y-3 '>
                        <li>
                            <NavLink to="/" className="hover:text-primary flex items-center space-x-2">
                            <FaFacebookF/><span>Facebook</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="hover:text-primary flex items-center space-x-2">
                            <FaTwitter/><span>Twitter</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="hover:text-primary flex items-center space-x-2">
                            <FaInstagram/><span>Instagram</span>
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className='mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 test-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4'>
                <p>Copyright&copy;{new Date().getFullYear()} <span className='hidden md:inline'>:Joy Chandra Roy. All rights reserved.</span></p>
                <div className='flex items-center gap-4'>
                    <NavLink to="">Terms & Conditions</NavLink>
                    <NavLink to="">Privacy Policy</NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;