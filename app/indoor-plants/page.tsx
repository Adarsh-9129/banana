'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    image:
      'https://images.unsplash.com/photo-1593691509543-c55fb32e8b1d?q=80&w=1200&auto=format&fit=crop',
    description:
      'Elegant air-purifying plant perfect for luxury interiors and modern homes.',
    price: '₹1,299',
  },
  {
    id: 2,
    name: 'Monstera Deliciosa',
    image:
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1200&auto=format&fit=crop',
    description:
      'Premium tropical foliage plant with iconic split leaves and rich aesthetics.',
    price: '₹2,499',
  },
  {
    id: 3,
    name: 'Peace Lily',
    image:
      'https://images.unsplash.com/photo-1598880940942-e9c4d7cb4b8c?q=80&w=1200&auto=format&fit=crop',
    description:
      'A sophisticated flowering plant that enhances elegance and indoor freshness.',
    price: '₹1,799',
  },
  {
    id: 4,
    name: 'Aloe Vera',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
    description:
      'Luxury medicinal succulent ideal for bright and premium indoor spaces.',
    price: '₹999',
  },
];

export default function IndoorPlantsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 bg-clip-text text-transparent">
          Indoor Plants
        </h1>

        <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
          Transform your interiors with premium indoor plants designed
          for luxury and modern living.
        </p>
      </div>

      {/* Premium Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {plants.map((plant, index) => (
          <motion.div
            key={plant.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            className="group relative rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Image */}
            <div className="relative h-[320px] overflow-hidden">
              <Image
                src={plant.image}
                alt={plant.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Price */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="text-emerald-300 font-semibold">
                  {plant.price}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-300 transition">
                {plant.name}
              </h2>

              <p className="text-slate-400 leading-7 text-sm">
                {plant.description}
              </p>

              {/* Button */}
              <button className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold tracking-wide hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300">
                Explore Plant
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}