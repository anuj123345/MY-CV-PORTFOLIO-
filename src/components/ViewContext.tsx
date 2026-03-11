"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type ViewMode = "desktop" | "mobile";

interface ViewContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");

  // On mount, set default based on window width
  useEffect(() => {
    if (window.innerWidth < 768) {
      setViewMode("mobile");
    }
  }, []);

  return (
    <ViewContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
}
