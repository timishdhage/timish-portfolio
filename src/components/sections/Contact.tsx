"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in building useful systems, not just pretty demos.
          </h2>

          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Currently seeking ML Engineer, AI Engineer, or Data Scientist roles where I can apply my skills in retrieval systems, machine learning, and production engineering.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:timishdhage531@gmail.com"
              className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/timishdhage"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/timish-dhage"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/Timish_Dhage_CV.pdf"
              download
              className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              Download CV
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Contact: timishdhage531@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
