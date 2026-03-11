"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 120; // total number of frames in sequence
const getFramePath = (index: number) => `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Transform scroll progress (0-1) to frame index (0-119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1], {
    clamp: true,
  });

  // Preload Images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Update canvas on initial load of the first image
  useEffect(() => {
    if (images.length > 0 && canvasRef.current) {
        images[0].onload = () => {
            renderFrame(0);
        }
    }
  }, [images]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length > 0) {
      renderFrame(Math.round(latest));
    }
  });

  const renderFrame = (index: number) => {
    if (!canvasRef.current || !images[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // optimization
    if (!ctx) return;

    const img = images[index];
    
    // Scale for "object-fit: cover" equivalent
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.width;
    const ih = img.height;
    
    // calculate the scale ratio
    const hRatio = cw / iw;
    const vRatio = ch / ih;
    const ratio = Math.max(hRatio, vRatio);
    
    const centerShift_x = (cw - iw * ratio) / 2;
    const centerShift_y = (ch - ih * ratio) / 2;
    
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, iw, ih, centerShift_x, centerShift_y, iw * ratio, ih * ratio);
  };

  // Resize canvas to match window
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // High DPI displays optimization
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
        
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) ctx.scale(dpr, dpr);
        
        // Temporarily redefine width/height for calculations in renderFrame since we scaled context
        canvasRef.current.style.width = window.innerWidth + "px";
        canvasRef.current.style.height = window.innerHeight + "px";
        
        renderFrame(Math.round(frameIndex.get()));
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Parallax Overlay */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
