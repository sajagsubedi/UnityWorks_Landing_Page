import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/index.jsx";
import { Header, Footer } from "./components/index.jsx";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export default function App() {
      useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="*" element={<HomePage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
