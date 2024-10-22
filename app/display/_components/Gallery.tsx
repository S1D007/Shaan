"use client";

import { useEffect, useRef } from "react";
import { PhotoListType } from "../page";

export default function Gallery({ images }: { images: PhotoListType[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  let interval: NodeJS.Timeout;
  let startInterval: NodeJS.Timeout;
  const dir = useRef(1);

  const startAutoScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      interval = setInterval(() => {
        window.scrollBy(0, dir.current);
        if (window.innerHeight + window.scrollY >= container.offsetHeight) {
          dir.current = -Math.abs(dir.current);
        } else if (window.scrollY <= 0) {
          dir.current = Math.abs(dir.current);
        }
      }, 20);
    }
  };

  useEffect(() => {
    const handleStartAnimation = () => {
      const container = containerRef.current;
      if (container && container.scrollHeight - innerHeight > 75) {
        clearInterval(interval);
        startAutoScroll();
      } else {
        clearInterval(interval);
      }
    };

    startInterval = setInterval(handleStartAnimation, 100);

    return () => {
      clearInterval(interval);
      clearInterval(startInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full w-full flex flex-wrap gap-2 p-2 relative"
    >
      {images.map((image, i) => {
        return (
          <img
            key={i}
            style={{
              width: image.width + "px",
              flexGrow: images.length > 2 ? "1" : "0",
            }}
            src={image.src}
            className="object-cover h-auto rounded-lg "
            alt={`image+${i}`}
          />
        );
      })}
    </div>
  );
}
