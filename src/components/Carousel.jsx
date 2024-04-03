import { useState, useEffect } from "react";

export default function Carousel() {
    const [banner, setBanner] = useState(0);
    const [labelFlow, setLabelFlow] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBanner(b => (b + 1) % 3);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
      setInterval(() => {
            setLabelFlow(l => (l + 1));
        }, 50);
    }, []);

    return (
        <section className="w-full h-[35vh] md:h-[45vh] ">
            <img
                src={`banner-${banner}.jpg`}
                className="w-full h-full"
                alt="img"
            />
            <div className="flex bottom-2 w-full justify-center relative gap-2 h-2">
                <span
                    className={`min-w-2 min-h-2 rounded-full ${
                        banner == 0 ? "bg-blue-500" : "bg-gray-200"
                    } `}
                ></span>
                <span
                    className={`min-w-2 min-h-2 rounded-full ${
                        banner == 1 ? "bg-blue-500" : "bg-gray-200"
                    } `}
                ></span>
                <span
                    className={`min-w-2 min-h-2 rounded-full ${
                        banner == 2 ? "bg-blue-500" : "bg-gray-200"
                    } `}
                ></span>
            </div>
        
        </section>
    );
}