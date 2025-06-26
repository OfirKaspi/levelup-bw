"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionFadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const MotionFadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: MotionFadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionFadeIn;
