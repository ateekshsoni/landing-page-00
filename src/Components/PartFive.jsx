import React from "react";

const PartFive = () => {
  return (
    <>
      <section className="p-4">
        <div>
          <button className="border font-semibold border-blue-700 text-blue-700 px-2 py-1">
            Popular repair issues
          </button>
          <div className="flex items-center py-2 justify-between">
            <h2 className="text-3xl font-semibold">Most demanding fixes</h2>
            <div className="flex gap-2">
              <span className="h-10 w-10 rounded-full border-gray-800 bg-gray-400 border flex items-center justify-center">
                <i className="text-gray-500  text-xl ri-arrow-left-s-line"></i>
              </span>
              <span className="h-10 w-10 rounded-full border-gray-800 bg-gray-400 border flex items-center justify-center">
                <i className="text-gray-500  text-xl ri-arrow-right-s-line"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[60vh] flex items-center justify-around mt-10">
            <div className="w-[25%] p-4 border flex gap-0.5 flex-col">
                <img src="https://ifixscreens.com/storage/2022/11/Cracked-Screen-Repair.png" className="rounded w-[100%]" alt="" />
                <h3 className="font-semibold text-2xl">Screen Replacement</h3>
                <p className="text-gray-600 -mt-2">Fix cracked or unresponsive screens</p>
                <h4 className="text-xl font-semibold">From Rs. 2,500</h4>
                <div className="flex items-center justify-between">
                    <p>1465 reviews</p>
                    <p>
                    < i className="text-yellow-500 text-xl ri-star-fill"></i> 4.5</p>
                </div>
                <button className="rounded bg-blue-800 py-1 text-white font-bold">Book Now</button>
                <button className="font-semibold border-black py-1 border rounded">Learn More</button>
            </div>
            <div className="w-[25%] p-4 border flex gap-0.5 flex-col">
                <img src="https://usercontent2.hubstatic.com/13319607_f520.jpg" className="rounded w-[100%]" alt="" />
                <h3 className="font-semibold text-2xl">Screen Replacement</h3>
                <p className="text-gray-600 -mt-2">Fix cracked or unresponsive screens</p>
                <h4 className="text-xl font-semibold">From Rs. 2,500</h4>
                <div className="flex items-center justify-between">
                    <p>1465 reviews</p>
                    <p>
                    < i className="text-yellow-500 text-xl ri-star-fill"></i> 4.5</p>
                </div>
                <button className="rounded bg-blue-800 py-1 text-white font-bold">Book Now</button>
                <button className="font-semibold border-black py-1 border rounded">Learn More</button>
            </div>
            <div className="w-[25%] p-4 border flex gap-0.5 justify-center flex-col">
                <img src="https://th.bing.com/th/id/OIP.MZYtsrjA3cViisLxXIZC4QHaFj?rs=1&pid=ImgDetMain" className="rounded w-[100%]" alt="" />
                <h3 className="font-semibold text-2xl">Screen Replacement</h3>
                <p className="text-gray-600 -mt-2">Fix cracked or unresponsive screens</p>
                <h4 className="text-xl font-semibold">From Rs. 2,500</h4>
                <div className="flex items-center justify-between">
                    <p>1465 reviews</p>
                    <p>
                    < i className="text-yellow-500 text-xl ri-star-fill"></i> 4.5</p>
                </div>
                <button className="rounded bg-blue-800 py-1 text-white font-bold">Book Now</button>
                <button className="font-semibold border-black py-1 border rounded">Learn More</button>
            </div>
        </div>
      </section>
    </>
  );
};

export default PartFive;
