import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import {
  initializeSession,
  subscribeToAuthChanges,
  signOut as signOutAuth,
  getUserDisplayName,
  isAnonymous,
} from '../lib/auth';
import AuthContext from './AuthContext';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeSession().then(initialSession => {
      setSession(initialSession);
      setLoading(false);
    });

    const unsubscribe = subscribeToAuthChanges(newSession => {
      setSession(newSession);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    setSession(null);
    await signOutAuth();
  };

  const displayName = getUserDisplayName(session);
  const isAnonymousUser = isAnonymous(session);

  return (
    <AuthContext.Provider
      value={{ session, loading, displayName, isAnonymousUser, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
