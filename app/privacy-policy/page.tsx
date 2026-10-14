export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-emerald-600/20 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl">
            <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200">
              Privacy Policy
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Our commitment to your privacy.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              At Osr Biotech, we respect your privacy and are committed to protecting your personal information when you visit our site or place an order.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="space-y-8">
          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
            <p className="mt-4 text-slate-300 leading-8">
              We may collect information that you provide directly to us, such as name, email address, shipping address, and payment details when you place an order. We also collect information automatically, such as browser type, device identifiers, and browsing behavior to improve your shopping experience.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">How We Use Your Data</h2>
            <ul className="mt-4 space-y-3 text-slate-300 leading-7 list-disc list-inside">
              <li>To process orders and deliver products.</li>
              <li>To communicate order status, promotions, and support updates.</li>
              <li>To personalize your experience and improve website performance.</li>
              <li>To protect against fraud and maintain site security.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Cookies & Tracking</h2>
            <p className="mt-4 text-slate-300 leading-8">
              We use cookies and similar technologies to remember preferences, analyze site traffic, and improve functionality. You can manage cookie settings in your browser, but disabling cookies may affect the website experience.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Sharing Your Information</h2>
            <p className="mt-4 text-slate-300 leading-8">
              We do not sell your personal information. We may share information with trusted service providers needed to process orders, support site operations, and maintain compliance with legal requirements.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
            <p className="mt-4 text-slate-300 leading-8">
              You have the right to access, correct, or delete your personal information. If you have questions or requests, please contact us at <span className="text-emerald-300">hello@bananagarden.com</span>.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Policy Updates</h2>
            <p className="mt-4 text-slate-300 leading-8">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
