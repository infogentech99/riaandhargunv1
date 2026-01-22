"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lamps = Array.from({ length: 26 });

export default function FallingLamps() {
  const [fallHeight, setFallHeight] = useState("550vh");
  const [containerHeight, setContainerHeight] = useState("510vh");

  useEffect(() => {
    if (window.innerWidth < 640) {
      setFallHeight("320vh");
      setContainerHeight("350vh");
    } else if (window.innerWidth < 1024) {
      setFallHeight("300vh");
      setContainerHeight("350vh");
    } else {
      setFallHeight("560vh");
      setContainerHeight("510vh");
    }
  }, []);

  return (
    <div
      className="pointer-events-none absolute top-0 left-0 w-full overflow-hidden z-0"
      style={{ height: containerHeight }}
    >
      {lamps.map((_, i) => {
        const left = Math.random() * 100;
        const duration = 14 + Math.random() * 8;
        const delay = Math.random() * 6;
        const size = 50 + Math.random() * 70;

        return (
          <motion.img
            key={i}
            src="/assets/lamp.avif"
            alt=""
            className="absolute opacity-90"
            style={{
              left: `${left}%`,
              width: size,
            }}
            initial={{ y: "-20vh" }}
            animate={{ y: fallHeight }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
