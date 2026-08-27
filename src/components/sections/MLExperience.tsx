"use client";

import { motion } from "framer-motion";

const mlSteps = [
  { id: "data", label: "Raw Data", description: "Historical groundwater level measurements with temporal features" },
  { id: "cleaning", label: "Cleaning", description: "Handling missing values, outliers, and data quality issues" },
  { id: "features", label: "Feature Engineering", description: "Temporal features: season, trend, lag variables, rolling statistics" },
  { id: "models", label: "Model Training", description: "LSTM, CNN, ANN, Random Forest, Gradient Boosting" },
  { id: "evaluation", label: "Evaluation", description: "Comparative analysis using MAE, RMSE, R-squared metrics" },
];

export default function MLExperience() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Applied Machine Learning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end ML pipeline from the groundwater level prediction project.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {mlSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-background border-2 border-emerald-500/50 flex items-center justify-center text-lg font-bold text-emerald-500">
                  {idx + 1}
                </div>
                <p className="text-sm font-medium text-center whitespace-nowrap">{step.label}</p>
                <p className="text-xs text-muted-foreground text-center mt-1 hidden md:block">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {[
            { name: "LSTM", type: "Deep Learning", desc: "Long Short-Term Memory for sequential patterns" },
            { name: "CNN", type: "Deep Learning", desc: "Convolutional layers for feature extraction" },
            { name: "ANN", type: "Deep Learning", desc: "Feedforward neural network baseline" },
            { name: "Random Forest", type: "Ensemble", desc: "Tree-based ensemble with bagging" },
            { name: "Gradient Boosting", type: "Ensemble", desc: "Sequential tree boosting" },
          ].map((model, idx) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-secondary/50 border border-border rounded-lg p-4"
            >
              <h4 className="font-semibold mb-1">{model.name}</h4>
              <p className="text-xs text-primary mb-2">{model.type}</p>
              <p className="text-xs text-muted-foreground">{model.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["Python", "TensorFlow", "Keras", "scikit-learn", "Pandas", "NumPy", "Jupyter"].map((tech) => (
            <span key={tech} className="px-3 py-1.5 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
