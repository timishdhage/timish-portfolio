"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const pipelineSteps = [
  { id: "documents", label: "Documents", description: "PDF, TXT, MD files ingested into the system", icon: "📄" },
  { id: "ingestion", label: "Ingestion", description: "Document loaders parse and extract text content", icon: "📥" },
  { id: "chunking", label: "Chunking", description: "Text split into overlapping chunks with metadata preservation", icon: "✂️" },
  { id: "embeddings", label: "Embeddings", description: "OpenAI embeddings generate vector representations", icon: "🔢" },
  { id: "vectorstore", label: "Vector Store", description: "ChromaDB stores vectors with owner-based filtering", icon: "🗄️" },
  { id: "retrieval", label: "Retrieval", description: "Semantic search finds relevant chunks with metadata filters", icon: "🔍" },
  { id: "generator", label: "Generator", description: "LLM synthesizes answers from retrieved context", icon: "🤖" },
  { id: "answer", label: "Answer + Evidence", description: "Final response with cited sources", icon: "✅" },
];

export default function RAGExperience() {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">RAG System Architecture</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive breakdown of the retrieval-augmented generation pipeline from my flagship project.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {pipelineSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <button
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className="w-full group"
                >
                  <div className={`
                    relative z-10 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl
                    border-2 transition-all duration-300
                    ${activeStep === step.id 
                      ? "bg-primary border-primary scale-110" 
                      : "bg-background border-border group-hover:border-primary/50"
                    }
                  `}>
                    {step.icon}
                  </div>
                  <p className="text-xs font-medium text-center whitespace-nowrap">{step.label}</p>
                </button>

                {idx < pipelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full -translate-x-1/2 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: activeStep ? 1 : 0, y: activeStep ? 0 : 20 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          {activeStep && (
            <div className="bg-secondary/50 border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                {pipelineSteps.find(s => s.id === activeStep)?.label}
              </h3>
              <p className="text-muted-foreground">
                {pipelineSteps.find(s => s.id === activeStep)?.description}
              </p>
              <div className="mt-4 text-xs text-muted-foreground">
                <p className="font-mono">
                  Implemented in: src/rag/{activeStep === "documents" ? "loaders.py" : activeStep === "vectorstore" ? "vectorstore.py" : activeStep === "answer" ? "generator.py" : `${activeStep}.py`}
                </p>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["FastAPI", "ChromaDB", "OpenAI", "Streamlit", "Docker", "GitHub Actions", "Pytest"].map((tech) => (
            <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
