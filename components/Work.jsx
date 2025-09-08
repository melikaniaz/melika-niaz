"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "Spotify Insights (Demo)",
    description:
      "A web app for visualizing personalized Spotify data: top artists, tracks, and audio features with interactive dashboards.",
    image: "/projects/spotify.png", // می‌تونی بعداً عوضش کنی
    tags: ["Next.js", "React", "Charting", "API"],
    github: "https://github.com/yourrepo",
    demo: "#",
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Power BI dashboard with Python preprocessing: trends, forecasting, and anomaly detection for monthly sales.",
    image: "/projects/sales.png",
    tags: ["Power BI", "Python", "Pandas"],
    github: "https://github.com/yourrepo",
    demo: "#",
  },
  {
    title: "Air Travel Dashboard",
description:"Identified airlines with the highest number of flights. Compared average ticket prices (€) across airlines. Visualized market share of airlines. Highlighted flight networks (source & destination cities).",


    image: "public/projects/air_travel_dashboard.png",
    tags: ["MySQL","Database queries and views","Power BI Desktop","Dashboard and visualization","Evaluation and interactive demo UI"],
    github: "https://github.com/melikaniaz/-Air-Travel-Dashboard",
    demo: "#",
  },
  {
    title: "Electric Vehicle Population Analysis",
    description: "full workflow analysis on the Electric Vehicle Population Dataset. It covers data cleaning, exploratory analysis, visualizations, and automated reporting into PowerPoint.",
    image: "/projects/ElectricCarDebate7.jpg",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "PowerPoint", "Jupyter Notebookgi"],
    github: "https://github.com/melikaniaz/ev-population-analysis",
    demo: "#",
  }
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function ProjectCard({ proj, index }) {
  const hasImage = !!proj.image;

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      custom={index * 0.2}
      variants={fadeUp}
      className={`relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden shadow-xl`}
    >
      <div
        className={`flex flex-col md:flex-row ${
          index % 2 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Media */}
        <div className="md:w-1/2 p-4">
          {hasImage ? (
            <div className="relative h-56 md:h-72 w-full overflow-hidden rounded-xl">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ) : (
            <div className="h-56 md:h-72 w-full rounded-xl bg-gradient-to-br from-fuchsia-600/30 via-purple-600/30 to-indigo-600/30" />
          )}
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-6 md:p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            {proj.title}
          </h3>
          <p className="text-gray-200/90 leading-relaxed mb-5">
            {proj.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {proj.tags?.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
            )}
            {proj.demo && (
              <a
                href={proj.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/90 hover:bg-pink-500 transition"
              >
                <HiOutlineExternalLink className="text-xl" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="relative w-full py-24 md:py-32 bg-gradient-to-b from-indigo-950 via-purple-950 to-black"
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Recent Work
          </h2>
          <p className="mt-3 text-gray-300">
            A collection of projects I’ve worked on.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-10 md:space-y-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} proj={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
