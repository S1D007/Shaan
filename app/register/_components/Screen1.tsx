import { useStore } from "@/store";
import React from "react";

function Screen1() {
  const { setCurrentIndex } = useStore();
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url('/screen1.png')` }}
    >
      <div className="text-center text-white px-4 sm:px-6 md:px-8 lg:px-0 md:text-xl lg:text-2xl flex justify-center items-center flex-col space-y-16 md:space-y-32 lg:space-y-56">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
          Shaan Se Suno
        </h1>
        <button
          onClick={() => {
            setCurrentIndex(1);
          }}
          className="w-48 sm:w-64 md:w-72 lg:w-80 h-12 sm:h-14 md:h-16 bg-blue-500 hover:bg-blue-600 text-white text-2xl sm:text-3xl md:text-4xl font-bold py-2 px-6 md:py-3 md:px-10 rounded-[40px]"
        >
          LET'S START
        </button>
      </div>
    </div>
  );
}

export default Screen1;
