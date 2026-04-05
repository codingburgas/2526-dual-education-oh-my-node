import { createContext } from 'react';
import type { Session } from '@supabase/supabase-js';

export type AuthContextType = {
  session: Session | null;
  loading: boolean;
  displayName: string;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
