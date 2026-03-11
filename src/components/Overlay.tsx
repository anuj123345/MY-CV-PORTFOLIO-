"use client";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: "My Name. Creative Developer." (0% to 25%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: "I build digital experiences." (30% to 55%)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], [100, -100]);

  // Section 3: "Bridging design and engineering." (60% to 85%)
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.9], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-8 z-10 w-full h-full pb-20">
      {/* Section 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center will-change-transform"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl mb-6">
          Anuj. <br className="md:hidden"/><span className="text-gray-400 font-normal">AI Automation Specialist.</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-base font-mono tracking-widest text-[#a1a1aa] drop-shadow-md">
          <a href="mailto:anuj.baral69@gmail.com" className="hover:text-white transition-colors">anuj.baral69@gmail.com</a>
          <span className="hidden md:inline text-white/20">|</span>
          <a href="https://linkedin.com/in/anuj-baral-62a3b6168" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin.com/in/anuj-baral-62a3b6168</a>
          <span className="hidden md:inline text-white/20">|</span>
          <span>Bhubaneswar, Odisha, India</span>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col justify-center items-start pl-[5%] md:pl-[15%] will-change-transform"
      >
        <h2 className="text-4xl md:text-6xl font-medium max-w-2xl text-white drop-shadow-lg">
          I build <br/><span className="text-yellow-400">AI Automation</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col justify-center items-end pr-[5%] md:pr-[15%] text-right will-change-transform"
      >
        <h2 className="text-4xl md:text-6xl font-medium max-w-2xl text-white drop-shadow-lg">
          Somewhere between the wireframe and the workflow <br/><span className="italic text-gray-400">— that&apos;s where I live.</span>
        </h2>
      </motion.div>
    </div>
  );
}
