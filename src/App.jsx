import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/index.jsx";
import { Header, Footer } from "./components/index.jsx";
import { useEffect } from "react";

export default function App() {
    
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
