"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Have questions about our plants,
            services, or orders? Reach out to us anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#111111] border border-gray-800 rounded-3xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-200">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full p-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="bg-[#111111] border border-gray-800 rounded-3xl shadow-xl p-6 flex items-center gap-4 hover:border-green-500 transition-all">
              <div className="bg-green-500/20 p-4 rounded-2xl">
                <Phone className="text-green-500" size={28} />
              </div>

              <div>
                <h3 className="font-bold text-xl text-white">Phone</h3>
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#111111] border border-gray-800 rounded-3xl shadow-xl p-6 flex items-center gap-4 hover:border-green-500 transition-all">
              <div className="bg-green-500/20 p-4 rounded-2xl">
                <Mail className="text-green-500" size={28} />
              </div>

              <div>
                <h3 className="font-bold text-xl text-white">Email</h3>
                <p className="text-gray-300">info@greenplant.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-[#111111] border border-gray-800 rounded-3xl shadow-xl p-6 flex items-center gap-4 hover:border-green-500 transition-all">
              <div className="bg-green-500/20 p-4 rounded-2xl">
                <MapPin className="text-green-500" size={28} />
              </div>

              <div>
                <h3 className="font-bold text-xl text-white">Address</h3>
                <p className="text-gray-300">
                  Green Plant Nursery, Lucknow, Uttar Pradesh
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-[#111111] border border-gray-800 rounded-3xl shadow-xl p-6 flex items-center gap-4 hover:border-green-500 transition-all">
              <div className="bg-green-500/20 p-4 rounded-2xl">
                <Clock className="text-green-500" size={28} />
              </div>

              <div>
                <h3 className="font-bold text-xl text-white">
                  Working Hours
                </h3>
                <p className="text-gray-300">
                  Mon - Sat: 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>

            {/* Extra Section */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-3">
                Let's Grow Together 🌱
              </h3>

              <p className="text-green-100">
                Whether you're looking for indoor plants, outdoor gardens,
                accessories, or plant care guidance, our team is here to help
                you create a greener and healthier environment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}