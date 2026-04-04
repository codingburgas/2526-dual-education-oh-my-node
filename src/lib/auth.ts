import type { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

export async function initializeSession(): Promise<Session | null> {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

export function subscribeToAuthChanges(
  callback: (session: Session | null) => void,
): () => void {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session);
  });

  return () => subscription?.unsubscribe();
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) console.error('Sign out error:', error);
}

export function getUserDisplayName(session: Session | null): string {
  if (!session) return '';
  return session.user?.email || 'User';
}

export function isAnonymous(session: Session | null): boolean {
  if (!session) return false;
  return session.user?.is_anonymous ?? false;
}
