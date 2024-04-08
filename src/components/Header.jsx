import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoCall } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaChevronDown,FaRegCalendar } from "react-icons/fa";
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
    const [iconState,setIconState]=useState({
      location:false,
      phone:false
    })
    const toggleIcon=(type)=>{
        if(type=="location"){
          setIconState(p=>({location:!p.location,phone:false}))
        }
        if(type=="phone"){
          setIconState(p=>({phone:!p.phone,location:false}))
        }
      }
    const getTime=()=>{
      let date=new Date()
      return `${date.getHours()%12}:${date.getMinutes()}:${date.getSeconds()}`
    }
    const [currentTime,setCurrentTime]=useState(getTime)
    setInterval(()=>{
      setCurrentTime(getTime)
    },1000)
    const toggleButton = () => {
        setButtonActive(p => !p);
    };
    return (
        <>
        <div className="w-full bg-white flex h-10">
          <div className="w-2/3 md:w-1/3 flex gap-2 px-2 md:px-5 md:gap-5 ">
          <span className="flex items-center gap-1"><FaRegCalendar className="font-medium"/> {new Date().toLocaleDateString()}</span>
          <span className="flex items-center gap-1"><IoMdTime className="font-medium text-xl"/>{currentTime}</span>
          </div>
          <ul className="hidden md:flex gap-5 px-5 py-1 md:w-2/3 justify-end">
          <li><Link to="/news_events" className=" text-gray-600 hover:underline font-medium">News & Events</Link></li>
          <li><Link to="/notices" className="font-medium text-gray-600 hover:underline">Notices</Link></li>
          <li><Link to="/downloads" className="font-medium text-gray-600 hover:underline">Downloads</Link></li>
          <li><Link to="/career" className="font-medium text-gray-600 hover:underline">Career</Link></li>
          <li><Link to="/interestrate" className="font-medium text-gray-600 hover:underline">Interest Rate</Link></li>
          </ul>
          </div>
            <div className="w-full bg-gray-100 flex h-20 items-center">
                <img src="/logo.png" className="w-[70%] md:w-1/3 h-max" alt="logo" />
                <div className="flex w-[30%] md:w-2/3 flex-row p-2 justify-start md:justify-end md:gap-7 md:px-3 gap-8 min-h-full items-center">
                    <div className="text-blue-500 flex flex-col md:flex-row relative md:items-center ">
                        <FaLocationDot className="text-base md:text-2xl lg:text-3xl" onClick={()=>toggleIcon("location")}/>
                        <span className={`md:flex md:visible   ${iconState.location? "flex":"hidden"} md:static absolute top-6 md:top-0 md:bg-transparent bg-blue-500 md:text-blue-500 text-white z-[99] md:z-auto md:text-base text-sm md:tracking-normal rounded p-2 tracking-tight text-nowrap md:translate-x-0 -translate-x-[47%]`}>
                        <span className="absolute w-3 h-3 rotate-45 bg-blue-500 rounded-sm top-0 left-1/2  -translate-y-1/2 -translate-x-0.5 md:hidden"> </span>
                            Fulbari,Pokhara-11,Kaski
                        </span>
                    </div>
                    <div className="text-blue-500 flex flex-col md:flex-row relative">
                        <IoCall className="text-base md:text-2xl lg:text-3xl" onClick={()=>toggleIcon("phone")}/>
                      <span className={`md:flex md:visible   ${iconState.phone? "flex":"hidden"} md:static absolute top-6 md:top-0 md:bg-transparent bg-blue-500 md:text-blue-500 text-white z-[99] md:z-auto md:text-base text-sm md:tracking-normal rounded p-2 tracking-tight text-nowrap md:translate-x-0 -translate-x-[47%]`}>
                        <span className="absolute w-3 h-3 rotate-45 bg-blue-500 rounded-sm top-0 left-1/2  -translate-y-1/2 -translate-x-0.5 md:hidden"> </span>
                         98460XXXXX </span>
                    </div>
                </div>
            </div>
            <nav className="bg-gray-50 flex items-center px-2 py-1 box-border gap-4 sticky top-0  h-20 z-50 shadow-lg shadow-gray-400">
                <div className="flex flex-col md:w-[88%] w-[30%]">
                    <button
                        className="text-2xl p-3 text-blue-500 md:hidden"
                        onClick={() => {
                            setNavActive(true);
                            setButtonActive(false);
                        }}
                    >
                        <GiHamburgerMenu />
                    </button>
                    <ul
                        className={`md:w-full md:flex md:justify-between md:py-1 md:h-full items-center md:static md:flex-row overflow-hidden md:overflow-visible md:px-3 fixed flex-col h-[100vh] transition-all duration-500 delay-0 w-0 md:w-full ${
                            navActive ? "w-60" : ""
                        } top-0 left-0 md:bg-transparent justify-between bg-gray-100 shadow-gray-300 md:gap-2 gap-1 py-2 z-[999]`}
                    >
                        <div className="w-full flex justify-end md:hidden ">
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
                <div className="md:w-[22%] flex flex-col items-end pr-2 w-[70%] relative">
                    <button
                        className="bg-blue-500 border-none outline-none py-2 px-3 font-bold rounded text-white flex items-center gap-2 max-w-max px-4 z-10"
                        onClick={toggleButton}
                        id="applybtn"
                    >
                        Apply Now
                        <FaChevronDown />
                    </button>
                    <div
                        className={`w-36   transition-all duration-500 delay-0 h-0 ${
                            buttonActive ? "h-[74px]" : ""
                        } overflow-hidden flex flex-col rounded bg-white shadow-sm shadow-gray-400 absolute top-12 gap-3 right-0`}
                    >
                        <li className=" text-blue-500 font-medium list-none  text-base px-2 pt-2">
                            Loan Form
                        </li>
                        <li className="text-blue-500 px-2 pb-2 font-medium list-none text-base text-nowrap">
                            Membership Form
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}
