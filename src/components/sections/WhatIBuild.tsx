"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "AI / ML",
    items: ["Python", "RAG", "Embeddings", "Vector Retrieval", "TensorFlow", "scikit-learn", "LSTM", "CNN", "Time Series"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Data",
    items: ["Pandas", "NumPy", "Preprocessing", "Feature Engineering", "Model Evaluation", "Data Pipelines"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Engineering",
    items: ["FastAPI", "Docker", "Pytest", "CI/CD", "GitHub Actions", "Configuration"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Embedded",
    items: ["Arduino", "C/C++", "SPI", "Interrupts", "LED Systems"],
    color: "from-amber-500/20 to-orange-500/20",
  },
];

export default function WhatIBuild() {
  return (
    <section id="stack" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Build</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and capabilities backed by real projects and production systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-secondary/50 border border-border rounded-xl p-6 h-full">
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
