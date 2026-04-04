import { Lightbulb } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 mt-16 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <Lightbulb size={24} className="text-accent" />
            <span className="text-lg font-semibold text-card-foreground">Oh My Node</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Oh My Node. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
