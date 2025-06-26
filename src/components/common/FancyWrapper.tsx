"use client";

import { motion } from "framer-motion";

interface FancyWrapperProps {
  children: React.ReactNode;
  isDark?: boolean;
  className?: string;
}

const FancyWrapper = ({ children, isDark = true, className = "" }: FancyWrapperProps) => {
  const style = isDark ? "text-white bg-gray-900" : "text-gray-900 bg-white";

  return (
    <motion.div
      className="relative inline-flex group"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Glowing background effect */}
      <div
        className="absolute -inset-px rounded-xl bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300
                   opacity-70 blur-lg transition-all duration-1000
                   group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"
      />

      {/* Gradient border */}
      <div className="relative z-20 rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300">
        <div
          className={`h-10 px-4 flex items-center justify-center font-bold rounded-[10px] transition-all duration-200 ${style} ${className}`}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default FancyWrapper;
