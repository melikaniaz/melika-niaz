"use client";

import { motion } from "framer-motion";

const skills = [
  "Python (Pandas, NumPy)",
  "SQL (MySQL)",
  "Power BI",
  "Matplotlib",
  "Seaborn",
  "Data Cleaning",
  "EDA",
  "Machine Learning",
  "Git/GitHub",
  "Microsoft Office 365",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[80vh] bg-gradient-to-b from-indigo-950 via-purple-950 to-black text-white py-24 md:py-32"
      aria-label="About Me"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center"
        >
          About Me
        </motion.h1>

        {/* Intro paragraphs */}
        <div className="mt-10 space-y-6 max-w-3xl mx-auto text-gray-200 leading-8">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
          >
            I am <span className="font-semibold text-white">Melika Niaz</span>, a
Master’s student in <span className="font-semibold">Data and Discourse
Studies at TU Darmstadt</span> with a background in languages and
communication. I am passionate about <span className="font-semibold">data analysis, SQL, and data visualization</span>, and enjoy transforming complex datasets into clear, actionable insights using Python, Power BI, and dashboards. I look forward to collaborating with you and contributing my skills to meaningful data projects.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
          >
            I work confidently with{" "}
            <span className="font-semibold">Python (Pandas, NumPy)</span>,{" "}
            <span className="font-semibold">SQL (MySQL)</span>, and{" "}
            <span className="font-semibold">Power BI</span>, applying them to tasks
            such as <span className="font-semibold">data cleaning, exploratory
            analysis, and dashboard creation</span>. My experience also includes{" "}
            <span className="font-semibold">machine learning, EDA, and automating
            reporting processes</span>, bridging the gap between data exploration
            and impactful visualization.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
          >
            In every project, I focus on{" "}
            <span className="font-semibold">clarity, precision, and collaboration</span>,
            while combining technical skills with creativity to design effective and
            scalable solutions. I am now seeking a{" "}
            <span className="font-semibold">six-month mandatory internship</span> to
            apply my skills, grow as a data professional, and contribute to
            meaningful data-driven projects.
          </motion.p>
        </div>

        {/* Skills */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mt-14"
        >
          Skills & Tools
        </motion.h2>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          {skills.map((s, i) => (
            <motion.li
              key={s}
              variants={fadeUp}
              custom={i * 0.1}
              className="px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-center text-sm"
            >
              {s}
            </motion.li>
          ))}
        </motion.ul>

        {/* Quote */}
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={skills.length * 0.03 + 0.6}
          className="mt-16 max-w-3xl mx-auto text-center text-gray-300 italic"
        >
          “Data is not just numbers; it is the language of stories waiting to be
          discovered.”
        </motion.blockquote>
      </div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:60px_60px]" />
    </section>
  );
}
