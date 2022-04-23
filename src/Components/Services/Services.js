import React, { useEffect } from "react";
import events from "./events";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";

const Services = () => {
    const rootEvents = [
        "Auction",
        "Live",
        "Sell",
      ];
    
      useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
          max: 15,
          speed: 300,
          scale: 1.05,
          glare: false,
          easing: "unset",
          perspective: 1000,
        });
      }, []);
    
      return (
        <div className="py-10 bg-blue-50">
            <p className="text-xl font-bold leading-10 sm:text-3xl md:text-4xl text-center">Services</p>
            <ul
            id="events"
            className="flex flex-wrap grid grid-cols-3 justify-center gap-10 p-10 px-0 sm:px-5 md:px-16"
            >
            {events.map((event, id) => (
                <li
                key={id}
                className="flex flex-col text-center bg-white shadow-xl tilt-card rounded-tr-3xl rounded-bl-3xl hover:shadow-blue-200 hover:bg-custom-blue hover:bg-opacity-80 hover:text-white onhover-class"
                >
                <div className="relative flex flex-col flex-1 p-4 px-6 space-y-6 md:p-8 md:px-12">
                    <img
                    src={event.svg}
                    alt="icon"
                    className="z-10 flex-shrink-0 w-12 h-12 mx-auto tilt-icon md:w-24 md:h-24 hover-icon"
                    />
                    <h3 className="text-lg font-bold tilt-title hover-title md:text-2xl">
                    {event.title}
                    </h3>
                    <dl className="flex flex-col justify-between flex-grow mt-1 tilt-description">
                    <dt className="sr-only">Description</dt>
                    <dd className="text-sm font-normal hover-desc">{event.desc}</dd>
                    </dl>
                </div>
                </li>
            ))}
            </ul>
        </div>
    );
}
 
export default Services;