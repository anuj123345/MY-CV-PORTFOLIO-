"use client";
import React from "react";
import { Monitor, Smartphone } from "lucide-react";
import { useView } from "./ViewContext";

export default function ViewSwitcher() {
  const { viewMode, setViewMode } = useView();

  return (
    <div className="fixed bottom-6 right-6 z-[999] bg-[#1a1a1a] border border-white/10 p-1.5 rounded-full flex items-center shadow-2xl backdrop-blur-md">
      <button
        onClick={() => setViewMode("desktop")}
        className={`flex items-center justify-center w-12 h-10 rounded-full transition-all duration-300 ${
          viewMode === "desktop"
            ? "bg-white/10 text-white shadow-sm"
            : "text-gray-500 hover:text-gray-300"
        }`}
        title="Desktop View"
      >
        <Monitor size={18} />
      </button>
      <button
        onClick={() => setViewMode("mobile")}
        className={`flex items-center justify-center w-12 h-10 rounded-full transition-all duration-300 ${
          viewMode === "mobile"
            ? "bg-white/10 text-white shadow-sm"
            : "text-gray-500 hover:text-gray-300"
        }`}
        title="Mobile View"
      >
        <Smartphone size={18} />
      </button>
    </div>
  );
}
