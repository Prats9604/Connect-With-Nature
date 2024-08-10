import React from "react";
import Image from "next/image";

const options = [
  "Natural UNESCO's World Heritage Sites",
  "Top Desert Safari Destinations in the World",
  "Nature & Wildlife Areas in Seaside",
  "Nature wonders in INDIA",
  "Nature & Wildlife Areas in Seaside",
];

const places = [
  {
    src: "/Images/where/place1.png",
    name: "Halong Bay",
    description: "City in Vietnam",
    category: "Natural UNESCO's World Heritage Sites",
    city: "Vietnam",
  },
  {
    src: "/Images/where/place2.png",
    name: "Western Ghats",
    description: "mountain range in India",
    category: "Natural UNESCO's World Heritage Sites",
    city: "India",
  },
  {
    src: "/Images/where/place3.png",
    name: "Kaziranga National Park",
    description: "Protected area in Assam, India",
    category: "Natural UNESCO's World Heritage Sites",
    city: "",
  },
  {
    src: "/Images/where/place4.png",
    name: "Zhangjiajie",
    description: "City in China",
    category: "Natural UNESCO's World Heritage Sites",
    city: "",
  },
  {
    src: "/Images/where/place5.png",
    name: "plitvice lakes national park",
    description: "City in Vietnam",
    category: "Natural UNESCO's World Heritage Sites",
    city: "",
  },
  {
    src: "/Images/where/place6.png",
    name: "Matera",
    description: "The city of stones and rock churches",
    category: "Natural UNESCO's World Heritage Sites",
    city: "",
  },
  {
    src: "/Images/where/place7.png",
    name: "Machu Picchu",
    description: "An Historic Sanctuary",
    category: "Natural UNESCO's World Heritage Sites",
    city: "",
  },
  {
    src: "/Images/where/place8.png",
    name: "Great Barrier Reef",
    description: "Coral reef in Australia",
    category: "Natural UNESCO's World Heritage Sites",
    city: "",
  },
  {
    src: "/Images/where/place9.png",
    name: "Ancient City of Sigiriya",
    description: "Lion's Rock",
    category: "Natural UNESCO's World Heritage Sites",
    city: "",
  },
];

const Where = () => {
  return (
    <div className="flex flex-col bg-[#C8EAEE]  py-20 md:py-30 gap-10">
      <div className="flex flex-col gap-4 md:gap-8 px-4 md:px-12 lg:px-20">
        <div className="text-2xl md:text-3xl font-bold text-[#1C3F43] sm:w-[400px] md:w-[500px]">
          DESTINATIONS WHICH CONNECT WITH NATURE
        </div>
        <div className="text-md text-[#1C3F43] sm:w-[400px] md:w-[500px]">
          Health and science experts have determined that deepening our
          connection to nature is extremely important for boosting our overall
          health, mood, and mental clarity.
        </div>
      </div>
      <div className="flex gap-2 md:gap-3 overflow-x-auto flex-nowrap md:flex-wrap px-4 md:px-12 lg:px-20">
        {options.map((option, index) => (
          <div
            key={index}
            className="px-2 py-2 md:px-4 md:py-2 bg-[#1C3F43] text-[#fff] text-sm md:text-md whitespace-nowrap"
          >
            {option}
          </div>
        ))}
      </div>
      <div className="pt-4 overflow-x-auto no-scrollbar pl-4 md:pl-12 lg:pl-20">
        <div className="flex flex-row gap-3 md:gap-6">
          {places.map((place, index) => (
            <div
              key={index}
              className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[350px] flex flex-col gap-3 p-3 bg-white rounded-3xl"
            >
              <div>
                <Image
                  src={place.src}
                  height={1738}
                  width={1386.5}
                  alt={`${place.name} Image`}
                  className="aspect-auto object-cover self-center rounded-2xl"
                />
              </div>
              <div className="flex flex-col py-1">
                <div className="text-lg font-bold text-[#012527]">
                  {place.name}
                </div>
                <div className="text-md text-[#8C8C8C]">
                  {place.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/Images/where/scroll2.png"
        width={2120}
        height={460}
        alt="Scroll"
        className="w-[72px] h-auto self-end mr-4 md:mr-12 lg:mr-16"
      />
    </div>
  );
};

export default Where;
