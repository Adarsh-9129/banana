'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How long does delivery take?',
    answer:
      'Most orders ship within 1-2 business days. Delivery typically takes 3-5 business days depending on your location and local courier schedules.',
  },
  {
    question: 'Do you offer plant care instructions?',
    answer:
      'Yes. Every plant comes with a detailed care guide, including watering, light, soil, and pruning recommendations to help your plant thrive.',
  },
  {
    question: 'Can I return a plant if it arrives damaged?',
    answer:
      'Absolutely. If your plant arrives damaged, contact us within 48 hours with a photo and we will offer a replacement or refund.',
  },
  {
    question: 'Do you ship plants outside the country?',
    answer:
      'Currently we ship within the domestic region only. International shipping may be available soon, so please check back for updates.',
  },
  {
    question: 'What if I need help choosing the right plant?',
    answer:
      'Our plant experts are available to help. Use the contact form or chat option and we will recommend plants based on your space, light, and lifestyle.',
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-emerald-600/20 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200">
                FAQ
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Common questions, answered clearly.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Find everything you need to know about shipping, plant care, returns, and choosing the right plants for your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-xl shadow-slate-950/30 transition hover:border-emerald-400/30 hover:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div>
                    <p className="text-lg font-semibold text-white">{faq.question}</p>
                    <p className="mt-2 text-sm text-slate-400">{isOpen ? 'Click to collapse' : 'Click to expand'}</p>
                  </div>
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 ${isOpen ? 'bg-emerald-400/15 text-emerald-300' : 'bg-slate-800 text-slate-300'}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div className={`px-6 pb-5 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <p className="text-sm leading-7 text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
