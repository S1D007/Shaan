"use client";

import { API_URL } from "@/constants";
import { useStore } from "@/store";
import React, { useEffect } from "react";
import io from "socket.io-client";
import Gallery from "./_components/Gallery";
const socket = io(API_URL, { transports: ["websocket"] });
import './display.css'

export type PhotoListType = {
  src: string;
  width: number;
  height: number;
};

function Page() {
  const { fetchPhotos, photos } = useStore();
  const [photosList, setPhotosList] = React.useState<PhotoListType[]>([]);

  const handleMessage = (song: string) => {
    fetchPhotos(song);
  };

  useEffect(() => {
    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
    };
  }, [fetchPhotos]);

  useEffect(() => {
    const newPhotosList = photos.map((photo) => ({
      src: photo.photo,
      width: Math.floor(Math.random() * (200 - 100 + 1)) + 100,
      height: 200,
    }));
    setPhotosList(newPhotosList);
  }, [photos]);

  return <Gallery images={photosList} />;
}

export default Page;
