'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Leaf,
  Search,
  Sparkles,
  SunMedium,
  Droplets,
  Sprout,
  X,
  Filter,
  ChevronRight,
} from 'lucide-react';
import plantsData from '../../lib/plants';

type PlantRecord = {
  slug: string;
  name: string;
  category: string;
  variety: string;
  size: string;
  growthRate: string;
  sunlight: string;
  environment: string;
  highlight: string;
  description: string;
  image: string;
  water: string;
  light: string;
  maintenance: string;
  details: string;
  featured?: boolean;
};

type FilterState = {
  variety: string;
  size: string;
  growthRate: string;
  sunlight: string;
  environment: string;
};

type PopularSearch = {
  label: string;
  query: string;
  filters?: Partial<FilterState>;
};

const plantCatalog = plantsData as PlantRecord[];

const filterOptions = {
  variety: ['All', 'Dessert', 'Plantain', 'Hybrid'],
  size: ['All', 'Dwarf', 'Medium', 'Tall'],
  growthRate: ['All', 'Fast', 'Moderate', 'Slow'],
  sunlight: ['All', 'Bright light', 'Partial sun', 'Full sun'],
  environment: ['All', 'Indoor/Outdoor', 'Indoor', 'Outdoor'],
} as const;

const initialFilters: FilterState = {
  variety: 'All',
  size: 'All',
  growthRate: 'All',
  sunlight: 'All',
  environment: 'All',
};

const popularSearches: PopularSearch[] = [
  { label: 'Fast growers', query: 'fast', filters: { growthRate: 'Fast' } },
  { label: 'Dwarf varieties', query: 'dwarf', filters: { size: 'Dwarf' } },
  { label: 'Indoor banana plants', query: 'indoor', filters: { environment: 'Indoor/Outdoor' } },
  { label: 'Full sun picks', query: 'sun', filters: { sunlight: 'Full sun' } },
];

const featuredPlants = plantCatalog.filter((plant) => plant.featured).slice(0, 3);

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const getResultLabel = (count: number) => {
  if (count === 1) return '1 banana plant found';
  return `${count} banana plants found`;
};

function SearchControl({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <label className="space-y-2 text-sm font-medium text-slate-200">
      <span className="flex items-center gap-2 text-slate-300">
        {icon}
        {label}
      </span>
      <div className="relative">
        <select
          aria-label={label}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 pr-10 text-sm text-white outline-none transition focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
        >
          {options.map((option) => (
            <option key={option} value={option} className="bg-slate-950">
              {option}
            </option>
          ))}
        </select>
        <ChevronRight className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-slate-400" />
      </div>
    </label>
  );
}

