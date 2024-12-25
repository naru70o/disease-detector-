import React from "react";

export default function page() {
  return (
    <div className="text-black bg-white grid h-screen w-screen justify-center content-center">
      <div className="container ">
        <h1 className="text-center mb-10 font-bold text-2xl">
          Put your image the input below
        </h1>
        <input type="file" className="w-full bg-gray-400 rounded-sm" />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-500 inline-block py-4 px-8 rounded-xl mt-8 text-center font-bold text-white hover:bg-green-600 transition duration-150"
          >
            Detect
          </button>
        </div>

        <div className="flex-col justify-center mt-10">
          {/* details */}
          <div className="bg-red-500 h-28 w-full"></div>
          <div className="bg-blue-500 h-28 w-full"></div>
        </div>
      </div>
    </div>
  );
}
