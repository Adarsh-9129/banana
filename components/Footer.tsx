'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Products',
      links: [
        { label: 'Indoor Plants', href: '/indoor-plants' },
        { label: 'Outdoor Plants', href: '/outdoor-plants' },
        { label: 'Plant Care Tools', href: '/tools' },
        { label: 'Accessories', href: '/accessories' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { label: 'Care Guides', href: '/care-guides' },
        { label: 'Plant Blog', href: '/blog' },
        { label: 'Video Tutorials', href: '/tutorials' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'Pinterest', href: 'https://pinterest.com' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <footer className="footer">
      {/* Main Footer Content */}
      <motion.div
        className="footer-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Brand Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-2xl font-playfair font-bold gradient-text">
            🌿 Banana Garden
          </h3>

          <p className="text-slate-400">
            Premium tropical plants delivered to your doorstep.
            Bringing nature into modern homes.
          </p>

          <div className="flex gap-3">
            {['🌱', '🌿', '🍃'].map((emoji, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.3, rotate: 10 }}
                className="text-2xl cursor-pointer"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Footer Links */}
        {footerSections.map((section) => (
          <motion.div
            key={section.title}
            variants={itemVariants}
            className="space-y-4"
          >
            <h3 className="text-emerald-300 font-semibold">
              {section.title}
            </h3>

            <ul className="footer-links">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={
                      link.href.startsWith('http') ? '_blank' : '_self'
                    }
                  >
                    <span className="footer-link group relative">
                      {link.label}

                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="footer-bottom"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} OSR BIOTECH- All rights reserved. 🌍
          </p>

          <p>
            Crafted with
            <span className="text-emerald-400"> ❤️ </span>
            for plant lovers worldwide
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;