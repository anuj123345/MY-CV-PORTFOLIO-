"use client";
import React from "react";
import { useView } from "./ViewContext";

export default function DeviceWrapper({ children }: { children: React.ReactNode }) {
  const { viewMode } = useView();

  if (viewMode === "desktop") {
    // Normal rendering
    return <>{children}</>;
  }

  // Mobile rendering wrapper (iPhone 14 Pro Max dimensions roughly)
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 py-12 md:p-12 overflow-y-auto w-full">
      <div 
        className="relative bg-[#121212] flex flex-col mx-auto overflow-hidden shadow-2xl transition-all duration-500 ease-in-out"
        style={{
          width: "430px", // Strict mobile width
          height: "932px", // Strict mobile height
          maxHeight: "90vh", // To fit in standard 1080p monitors
          borderRadius: "44px",
          border: "8px solid #1f2937", // gray-800
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)"
        }}
      >
        {/* Notch simulation */}
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-[100] pointer-events-none">
          <div className="w-[120px] h-full bg-[#1f2937] rounded-b-[16px]"></div>
        </div>
        
        {/* Content Area - Must scroll independently within the wrapper */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}
