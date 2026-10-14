"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tools = [
  {
    title: "Watering Tools",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop",
    desc: "Premium watering cans and spray bottles for healthy plant growth.",
  },
  {
    title: "Garden Scissors",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
    desc: "Professional cutting tools for pruning and shaping plants.",
  },
  {
    title: "Plant Pots",
    image:
      "https://images.unsplash.com/photo-1483794344563-d27a8d38fe2f?q=80&w=1200&auto=format&fit=crop",
    desc: "Modern decorative pots that give your garden a luxury look.",
  },
  {
    title: "Soil Care Kit",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
    desc: "Essential tools for soil nutrition and plant maintenance.",
  },
];

export default function ToolsPage() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1600&auto=format&fit=crop"
          alt="Plant Tools"
          fill
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="uppercase tracking-[8px] text-green-400 text-sm mb-4">
            Premium Garden Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Plant Care <br /> Tools
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
            Discover modern and professional gardening tools designed to keep
            your plants healthy, beautiful, and thriving.
          </p>

          <button className="bg-green-500 hover:bg-green-600 transition-all px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto">
            Explore Tools
            <span className="text-xl">→</span>
          </button>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: "💧",
              title: "Easy Watering",
              desc: "Smart watering tools for healthy plants.",
            },
            {
              icon: "☀️",
              title: "Outdoor Ready",
              desc: "Durable tools perfect for outdoor gardens.",
            },
            {
              icon: "✂️",
              title: "Professional Care",
              desc: "Advanced tools for trimming and shaping.",
            },
            {
              icon: "🛡️",
              title: "Premium Quality",
              desc: "Long-lasting and eco-friendly products.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center shadow-2xl"
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

      {/* TOOL CARDS */}
      <section className="py-20 px-6 md:px-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Essential Plant Tools
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Upgrade your gardening experience with premium and stylish plant
            care accessories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
            >
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {tool.desc}
                </p>

                <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold transition-all">
                  View Product
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="px-6 md:px-16 pb-20">
        <div className="relative rounded-[40px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1600&auto=format&fit=crop"
            alt="Garden Tools"
            width={1600}
            height={700}
            className="w-full h-[400px] object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Make Gardening Easy
            </h2>

            <p className="max-w-2xl text-gray-200 text-lg mb-8">
              Professional tools and accessories designed for modern plant
              lovers and garden enthusiasts.
            </p>

            <button className="bg-white text-black hover:bg-gray-200 transition-all px-8 py-4 rounded-full font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}