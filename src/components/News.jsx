export default function News() {
  const news=[0,0,0,0,0,0]
    return (
        <div className="container px-2 py-10 mx-auto">
            <div className="flex flex-col w-full">
            {news.map((_,i)=>{
                return (
                  <div key={i} className="py-3 px-2 w-full rounded border-b border-blue-600">
                    <div className="h-full flex items-start  justify-center text-center gap-0.5">
                        <img
                            alt="news"
                            className="flex  rounded-lg w-28 h-28 object-cover object-center sm:mb-0 mb-4"
                            src="https://dummyimage.com/112x112"
                        />
                        <div className="flex flex-col">
                        <span className="ml-5 text-xs bg-blue-500 rounded-3xl text-white py-1 px-2 w-max">May 16,2023</span>
                            <h3 className="text-blue-500 text-lg title-font tracking-tight flex-wrap font-medium">
                                anim qui mollit labore duis aliquip labori
                            </h3>
                            <p className="mb-4 text-center tracking-tight break-all">
                                DIY tote bag drinking vinegar cronut adaptogen
                                squid fanny pack vaporware.
                            </p>
                        </div>
                    </div>
                </div>
                )})}
            </div>
        </div>
    );
}
