'use client';

import { motion } from 'framer-motion';

interface VideoSectionProps {
  videoUrl?: string;
  title?: string;
  description?: string;
}

const DEFAULT_VIDEO_URL = 'https://youtu.be/0CZIyIMzAUA';

const getYouTubeEmbedUrl = (url: string) => {
  const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  const videoId = videoIdMatch?.[1] ?? '0CZIyIMzAUA';

  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
};

const VideoSection = ({
  videoUrl = DEFAULT_VIDEO_URL,
  title = 'Watch Our Banana Plantation Journey',
  description = 'Take a closer look at our banana plantation, sustainable growing methods, and the care that helps every plant thrive.',
}: VideoSectionProps) => {
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.16),_transparent_32%),linear-gradient(135deg,_rgba(2,6,23,0.3),_rgba(6,78,59,0.22))]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center"
      >
        <div className="section-header max-w-3xl text-center">
          <span className="eyebrow mb-4 block">Banana Plantation Video</span>
          <h2 className="mb-4 text-3xl font-playfair font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            {description}
          </p>
        </div>

        <div className="group relative mt-10 w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_90px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_28px_110px_rgba(16,185,129,0.22)]">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-lime-300/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
            <iframe
              src={embedUrl}
              title="Watch Our Banana Plantation Journey"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="border-t border-white/10 bg-slate-950/50 px-5 py-4 sm:px-6 sm:py-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Banana Farm Showcase
              </p>
              <p className="text-sm text-slate-300 sm:text-right">
                Sustainable growing, healthy roots, and a closer look at our plantation in motion.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;