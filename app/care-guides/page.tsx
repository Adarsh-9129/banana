'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Droplet,
  SunMedium,
  Sparkles,
  ShieldCheck,
  RefreshCcw,
  Leaf,
  Bug,
  ChevronDown,
  Mail,
  BookOpen,
  Sparkles as SparklesIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const categoryItems: Array<{ title: string; description: string; Icon: LucideIcon; accent: string }> = [
  {
    title: 'Watering',
    description: 'Master hydration routines for every plant type and season.',
    Icon: Droplet,
    accent: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Sunlight',
    description: 'Find the perfect light balance for bright, lush growth.',
    Icon: SunMedium,
    accent: 'from-amber-400 to-orange-400',
  },
  {
    title: 'Fertilizing',
    description: 'Choose premium nutrients and timing for healthy roots.',
    Icon: Sparkles,
    accent: 'from-cyan-400 to-sky-500',
  },
  {
    title: 'Repotting',
    description: 'Upgrade pots with confidence and preserve root health.',
    Icon: RefreshCcw,
    accent: 'from-teal-400 to-emerald-500',
  },
  {
    title: 'Pest Control',
    description: 'Protect leaves and blooms with gentle, effective methods.',
    Icon: Bug,
    accent: 'from-rose-400 to-fuchsia-500',
  },
  {
    title: 'Seasonal Care',
    description: 'Adapt your routine to changing temperatures and daylight.',
    Icon: ShieldCheck,
    accent: 'from-lime-400 to-emerald-500',
  },
];

const featuredGuides = [
  {
    title: 'Hydration Rituals for Fiddle Leaf',
    description: 'Discover the exact watering cadence for bright, glossy leaves.',
    category: 'Watering',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Sunlight Secrets for Monstera',
    description: 'Keep new fenestrations strong with premium light placement.',
    category: 'Sunlight',
    image: 'https://images.unsplash.com/photo-1549799542-1ca25f8d5d34?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Fertilizer Plan for Indoor Jungle',
    description: 'A seasonal feed schedule for thriving indoor plant collections.',
    category: 'Fertilizing',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
  },
];

const timelineSteps = [
  {
    title: 'Assess the Plant',
    description: 'Check soil moisture, light exposure, and leaf health before any action.',
    icon: Leaf,
  },
  {
    title: 'Craft a Weekly Routine',
    description: 'Create a simple care schedule with watering, misting, and inspection days.',
    icon: Droplet,
  },
  {
    title: 'Use Quality Supplements',
    description: 'Choose balanced fertilizer and organic soil amendments for long-term vigor.',
    icon: SparklesIcon,
  },
  {
    title: 'Rotate & Refresh',
    description: 'Rotate plants for even light and refresh soil before the growing season.',
    icon: RefreshCcw,
  },
];

const faqs = [
  {
    question: 'How often should I water my indoor tropical plants?',
    answer:
      'Most tropical varieties prefer a consistent routine: water when the top 2 inches of soil feel dry and avoid waterlogging by allowing excess to drain.',
  },
  {
    question: 'What is the best way to introduce a plant to new light?',
    answer:
      'Move it gradually over 7–10 days, beginning with indirect light and then increasing exposure to avoid leaf burn.',
  },
  {
    question: 'Can I use the same fertilizer year-round?',
    answer:
      'Switch to a balanced formula in spring and summer, then reduce feeding during dormancy to support natural growth rhythms.',
  },
];

const careTips = [
  {
    title: 'Air Circulation',
    description: 'Improve airflow around your plants to reduce mildew and strengthen stems.',
    icon: ShieldCheck,
  },
  {
    title: 'Leaf Cleaning',
    description: 'Wipe leaves gently with a damp cloth to maximize photosynthesis.',
    icon: SunMedium,
  },
  {
    title: 'Premium Pots',
    description: 'Select containers with drainage and quality materials for root protection.',
    icon: BookOpen,
  },
];

