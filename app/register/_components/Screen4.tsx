import { useStore } from "@/store";
import React, { useEffect } from "react";

function Screen4() {
  const { submitDetails } = useStore();

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url('/screen1.png')` }}
    >
      <div className="text-center text-white px-4 sm:px-6 md:px-8 lg:px-0 md:text-xl lg:text-2xl flex justify-center items-center flex-col space-y-16 md:space-y-32 lg:space-y-56">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
          Shaan Se Suno
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
          THANKS! <br /> ENJOY YOUR EVENING
        </h1>
      </div>
    </div>
  );
}

export default Screen4;
