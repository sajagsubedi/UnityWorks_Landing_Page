import {remittanceServices} from "../constants/Remittance.jsx"

export default function Remittance() {
    return (
        <section className="w-full mt-16">
            <div className=" w-full mb-6 lg:mb-0 flex flex-col items-center">
                <div className="h-1 w-20 bg-blue-500 rounded"></div>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 ">
                    Remittance Services
                </h1>
            </div>
            <div className="flex flex-wrap ">
            {remittanceServices.map((item,i)=>{
              <div className="w-16 h-16" key={i}>
              <img src={item} className="w-full h-full"/>b
              </div>
            })}
            </div>
        </section>
    );
}
