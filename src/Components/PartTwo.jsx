import React from "react";

const PartTwo = () => {
  return (
    <>
      <section className="h-[40vh]">
        <div className="flex items-start -mt-36 h-[100%] w-[100%] justify-around ">
          <div className="w-[25%] h-[80%] flex items-center justify-around border  border-gray-700">
            <img
              src="https://file.aiquickdraw.com/m/1738044996_4ac048607ea8483f9d05e8bb049479f6.png"
              className="h-40"
              alt=""
            />
            <div className="w-1/2 p-2">
              <h3 className="font-bold text-xl py-2">Quick Phone Repair</h3>
              <p className="text-sm text-gray-600">
                Fast , professional repairs by certified experts for all issues.
              </p>
            </div>
          </div>
          <div className="w-[30%] h-[80%] -mt-10 flex items-center justify-around border border-gray-700">
            <div className="w-1/2 p-2">
              <h3 className="font-bold text-xl py-2">
                Comprihansive Solutions{" "}
              </h3>
              <p className="text-sm text-gray-600">
                Expert fixes for screens, batteries, water damage and more.
              </p>
            </div>
            <img
              src="https://file.aiquickdraw.com/m/1738225029_cc8c7dc46f7243bab38deefab83046bb.png"
              className="h-40"
              alt=""
            />
          </div>
          <div className="w-[25%] h-[80%] flex items-center justify-around border border-gray-700">
            <img
              src="https://file.aiquickdraw.com/m/1738225199_89cdabac015a47bf9954ddfbf29f44f0.png"
              className="h-40"
              alt=""
            />
            <div className="w-1/2 p-2">
              <h3 className="font-bold text-xl py-2">Easy Booking</h3>
              <p className="text-sm text-gray-600">
                simple online booking with real time repair updates and
                tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartTwo;