export default function CareGuidesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleFaqToggle = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setSubscribeMessage('Please enter a valid email address.');
      return;
    }

    setSubscribeMessage('Subscription confirmed! Expect premium plant care tips in your inbox.');
    setEmail('');
  };

  return (
    <main className="relative overflow-hidden text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80"
            alt="Luxury plant care background"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="pointer-events-none absolute left-10 bottom-28 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-6"
            >
              <span className="eyebrow">Expert guidance for every plant lover</span>
              <h1 className="max-w-3xl text-5xl font-playfair font-bold leading-tight tracking-tight sm:text-6xl">
                Plant Care Guides
              </h1>
              <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
                Grow your collection with confidence using our premium care guides built for modern growers. Learn how to nourish, protect,
                and nurture your plants with expert routines.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#featured-guides"
                  className="button primary w-full sm:w-auto"
                >
                  Explore Featured Guides
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#newsletter"
                  className="button secondary w-full sm:w-auto"
                >
                  Join the Green Circle
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="glass overflow-hidden rounded-[2rem] border-white/10 shadow-glow"
            >
              <div className="relative h-96 sm:h-[30rem]">
                <Image
                  src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium plant care display"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-5">
                <div className="flex items-center gap-3 text-slate-200">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                    <SparklesIcon size={24} />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Luxury care rituals</p>
                    <p className="text-base text-slate-300">Designed for modern interiors and cultivated growth.</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-wide text-emerald-300">Soil balance</p>
                    <p className="mt-2 text-slate-200">Premium blends for consistent moisture and oxygen.</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-5">
                    <p className="text-sm uppercase tracking-wide text-emerald-300">Seasonal planning</p>
                    <p className="mt-2 text-slate-200">Stay ahead with tailored routines for every climate.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="section-header">
          <span className="eyebrow">Care Guide Categories</span>
          <h2>Guidance for Every Plant Condition</h2>
          <p className="max-w-2xl text-slate-300">
            Explore essential care categories hand-crafted for modern plant collectors and urban growers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categoryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass group overflow-hidden rounded-[2rem] border-white/10 p-8 shadow-lg shadow-black/20 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${item.accent} text-white shadow-glow`}>
                <item.Icon size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-300">{item.description}</p>
              <span className="mt-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-emerald-200 transition-colors group-hover:bg-white/15">
                Learn more
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="featured-guides" className="bg-slate-950/80 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="section-header">
            <span className="eyebrow">Featured Guides</span>
            <h2>Premium Guides for Confident Growth</h2>
            <p className="max-w-2xl text-slate-300">
              Detailed walkthroughs for your most valuable houseplants, with elegant visuals and actionable care strategies.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredGuides.map((guide, index) => (
              <motion.article
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
              >
                <div className="relative h-72 overflow-hidden rounded-t-[2rem]">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 space-y-5">
                  <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                    {guide.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{guide.title}</h3>
                  <p className="text-slate-300">{guide.description}</p>
                  <motion.a
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition-colors hover:text-white"
                    href="#newsletter"
                  >
                    Read More <ChevronDown size={18} />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="section-header">
          <span className="eyebrow">Beginner Plant Care Guide</span>
          <h2>Start Your Plant Journey with Confidence</h2>
          <p className="max-w-2xl text-slate-300">
            Follow our refined, modern timeline to build a healthy foundation for every new houseplant.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.7fr_0.3fr]">
          <div className="space-y-6">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-black/10"
              >
                <div className="absolute left-8 top-8 h-3 w-3 rounded-full bg-emerald-400 shadow-glow" />
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300">
                    <step.icon size={28} />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Step {index + 1}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="mt-6 text-slate-300">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass rounded-[2rem] border-white/10 p-8 shadow-glow">
            <div className="space-y-6">
              <span className="eyebrow">Your first care ritual</span>
              <h3 className="text-3xl font-semibold text-white">Anchor your routine</h3>
              <p className="text-slate-300">
                Begin with a calm observation, then make gentle adjustments to light, water, and feeding. A consistent ritual keeps plants resilient.
              </p>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-slate-950/80 p-6">
                  <p className="font-semibold text-white">Inspect weekly</p>
                  <p className="mt-2 text-slate-400">Scan leaves, soil, and pot condition to catch issues early.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-6">
                  <p className="font-semibold text-white">Record conditions</p>
                  <p className="mt-2 text-slate-400">Track watering, light, and temperature for smarter decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950/80 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="section-header">
            <span className="eyebrow">Common Plant Problems</span>
            <h2>Solutions for everyday plant challenges</h2>
            <p className="max-w-2xl text-slate-300">
              Quickly identify common issues and restore your plants with expert-backed responses.
            </p>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="glass overflow-hidden rounded-[2rem] border-white/10">
                <button
                  type="button"
                  onClick={() => handleFaqToggle(index)}
                  aria-expanded={activeFaq === index}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <div>
                    <p className="text-lg font-semibold text-white">{faq.question}</p>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-emerald-300' : 'text-slate-400'}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === index ? 'auto' : 0, opacity: activeFaq === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-6"
                >
                  {activeFaq === index && (
                    <p className="pb-6 text-slate-300">{faq.answer}</p>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="section-header">
          <span className="eyebrow">Plant Care Tips</span>
          <h2>Expert advice for lasting results</h2>
          <p className="max-w-2xl text-slate-300">
            Smart, quick tips that add polish to your plant care routine and help your indoor garden thrive.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {careTips.map((tip, index) => (
            <motion.article
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass rounded-[2rem] border-white/10 p-8 shadow-lg shadow-black/25 hover:-translate-y-1"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300">
                <tip.icon size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{tip.title}</h3>
              <p className="mt-4 text-slate-300">{tip.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="newsletter" className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-emerald-500/20 via-slate-950/90 to-teal-500/20 px-6 py-20 sm:px-10 lg:px-14">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.16),_transparent_36%)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <div className="space-y-6">
              <span className="eyebrow">Newsletter</span>
              <h2 className="text-4xl font-playfair font-bold tracking-tight text-white sm:text-5xl">
                Receive curated plant care insights every month.
              </h2>
              <p className="max-w-lg text-slate-200">
                Elevate your indoor garden with premium tips, seasonal reminders, and plant wellness guides delivered right to your inbox.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass rounded-[2rem] border border-white/10 p-8 shadow-2xl shadow-black/25"
            >
              <form className="space-y-5" onSubmit={handleSubscribe}>
                <label className="block text-sm uppercase tracking-[0.35em] text-emerald-300" htmlFor="email">
                  Email address
                </label>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex-1 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 focus-within:border-emerald-400/80">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Mail size={18} />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="your@email.com"
                        className="w-full border-none bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="button primary w-full sm:w-auto">
                    Subscribe
                  </button>
                </div>
                {subscribeMessage && (
                  <p className="text-sm text-emerald-200">{subscribeMessage}</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-3 text-center text-slate-400 sm:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">Looking for premium care?</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Ready to cultivate a greener, more luxurious indoor garden?
          </h2>
        </div>
      </section>
    </main>
  );
}
