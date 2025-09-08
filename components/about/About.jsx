"use client";

import { motion } from "framer-motion";

const skills = [
  "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn",
  "scikit-learn", "TensorFlow", "PyTorch",
  "NLTK", "NLP pipelines",
  "Power BI", "SQL", "Excel",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
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
            I am <span className="font-semibold text-white">Melika Niaz</span>, a data
            analyst based in Frankfurt, Germany, with extensive experience in
            transforming complex datasets into meaningful insights. Having worked on
            more than ten academic and practical projects, I analyze data, build
            predictive models, and design end-to-end solutions that connect raw
            information to actionable strategies.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
          >
            My primary focus lies in <span className="font-semibold">data analysis,
            machine learning, and natural language processing (NLP)</span>. I’m
            passionate about pattern discovery, model development for
            decision-making, and applying advanced techniques to solve real-world
            problems with measurable impact.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
          >
            In every project, I emphasize clarity, precision, and innovation. My
            approach balances <span className="font-semibold">technical rigor,
            creativity, and teamwork</span>. I value effective collaboration and
            continuous learning to deliver high-quality, efficient, and scalable
            results.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
          >
            I’m currently based in <span className="font-semibold">Frankfurt am
            Main</span> and open to <span className="font-semibold">full-time roles</span> and
            <span className="font-semibold"> freelance projects</span>, with the flexibility to
            collaborate <span className="font-semibold">remotely</span> across Europe.
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
          “Data is not just numbers; it is the language of stories waiting to be discovered.”
        </motion.blockquote>
      </div>

      {/* Subtle grid overlay like your design */}
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:60px_60px]" />
    </section>
  );
}
