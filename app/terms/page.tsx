export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-emerald-600/20 to-transparent blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl">
            <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200">
              Terms of Service
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Terms that govern use of our site.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              These terms explain the rules for using our website, purchasing products, and interacting with our services.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="space-y-8">
          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p className="mt-4 text-slate-300 leading-8">
              By using this website, you agree to these terms of service. If you do not agree, please do not use the site.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">2. Your Account</h2>
            <p className="mt-4 text-slate-300 leading-8">
              You are responsible for maintaining the confidentiality of your account details and for all activity under your account.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">3. Orders & Payments</h2>
            <ul className="mt-4 list-disc list-inside space-y-3 text-slate-300 leading-7">
              <li>All orders are subject to acceptance and product availability.</li>
              <li>Payment must be received before products are shipped.</li>
              <li>We reserve the right to cancel or refuse service for any reason.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">4. Shipping & Returns</h2>
            <p className="mt-4 text-slate-300 leading-8">
              Shipping details, return policies, and refund eligibility are governed by our separate shipping and return policies.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">5. Intellectual Property</h2>
            <p className="mt-4 text-slate-300 leading-8">
              All content on this site, including text, images, and logos, is our property or licensed to us and is protected by intellectual property laws.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">6. Limitation of Liability</h2>
            <p className="mt-4 text-slate-300 leading-8">
              To the fullest extent permitted by law, we are not liable for indirect or consequential damages arising from your use of the site.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">7. Changes</h2>
            <p className="mt-4 text-slate-300 leading-8">
              We may update these terms at any time. Continued use of the website after changes indicates acceptance of the updated terms.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
