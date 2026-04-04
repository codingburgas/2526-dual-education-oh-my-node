import { useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import Logo from '../../assets/logo.png';
import useAuth from '../../hooks/useAuth';
import ThemeToggle from '../ui/ThemeToggle';
import { motion } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { displayName, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Subjects', href: '#subjects' },
    { label: 'Assignments', href: '#assignments' },
    { label: 'Achievements', href: '#achievements' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <img src={Logo} alt="Oh My Node Logo" />
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:inline">
              Oh My Node
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {displayName && (
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-sm font-medium text-foreground">
                  {displayName}
                </span>
                <button
                  onClick={handleLogout}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  title="Logout"
                >
                  <LogOut size={18} className="text-foreground" />
                </button>
              </div>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg"
            >
              {isMenuOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <nav className="bg-card border-t border-border py-4 space-y-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </header>
  );
}
