import React from "react";
import Image from "next/image";

const Nature = () => {
  return (
    <>
      <div className="relative h-[100vh]">
        <div className="flex flex-col md:flex-row h-full relative z-10">
          <div className="flex md:w-2/5">
            <Image
              src="/Images/home/NatureGreen.png"
              height={3000}
              width={4152}
              alt="Nature Image"
              className="w-full h-[100vh] aspect-auto object-cover"
            />
          </div>
          <div className="hidden md:flex flex-col bg-[#01191B] md:w-3/5 md:justify-end xl:justify-center pb-20 lg:items-end text-right pr-8 lg:pr-12">
            <div className="text-xl md:text-2xl font-semibold text-[#C67F54]">
              TRAVEL & ENJOY
            </div>
            <div className="text-lg font-semibold">Travelling Moment</div>
            <div className="flex lg:w-[300px] text-[#C8EAEE] text-md pt-3">
              The most beautiful in the world is, of course, the world itself.
            </div>
            <div className="flex flex-row gap-4 mt-8">
              <div className="py-2 md:py-3 px-5 md:px-8 bg-[#C67F54]">Explore</div>
              <div className="py-2 md:py-3 px-5 md:px-8 border border-[#C67F54]">
                See More
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 md:p-0 flex flex-col absolute top-20 md:right-[62vw] z-30 justify-end md:items-end md:text-right">
          <div className="flex text-xl md:text-2xl font-semibold text-[#C67F54]">
            BREATH IN THE FRESH AIR
          </div>
          <div className="flex lg:w-[300px] text-[#C8EAEE] text-md pt-3">
            Life is a beautiful journey that is meant to be embraced to the
            fullest every day.
          </div>
        </div>
        <div className="flex md:hidden flex-col absolute top-60 md:right-[62vw] z-30 justify-end items-end text-right">
          <div className="text-xl md:text-2xl font-semibold text-[#C67F54]">
            TRAVEL & ENJOY
          </div>
          <div className="text-lg font-semibold">Travelling Moment</div>
          <div className="flex lg:w-[300px] text-[#C8EAEE] text-md pt-3">
            The most beautiful in the world is, of course, the world itself.
          </div>
          <div className="flex flex-row gap-4 mt-8">
            <div className="py-3 px-8 bg-[#C67F54]">Explore</div>
            <div className="py-3 px-8 border border-[#C67F54]">See More</div>
          </div>
        </div>

        <div className="absolute bottom-0 lg:left-[5vw] z-20 left-1/2">
          <Image
            src="/Images/home/Woman.png"
            height={1044}
            width={619}
            alt="Woman Image"
            className="w-[900px] aspect-auto object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Nature;
