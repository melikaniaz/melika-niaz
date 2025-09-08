"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiCopy, FiCheck } from "react-icons/fi";

const info = {
  email: "melikaniaz94@gmail.com",
  phone: "+49 162 9510232",
  whatsapp: "+49 162 9510232",
  location: "Frankfurt am Main, Germany",
  github: "https://github.com/melikaniaz",
  linkedin: "https://www.linkedin.com/in/melika-niaz-aa28a0297/",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(info.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 bg-gradient-to-b from-black via-indigo-950 to-purple-950"
      aria-label="Contact section"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Let’s work together</h1>
          <p className="mt-3 text-gray-300">
            Feel free to reach out for collaborations, opportunities, or just to say hi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            <motion.div variants={fadeUp} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10"><FiMail className="text-xl" /></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-300">Email</p>
                  <div className="flex items-center gap-3">
                    <a className="text-lg font-semibold hover:underline break-all" href={`mailto:${info.email}`}>{info.email}</a>
                    <button onClick={copyEmail} className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition">
                      {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10"><FiPhone className="text-xl" /></div>
                <div>
                  <p className="text-sm text-gray-300">Phone / WhatsApp</p>
                  <a href={`tel:${info.phone.replace(/\s+/g, "")}`} className="text-lg font-semibold hover:underline">{info.phone}</a>
                  <p className="text-gray-300 mt-1">WhatsApp: {info.whatsapp}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10"><FiMapPin className="text-xl" /></div>
                <div>
                  <p className="text-sm text-gray-300">Location</p>
                  <p className="text-lg font-semibold">{info.location}</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <a href={info.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                  <FiGithub className="text-xl" /> <span>GitHub</span>
                </a>
                <a href={info.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/90 hover:bg-pink-500 transition">
                  <FiLinkedin className="text-xl" /> <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-sm"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = form.name.value.trim();
              const email = form.email.value.trim();
              const message = form.message.value.trim();
              if (!name || !email || !message) return alert("Please fill in all fields.");
              window.location.href = `mailto:${info.email}?subject=Portfolio Contact from ${encodeURIComponent(
                name
              )}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
            }}
          >
            <motion.h3 variants={fadeUp} className="text-2xl font-bold text-white mb-6">Send a message</motion.h3>

            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input name="name" type="text" placeholder="Your name" className="w-full rounded-xl bg-black/30 text-white border border-white/10 px-4 py-3 outline-none focus:border-pink-500/70" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input name="email" type="email" placeholder="you@example.com" className="w-full rounded-xl bg-black/30 text-white border border-white/10 px-4 py-3 outline-none focus:border-pink-500/70" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-4">
              <label className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea name="message" rows="5" placeholder="Tell me about your project..." className="w-full rounded-xl bg-black/30 text-white border border-white/10 px-4 py-3 outline-none focus:border-pink-500/70" />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6">
              <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-pink-500/90 hover:bg-pink-500 transition text-white font-semibold">
                Send
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>

      {/* subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:60px_60px]" />
    </section>
  );
}
