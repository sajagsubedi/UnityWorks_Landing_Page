export default function About() {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-col items-center w-full">
        <div className="h-1 text-center w-20 bg-blue-500 rounded"></div>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
          About Us
        </h1>
      </div>
      <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col-reverse items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-3 md:mb-0 items-center text-center py-3">
          <p className="mb-8 text-justify leading-relaxed text-gray-700">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray. do eiusmod esse elit eiusmod ex ipsum qui
            esse incididunt nostrud incididunt laborum enim amet et exercitation
            non aute pariaturPariatur nisi enim esse veniam duis consectetur.
            Excepteur incididunt officia labore eu veniam anim excepteur
            voluptate esse amet adipisicing laborum. Nulla ea nostrud minim quis
            ex officia dolor aute proident culpa duis. Aliquip consequat ipsum
            Lorem laboris reprehenderit id occaecat. Sunt occaecat esse deserunt
            cillum aliqua non velit ut fugiat incididunt nisi anim. Ex pariatur
            incididunt officia eu nisi qui consequat. Occaecat voluptate aliqua
            nostrud veniam laboris mollit veniam nulla aute qui aliqua
            incididunt. Cupidatat proident ipsum incididunt labore excepteur
            velit amet consectetur eu nostrud. Pariatur sit commodo sint quis
            cupidatat mollit veniam culpa qui exercitation id. Ea anim velit
            quis adipisicing duis aute irure esse deserunt reprehenderit aliquip
            elit excepteur elit.
          </p>
          <div className="flex w-full justify-start">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded font-medium text-lg">
              Read More
            </button>
          </div>
        </div>
        <div className=" lg:w-full md:w-1/2 h-full p-3">
          <img className="rounded h-full" alt="hero" src="building.jpg" />
        </div>
      </div>
    </section>
  );
}
