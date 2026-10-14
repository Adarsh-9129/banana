'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  Eye,
  EyeOff,
  LogIn,
  LogOut,
  Menu,
  Sparkles,
  User,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  getCurrentUser,
  getInitials,
  isEmailValid,
  setCurrentUser,
  signInUser,
  signOutUser,
  signUpUser,
  type AuthUser,
} from '@/lib/auth';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formValues, setFormValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '', form: '' });

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeoutId = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setAuthModalOpen(false);
        setIsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Plants', href: '/plants' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const isFormValid = useMemo(() => {
    const trimmedEmail = formValues.email.trim();
    const trimmedPassword = formValues.password.trim();
    const trimmedName = formValues.name.trim();

    if (!trimmedEmail || !trimmedPassword || !isEmailValid(trimmedEmail)) {
      return false;
    }

    if (authMode === 'signup' && !trimmedName) {
      return false;
    }

    return true;
  }, [authMode, formValues.email, formValues.name, formValues.password]);

  const openAuthModal = (mode: 'signin' | 'signup' = 'signin') => {
    setAuthMode(mode);
    setErrors({ name: '', email: '', password: '', form: '' });
    setFormValues({ name: '', email: '', password: '' });
    setShowPassword(false);
    setRememberMe(true);
    setAuthModalOpen(true);
  };

  const validateInputs = () => {
    const nextErrors = { name: '', email: '', password: '', form: '' };

    if (authMode === 'signup' && !formValues.name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }

    if (!formValues.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!isEmailValid(formValues.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.password.trim()) {
      nextErrors.password = 'Password is required to continue.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const nextErrors = validateInputs();
    setErrors(nextErrors);

    if (nextErrors.name || nextErrors.email || nextErrors.password) {
      return;
    }

    setIsSubmitting(true);
    setErrors((current) => ({ ...current, form: '' }));

    try {
      if (authMode === 'signup') {
        const createdUser = await signUpUser({
          name: formValues.name,
          email: formValues.email,
          password: formValues.password,
        });
        setCurrentUser(createdUser, rememberMe);
        setUser(createdUser);
        setToast({ message: 'Account created successfully.', type: 'success' });
      } else {
        const signedInUser = await signInUser({
          email: formValues.email,
          password: formValues.password,
        });
        setCurrentUser(signedInUser, rememberMe);
        setUser(signedInUser);
        setToast({ message: 'Welcome back!', type: 'success' });
      }

      setAuthModalOpen(false);
      setFormValues({ name: '', email: '', password: '' });
      setShowPassword(false);
      setRememberMe(true);
      setAuthMode('signin');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Authentication failed.';
      setErrors((current) => ({ ...current, form: message }));
      setToast({ message, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignOut = () => {
    signOutUser();
    setUser(null);
    setIsDropdownOpen(false);
    setToast({ message: 'You have been signed out.', type: 'success' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="navbar-logo"
          >
            🌿 Banana Garden
          </motion.div>

          <motion.div
            className="nav-links"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.label} variants={itemVariants}>
                <Link href={item.href}>
                  <span className="nav-link group relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="ml-4 hidden items-center gap-3 md:flex">
            {user ? (
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setIsDropdownOpen((current) => !current)}
                  className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.16)]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-sm font-semibold text-white">
                    {user.avatar ? user.avatar : getInitials(user.name)}
                  </div>
                  <span className="hidden lg:inline">{user.name}</span>
                  <ChevronDown size={16} />
                </motion.button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-emerald-900/30"
                    >
                      <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-100">
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-xs text-emerald-200/80">{user.email}</p>
                      </div>
                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="mt-2 flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-slate-200 transition-colors hover:bg-white/10"
                      >
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => openAuthModal('signin')}
                className="rounded-full border border-emerald-400/60 bg-transparent px-4 py-2 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:bg-emerald-500/10 hover:text-emerald-200"
              >
                Sign In
              </motion.button>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 text-2xl text-emerald-400 md:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl md:hidden"
            >
              <div className="space-y-3 px-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-emerald-300"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-2">
                  {user ? (
                    <>
                      <div className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white">
                          {user.avatar ? user.avatar : getInitials(user.name)}
                        </div>
                        <span>{user.name}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSignOut}
                        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20"
                      >
                        <LogOut size={16} />
                        Sign Out
                      </motion.button>
                    </>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openAuthModal('signin');
                      }}
                      className="flex items-center justify-center gap-2 rounded-full border border-emerald-400/60 px-4 py-2 text-sm font-semibold text-emerald-300"
                    >
                      <LogIn size={16} />
                      Sign In
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {authModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
            onClick={() => setAuthModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md rounded-[28px] border border-emerald-400/30 bg-white/90 p-6 shadow-[0_30px_80px_rgba(2,8,23,0.45)] backdrop-blur-2xl dark:bg-slate-900/85"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
                    <Sparkles size={16} />
                    Banana Garden
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {authMode === 'signin' ? 'Welcome back' : 'Create your account'}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {authMode === 'signin'
                      ? 'Sign in to continue shopping for premium plants and care tips.'
                      : 'Join Banana Garden to save favorites and manage your account.'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setAuthModalOpen(false)}
                  className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                  aria-label="Close sign in form"
                >
                  <X size={18} />
                </button>
              </div>

              {errors.form ? (
                <div className="mb-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-sm text-rose-600 dark:text-rose-300">
                  {errors.form}
                </div>
              ) : null}

              <form className="space-y-4" onSubmit={handleSubmit}>
                {authMode === 'signup' ? (
                  <div>
                    <label htmlFor="auth-name" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Full Name
                    </label>
                    <input
                      id="auth-name"
                      type="text"
                      value={formValues.name}
                      onChange={(event) =>
                        setFormValues((current) => ({ ...current, name: event.target.value }))
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100"
                      placeholder="Alex Green"
                    />
                    {errors.name ? <p className="mt-1 text-sm text-rose-500">{errors.name}</p> : null}
                  </div>
                ) : null}

                <div>
                  <label htmlFor="auth-email" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Email Address
                  </label>
                  <input
                    id="auth-email"
                    type="email"
                    value={formValues.email}
                    onChange={(event) =>
                      setFormValues((current) => ({ ...current, email: event.target.value }))
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100"
                    placeholder="you@example.com"
                  />
                  {errors.email ? <p className="mt-1 text-sm text-rose-500">{errors.email}</p> : null}
                </div>

                <div>
                  <label htmlFor="auth-password" className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="auth-password"
                      type={showPassword ? 'text' : 'password'}
                      value={formValues.password}
                      onChange={(event) =>
                        setFormValues((current) => ({ ...current, password: event.target.value }))
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 pr-12 text-sm text-slate-700 outline-none ring-0 transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-emerald-600"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password ? <p className="mt-1 text-sm text-rose-500">{errors.password}</p> : null}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe((current) => !current)}
                      className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    Remember me
                  </label>
                  <button type="button" className="font-medium text-emerald-600 transition-colors hover:text-emerald-500">
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:from-emerald-400 hover:to-teal-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? authMode === 'signin'
                      ? 'Signing in...'
                      : 'Creating account...'
                    : authMode === 'signin'
                      ? 'Sign In'
                      : 'Create Account'}
                </button>
              </form>

              <p className="mt-5 text-center text-sm text-slate-600 dark:text-slate-300">
                {authMode === 'signin' ? "Don't have an account?" : 'Already have an account?'}
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode((current) => (current === 'signin' ? 'signup' : 'signin'));
                    setErrors({ name: '', email: '', password: '', form: '' });
                  }}
                  className="ml-1 font-semibold text-emerald-600 transition-colors hover:text-emerald-500"
                >
                  {authMode === 'signin' ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className={`fixed bottom-4 right-4 z-[70] rounded-2xl border px-4 py-3 text-sm font-medium shadow-2xl backdrop-blur ${
              toast.type === 'success'
                ? 'border-emerald-400/30 bg-emerald-500/15 text-emerald-100'
                : 'border-rose-400/30 bg-rose-500/15 text-rose-100'
            }`}
          >
            {toast.message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
