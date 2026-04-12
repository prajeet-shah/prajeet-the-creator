"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🎓",
    title: "Scholarship Guidance",
    description:
      "Complete information on ICCR, COMPEX, Study in India, and more. Step-by-step application guides, eligibility criteria, and deadline tracking.",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/20",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: "📋",
    title: "Document Support",
    description:
      "Access real document formats required for scholarship applications, including academic documents and other essential requirements. These formats are based on actual application needs across different scholarships.",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: "🔔",
    title: "Updates & Alerts",
    description:
      "Stay informed with the latest embassy emails, result announcements, deadline reminders, and important notices. Never miss an update.",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/20",
    iconBg: "bg-amber-500/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhatWeDo() {
  return (
    <section className="relative py-24 bg-dark-950/80 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="blob w-72 h-72 bg-blue-600/5 top-0 left-1/4" />
      <div className="blob w-72 h-72 bg-indigo-600/5 bottom-0 right-1/4" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-4"
          >
            Everything You Need for Your{" "}
            <span className="gradient-text">Scholarship Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-400 max-w-2xl mx-auto"
          >
            From finding the right scholarships to preparing your documents
            — we guide you through every step of the process.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`relative group p-8 rounded-2xl border ${feature.borderColor} bg-gradient-to-br ${feature.color} card-hover overflow-hidden`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center text-2xl mb-6`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
