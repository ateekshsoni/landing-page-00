import React from "react";

const PartThree = () => {
  return (
    <>
      <section className="w-full h-[50vh] py-2">
        <div className="w-full h-[100%] flex items-center justify-around">
          <div className="w-1/3 h-[100%] px-8 ">
            <button className="text-blue-700 border-2 font-bold rounded border-blue-700 px-4 py-2 ">
              Why choose us
            </button>
            <h2 className="text-3xl font-semibold py-3">
              The reasons why we rank the best
            </h2>
            <p className="text-lg text-gray-500 pr-5 ">
              At Phone Store, we pride ourselves on devlivering exceptional
              service through certified professionals, top-quality a fast,
              reliable, and tranparent repair process, making us the go-to
              choice for hassle-free phone repairs. From easy booking to
              comprehensive repair solutions, we strive to you the best
              experience every time.
            </p>
          </div>
          <div className="w-1/3 h-[100%] flex flex-col items-center gap-2">
            <div className="w-[80%] rounded-lg h-[50%] flex items-center justify-center bg-blue-600">
              <img
                src="https://file.aiquickdraw.com/m/1738231897_c95b5b60502b41fab69bffca1e0b15d6.png"
                className="h-44"
                alt=""
              />
            </div>
            <div className="w-[80%] h-[50%] px-4 py-2 border  border-gray-400 rounded">
              <div className="flex items-center gap-5 ">
                <div className="h-9 w-9 items-center border border-orange-600 rounded flex justify-center  bg-orange-200">
                  <i className="text-2xl text-orange-400  ri-history-line"></i>
                </div>
                <h2 className="font-semibold text-xl">Fast Turnaround Time</h2>
              </div>
              <p className="text-sm text-gray-500 py-4">
                Most repairs are completed within hours, so you're never without
                your phone for long. You get the required service ASAP{" "}
              </p>
            </div>
          </div>
          <div className="w-1/3 h-full flex flex-col items-center gap-2">
            <div className="w-[80%] h-[50%] px-4 py-2 border border-gray-400 rounded">
              <div className="flex items-center gap-5 ">
                <div className="h-9 w-9 items-center border border-blue-600 rounded flex justify-center  bg-blue-200">
                  <i className="text-2xl text-blue-400  ri-graduation-cap-line"></i>
                </div>
                <h2 className="font-semibold text-xl">Expert Technicians</h2>
              </div>
              <p className="text-sm text-gray-500 py-4">
                Our certified repair professionals bring years of expertise of every job, ensuring your phone is in the best hands.{" "}
              </p>
            </div>
            <div className="w-[80%] h-[50%] px-4 py-2 border border-gray-400 rounded">
              <div className="flex items-center gap-5 ">
                <div className="h-9 w-9 items-center border border-green-600 rounded flex justify-center  bg-green-200">
                  <i className="text-2xl text-green-400  ri-shield-check-line"></i>
                </div>
                <h2 className="font-semibold text-xl">Quality Parts with Warranty</h2>
              </div>
              <p className="text-sm text-gray-500 py-4">
                We use only high-quality, genuine parts and back every repair with a solid warrenty, giving you peace of mind. Rest assured with every service.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PartThree;
