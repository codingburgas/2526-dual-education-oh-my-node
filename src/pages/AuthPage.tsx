import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import useAuth from '../hooks/useAuth';
import ThemeToggle from '../components/ui/ThemeToggle';

export function AuthPage() {
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && session) {
      navigate('/', { replace: true });
    }
  }, [loading, session, navigate]);

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-card flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-card rounded-lg shadow-md border border-border p-8">
          <div className="text-center mb-8">
            <div className="mb-4">
              <div className="size-14 bg-primary rounded-full flex items-center justify-center mx-auto">
                <img src={Logo} alt="Oh My Node Logo" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Student Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to view your progress and achievements
            </p>
          </div>

          <div className="mb-6">
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'var(--color-primary)',
                      brandAccent: 'var(--color-primary)',
                      brandButtonText: 'var(--color-primary-foreground)',
                      defaultButtonBackground: 'var(--color-secondary)',
                      defaultButtonBackgroundHover: 'var(--color-muted)',
                      defaultButtonBorder: 'var(--color-border)',
                      defaultButtonText: 'var(--color-secondary-foreground)',
                      inputBackground: 'var(--color-input)',
                      inputBorder: 'var(--color-border)',
                      inputBorderFocus: 'var(--color-primary)',
                      inputBorderHover: 'var(--color-border)',
                      inputLabelText: 'var(--color-foreground)',
                      inputPlaceholder: 'var(--color-muted-foreground)',
                      inputText: 'var(--color-card-foreground)',
                      messageText: 'var(--color-muted-foreground)',
                      messageTextDanger: 'var(--color-destructive)',
                    },
                  },
                },
              }}
              providers={[]}
            />
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </motion.div>
    </div>
  );
}
