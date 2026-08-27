"use client";

import { motion } from "framer-motion";

const journey = [
  {
    title: "Engineering Foundations",
    period: "Electronics & Telecommunication",
    description: "Built embedded systems and hardware projects, developing low-level programming and systems thinking.",
    icon: "🔌",
  },
  {
    title: "Data Science",
    period: "MSc Data Science",
    description: "Formal training in statistics, machine learning, and data analysis methodologies.",
    icon: "📊",
  },
  {
    title: "Applied Machine Learning",
    period: "ML Projects",
    description: "Time-series forecasting, deep learning models (LSTM, CNN, ANN), and ensemble methods.",
    icon: "🧠",
  },
  {
    title: "AI Engineering",
    period: "RAG Systems",
    description: "Production-ready retrieval-augmented generation with FastAPI, vector databases, and cloud deployment.",
    icon: "🤖",
  },
  {
    title: "Next Chapter",
    period: "Professional Role",
    description: "Seeking ML Engineer / AI Engineer / Data Scientist positions to build impactful systems.",
    icon: "🚀",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From systems to intelligence — a progression through engineering, data, and AI.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

          <div className="space-y-12">
            {journey.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-start gap-6 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-6 rounded-full bg-primary border-4 border-background z-10" />

                <div className={`flex-1 ml-12 md:ml-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="inline-flex items-center gap-3 mb-2">
                    {idx % 2 !== 0 && <span className="text-2xl">{item.icon}</span>}
                    <span className="text-sm text-primary font-medium">{item.period}</span>
                    {idx % 2 === 0 && <span className="text-2xl">{item.icon}</span>}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
