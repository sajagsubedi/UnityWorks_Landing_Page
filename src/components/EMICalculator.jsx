import { useState } from "react";

export default function EMICalculator() {
    const [formData, setFormData] = useState({
        principal: "",
        rate: "",
        duration:""
    });
    const[emi,setEmi]=useState(0)
    const handleChange=(e)=>{
      if(e.target.value==""){
       setFormData((p)=>({...p,[e.target.name]:e.target.value}))
      return
      }
     let numericValue=Number.parseFloat(e.target.value)
     if(isNaN(numericValue)){
       return
     }
      setFormData((p)=>({...p,[e.target.name]:numericValue}))
    }
    const handleClick=(e)=>{
      e.preventDefault()
      let{principal,rate,duration}=formData;
      principal=Number.parseFloat(principal)
      duration=Number.parseFloat(duration)
      rate=(Number.parseFloat(rate)/100)/12
  const numerator = principal * rate * Math.pow((1 + rate), duration);
    const denominator = Math.pow((1 + rate), duration) - 1;
      setEmi(Number.parseInt(numerator/denominator))
    }
    return (
        <form className="md:w-[320px] sm:w-80 w-[90vw] overflow-hidden bg-white rounded-md h-max  drop-shadow-xl flex flex-col px-4 py-5 gap-3 justify-center items-center mt-12">
            <h3 className="text-2xl text-gray-950 font-bold">EMI Calculator</h3>
            <div className="flex w-full flex-col">
                <label
                    htmlFor="principal"
                    className="leading-7 text-base text-black"
                >
                    Loan Amount(NPR)
                </label>
                <input
                    type="text"
                    id="principal"
                    name="principal"
                    placeholder="Enter Principal"
                    value={formData.principal}
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-2 px-3 leading-4 transition-colors duration-200 ease-in-out"
                />
            </div>

            <div className="flex w-full flex-col">
                <label
                    htmlFor="rate"
                    className="leading-7 text-base text-black"
                >
                    Interest Rate(%)
                </label>
                <input
                    type="text"
                    id="rate"
                    name="rate"
                    placeholder="Enter Interest Rate"
                    value={formData.rate}
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-2 px-3 leading-4 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="flex w-full flex-col">
                <label
                    htmlFor="duration"
                    className="leading-7 text-base text-black"
                >
                    Duration(in Month)
                </label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    placeholder="Enter Duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-2 px-3 leading-4 transition-colors duration-200 ease-in-out"
                />
            </div>
            <div className="flex gap-3 items-center mt-5">
            <button
                className="text-white bg-blue-500 border-0 py-1 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg w-full w-max h-max"
                type="submit" onClick={handleClick}
            >
                Calculate
            </button>
            <div className="flex-col flex">
            <p className="text-gray-500 text-nowrap text-sm">Monthly Payment(EMI)</p>
            <h4 className="text-lg font-bold">NPR.{emi}</h4>
            </div>
            </div>
        </form>
    );
}
