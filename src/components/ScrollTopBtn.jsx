import React, { useRef, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollTopBtn = () => {
  const scrollTopBtn = useRef(null);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        scrollTopBtn.current.classList.remove("hidden");
      } else {
        scrollTopBtn.current.classList.add("hidden");
      }
    });
  }, []);
  const handleScroll=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }
  return (
    <div
      ref={scrollTopBtn}
      onClick={handleScroll}
      className="w-10 h-10 p-3 hidden justify-center items-center bg-blue-500 rounded fixed z-[99999] bottom-2 right-2 shadow-sm text-white"
    >
      <FaChevronUp />
    </div>
  );
};

export default ScrollTopBtn;
