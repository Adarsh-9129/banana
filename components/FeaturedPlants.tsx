'use client';

import { motion } from 'framer-motion';
import PlantCard from './PlantCard';

const FeaturedPlants = () => {
  const plants = [
    {
      id: 1,
      title: 'Monstera Deliciosa',
      image: 'https://img.banana.jpg',
      description: 'A stunning tropical plant with split leaves and natural air-purifying qualities.',
      tag: '🍃',
    },
    {
      id: 2,
      title: 'Snake Plant',
      image: 'https://img.pikbest.com/ai/illus_our/20230423/f5f445094ae9536417bb4e4ae3ff1f53.jpg!bw700',
      description: 'Low-maintenance succulent perfect for beginners with elegant vertical growth.',
      tag: '🌱',
    },
    {
      id: 3,
      title: 'Pothos Plant',
      image: 'https://positivebloom.com/wp-content/uploads/2023/01/Marble-Queen-Pothos.jpg.webp',
      description: 'Versatile climbing plant that thrives in various light conditions.',
      tag: '🌿',
    },
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

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-header text-center"
      >
        <span className="eyebrow block mb-4">🌟 Featured Collection</span>
        <h2 className="gradient-text mb-4">Premium Plant Varieties</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Discover our handpicked selection of tropical and indoor plants, each chosen
          for their beauty, resilience, and air-purifying properties.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid-list relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {plants.map((plant, index) => (
          <PlantCard
            key={plant.id}
            {...plant}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedPlants;
