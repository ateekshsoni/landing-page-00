import React from "react";

const PartFour = () => {
  return (
    <>
      <section >
        <div className="h-[70vh] w-full flex mt-10 px-6">
          <div className="w-1/3 flex  mt-8">
            <div className="w-[20%]">
              <div className="h-16 w-16 mb-5  border-dashed border-4 rounded-full flex items-center justify-center  bg-green-300 border-green-600">
                <i className="text-3xl text-green-600 ri-search-line"></i>
              </div>
              <div className="h-16 w-16  mb-5 border-dashed border-4 rounded-full flex items-center justify-center bg-red-300 border-red-600">
                <i className="text-3xl text-red-600 ri-map-pin-line"></i>
              </div>
              <div className="h-16 w-16 mb-5 border-dashed border-4 rounded-full flex items-center justify-center bg-blue-300 border-blue-600">
                <i className="text-3xl text-blue-600 ri-bookmark-line"></i>
              </div>
              <div className="h-16 w-16 mb-5 border-dashed border-4 rounded-full flex items-center justify-center bg-orange-300 border-orange-600">
                <i className="text-3xl text-orange-600 ri-user-smile-line"></i>
              </div>
            </div>
            <div className="flex flex-col justify-around mt-5 gap-12 h-[60%] w-[80%]">
              <h2 className="border border-gray-600 rounded px-2 py-1">
                Search for your phone issue or model
              </h2>
              <h2 className="border border-gray-600 rounded px-2 py-1">
                Choose a repair solution or shop
              </h2>
              <h2 className="border border-gray-600 rounded px-2 py-1">
                Book an appointment online
              </h2>
              <h2 className="border border-gray-600 rounded px-2 py-1">
                Relax and wait for your device.
              </h2>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center -mt-44 justify-center">
            <img
              src="https://file.aiquickdraw.com/m/1738314638_7e8b3b0e55674812a271a592ab1aaf1f.png"
              className="h-60"
              alt=""
            />
          </div>
          <div className=" w-1/3  text-right">
            <button className="text-blue-700 border-2 font-bold rounded border-blue-700 px-3 ">
              How it works
            </button>
            <h2 className="text-3xl font-semibold px-2 py-1">
              Learn How to fix your device{" "}
            </h2>
            <p className=" text-gray-600 py-4 leading-relaxed ">
              We provide a seamless and user-friendly experience to help you get
              your device fixed effortlessly. Wheather yo're dealing with a
              cracked screen, battery issue, or software malfunctions, our
              platform makes it easy to find solutions tailored to your specific
              problem. From selecting the issue to repair, we streamline every
              step, ensuring you don't face any unnecessary hurdles. With clear
              guidance, transparent pricing, and real-time updates, you can
              trust us to make your device repair process as smooth and
              hassle-free as possibl.{" "}
            </p>
            <button className="bg-blue-700 text-white py-2 px-5 font-semibold rounded">
              Book an appointment now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartFour;
