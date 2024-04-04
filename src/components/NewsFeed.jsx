import {News,Notices,Downloads,EMICalculator} from "./index.jsx"
import {useState} from "react"
export default function NewsFeed(){
  const [tab,setTab]=useState("news")
  return(
    <section className="w-full bg-blue-100 px-3 py-10 md:px-8 md:py-14 min-h-[50vh] flex gap-5 flex-col md:flex-row">
    <div className="w-full md:w-1/2 ">
    <div className="flex gap-5">
    <button className={`py-3 px-4 rounded ${tab=="news"?"bg-blue-500 text-white":"bg-gray-300 text-black"} font-medium`} onClick={()=>setTab("news")}>News</button>
    <button onClick={()=>setTab("notices")} className={`py-3 px-4 rounded ${tab=="notices"?"bg-blue-500 text-white":"bg-gray-300 text-black"} font-medium`}>Notices</button>
    <button onClick={()=>setTab("downloads")}  className={`py-3 px-4 rounded ${tab=="downloads"?"bg-blue-500 text-white":"bg-gray-300 text-black"} font-medium`}>Downloads</button>
    </div>
    {tab=="news" && <News/>}
    {tab=="notices" && <Notices/>}
    {tab=="downloads" && <Downloads/>}
      </div>
      <EMICalculator/>
    </section>
    )
}