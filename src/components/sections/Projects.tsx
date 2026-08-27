"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: "rag",
    title: "RAG Knowledge Base",
    category: "AI Engineering",
    description: "Production-ready retrieval-augmented generation system with FastAPI, ChromaDB, and multi-tenancy.",
    tech: ["Python", "FastAPI", "ChromaDB", "OpenAI", "Streamlit", "Docker"],
    repo: "https://github.com/timishdhage/rag-knowledge-base",
    featured: true,
    details: {
      problem: "Building a domain-specific Q&A system that retrieves accurate information from documents with proper source attribution.",
      implementation: "Full RAG pipeline: document ingestion → chunking → embeddings → vector storage → retrieval → LLM generation. Includes authentication, rate limiting, owner isolation, and comprehensive testing.",
      highlights: [
        "Multi-tenant architecture with owner-based document filtering",
        "FastAPI REST API with Pydantic contracts",
        "ChromaDB vector store with metadata filtering",
        "Streamlit UI for interactive querying",
        "Docker + GitHub Actions CI/CD (App Runner + Lambda)",
        "13+ test files covering API, auth, retrieval, and evaluation",
      ],
      roadmap: [
        "Enhanced evaluation metrics (answer relevance, faithfulness)",
        "Additional document loaders (HTML, DOCX)",
        "Advanced chunking strategies (semantic, recursive)",
        "Production monitoring and observability",
      ],
    },
  },
  {
    id: "groundwater",
    title: "Groundwater Level Prediction",
    category: "Machine Learning",
    description: "Time-series forecasting of groundwater levels using LSTM, CNN, ANN, and ensemble methods.",
    tech: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy"],
    repo: "https://github.com/timishdhage/Groundwater-level-prediction",
    featured: true,
    details: {
      problem: "Predicting groundwater levels for water resource management using historical time-series data.",
      implementation: "Data preprocessing, feature engineering (temporal features), and training multiple models: LSTM, CNN, ANN, Random Forest, and Gradient Boosting.",
      highlights: [
        "Time-series data preprocessing and cleaning pipeline",
        "Temporal feature engineering (season, trend, lag features)",
        "Multiple model architectures (deep learning + classical ML)",
        "Comparative evaluation methodology",
      ],
    },
  },
  {
    id: "cube",
    title: "8×·8 LED Cube",
    category: "Embedded Systems",
    description: "Arduino-controlled 512-LED cube with SPI communication, timer interrupts, and bit-angle modulation.",
    tech: ["Arduino", "C/C++", "SPI", "Timer Interrupts", "BAM"],
    repo: "https://github.com/timishdhage/CUBE",
    featured: false,
    details: {
      problem: "Creating a visually striking 3D LED display with smooth animations and brightness control.",
      implementation: "8x8x8 LED cube (512 LEDs) driven by Arduino using shift registers, SPI communication, and timer interrupts for ~60Hz refresh. Bit-angle modulation enables 8-bit brightness per LED.",
      highlights: [
        "512 individually addressable LEDs",
        "SPI communication for data transfer",
        "Timer interrupts for consistent refresh rate",
        "Bit-angle modulation (BAM) for 256 brightness levels",
        "Multiple animation patterns and effects",
      ],
    },
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected work demonstrating technical depth and engineering thinking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative group cursor-pointer ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-secondary/50 border border-border rounded-xl p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs text-primary font-medium mb-1">{project.category}</p>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded">
                      Flagship
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-background border border-border rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  View Repository →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-background border border-border rounded-xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const p = projects.find((proj) => proj.id === activeProject)!;
                return (
                  <>
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="text-xs text-primary font-medium mb-1">{p.category}</p>
                        <h3 className="text-2xl font-bold">{p.title}</h3>
                      </div>
                      <button
                        onClick={() => setActiveProject(null)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="text-muted-foreground mb-6">{p.description}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Problem</h4>
                        <p className="text-sm text-muted-foreground">{p.details.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Implementation</h4>
                        <p className="text-sm text-muted-foreground">{p.details.implementation}</p>
                      </div>

                      {p.details.highlights && (
                        <div>
                          <h4 className="font-semibold mb-2">Key Highlights</h4>
                          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                            {p.details.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {p.details.roadmap && (
                        <div>
                          <h4 className="font-semibold mb-2">Roadmap</h4>
                          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                            {p.details.roadmap.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {p.tech.map((t) => (
                          <span key={t} className="px-2 py-1 text-xs bg-secondary border border-border rounded">
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        View on GitHub →
                      </a>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
