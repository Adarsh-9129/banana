'use client';

import { motion } from 'framer-motion';

interface PlantCardProps {
  title: string;
  image: string;
  description: string;
  tag?: string;
  index?: number;
}

const PlantCard = ({
  title,
  image,
  description,
  tag = '🌿',
  index = 0,
}: PlantCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card"
    >
      <div className="card-image">
        <img src={image} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="card-content">
        <span className="text-2xl">{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button ghost text-sm mt-4"
        >
          Learn More →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PlantCard;
