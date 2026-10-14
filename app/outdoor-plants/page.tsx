"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const plants = [
  {
    name: "Areca Palm",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    desc: "Elegant outdoor palm that gives a tropical and premium garden look.",
  },
  {
    name: "Snake Plant",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e8b76?q=80&w=1200&auto=format&fit=crop",
    desc: "Low-maintenance plant perfect for balconies, terraces, and patios.",
  },
  {
    name: "Monstera",
    image:
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=1200&auto=format&fit=crop",
    desc: "Modern decorative plant with large split leaves and rich aesthetics.",
  },
  {
    name: "Banana Plant",
    image:
      "https://images.unsplash.com/photo-1524593119773-6dfc1f8f7d18?q=80&w=1200&auto=format&fit=crop",
    desc: "Creates a lush green outdoor vibe with broad tropical leaves.",
  },
  {
    name: "Aloe Vera",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f2360af9f4?q=80&w=1200&auto=format&fit=crop",
    desc: "Beautiful medicinal plant that thrives in sunlight and open spaces.",
  },
  {
    name: "Rubber Plant",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop",
    desc: "Premium glossy-leaf plant for luxury outdoor decoration.",
  },
];

export default function OutdoorPlantsPage() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="https://5.imimg.com/data5/SELLER/Default/2023/5/312242730/NI/LN/KW/144359585/banana-secondary-hardened-tissue-culture-raised-813863-1000x1000.jpg"
          alt="Outdoor Plants"
          fill
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#0d1117]" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="uppercase tracking-[8px] text-green-400 mb-4 text-sm">
            Luxury Outdoor Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Transform Your <br />
            Outdoor Space
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
            Discover premium outdoor plants that bring freshness, elegance,
            and a modern natural vibe to your home and garden.
          </p>

          <button className="bg-green-500 hover:bg-green-600 transition-all px-8 py-4 rounded-full text-lg font-semibold shadow-2xl flex items-center gap-2 mx-auto">
            Explore Plants
            <span className="text-xl">→</span>
          </button>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: "🍃",
              title: "Fresh Plants",
              desc: "Premium quality outdoor plants with healthy growth.",
            },
            {
              icon: "☀️",
              title: "Sun Friendly",
              desc: "Perfect for balconies, terraces, and gardens.",
            },
            {
              icon: "💧",
              title: "Easy Care",
              desc: "Low-maintenance plants with simple watering needs.",
            },
            {
              icon: "♻️",
              title: "Eco Friendly",
              desc: "Natural greenery that improves outdoor atmosphere.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center shadow-xl"
            >
              <div className="text-green-400 flex justify-center mb-4 text-4xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PLANT CARDS */}
      <section className="py-20 px-6 md:px-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Outdoor Plants
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Add luxury greenery to your outdoor environment with our carefully
            selected premium plant collection.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plants.map((plant, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
            >
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-bold mb-3">{plant.name}</h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {plant.desc}
                </p>

                <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold transition-all">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BANNER SECTION */}
      <section className="px-6 md:px-16 pb-20">
        <div className="relative rounded-[40px] overflow-hidden">
          <Image
            src="https://5.imimg.com/data5/VY/GK/IF/SELLER-42601243/g9-banana-plants-1000x1000.jpg"
            alt="Garden"
            width={1600}
            height={700}
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Bring Nature Closer
            </h2>

            <p className="max-w-2xl text-gray-200 text-lg mb-8">
              Create a peaceful and luxurious outdoor environment with stunning
              greenery and modern plant styling.
            </p>

            <button className="bg-white text-black hover:bg-gray-200 transition-all px-8 py-4 rounded-full font-bold">
              Shop Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}