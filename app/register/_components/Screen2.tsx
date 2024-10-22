import { SONG_LISTS } from "@/constants";
import { useStore } from "@/store";
import React from "react";

function Screen2() {
  const { setCurrentIndex, setDetails } = useStore();
  const [songs] = React.useState<string[]>(SONG_LISTS);
  const [song, setSong] = React.useState<string>(SONG_LISTS[0]);

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16"
      style={{ backgroundImage: `url('/screen2.png')` }}
    >
      <div className="flex flex-col justify-center items-center space-y-6 sm:space-y-8 md:space-y-10">
        <img src="/Logo1.png" className="h-20 sm:h-24 md:h-28 lg:h-32" />
        <img src="/Logo2.png" className="h-28 sm:h-32 md:h-36 lg:h-40" />
      </div>

      <select
        onChange={(e) => setSong(e.target.value)}
        className="p-2 w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] h-12 sm:h-14 md:h-16 bg-white text-black text-lg sm:text-xl md:text-2xl font-semibold rounded-lg shadow-md"
      >
        {songs.map((song, index) => (
          <option key={index} value={song}>
            {song}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          setDetails({ song });
          setCurrentIndex(2);
        }}
        className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-12 sm:h-14 md:h-16 bg-blue-500 hover:bg-blue-600 text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold py-2 px-4 md:py-3 md:px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        NEXT
      </button>
    </div>
  );
}

export default Screen2;
