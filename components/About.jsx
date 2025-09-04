"use client";

import { motion } from "framer-motion";
import { FaPython, FaReact, FaDatabase } from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiPowerbi,
  SiNumpy,
  SiPandas,
} from "react-icons/si";

const allSkills = [
  { Icon: FaPython, name: "Python" },
  { Icon: SiPandas, name: "Pandas" },
  { Icon: SiNumpy, name: "NumPy" },
  { Icon: SiTensorflow, name: "TensorFlow" },
  { Icon: SiPytorch, name: "PyTorch" },
  { Icon: FaReact, name: "React" },
  { Icon: SiPowerbi, name: "Power BI" },
  { Icon: FaDatabase, name: "SQL" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-200"
        >
          I’m Melika, a Data Analyst and Front-End Developer based in Frankfurt
          am Main. I combine data analysis, machine learning, and modern web
          development to build applications that are both insightful and
          user-friendly.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {allSkills.map(({ Icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {Icon ? (
                <Icon size={40} className="text-pink-400 mb-2" />
              ) : (
                <div className="w-10 h-10 mb-2 rounded-full bg-pink-400/30" />
              )}
              <p className="text-sm md:text-base">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
