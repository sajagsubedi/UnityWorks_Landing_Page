import React from "react"
import {Carousel,Services,About,Savings,NewsFeed} from "../components/index.jsx"
export default function HomePage(){
  return(
    <main>
    <Carousel/>
    <Services/>
    <About/>
    <Savings/>
    <NewsFeed/>
    </main>
    )
}