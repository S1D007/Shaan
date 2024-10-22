"use client";
import { API_URL, SONG_LISTS } from "@/constants";
import React from "react";
import io from "socket.io-client";

const socket = io(API_URL, { transports: ["websocket"] });

function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 p-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-16 text-center">
        Choose Your Song
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {SONG_LISTS.map((song, index) => (
          <button
            onClick={() => {
              socket.emit("message", song);
            }}
            key={index}
            className="bg-white text-blue-600 hover:text-white hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg shadow-lg px-8 py-6 text-2xl md:text-3xl font-semibold flex items-center justify-center"
          >
            {song}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Page;
