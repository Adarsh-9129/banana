"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const accessories = [
  {
    title: "Luxury Plant Pots",
    image:
      "https://images.unsplash.com/photo-1483794344563-d27a8d38fe2f?q=80&w=1200&auto=format&fit=crop",
    desc: "Modern ceramic and premium designer pots for stylish interiors.",
  },
  {
    title: "Water Spray Bottle",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop",
    desc: "Elegant spray bottles for maintaining fresh and healthy plants.",
  },
  {
    title: "Plant Stand",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    desc: "Premium wooden and metal stands for displaying plants beautifully.",
  },
  {
    title: "Garden Decor",
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop",
    desc: "Decorative accessories to give your garden a luxury aesthetic.",
  },
  {
    title: "Mini Tool Kit",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
    desc: "Essential gardening tools for trimming and plant care.",
  },
  {
    title: "Hanging Planters",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    desc: "Stylish hanging planters perfect for balconies and patios.",
  },
];

export default function AccessoriesPage() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1600&auto=format&fit=crop"
          alt="Accessories"
          fill
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="uppercase tracking-[8px] text-green-400 text-sm mb-4">
            Premium Plant Accessories
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Garden <br /> Accessories
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
            Upgrade your indoor and outdoor garden with premium accessories,
            luxury decor, and stylish plant essentials.
          </p>

          <button className="bg-green-500 hover:bg-green-600 transition-all px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto">
            Explore Collection
            <span className="text-xl">→</span>
          </button>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: "🛍️",
              title: "Modern Designs",
              desc: "Luxury and aesthetic accessories for every garden.",
            },
            {
              icon: "✨",
              title: "Premium Quality",
              desc: "Durable and stylish products made with care.",
            },
            {
              icon: "🛡️",
              title: "Trusted Products",
              desc: "High-quality accessories loved by plant enthusiasts.",
            },
            {
              icon: "🚚",
              title: "Fast Delivery",
              desc: "Quick and secure delivery for all products.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center shadow-2xl backdrop-blur-lg"
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

      {/* ACCESSORIES CARDS */}
      <section className="py-20 px-6 md:px-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Accessories
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover premium plant accessories designed to make your garden
            more beautiful and functional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {accessories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-bold mb-3">{item.title}</h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold transition-all">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 md:px-16 pb-20">
        <div className="relative rounded-[40px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1600&auto=format&fit=crop"
            alt="Accessories Banner"
            width={1600}
            height={700}
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Style Your Garden
            </h2>

            <p className="max-w-2xl text-gray-200 text-lg mb-8">
              Bring elegance and creativity to your plant collection with
              premium gardening accessories and decor items.
            </p>

            <button className="bg-white text-black hover:bg-gray-200 transition-all px-8 py-4 rounded-full font-bold">
              Shop Accessories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}