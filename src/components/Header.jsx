import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose ,IoCall} from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const NavLink = ({ route, children }) => {
    const location = useLocation();
    return (
        <li
            className={`text-black flex justify-start px-2 text-lg  my-1 bg-gray-200 md:bg-transparent ${
                location.pathname == route ? "border-b-2 border-blue-500" : ""
            }`}
        >
            <Link
                className="hover:text-blue-500 text-blue-500 md:text-gray-950 p-1 cursor-pointer box-border font-medium"
                to={route}
            >
                {children}
            </Link>
        </li>
    );
};

export default function Header() {
    const [navActive, setNavActive] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const toggleButton=()=>{
      setButtonActive((p)=>!p)
    }
    return (
        <header className="w-full">
            <div className="w-full bg-gray-100 flex">
                <img src="/logo.png" className="w-3/4 md:w-1/3" alt="logo" />
                <div className="flex w-1/4 md:w-2/3 flex-row p-2 justify-center md:justify-end md:gap-7 md:px-3 gap-4 min-h-full items-center">
                <div className="text-blue-500 flex flex-col" >
                <FaLocationDot className="text-base md:text-2xl lg:text-3xl"/>
                <span className="md:flex hidden">Fulbari,Pokhara-11,Kaski </span>
                </div>
                <div  className="text-blue-500 flex flex-col">
                <IoCall className="text-base md:text-2xl lg:text-3xl"/>
                <span className="hidden md:flex">+977 98460***** </span>
                                
                </div>
                </div>
            </div>
            <nav className="bg-gray-50 flex items-center px-2 py-1 box-border gap-4 h-20">
                <div className="flex flex-col md:w-[88%] w-[30%]">
                    <button
                        className="text-2xl p-3 text-blue-500 md:hidden"
                        onClick={() => setNavActive(true)}
                    >
                        <GiHamburgerMenu />
                    </button>
                    <ul
                        className={`md:w-full md:flex md:justify-between md:py-1 md:h-full items-center md:static md:flex-row  overflow-hidden md:px-3 absolute flex-col h-[100vh] transition-all duration-500 delay-0 w-0 md:w-full ${
                            navActive ? "w-56" : ""
                        } top-0 left-0  md:bg-transparent justify-between bg-gray-100 md:gap-2 gap-1 py-2 `}
                    >
                        <div className="w-full flex justify-end md:hidden">
                            <button
                                className="text-2xl p-3 text-blue-500"
                                onClick={() => setNavActive(false)}
                            >
                                <IoClose />
                            </button>
                        </div>
                        <NavLink route="/">Home</NavLink>
                        <NavLink route="/about">About Us</NavLink>
                        <NavLink route="/services">Services</NavLink>
                        <NavLink route="/products">Products</NavLink>
                        <NavLink route="/gallery">Gallery</NavLink>
                        <NavLink route="/ourteam">Our Team</NavLink>
                        <NavLink route="/contact">Contact Us</NavLink>
                    </ul>
                </div>
                <div className="md:w-[22%] flex flex-col items-end pr-2 w-[70%] relative -z-99">
                    <button className="bg-blue-500 border-none outline-none py-2 px-3 font-bold rounded text-white flex items-center gap-2 max-w-max px-4" onClick={toggleButton}>
                        Apply Now
                        <FaChevronDown />
                    </button>
                    <div className={`w-36  w-0 md:w-full transition-all duration-500 delay-0 h-0 ${buttonActive?"h-16":""} overflow-hidden flex flex-col rounded bg-gray-200 absolute top-12 right-0`}>
                    <li className=" text-blue-500 font-medium list-none text-base border-b border-blue-500 px-2 pt-2">Loan Form</li>
                    <li className="text-blue-500 px-2 pb-2 font-medium list-none text-base text-nowrap">Membership Form</li>
                    </div>
                </div>
            </nav>
        </header>
    );
}
