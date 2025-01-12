import { services } from "../constants/Services.jsx";

export default function Services() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div
                        className="lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col items-center"
                    >
                        <div className="h-1 w-20 bg-blue-500 rounded"></div>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 ">
                            Services
                        </h1>
                    </div>
                    <p className=" w-full leading-relaxed text-gray-500">
                        Unity Works saving and credit co-operative provides
                        various services on the different areas.Remittance
                        Servie,Insurance Service,Mobile Banking Service
                        ,Financial Consulting Service are some of them.
                    </p>
                </div>
                <div className="flex flex-wrap flex-row -m-4">
                    {services.map((serviceItem, i) => {
                        return (
                            <div
                                key={i}
                                className="lg:w-1/4 h-inherit sm:w-1/2 md:w-1/3 p-4"
                            >
                                <div className="bg-gray-100 rounded-lg h-full">
                                    <img
                                        className="h-auto rounded w-full object-cover object-center mb-6"
                                        src={serviceItem.img}
                                        alt="content"
                                    />
                                    <div className="p-6">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                            {serviceItem.title}
                                        </h2>
                                        <p className="leading-relaxed text-base text-blue-400 ">
                                            {serviceItem.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
