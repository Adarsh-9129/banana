'use client';

import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '150+', label: 'Plant Varieties' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Customer Support' },
  ];

  const values = [
    {
      icon: '🌍',
      title: 'Sustainability',
      description: 'Eco-friendly practices and sustainable sourcing for every plant.',
    },
    {
      icon: '💚',
      title: 'Quality',
      description: 'Premium selection of healthy plants delivered in perfect condition.',
    },
    {
      icon: '📚',
      title: 'Education',
      description: 'Expert care guides and resources to help your plants thrive.',
    },
    {
      icon: '🎯',
      title: 'Community',
      description: 'Join plant lovers and share your growing journey with us.',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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
        <span className="eyebrow block mb-4">🌟 Our Story</span>
        <h2 className="gradient-text mb-4">About Banana Plant</h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-lg">
          Founded on the belief that everyone deserves to experience the healing power of plants.
          We're on a mission to make premium tropical plants accessible to plant lovers everywhere.
        </p>
      </motion.div>

      {/* Stats */}
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

      {/* Values */}
      <motion.div
        className="mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold gradient-text text-center mb-12">
          Our Core Values
        </h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 hover:bg-white/20 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold text-emerald-300 mb-3">
                {value.title}
              </h4>
              <p className="text-slate-300">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="glass p-12 text-center"
      >
        <h3 className="text-2xl font-playfair font-bold gradient-text mb-4">
          Ready to Start Your Plant Journey?
        </h3>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Join thousands of happy plant parents. Get expert care tips, exclusive offers, and
          access to our premium plant collection.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="button primary"
        >
          Shop Plants Now →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;
