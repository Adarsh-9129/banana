'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Leaf,
  Sparkles,
  TrendingUp,
  CalendarDays,
  Users,
  ArrowRight,
  Mail,
  ChevronRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const categories: Array<{ title: string; Icon: LucideIcon; accent: string }> = [
  { title: 'Wellness', Icon: Sparkles, accent: 'from-emerald-400 to-teal-400' },
  { title: 'Light Care', Icon: Leaf, accent: 'from-yellow-400 to-amber-500' },
  { title: 'Growth Tips', Icon: TrendingUp, accent: 'from-cyan-400 to-sky-500' },
  { title: 'Seasonal', Icon: CalendarDays, accent: 'from-fuchsia-400 to-purple-500' },
];

const posts = [
  {
    title: 'How to Build a Botanical Sanctuary at Home',
    category: 'Wellness',
    excerpt: 'Create a calm, curated indoor garden with premium plants, textures, and natural light strategies.',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    date: 'May 28, 2026',
    readingTime: '6 min read',
  },
  {
    title: 'Sunlight Secrets for Modern Houseplants',
    category: 'Light Care',
    excerpt: 'Learn how to match plant families with ideal light zones using a refined yet simple glow guide.',
    image: 'https://images.unsplash.com/photo-1549799542-1ca25f8d5d34?auto=format&fit=crop&w=1200&q=80',
    date: 'May 22, 2026',
    readingTime: '5 min read',
  },
  {
    title: 'Root & Soil Rituals for Premium Growth',
    category: 'Growth Tips',
    excerpt: 'Discover nutrient rhythms, soil blends, and pot choices that help indoor plants thrive in luxury interiors.',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80',
    date: 'May 18, 2026',
    readingTime: '7 min read',
  },
];

const editorialHighlights = [
  {
    title: 'Design-forward plant styling for living rooms',
    description: 'Use sculptural planters, layered textures, and curated foliage to elevate your space.',
  },
  {
    title: 'Weekly care checklist for busy plant lovers',
    description: 'Stay intentional with a simple routine that keeps leaves glossy and soil balanced.',
  },
  {
    title: 'Luxury containers with function and form',
    description: 'Choose pots with drainage and aesthetic appeal to showcase premium plant displays.',
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setNewsletterMessage('Please enter your email to subscribe.');
      return;
    }

    setNewsletterMessage('Thanks for subscribing — a new plant story is on its way.');
    setEmail('');
  };

  return (
    <main className="relative overflow-hidden text-slate-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80"
            alt="Modern plant blog hero background"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="eyebrow">Plant wisdom for the modern home</span>
              <h1 className="max-w-3xl text-5xl font-playfair font-bold leading-tight tracking-tight sm:text-6xl">
                Plant Blog
              </h1>
              <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
                Explore thoughtful stories, refined care routines, and elevated plant design advice for a luxury indoor garden.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#posts"
                  className="button primary w-full sm:w-auto"
                >
                  Read Latest Posts
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#newsletter"
                  className="button secondary w-full sm:w-auto"
                >
                  Join the Blog Circle
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="glass rounded-[2rem] border-white/10 p-8 shadow-glow"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-200">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300">
                    <BookOpen size={28} />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Editor’s note</p>
                    <p className="text-base text-slate-300">Curated insights for plant lovers who appreciate premium style and lasting growth.</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {editorialHighlights.map((item) => (
                    <div key={item.title} className="rounded-3xl bg-slate-950/80 p-5">
                      <p className="text-sm uppercase tracking-wide text-emerald-300">{item.title}</p>
                      <p className="mt-3 text-slate-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="posts">
        <div className="section-header">
          <span className="eyebrow">Featured Stories</span>
          <h2>Latest Plant Blog Articles</h2>
          <p className="max-w-2xl text-slate-300">
            Discover premium care stories, seasonal updates, and botanical styling inspiration.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 py-4">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              selectedCategory === 'All' ? 'bg-emerald-400 text-slate-950 border-transparent' : 'border-white/10 text-slate-300 hover:border-white/20'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.title}
              type="button"
              onClick={() => setSelectedCategory(category.title)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                selectedCategory === category.title ? 'bg-emerald-400 text-slate-950 border-transparent' : 'border-white/10 text-slate-300 hover:border-white/20'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/20"
            >
              <div className="relative h-72 overflow-hidden rounded-t-[2rem]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  {post.category}
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-white">{post.title}</h3>
                <p className="mt-4 text-slate-300">{post.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>
                <motion.a
                  whileHover={{ x: 4 }}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-200 transition hover:text-white"
                  href="#newsletter"
                >
                  Read article <ArrowRight size={18} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950/80 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_0.25fr] items-start">
            <div className="space-y-6">
              <span className="eyebrow">Insight</span>
              <h2>Garden commentary for elevated plant living</h2>
              <p className="max-w-2xl text-slate-300">
                Each article is designed to help you care for your plants with intention, style, and expert-level precision.
              </p>
            </div>
            <div className="glass rounded-[2rem] border-white/10 p-8 shadow-glow">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300">
                  <Users size={24} />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Community</p>
                  <p className="text-base text-slate-200">25k readers and growing</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="font-semibold text-white">Design a living wall</p>
                  <p className="mt-2 text-slate-400">A guide to styling vertical plant displays with framed structure and flow.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="font-semibold text-white">Potting with performance in mind</p>
                  <p className="mt-2 text-slate-400">Choose premium containers that look beautiful and support healthy growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-emerald-500/20 via-slate-950/90 to-teal-500/20 px-6 py-20 sm:px-10 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.16),_transparent_36%)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <div className="space-y-6">
              <span className="eyebrow">Newsletter</span>
              <h2 className="text-4xl font-playfair font-bold tracking-tight text-white sm:text-5xl">
                Subscribe for premium plant blog updates.
              </h2>
              <p className="max-w-lg text-slate-200">
                Receive curated stories, seasonal care notes, and plant styling ideas delivered to your inbox.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass rounded-[2rem] border border-white/10 p-8 shadow-2xl shadow-black/25"
            >
              <form className="space-y-5" onSubmit={handleNewsletterSubmit}>
                <label className="block text-sm uppercase tracking-[0.35em] text-emerald-300" htmlFor="newsletter-email">
                  Email address
                </label>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex-1 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 focus-within:border-emerald-400/80">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Mail size={18} />
                      <input
                        id="newsletter-email"
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
                {newsletterMessage && <p className="text-sm text-emerald-200">{newsletterMessage}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-3 text-center text-slate-400 sm:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">Ready for your next story?</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Explore fresh plant stories, expert rituals, and modern greenery advice.
          </h2>
        </div>
      </section>
    </main>
  );
}
