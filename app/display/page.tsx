"use client";

import { API_URL } from "@/constants";
import { useStore } from "@/store";
import React, { useEffect } from "react";
import io from "socket.io-client";
// import { ReactPhotoCollage } from "react-photo-collage";
import { Gallery } from "react-grid-gallery";

const socket = io(API_URL, { transports: ["websocket"] });

function Page() {
  const { fetchPhotos, photos } = useStore();
  const [photosList, setPhotosList] = React.useState<any[]>([]);

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
    const newPhotosList = photos.map((photo) => ({ src: photo.photo,  }));
    setPhotosList(newPhotosList);
  }, [photos]);

  return (
    <Gallery images={photosList} />
  );
}

export default Page;
