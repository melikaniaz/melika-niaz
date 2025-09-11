"use client";
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] flex items-center bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 overflow-hidden pt-28 md:pt-32 pb-12"
      aria-label="Hero"
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

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Data Analyst
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mb-4">
            I am a Master’s student in Data and Discourse Studies at TU Darmstadt with a strong background in languages and communication. I am passionate about data analysis, SQL, and data visualization, and enjoy transforming complex datasets into clear, actionable insights using Python, Power BI, and dashboards. I look forward to collaborating with you and contributing my skills to meaningful data projects.


          </p>

          {/* Education Badge */}
          <span className="inline-block bg-pink-500/20 text-pink-300 text-sm md:text-base font-medium px-3 py-1 rounded-full shadow-sm">
            🎓 Education: Master’s in Data &amp; Discourse Studies, TU Darmstadt
          </span>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center sm:mt-4"
        >
          <Image
            src="/hero-img.png"
            alt="Melika Niaz portrait"
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
