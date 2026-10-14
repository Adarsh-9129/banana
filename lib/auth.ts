import bcrypt from 'bcryptjs';

const USERS_STORAGE_KEY = 'banana-auth-users';
const SESSION_STORAGE_KEY = 'banana-auth-session';
const SESSION_STORAGE_KEY_TEMP = 'banana-auth-session-temp';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  createdAt: string;
};

type StoredUserRecord = {
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
};

export const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() || '');
  return initials.join('') || 'U';
};

export const isEmailValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const readUsers = (): Record<string, StoredUserRecord> => {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(USERS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, StoredUserRecord>) : {};
  } catch {
    return {};
  }
};

const persistUsers = (users: Record<string, StoredUserRecord>) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }
};

const getPersistedSession = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const localSession = window.localStorage.getItem(SESSION_STORAGE_KEY);
    if (localSession) {
      return JSON.parse(localSession) as AuthUser;
    }

    const tempSession = window.sessionStorage.getItem(SESSION_STORAGE_KEY_TEMP);
    if (tempSession) {
      return JSON.parse(tempSession) as AuthUser;
    }
  } catch {
    return null;
  }

  return null;
};

const setPersistedSession = (user: AuthUser | null, rememberMe: boolean) => {
  if (typeof window === 'undefined') {
    return;
  }

  if (user) {
    const payload = JSON.stringify(user);
    if (rememberMe) {
      window.localStorage.setItem(SESSION_STORAGE_KEY, payload);
      window.sessionStorage.removeItem(SESSION_STORAGE_KEY_TEMP);
    } else {
      window.sessionStorage.setItem(SESSION_STORAGE_KEY_TEMP, payload);
      window.localStorage.removeItem(SESSION_STORAGE_KEY);
    }
  } else {
    window.localStorage.removeItem(SESSION_STORAGE_KEY);
    window.sessionStorage.removeItem(SESSION_STORAGE_KEY_TEMP);
  }
};

export const getCurrentUser = (): AuthUser | null => getPersistedSession();

export const setCurrentUser = (user: AuthUser | null, rememberMe = true) => {
  setPersistedSession(user, rememberMe);
};

export const signUpUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const normalizedEmail = email.trim().toLowerCase();
  const users = readUsers();

  if (users[normalizedEmail]) {
    throw new Error('An account with this email already exists.');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user: AuthUser = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    avatar: '',
    createdAt: new Date().toISOString(),
  };

  users[normalizedEmail] = {
    name: user.name,
    email: user.email,
    passwordHash,
    createdAt: user.createdAt,
  };
  persistUsers(users);

  return user;
};

export const signInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const normalizedEmail = email.trim().toLowerCase();
  const users = readUsers();
  const record = users[normalizedEmail];

  if (!record) {
    throw new Error('Invalid email or password.');
  }

  const isValidPassword = await bcrypt.compare(password, record.passwordHash);
  if (!isValidPassword) {
    throw new Error('Invalid email or password.');
  }

  return {
    id: crypto.randomUUID(),
    name: record.name,
    email: record.email,
    avatar: '',
    createdAt: record.createdAt,
  } as AuthUser;
};

export const signOutUser = () => {
  setCurrentUser(null);
};
