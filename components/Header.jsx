"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const navItems = ["Home", "About", "Work", "Contact"];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold tracking-wide text-white"
        >
          Melika<span className="text-pink-400">.</span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-lg font-medium text-white">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <Link href={`/${item.toLowerCase()}`} className="hover:text-pink-400 transition">
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
