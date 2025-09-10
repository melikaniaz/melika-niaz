"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] flex items-center bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 overflow-hidden pt-28 md:pt-32 pb-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-pink-400">Melika</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            Data Analyst
          <p>
            I’m a Data Analyst and Data & Discourse student at TU Darmstadt, ...
          </p>
          </motion.a>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center sm:mt-4"
        >
          <Image
            src={"/hero-img.png"}
            alt="Melika Niaz"
            className="rounded-2xl shadow-2xl object-cover"
            width={400}
            height={400}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
