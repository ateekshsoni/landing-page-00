import React from "react";

const PartOne = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col p-2">
        <h2 className="text-5xl font-semibold pt-7  text-center">
          Elevate your experience <br /> with Phone Store
        </h2>
        <p className="text-gray-600 text-center pt-4">
          Quickly seach of repair options and book appointments <br /> with
          certified repair centers.
        </p>
        <div>
          <div className="flex items-center justify-between w-[60%] m-auto">
            <div className="h-14 w-14 rounded-full bg-pink-300 flex items-center justify-center">
              <i className=" text-3xl font-bold text-pink-600 ri-smartphone-line"></i>
            </div>
            <div className="p-5 flex items-center justify-center gap-4 mt-5">
              <input
                type="text"
                className="border  px-6 py-2 text-lg rounded active:outline-none"
                placeholder="Search your device"
              />
              <button
               className="bg-blue-600 px-4 rounded text-white py-2"
               > 
              <i className=" ri-search-line"></i>
                 Explore
                 </button>
            </div>
            <div className="h-14 w-14 rounded-full bg-yellow-300 flex items-center justify-center">
              <i className=" text-3xl font-bold text-yellow-600 ri-camera-line"></i>
            </div>
          </div>
          <div className="flex mt-10 items-center justify-between m-auto w-[45%]">
            <div className="h-14 w-14 rounded-full bg-red-300 flex items-center justify-center">
              <i className=" text-3xl font-bold text-red-600  ri-volume-up-line"></i>
            </div>
            <div className="h-14 w-14 rounded-full bg-blue-300 flex items-center justify-center">
              <i className="text-3xl font-bold text-blue-600  ri-cpu-line"></i>
            </div>
          </div>
          <div className="flex items-center mt-10 justify-between m-auto w-[20%]">
            <div className="h-14 w-14 rounded-full bg-green-300 flex items-center justify-center">
              <i className=" text-3xl font-bold text-green-600 ri-battery-line"></i>
            </div>
            <div className="h-14 w-14 rounded-full bg-sky-300 flex items-center justify-center">
              <i className=" text-3xl font-bold text-sky-600  ri-drop-line"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartOne;
