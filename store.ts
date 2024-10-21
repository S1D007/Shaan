import axios from "axios";
import { create } from "zustand";
import { socket } from "./app/display/page";
import { API_URL, FQDN, SONG_LISTS } from "./constants";
type Store = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  details: {
    song?: string;
    photo?: File | null | string;
  };
  setDetails: (details: { song?: string; photo?: File }) => void;

  submitDetails: () => Promise<void>;

  photos: { song: string; photo: string }[];
  fetchPhotos: (song: string) => Promise<void>;

  changeCollageScreen: (song: string) => void;
};

const base64toBlob = (dataURI: string): Blob => {
  const byteString = window.atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new File([new Blob([ab], { type: mimeString })], "image.jpeg", {
    type: "image/jpeg",
  });
};

export const useStore = create<Store>((set) => ({
  currentIndex: 0,
  setCurrentIndex: (index) => set({ currentIndex: index }),

  details: {
    song: SONG_LISTS[0],
    photo: null,
  },
  setDetails: (details) => {
    const prevDetails = useStore.getState().details;
    set({ details: { ...prevDetails, ...details } });
  },

  submitDetails: async () => {
    try {
      const details = useStore.getState().details;
      const image = new FormData();
      if (details.photo instanceof File) {
        image.append("image", details.photo);
      } else if (typeof details.photo === "string") {
        const blob = base64toBlob(details.photo);
        image.append("image", blob);
      } else {
        throw new Error("Invalid photo type");
      }
      const { data } = await axios.post(`${FQDN}/upload/single`, image);
      if (!data.data) {
        throw new Error("Failed to upload image");
      }
      details.photo = data.data;
      await axios.post(`${API_URL}`, details);
      set({ currentIndex: 0, details: { song: "", photo: null } });
    } catch (e) {
      alert(e);
    }
  },
  changeCollageScreen: (song) => {
    socket.emit("message", song);
  },

  photos: [],
  fetchPhotos: async (song) => {
    try {
      const { data } = await axios.get(`${API_URL}/${song}`);
      set({ photos: data });
    } catch (e) {
      alert(e);
    }
  },
}));