function PlantCard({ plant }: { plant: PlantRecord }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 shadow-[0_24px_80px_rgba(2,6,23,0.38)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_30px_90px_rgba(16,185,129,0.18)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-emerald-300/30 bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
            {plant.category}
          </span>
          {plant.featured ? (
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Featured
            </span>
          ) : null}
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
            {plant.variety} Banana
          </p>
          <h3 className="text-2xl font-playfair font-bold text-white">{plant.name}</h3>
          <p className="text-sm leading-6 text-slate-300">{plant.highlight}</p>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-slate-400">{plant.description}</p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-white/8 bg-white/5 p-3">
            <span className="mb-1 flex items-center gap-2 text-slate-400">
              <Sprout className="h-4 w-4 text-emerald-300" />
              Growth
            </span>
            <p className="font-semibold text-white">{plant.growthRate}</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/5 p-3">
            <span className="mb-1 flex items-center gap-2 text-slate-400">
              <SunMedium className="h-4 w-4 text-amber-300" />
              Light
            </span>
            <p className="font-semibold text-white">{plant.sunlight}</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/5 p-3">
            <span className="mb-1 flex items-center gap-2 text-slate-400">
              <Leaf className="h-4 w-4 text-lime-300" />
              Size
            </span>
            <p className="font-semibold text-white">{plant.size}</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/5 p-3">
            <span className="mb-1 flex items-center gap-2 text-slate-400">
              <Droplets className="h-4 w-4 text-sky-300" />
              Care
            </span>
            <p className="font-semibold text-white">{plant.maintenance}</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
            {plant.environment}
          </p>
          <Link
            href={`/plants/${plant.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-teal-400"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 shadow-[0_24px_80px_rgba(2,6,23,0.38)]">
      <div className="aspect-[4/3] animate-pulse bg-gradient-to-br from-emerald-900/40 to-slate-800/60" />
      <div className="space-y-4 p-6">
        <div className="h-4 w-32 animate-pulse rounded-full bg-white/10" />
        <div className="h-7 w-2/3 animate-pulse rounded-full bg-white/10" />
        <div className="h-16 animate-pulse rounded-2xl bg-white/8" />
        <div className="grid grid-cols-2 gap-3">
          <div className="h-16 animate-pulse rounded-2xl bg-white/8" />
          <div className="h-16 animate-pulse rounded-2xl bg-white/8" />
          <div className="h-16 animate-pulse rounded-2xl bg-white/8" />
          <div className="h-16 animate-pulse rounded-2xl bg-white/8" />
        </div>
      </div>
    </div>
  );
}

export default function PlantsPage() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 550);
    return () => window.clearTimeout(timer);
  }, []);

  const filteredPlants = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return plantCatalog.filter((plant) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [plant.name, plant.category, plant.highlight, plant.description, plant.variety]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesVariety = filters.variety === 'All' || plant.variety === filters.variety;
      const matchesSize = filters.size === 'All' || plant.size === filters.size;
      const matchesGrowth = filters.growthRate === 'All' || plant.growthRate === filters.growthRate;
      const matchesSunlight = filters.sunlight === 'All' || plant.sunlight === filters.sunlight;
      const matchesEnvironment =
        filters.environment === 'All' || plant.environment === filters.environment;

      return (
        matchesQuery &&
        matchesVariety &&
        matchesSize &&
        matchesGrowth &&
        matchesSunlight &&
        matchesEnvironment
      );
    });
  }, [filters, query]);

  const hasActiveFilters =
    query.trim().length > 0 ||
    Object.values(filters).some((value) => value !== 'All');

  const clearFilters = () => {
    setQuery('');
    setFilters(initialFilters);
  };

  const applyPopularSearch = (item: PopularSearch) => {
    setQuery(item.query);
    setFilters({
      ...initialFilters,
      ...item.filters,
    });
  };

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.2),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_rgba(2,6,23,0.28),_rgba(6,78,59,0.16),_rgba(2,6,23,0.36))]" />

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:pt-20 lg:pt-24"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              <Sparkles className="h-4 w-4" />
              Plant Search
            </span>
            <h1 className="max-w-3xl text-4xl font-playfair font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Find Your Perfect Banana Plant
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Search, compare, and discover banana plant varieties that match your space,
              sunlight, and growing goals. Use instant filters to narrow the collection in real
              time.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Premium banana varieties</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Responsive search</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Careful plant matching</span>
            </div>
          </div>

          <motion.div
            variants={sectionVariants}
            className="glass relative overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.28)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-lime-300/10" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-emerald-200">
                <Leaf className="h-4 w-4" />
                Quick Search
              </div>
              <p className="text-sm leading-6 text-slate-300">
                Find compact indoor banana plants, fast outdoor growers, and specialty varieties
                with a few focused clicks.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Indoor-friendly', 'Fast growers', 'Sun lovers', 'Compact picks'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-8"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.25)] backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_auto] lg:items-end">
            <label className="space-y-2 text-sm font-medium text-slate-200 lg:col-span-1">
              <span className="flex items-center gap-2 text-slate-300">
                <Search className="h-4 w-4 text-emerald-300" />
                Search plants
              </span>
              <div className="relative">
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by name, variety, growth, or care need..."
                  aria-label="Search banana plants"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 py-4 pl-12 pr-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/20"
                />
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </label>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5 lg:col-span-1 xl:col-span-2">
              <SearchControl
                icon={<Filter className="h-4 w-4 text-emerald-300" />}
                label="Variety"
                value={filters.variety}
                onChange={(value) => setFilters((current) => ({ ...current, variety: value }))}
                options={filterOptions.variety}
              />
              <SearchControl
                icon={<Leaf className="h-4 w-4 text-lime-300" />}
                label="Size"
                value={filters.size}
                onChange={(value) => setFilters((current) => ({ ...current, size: value }))}
                options={filterOptions.size}
              />
              <SearchControl
                icon={<Sprout className="h-4 w-4 text-emerald-300" />}
                label="Growth Rate"
                value={filters.growthRate}
                onChange={(value) => setFilters((current) => ({ ...current, growthRate: value }))}
                options={filterOptions.growthRate}
              />
              <SearchControl
                icon={<SunMedium className="h-4 w-4 text-amber-300" />}
                label="Sunlight"
                value={filters.sunlight}
                onChange={(value) => setFilters((current) => ({ ...current, sunlight: value }))}
                options={filterOptions.sunlight}
              />
              <SearchControl
                icon={<Droplets className="h-4 w-4 text-sky-300" />}
                label="Indoor/Outdoor"
                value={filters.environment}
                onChange={(value) => setFilters((current) => ({ ...current, environment: value }))}
                options={filterOptions.environment}
              />
            </div>

            <div className="flex items-center gap-3 lg:justify-end">
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!hasActiveFilters}
              >
                <X className="h-4 w-4" />
                Clear Filters
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Popular Searches
            </span>
            {popularSearches.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => applyPopularSearch(item)}
                className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-100"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-10"
      >
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-2 block">Search Results</p>
            <h2 className="text-3xl font-playfair font-bold text-white">Browse banana plants</h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            {getResultLabel(filteredPlants.length)}
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : filteredPlants.length > 0 ? (
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredPlants.map((plant) => (
              <PlantCard key={plant.slug} plant={plant} />
            ))}
          </motion.div>
        ) : (
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-10 text-center shadow-[0_24px_80px_rgba(2,6,23,0.25)]">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
              <Search className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-playfair font-bold text-white">No plants match your search</h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Try adjusting your search term or clearing the filters to see more banana varieties.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-teal-400"
            >
              Reset search
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-12"
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow mb-2 block">Featured Banana Varieties</p>
            <h2 className="text-3xl font-playfair font-bold text-white">Premium picks for growers</h2>
          </div>
        </div>
        <motion.div variants={gridVariants} initial="hidden" animate="visible" className="grid gap-6 md:grid-cols-3">
          {featuredPlants.map((plant) => (
            <PlantCard key={plant.slug} plant={plant} />
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-12"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Search Tips',
              icon: <Search className="h-5 w-5 text-emerald-300" />,
              body: 'Combine a plant name with filters to quickly isolate the exact banana variety you want.',
            },
            {
              title: 'Match the Space',
              icon: <Leaf className="h-5 w-5 text-lime-300" />,
              body: 'Use the size and environment filters to find plants that fit your home, patio, or garden.',
            },
            {
              title: 'Plan for Growth',
              icon: <Sprout className="h-5 w-5 text-emerald-300" />,
              body: 'Check growth rate and sunlight needs before you choose a variety for long-term success.',
            },
          ].map((tip) => (
            <div key={tip.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.2)] backdrop-blur-xl">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10">
                {tip.icon}
              </div>
              <h3 className="text-2xl font-playfair font-bold text-white">{tip.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{tip.body}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="mx-auto max-w-7xl px-4 py-12 pb-24"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-gradient-to-br from-emerald-500/15 via-slate-950/70 to-teal-500/15 p-8 shadow-[0_30px_100px_rgba(2,6,23,0.35)] sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(52,211,153,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(132,204,22,0.14),_transparent_28%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="eyebrow">Need Help Choosing?</p>
              <h2 className="text-3xl font-playfair font-bold text-white sm:text-4xl">
                Talk to our banana plant experts.
              </h2>
              <p className="max-w-2xl text-slate-300">
                If you want a recommendation tailored to your climate, space, or production goals,
                our team can help you choose the right plant with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:from-emerald-400 hover:to-teal-400"
              >
                Contact Experts
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/10"
              >
                Explore Home
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
