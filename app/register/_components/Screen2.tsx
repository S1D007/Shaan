import { SONG_LISTS } from "@/constants";
import { useStore } from "@/store";
import React from "react";

function Screen2() {
  const { setCurrentIndex, setDetails } = useStore();
  const [songs] = React.useState<string[]>(SONG_LISTS);
  const [song, setSong] = React.useState<string>(SONG_LISTS[0]);
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover flex-col space-y-10"
      style={{ backgroundImage: `url('/screen2.png')` }}
    >
      <div className="flex flex-col mb-10 justify-center items-center space-y-10">
        <img src="/Logo1.png" className="h-24" />
        <img src="/Logo2.png" className="h-32" />
      </div>

      <select
        onChange={(e) => {
          setSong(e.target.value);
        }}
        className="p-2 w-[80%] h-16 bg-white text-black text-xl font-semibold rounded-lg shadow-md"
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
        className="w-48 sm:w-64 md:w-72 lg:w-80 h-12 sm:h-14 md:h-16 bg-blue-500 hover:bg-blue-600 text-white text-2xl sm:text-3xl md:text-4xl font-bold py-2 px-6 md:py-3 md:px-10 rounded-[40px]"
      >
        NEXT
      </button>
    </div>
  );
}

export default Screen2;
