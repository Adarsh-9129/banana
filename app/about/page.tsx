'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Flower2,
  Headphones,
  Leaf,
  Linkedin,
  Mail,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react';

const AboutPage = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const [stats, setStats] = useState({ delivered: 0, customers: 0, years: 0, cities: 0 });

  useEffect(() => {
    if (!statsInView) return;

    const targets = { delivered: 10000, customers: 5000, years: 10, cities: 50 };
    const duration = 1400;
    const startTime = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setStats({
        delivered: Math.round(targets.delivered * eased),
        customers: Math.round(targets.customers * eased),
        years: Math.round(targets.years * eased),
        cities: Math.round(targets.cities * eased),
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    const frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [statsInView]);

  const features = [
    {
      icon: BadgeCheck,
      title: 'Healthy Certified Plants',
      description: 'Each specimen is nurtured with the highest standards to ensure vibrant growth and long-lasting beauty.',
    },
    {
      icon: Sparkles,
      title: 'Expert Plant Guidance',
      description: 'Receive tailored advice from our horticulture experts for every stage of your plant journey.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Packaging',
      description: 'Luxury-grade packaging protects every plant during delivery, preserving freshness on arrival.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Our streamlined logistics team ships your selected plants quickly and reliably nationwide.',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Farming',
      description: 'We cultivate with sustainability at heart, using responsible, nature-first growing methods.',
    },
    {
      icon: Headphones,
      title: '24/7 Customer Support',
      description: 'A dedicated support team is always ready to assist with care tips, orders, and follow-up care.',
    },
  ];

  const experts = [
    {
      name: 'Sarah Chen',
      role: 'Founder & Botanist',
      description: 'A visionary grower with over 15 years in tropical horticulture and premium plant curation.',
      experience: '15+ Years',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head Horticulturist',
      description: 'Specializes in healthy propagation, climate-smart cultivation, and rare plant selections.',
      experience: '12+ Years',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Emma Davis',
      role: 'Customer Success Lead',
      description: 'Ensures every client receives premium support, plant advice, and a seamless luxury experience.',
      experience: '9+ Years',
      image:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const testimonials = [
    {
      name: 'Alicia R.',
      role: 'Interior Designer',
      quote:
        'The plant quality was exceptional, and the packaging felt truly premium. My space looks transformed.',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Daniel P.',
      role: 'Homeowner',
      quote:
        'Their guidance made choosing the perfect plants effortless. The delivery was fast and flawless.',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Mina K.',
      role: 'Boutique Owner',
      quote:
        'A beautifully curated experience from start to finish. Every plant arrived healthy and elegant.',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const SectionReveal = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="relative overflow-hidden pb-24 pt-16 text-slate-100 sm:pt-20">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-900/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-800/20 blur-3xl" />
      </div>

      <section className="relative isolate mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/50 shadow-[0_30px_100px_rgba(2,8,23,0.35)]">
          <Image
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=80"
            alt="Banana plantation under warm sunlight"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.9),rgba(2,8,23,0.4),rgba(2,8,23,0.8))]" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-7 py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 backdrop-blur"
          >
            <Leaf size={16} />
            Premium Tropical Living
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl"
          >
            Growing Nature, <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-amber-300 bg-clip-text text-transparent">Inspiring Every Home</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl text-lg text-slate-200 sm:text-xl"
          >
            We craft a luxury plant experience with healthy banana plants, expert care guidance, and delivery designed to make your home bloom beautifully.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/plants" className="button primary">
              Explore Plants
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="button secondary border border-white/20 bg-white/10 hover:bg-white/20">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-10 top-12 text-5xl text-emerald-300/40">
            🍃
          </motion.div>
          <motion.div animate={{ y: [0, 16, 0], rotate: [0, -8, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-16 right-24 text-4xl text-amber-300/35">
            🍌
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal className="grid items-center gap-10 rounded-[32px] border border-white/10 bg-white/8 p-6 shadow-[0_25px_70px_rgba(2,8,23,0.2)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <motion.div whileHover={{ scale: 1.01 }} className="relative overflow-hidden rounded-[24px] border border-emerald-400/20 shadow-[0_20px_60px_rgba(16,185,129,0.15)]">
            <Image
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80"
              alt="Banana plants growing in a lush greenhouse"
              width={800}
              height={640}
              loading="lazy"
              className="h-[340px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[440px]"
            />
          </motion.div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="eyebrow">Our Story</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Crafting premium tropical experiences with care.</h2>
            </div>
            <div className="space-y-4 text-base text-slate-300 sm:text-lg">
              <p>
                Banana Garden began with a simple belief: nature should feel both luxurious and attainable. We grow and curate banana plants that bring calm, character, and vitality to modern interiors.
              </p>
              <p>
                From our nursery to your doorstep, every step is guided by quality, sustainability, and attention to detail. Our team blends traditional horticulture with contemporary design sensibilities.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: '10+ Years Experience', icon: '🌱' },
                { label: 'Premium Banana Plants', icon: '🍌' },
                { label: 'Nationwide Delivery', icon: '🚚' },
                { label: '5000+ Happy Customers', icon: '⭐' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-4 text-sm font-medium text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.12)]"
                >
                  <span className="mr-2 text-base">{item.icon}</span>
                  {item.label}
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal className="space-y-8">
          <div className="text-center">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Luxury care, from garden to doorstep.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="group relative overflow-hidden rounded-[24px] border border-emerald-400/20 bg-white/10 p-6 shadow-[0_15px_45px_rgba(16,185,129,0.12)] backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-teal-400/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm leading-7 text-slate-300">{feature.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal className="rounded-[32px] border border-white/10 bg-slate-950/40 p-6 shadow-[0_25px_90px_rgba(2,8,23,0.25)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-10 text-center">
            <p className="eyebrow">Meet Our Experts</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">A team rooted in expertise and passion.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {experts.map((member) => (
              <motion.article
                key={member.name}
                whileHover={{ y: -8, scale: 1.01, boxShadow: '0 22px 55px rgba(16, 185, 129, 0.16)' }}
                className="group rounded-[24px] border border-emerald-400/20 bg-white/10 p-5 text-center shadow-[0_15px_40px_rgba(2,8,23,0.2)] backdrop-blur-xl"
              >
                <div className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-emerald-400/40 p-1 shadow-[0_0_35px_rgba(16,185,129,0.22)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    loading="lazy"
                    className="h-full w-full rounded-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-300">{member.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{member.description}</p>
                <div className="mt-4 inline-flex rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                  {member.experience}
                </div>
                <div className="mt-5 flex items-center justify-center gap-3 opacity-80 transition duration-300 group-hover:opacity-100">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/10 p-2 text-emerald-200 transition hover:bg-emerald-500/15 hover:text-white">
                    <Linkedin size={16} />
                  </a>
                  <a href="mailto:hello@bananagarden.com" className="rounded-full border border-white/10 bg-white/10 p-2 text-emerald-200 transition hover:bg-emerald-500/15 hover:text-white">
                    <Mail size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section ref={statsRef} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal className="grid gap-4 rounded-[32px] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-slate-900/70 to-teal-500/10 p-6 shadow-[0_20px_60px_rgba(16,185,129,0.13)] backdrop-blur-xl md:grid-cols-2 xl:grid-cols-4 md:p-8">
          {[
            { label: 'Plants Delivered', value: stats.delivered, suffix: '+' },
            { label: 'Happy Customers', value: stats.customers, suffix: '+' },
            { label: 'Years Experience', value: stats.years, suffix: '+' },
            { label: 'Cities Served', value: stats.cities, suffix: '+' },
          ].map((item) => (
            <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/10 p-6 text-center">
              <p className="text-4xl font-semibold text-white sm:text-5xl">
                {item.value}
                {item.suffix}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-300">{item.label}</p>
            </div>
          ))}
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal className="space-y-8">
          <div className="text-center">
            <p className="eyebrow">Customer Testimonials</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Trusted by design lovers and plant enthusiasts.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.article
                key={item.name}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-[24px] border border-white/10 bg-white/10 p-6 shadow-[0_15px_45px_rgba(2,8,23,0.18)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-sm text-slate-300">{item.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">“{item.quote}”</p>
              </motion.article>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[32px] border border-emerald-400/30 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 p-8 text-center text-white shadow-[0_25px_90px_rgba(16,185,129,0.23)] sm:p-12"
          >
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-white/20" />
              <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full border border-white/20" />
            </div>
            <div className="relative z-10 space-y-5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl">
                🌿
              </div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Grow Your Garden?</h2>
              <p className="mx-auto max-w-2xl text-base text-emerald-50/95 sm:text-lg">
                Discover the elegance of premium banana plants and let your home flourish with timeless tropical beauty.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-3">
                <Link href="/plants" className="button rounded-full border border-white/20 bg-white/15 text-white shadow-lg hover:bg-white/25">
                  Shop Now
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="button rounded-full bg-slate-950/80 text-white hover:bg-slate-900">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </SectionReveal>
      </section>
    </div>
  );
};

export default AboutPage;
