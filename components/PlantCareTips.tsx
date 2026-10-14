'use client';

import { motion } from 'framer-motion';

interface TipProps {
  icon: string;
  title: string;
  description: string;
  tips: string[];
  index: number;
}

const CareTip = ({ icon, title, description, tips, index }: TipProps) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="glass p-8 hover:bg-white/20 transition-colors"
  >
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-emerald-300 mb-3">{title}</h3>
    <p className="text-slate-300 mb-4">{description}</p>

    <ul className="space-y-2">
      {tips.map((tip, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-400">
          <span className="text-emerald-400 mt-1">✓</span>
          <span>{tip}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const PlantCareTips = () => {
  const careTips: TipProps[] = [
    {
      icon: '💧',
      title: 'Watering Guide',
      description: 'Proper hydration is essential for plant health',
      tips: [
        'Water when soil is dry 1-2 inches deep',
        'Use room-temperature filtered water',
        'Avoid overwatering - it\'s the #1 plant killer',
        'Water in the morning for best absorption',
      ],
      index: 0,
    },
    {
      icon: '☀️',
      title: 'Light Requirements',
      description: 'Different plants need different light levels',
      tips: [
        'Most tropical plants love bright indirect light',
        'Rotate plants weekly for even growth',
        'Use grow lights for low-light environments',
        'Avoid direct harsh afternoon sun',
      ],
      index: 1,
    },
    {
      icon: '🌡️',
      title: 'Temperature & Humidity',
      description: 'Create the perfect microclimate for growth',
      tips: [
        'Keep temperatures between 65-75°F',
        'Maintain 40-60% humidity level',
        'Use a humidifier or pebble tray',
        'Avoid drafts and temperature fluctuations',
      ],
      index: 2,
    },
    {
      icon: '🪴',
      title: 'Soil & Nutrients',
      description: 'Rich soil is the foundation of healthy plants',
      tips: [
        'Use well-draining potting mix',
        'Feed monthly during growing season',
        'Repot every 12-18 months',
        'Add compost for natural nutrients',
      ],
      index: 3,
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-header text-center mb-16"
      >
        <span className="eyebrow block mb-4">📚 Care Essentials</span>
        <h2 className="gradient-text mb-4">Plant Care Tips & Tricks</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Master the basics of plant care and watch your green collection thrive. From
          watering schedules to lighting requirements, we've got you covered.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careTips.map((tip) => (
          <CareTip key={tip.title} {...tip} />
        ))}
      </div>

      {/* Bonus Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="glass p-8 mt-8 text-center"
      >
        <h3 className="text-emerald-300 mb-3">🎯 Pro Tips</h3>
        <p className="text-slate-300 mb-4">
          Keep a plant journal to track watering schedules and observe seasonal growth patterns.
          Take photos monthly to document your plant's progress and identify issues early.
        </p>
      </motion.div>
    </section>
  );
};

export default PlantCareTips;
