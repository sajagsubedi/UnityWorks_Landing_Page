export default function EMICalculator(){
  return(
<form className="w-80 bg-white rounded-md drop-shadow-xl flex flex-col px-4 py-3 gap-3 justify-center items-center">
            <h3 className="text-2xl text-gray-950 font-bold">EMI Calculator</h3>
            <div className="flex w-full flex-col" >
            <label htmlFor="email" className="leading-7 text-base text-black">Enter Loan(NPR)</label>
                <input
                    type="text"
                    name="loan"
                    className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-base outline-none text-gray-900 py-1 px-3  transition-colors duration-200 ease-in-out"
                />
                </div>
                
            <div className="flex w-full flex-col" >
            <label htmlFor="email" className="leading-7 text-base text-black">Interest Rate %</label>
                <input
                    type="text"
                    name="interest"
                    className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-base outline-none text-gray-900 py-1 px-3  transition-colors duration-200 ease-in-out"
                />
                </div> 
            <div className="flex w-full flex-col" >
            <label htmlFor="duration" className="leading-7 text-base text-black">Enter Duration(In Month)</label>
                <input
                    type="text"
                    name="duration"
                    className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 text-base outline-none text-gray-900 py-1 px-3  transition-colors duration-200 ease-in-out"
                />
                </div>
                <button className="text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full mt-3 w-max" type="submit">
                    Calculate 
                </button>
            </form>
            )
}