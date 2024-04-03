import React from "react"
import {Carousel,Services,About,Savings} from "../components/index.jsx"
export default function HomePage(){
  return(
    <main>
    <Carousel/>
    <Services/>
    <About/>
    <Savings/>
    </main>
    )
}