'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function PremiumPlantVarieties() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.span
            variants={itemVariants}
            className="eyebrow block mb-4"
          >
            🌾 Premium Selection
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="gradient-text mb-6"
          >
            Premium Plant Varieties
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300"
          >
            Experience the excellence of our high-quality tissue-cultured banana plants. Engineered through sustainable farming practices, our premium varieties deliver superior vigor, disease resistance, and productivity for modern agricultural operations.
          </motion.p>
        </div>

        {/* Video Container */}
        <motion.div
          variants={videoVariants}
          className="glass rounded-3xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 hover:shadow-2xl transition-shadow duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="relative w-full aspect-video bg-black/40 flex items-center justify-center">
            <video
              src="/videos/banana-farm.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Features Under Video */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={itemVariants}
            className="glass-sm p-6 text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-3">🧬</div>
            <h3 className="text-emerald-300 mb-2">Tissue-Cultured</h3>
            <p className="text-sm text-slate-400">Genetically superior plants with consistent quality</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-sm p-6 text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="text-emerald-300 mb-2">Disease-Free</h3>
            <p className="text-sm text-slate-400">Certified healthy plants with disease resistance</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-sm p-6 text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl mb-3">♻️</div>
            <h3 className="text-emerald-300 mb-2">Sustainable</h3>
            <p className="text-sm text-slate-400">Eco-friendly farming practices for better yields</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
