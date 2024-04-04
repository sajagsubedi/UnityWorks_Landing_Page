import { Link } from "react-router-dom";
import { FaFacebook ,FaInstagram,FaTwitter,FaYoutube} from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="body-font bg-gray-800 min-h-80 flex flex-col justify-between">
            <div className="flex flex-col items-center gap-5 md:flex-row">
                <div className="px-10 py-3 flex items-start flex-col md:w-1/2 gap-5 ">
                    <div className="flex flex-col items-center">
                        <Link
                            className="flex title-font font-medium items-center md:justify-start w-full justify-center text-gray-900"
                            to="/"
                        >
                            <img
                                src="/logo.png"
                                className="w-80 md:w-[400px] shadow-3xl shadow-gray-100"
                            />
                        </Link>
                        <p className="mt-2 text-sm text-gray-200 text-center md:text-left">
                            Empowering Together, Building Unity, Achieving
                            Progress.
                        </p>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <h2 className="text-xl text-gray-100 mb-2 mt-4 font-bold">
                            Contact Us
                        </h2>
                        <p className="text-gray-200">
                            Pokhara-11,Fulbari,Kaski
                        </p>
                        <p className="text-gray-200">
                            <b>Email:</b>info@utilityworks.com
                        </p>
                        <p className="text-gray-200">
                            <b>Phone:</b>98460XXXXX
                        </p>
                        <div className="flex gap-3 m-2">
                        <a href="/"><FaFacebook className="text-2xl text-white"/></a>
                        <a href="/"><FaInstagram className="text-2xl text-white"/></a>
                        <a href="/"><FaTwitter className="text-2xl text-white"/></a>
                        <a href="/"><FaYoutube className="text-2xl text-white"/></a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-row">
                    <div className="flex-col w-1/2 flex gap-3">
                        <h3 className="font-medium text-lg text-gray-100">
                            Links
                        </h3>
                        <ul className="flex flex-col py-2 gap-2 px-4 items-start text-gray-300">
                            <li className="list-disc">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="list-disc">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="list-disc">
                                <Link to="/services">Services</Link>
                            </li>
                            <li className="list-disc">
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li className="list-disc">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-col w-1/2 flex gap-3">
                        <h3 className="font-medium text-lg text-gray-100">
                            Useful Links
                        </h3>
                        <ul className="flex flex-col gap-2 items-start text-gray-300 py-2 px-5 ">
                            <li className="list-disc">
                                <a href="/">Forex</a>
                            </li>
                           <li className="list-disc">
                                <a href="/">Privacy Policy</a>
                            </li>
                           <li className="list-disc">
                                <a href="/">Terms and Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-900 h-16 text-wrap text-center px-5 py-2 mt-6">
                <p className="text-gray-300">
                    Copyright &copy; 2024 Unity Works. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
