import React from "react";
import { Html, useProgress } from "@react-three/drei";

export const Loader = () => {
  const { progress} = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center text-center">
        <div className="w-10 h-10 border-4 border-white border-t-blue-600 rounded-full animate-spin mb-2"></div>
        <p className="text-white text-sm">Loading... {Math.floor(progress)}%</p>
      </div>
    </Html>
  );
};
