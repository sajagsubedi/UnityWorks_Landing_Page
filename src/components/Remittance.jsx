import {remittanceServices} from "../constants/Remittance.jsx"

export default function Remittance() {
    return (
        <section className="w-full mt-16 md:px-10 px-8">
            <div className=" w-full mb-6 lg:mb-0 flex flex-col items-center">
                <div className="h-1 w-20 bg-blue-500 rounded"></div>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 ">
                    Remittance Services
                </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
  {remittanceServices.map((item, i) => (
    <div className="w-full h-full" key={i}>
      <img src={item} className="w-full h-full" alt={`Remittance service ${i}`} />
    </div>
  ))}
</div>
        </section>
    );
}
