import React, { useState } from 'react';
import { ExternalLink, Menu, X, ShieldCheck, Zap } from 'lucide-react';
import sivanLogo from '../assets/sivan-logo.png';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-800/80 bg-[#06080f]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand & Live Agent Status */}
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-3 group" aria-label="Sivan Ai home">
              <img
                src={sivanLogo}
                alt="Sivan Ai logo"
                className="h-11 w-11 rounded-lg object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-white tracking-tight">
                    Sivan Ai
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00f2fe]/10 text-[#00f2fe] font-mono border border-[#00f2fe]/30 font-semibold uppercase">
                    Agent Portal
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                  Autonomous Rails for AI Agents
                </span>
              </div>
            </a>

            {/* Live ERC-8004 Celo Badge */}
            <a
              href="https://8004scan.io/agents/celo/10089"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400 transition-colors text-xs font-mono text-slate-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-medium">Celo #10089</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">ERC-8004 Verified</span>
              <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#demo-arena" className="hover:text-[#00f2fe] transition-colors flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#fcff52]" />
              Live Demo Arena
            </a>
            <a href="#mcp-hub" className="hover:text-[#00f2fe] transition-colors">
              MCP Quickstart
            </a>
            <a href="#x402-protocol" className="hover:text-[#00f2fe] transition-colors">
              x402 Protocol
            </a>
            <a href="#self-id-security" className="hover:text-[#00f2fe] transition-colors flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Self ID Security
            </a>
            <a
              href="https://8004scan.io/agents/celo/10089"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Registry
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/Sivan-Technologies/sivan-payment"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-slate-300 text-xs font-medium transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://app.sivantech.online"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#00f2fe] hover:bg-[#00f2fe]/90 text-[#06080f] font-semibold text-xs transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)] flex items-center gap-1.5"
            >
              Launch App
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0f19] border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
          <a
            href="#demo-arena"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Live Demo Arena
          </a>
          <a
            href="#mcp-hub"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            MCP Quickstart
          </a>
          <a
            href="#x402-protocol"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            x402 Protocol
          </a>
          <a
            href="#self-id-security"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Self ID Security
          </a>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="https://8004scan.io/agents/celo/10089"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 rounded-lg border border-slate-700 text-slate-300 text-sm font-medium"
            >
              View on 8004scan (#10089)
            </a>
            <a
              href="https://app.sivantech.online"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg bg-[#00f2fe] text-[#06080f] font-semibold text-sm"
            >
              Launch App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
