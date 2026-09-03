"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "../../../public/images/prajeet-shah.png";

const milestones = [
  {
    year: "The Beginning",
    title: "Started Helping Students",
    description:
      "I started my journey with a simple mission—to help students find genuine scholarship opportunities and guide them through the application process. Through YouTube, I began sharing educational content, application guides, and important updates.",
  },
  {
    year: "Growing Together",
    title: "Building a Student Community",
    description:
      "As more students joined the journey, the channel grew into a supportive community where I regularly shared scholarship updates, answered questions, and helped students make informed decisions about studying abroad.",
  },
  {
    year: "Software Engineer",
    title: "Balancing Career & Passion",
    description:
      "After completing my Bachelor's in Computer Science at NIT Rourkela, I began my career as a Software Engineer. Alongside my professional work, I continued creating educational content and supporting students because helping others remained my passion.",
  },
  {
    year: "Today",
    title: "Building This Platform",
    description:
      "To make scholarship information more accessible, I created this website as a central resource where students can find verified updates, guides, FAQs, and learning resources—all in one place while continuing to grow the community.",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Accuracy",
    description:
      "Every piece of information is verified with official sources. We never share unconfirmed news.",
  },
  {
    icon: "💡",
    title: "Clarity",
    description:
      "Complex processes explained in simple, step-by-step language anyone can follow.",
  },
  {
    icon: "🤝",
    title: "Trust",
    description:
      "Transparent about what we know and don't know. No false promises, ever.",
  },
  {
    icon: "🌍",
    title: "Access",
    description:
      "Free resources for everyone. Quality scholarship guidance shouldn't be locked behind paywalls.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative overflow-hidden animated-gradient grid-bg">
      {/* Decorative blobs */}
      <div className="blob w-96 h-96 bg-purple-600 top-20 -left-48 opacity-[0.08]" />
      <div className="blob w-80 h-80 bg-emerald-500 bottom-20 -right-40 opacity-[0.08]" />
      <div className="blob w-64 h-64 bg-rose-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3">
            About
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] mb-6">
            Hi, I&apos;m <span className="gradient-text">Prajeet</span> 👋
          </h1>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A software engineer, helping students navigate scholarships,
            understand real opportunities, and make the right decisions for
            higher education in India and Nepal.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative p-8 rounded-2xl border border-dark-800/50 bg-dark-800/20 mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Avatar */}
            {/* Avatar */}
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-primary-500/20 flex-shrink-0 shadow-xl shadow-primary-500/10">
              <Image
                src="/images/prajeet-shah.png"
                alt="Prajeet Shah"
                fill
                sizes="160px"
                priority
                className="object-fill"
              />
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">Prajeet Shah</h2>
              <p className="text-primary-400 text-sm font-medium mb-4">
                Software Engineer • Scholarship Guide • Content Creator
              </p>

              <p className="text-dark-400 leading-relaxed text-sm">
                I started this journey because I experienced firsthand how
                confusing and overwhelming the scholarship application process
                can be. Finding reliable information, understanding eligibility,
                preparing documents — it&apos;s a maze. My mission is to
                simplify this entire process so students can focus on what
                matters: their education and growth.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3 mt-6 justify-center md:justify-start">
                <a
                  href="https://youtube.com/@prajeetthecreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-center mb-8">
            My <span className="gradient-text">Mission</span>
          </h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary-600/10 to-accent-500/10 border border-primary-500/20 text-center">
            <p className="text-xl text-dark-200 leading-relaxed italic">
              &ldquo;To make scholarship information accessible, accurate, and
              easy to understand for every student who dreams of studying in
              India — regardless of where they come from.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-center mb-8">
            What I <span className="gradient-text">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-dark-800/50 bg-dark-800/20 card-hover"
              >
                <span className="text-3xl mb-3 block">{value.icon}</span>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-dark-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] text-center mb-8">
            The <span className="gradient-text">Journey</span>
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-dark-700" />
                  )}
                </div>
                <div className="pt-1.5">
                  <div className="text-xs text-primary-400 font-semibold uppercase tracking-wider mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{milestone.title}</h3>
                  <p className="text-sm text-dark-400">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-2xl border border-dark-800/50 bg-dark-800/20"
        >
          <h2 className="text-2xl font-bold mb-3">
            Want to work together?
          </h2>
          <p className="text-dark-400 text-sm mb-6 max-w-lg mx-auto">
            Whether you&apos;re an institution, embassy, or organization looking to
            partner — or a student who needs guidance — I&apos;d love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://youtube.com/@prajeetthecreator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
            >
              Connect on YouTube
            </a>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
