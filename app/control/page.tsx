"use client"
import { SONG_LISTS } from "@/constants";
import React from "react";
import { socket } from "../display/page";

function Page() {
  return (
    <div className="flex justify-center flex-col p-4">
      {SONG_LISTS.map((song, index) => (
        <button
          onClick={() => {
            socket.emit("message", song);
          }}
          key={index} // Add a key for each button
          className="text-4xl font-bold text-white mb-8 text-center bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out rounded-lg shadow-lg px-6 py-3"
        >
          {song}
        </button>
      ))}
    </div>
  );
}

export default Page;
