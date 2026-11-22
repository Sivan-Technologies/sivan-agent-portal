import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  Menu,
  MessageCircle,
  Moon,
  Send,
  Sun,
  X,
} from 'lucide-react';
import sivanLogo from '../assets/sivan-logo.png';

function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('light') ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('light', next === 'light');
    try {
      localStorage.setItem('sivan-theme', next);
    } catch {
      // storage unavailable, session-only theme
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      {theme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#protocol" className="group flex items-center gap-3" aria-label="Sivan Ai Agent Portal">
            <img
              src={sivanLogo}
              alt="Sivan Ai logo"
              className="h-11 w-11 rounded-lg object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex items-center gap-2.5">
              <span className="font-display text-lg font-bold tracking-tight">Sivan Ai</span>
              <span className="border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-primary">
                AGENT PORTAL
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 text-xs font-semibold text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#protocol">
            Protocol
          </a>
          <a className="transition-colors hover:text-foreground flex items-center gap-1.5" href="#demo-arena">
            <span className="size-1.5 rounded-full bg-primary" />
            Live Demo Arena
          </a>
          <a className="transition-colors hover:text-foreground" href="#mcp-hub">
            MCP Hub
          </a>
          <a className="transition-colors hover:text-foreground" href="#architecture">
            Architecture
          </a>
          <a className="transition-colors hover:text-foreground" href="#receipts">
            Smart Receipts
          </a>
          <a className="transition-colors hover:text-foreground" href="#developers">
            Developer Studio
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="https://wa.me/message/GGKZ6SJCZT67K1"
            target="_blank"
            rel="noreferrer"
            className="hidden h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold text-emerald-500 transition-colors hover:bg-secondary hover:text-emerald-400 lg:inline-flex"
          >
            <MessageCircle className="size-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://t.me/SivanAi_bot"
            target="_blank"
            rel="noreferrer"
            className="hidden h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:inline-flex"
          >
            <Send className="size-3.5" />
            <span>Telegram</span>
          </a>

          <a
            href="https://app.sivantech.online"
            target="_blank"
            rel="noreferrer"
            className="hidden h-8 items-center gap-1.5 rounded-md bg-primary px-3.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <span>Launch app</span>
            <ArrowRight className="size-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-card px-5 py-5 md:hidden">
          <div className="flex flex-col space-y-3 text-sm font-semibold">
            <a href="#protocol" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-foreground">
              Protocol
            </a>
            <a href="#demo-arena" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-primary">
              Live Demo Arena
            </a>
            <a href="#mcp-hub" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-foreground">
              MCP Hub
            </a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-foreground">
              Architecture
            </a>
            <a href="#receipts" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-foreground">
              Smart Receipts
            </a>
            <a href="#developers" onClick={() => setMobileMenuOpen(false)} className="py-1.5 text-foreground">
              Developer Studio
            </a>
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <a
              href="https://8004scan.io/agents/celo/10089"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 items-center justify-center gap-2 border border-border bg-secondary/60 font-mono text-xs text-foreground"
            >
              <span className="status-dot" />
              <span>8004scan Registry (#10089)</span>
              <ExternalLink className="size-3" />
            </a>
            <a
              href="https://app.sivantech.online"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 items-center justify-center gap-2 rounded-md bg-primary text-xs font-semibold text-primary-foreground"
            >
              <span>Launch app</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
