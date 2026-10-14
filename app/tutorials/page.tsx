"use client";

import { motion } from "framer-motion";
import {
  PlayCircle,
  Clock,
  Leaf,
  Droplets,
  Sun,
  Scissors,
} from "lucide-react";

const tutorials = [
  {
    title: "How to Water Indoor Plants Correctly",
    duration: "8 min",
    category: "Plant Care",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80",
  },
  {
    title: "Best Sunlight Requirements for Houseplants",
    duration: "12 min",
    category: "Lighting",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1200&q=80",
  },
  {
    title: "Pruning & Maintenance Guide",
    duration: "10 min",
    category: "Maintenance",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=1200&q=80",
  },
  {
    title: "Beginner's Guide to Plant Care",
    duration: "15 min",
    category: "Beginner",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
  },
];

export default function VideoTutorialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-green-900 mb-6"
          >
            Video Tutorials
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            Learn plant care from experts through step-by-step video guides.
            Discover watering techniques, pruning tips, sunlight requirements,
            and much more.
          </motion.p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1600&q=80"
            alt="Featured Video"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-white text-center p-6">
            <PlayCircle size={80} className="mb-4" />

            <h2 className="text-4xl font-bold mb-4">
              Complete Indoor Plant Care Guide
            </h2>

            <p className="max-w-2xl text-gray-200 mb-6">
              Master the basics of indoor gardening with our most popular video
              tutorial. Perfect for beginners and plant enthusiasts.
            </p>

            <button className="bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-full font-semibold">
              Watch Now
            </button>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Leaf, title: "Plant Care" },
            { icon: Droplets, title: "Watering" },
            { icon: Sun, title: "Lighting" },
            { icon: Scissors, title: "Pruning" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center border border-green-100"
            >
              <item.icon className="mx-auto text-green-600 mb-3" size={40} />
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tutorial Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-12">
          Latest Tutorials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tutorials.map((video, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-green-100"
            >
              <div className="relative">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-56 object-cover"
                />

                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <PlayCircle
                    size={55}
                    className="text-white drop-shadow-lg"
                  />
                </div>
              </div>

              <div className="p-5">
                <span className="inline-block px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full mb-3">
                  {video.category}
                </span>

                <h3 className="font-bold text-lg mb-3">{video.title}</h3>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock size={15} className="mr-2" />
                  {video.duration}
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition">
                  Watch Tutorial
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Grow Your Plant Knowledge
          </h2>

          <p className="text-green-100 mb-8">
            Explore dozens of expert-created tutorials and become a confident
            plant parent.
          </p>

          <button className="bg-white text-green-900 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Explore More Videos
          </button>
        </div>
      </section>
    </div>
  );
}