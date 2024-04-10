import { savings } from "../constants/Savings.jsx";

export default function Savings() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex flex-col items-center">
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 ">
              Savings
            </h1>
          </div>
          <p className=" w-full leading-relaxed text-gray-500">
            Unity Works: Empowering Your Financial Future. Explore our range of
            savings solutions designed to help you achieve your goals and secure
            your tomorrow.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {savings.map((savingItem, i) => {
            return (
              <div
                key={i}
                className="lg:w-1/4 sm:w-1/2 md:w-1/3 p-4"
              >
                <div className="bg-gray-100 rounded-lg h-full">
                  <img
                    className="h-50 rounded w-full object-cover object-center mb-6"
                    src={savingItem.img}
                    alt="content"
                  />
                  <div className="p-6">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {savingItem.title}
                    </h2>
                    <p className="leading-relaxed text-base text-blue-400 ">
                      {savingItem.description}
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
