import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { name, user, SingOut } = useContext(AuthContext);
    const [photoURL, setPhotoURL] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSignOut = () => {
        SingOut();
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    useEffect(() => {
        if (user?.photoURL) {
            setPhotoURL(user.photoURL);
        }
    }, [user]);





    const links = (
        <>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            {user && (
                <>
                    <li className="relative">
                        <button
                            className="cursor-pointer"
                            onClick={toggleDropdown}
                            aria-expanded={isDropdownOpen}
                            aria-haspopup="true"
                        >
                            Dashboard
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute top-full left-0 bg-white rounded-md shadow-lg p-2 z-10 w-48">
                                <li>
                                    <NavLink
                                        to={'/addService'}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Add Service
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/manageService'}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Manage Service
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/bookedServices'}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Booked Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/dashboard/service-to-do'}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Service To-Do
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <NavLink to={'/allservices'}>All Services</NavLink>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu gap-3 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Home Repair Services</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-3 menu-horizontal px-1 ">{links}</ul>
            </div>
            <div className="navbar-end gap-4">
                {user ? (
                    <div className="flex items-center gap-2">
                        <div className="relative group">
                            <img
                                src={photoURL || ''}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full cursor-pointer"
                            />
                            <span className="absolute left-1/2 transform -translate-x-1/2 -top-2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded-md">
                                {user.displayName || 'User'}
                            </span>
                        </div>
                        <button onClick={handleSignOut} className="btn btn-info btn-outline">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div>
                        <Link to={'/login'} className="btn">
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
