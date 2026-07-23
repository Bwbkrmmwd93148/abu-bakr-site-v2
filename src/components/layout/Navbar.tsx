import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const navItems = [
  { name: 'الرئيسية', href: '/' },
  { name: 'نبذة عني', href: '/about' },
  { name: 'زيوت المحولات', href: '/transformer-oil' },
  { name: 'زيوت الطيران', href: '/aviation-oil' },
  { name: 'المقالات', href: '/articles' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl text-white">
              أبو بكر<span className="text-primary">.</span>
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <button className="text-sm hover:text-primary transition-colors">
                {item.name}
              </button>
            </Link>
          ))}

          <Link href="/contact">
            <Button>
              اتصل بي
            </Button>
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-6 bg-background"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-right"
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}
