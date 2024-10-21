"use client";
import React from "react";
import Screen4 from "./_components/Screen4";
import Screen3 from "./_components/Screen3";
import Screen2 from "./_components/Screen2";
import Screen1 from "./_components/Screen1";
import { useStore } from "@/store";

const COMPONENTS = [<Screen1 />, <Screen2 />, <Screen3 />, <Screen4 />];
export default function page() {
  const { currentIndex } = useStore();
  
  return <React.Fragment>{COMPONENTS[currentIndex]}</React.Fragment>;
}
