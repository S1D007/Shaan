import { useStore } from "@/store";
import React from "react";

function Screen1() {
  const { setCurrentIndex } = useStore();
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url('/screen1.png')` }}
    >
      <div className="text-center text-white px-4 sm:px-6 md:px-8 lg:px-0 flex justify-center items-center flex-col space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32 xl:space-y-40">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight">
          Shaan Se Suno
        </h1>
        <button
          onClick={() => {
            setCurrentIndex(1);
          }}
          className="w-72 h-20  bg-blue-500 hover:bg-blue-600 text-white text-3xl font-bold py-2 px-4 md:py-3 md:px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          LET'S START
        </button>
      </div>
    </div>
  );
}

export default Screen1;
