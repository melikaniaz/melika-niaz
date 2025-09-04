"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-950 via-black to-black py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-300">
        {/* Left: Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm"
        >
          © {new Date().getFullYear()} Melika Niaz. All rights reserved.
        </motion.p>

        {/* Right: Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 text-lg"
        >
          <a
            href="mailto:melikaniaz94@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/melikaniaz"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/melika-niaz-aa28a0297/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
