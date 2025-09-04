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
            Data Analyst & Front-End Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg">
            I’m a data analyst and front-end developer passionate about turning data into insights and building responsive, user-friendly applications.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition"
          >
            Contact Me
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
            src={"/melika1.png"}
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
