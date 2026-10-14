'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: '5000+', label: 'Happy Customers' },
  { number: '150+', label: 'Plant Varieties' },
  { number: '100%', label: 'Satisfaction Rate' },
  { number: '24/7', label: 'Customer Support' },
];

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
    transition: { duration: 0.5 },
  },
};

export default function AboutHome() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass p-6 text-center hover:bg-white/20 transition-colors"
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl font-playfair font-bold gradient-text mb-2">
              {stat.number}
            </div>
            <p className="text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
