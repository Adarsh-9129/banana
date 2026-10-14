'use client';

import { motion } from 'framer-motion';
import HeroSlider from '@/components/HeroSlider';
import VideoSection from '@/components/VideoSection';
import FeaturedPlants from '@/components/FeaturedPlants';
import AboutHome from '@/components/AboutHome';

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

export default function HomePage() {
  return (
    <>
      {/* Hero Section with CTA */}
      <motion.section
        className="relative mx-auto max-w-7xl px-4 py-24"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6 max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow block"
            >
              🌿 Welcome to Osr Biotech
            </motion.span>

            <h1 className="gradient-text">
             Quality Banana Plants for Modern Farming
            </h1>

            <p className="text-lg text-slate-300">
             OSR Biotech provides healthy, disease-free banana plants to help farmers achieve sustainable growth and higher production.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button primary"
              >
                🛍️ Shop Plants Now
              </motion.button>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button secondary"
              >
                📚 Care Guides
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Hero Slider */}
      <section className="relative pt-10 overflow-hidden">
        <HeroSlider />
      </section>

      {/* Video Section */}
      <VideoSection videoUrl="https://youtu.be/0CZIyIMzAUA?si=VflmSD63XRTdOQep" />

      {/* Featured Plants */}
      <FeaturedPlants />

      <AboutHome />

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="relative mx-auto max-w-7xl px-4 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="glass p-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-playfair font-bold gradient-text mb-4"
          >
            Get in Touch
          </motion.h2>

          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Have questions about our plants or need care advice? We're here to help!
            Reach out to our friendly team anytime.
          </p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="mailto:hello@bananagarden.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button primary"
            >
              📧 Email Us
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="button secondary"
            >
              💬 Chat with Us
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
