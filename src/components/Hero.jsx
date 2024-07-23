import React, { useState } from "react";
import watch1 from "../assets/watch/blue-watch.png";
import watch2 from "../assets/watch/orange-watch.png";
import watch3 from "../assets/watch/yellow-watch.png";

const watchList = [
  {
    id: 1,
    image: watch1,
    price: "200,000",
    tag: "new",
    title: "Next Gen Blue Watch",
    descriptin:
      " nonnecessitatibusatperspiciatisliberofugamodidoloremquenatus Maximemolestiaecupiditateaperiamnequesimiliqueporroeaveltempore",
  },
  {
    id: 2,
    image: watch2,
    price: "400,000",
    tag: "new",
    title: "Next Gen Orange Watch",
    descriptin:
      " nonnecessitatibusatperspiciatisliberofugamodidoloremquenatus Maximemolestiaecupiditateaperiamnequesimiliqueporroeaveltempore",
  },
  {
    id: 3,
    image: watch3,
    price: "500,000",
    tag: "new",
    title: "Next Gen Yellow Watch",
    descriptin:
      " nonnecessitatibusatperspiciatisliberofugamodidoloremquenatus Maximemolestiaecupiditateaperiamnequesimiliqueporroeaveltempore",
  },
];

function Hero() {
  const [imgId, setImageId] = useState(watch1);
  const [title, setTitle] = React.useState("Best & Smart Digital Products");
  const [description, setDescription] = React.useState(
    "nonnecessitatibusatperspiciatisliberofugamodidoloremquenatus Maximemolestiaecupiditateaperiamnequesimiliqueporroeaveltempore"
  );
  return (
    <div className="py-10 flex items-center justify-center min-h-[550px] sm:min-h-[700px] bg-gray-100 dark:bg-gray-950 text-black dark:text-white relative">
      <div className="w-[700px] h-[700px] bg-primary/40 absolute -top-1/2 right-0 -z-0 rounded-3xl rotate-45"></div>
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-96">
          {/* content section */}
          <div className="space-y-10 px-12">
            <h1 className="font-bold text-4xl sm:text-6xl">{title}</h1>
            <p className="text-sm">{description}</p>
            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded">
              Shop now
            </button>
            {/* watch controllers section */}
            <div className="flex justify-center lg:justify-left gap-6 py-2 lg:gap-24 bg-white text-black dark:bg-black dark:text-slate-50 rounded-3xl duration-200">
              {watchList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setImageId(
                      item.id === 1 ? watch1 : item.id === 2 ? watch2 : watch3
                    );
                    setTitle(item.title);
                    setDescription(item.descriptin);
                  }}
                  className="flex flex-col lg:flex-row items-center gap-1">
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.image}
                    alt="biryani img"
                    className="w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 z-10"
                  />
                  <div className="flex flex-col items-center justify-center lg:items-start">
                    <p className=" lg:text-lg font-bold">${item.price}</p>
                    <p className="text-sm ">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* image content */}
          <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                src={imgId}
                alt=""
                className="w-[300px] h-[300px]  sm:scale-125 object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
