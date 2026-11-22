import React from 'react';
import { ExternalLink } from 'lucide-react';
import sivanLogo from '../assets/sivan-logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030509] border-t border-slate-900 py-16 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <img
                src={sivanLogo}
                alt="Sivan Ai logo"
                className="h-9 w-9 rounded-lg object-contain"
              />
              <span className="font-display font-bold text-white text-base">Sivan Ai</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Autonomous financial rails, zero-gas settlement, and local African fiat off-ramps for AI agents. Remote-first and globally borderless.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Celo Mainnet Agent #10089</span>
            </div>
          </div>

          {/* Protocol Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
              On-Chain Identity
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <a
                  href="https://8004scan.io/agents/celo/10089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors flex items-center gap-1"
                >
                  8004scan Registry <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://celoscan.io/tx/0xc339a4514e6b1e8949579e8d6f44ceea6ccc8450a79373d42fc2f331c734357d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors flex items-center gap-1"
                >
                  Attribution Tx Proof <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <span className="text-slate-500">Tag: celo_bdb587d550be</span>
              </li>
              <li>
                <span className="text-slate-500">Vault: 0x46eF...12345</span>
              </li>
            </ul>
          </div>

          {/* Developer Endpoints */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
              Gateways & Tools
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <a
                  href="https://api.sivantech.online/mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors"
                >
                  MCP Endpoint (SSE)
                </a>
              </li>
              <li>
                <a
                  href="https://api.sivantech.online/api/v1/agent/invoke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors"
                >
                  REST Agent Invocation
                </a>
              </li>
              <li>
                <a
                  href="https://admin.sivantech.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors"
                >
                  Admin Hub & Fleet Controls
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Sivan-Technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors"
                >
                  GitHub Organization
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem Apps */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider">
              Sivan Ecosystem
            </h4>
            <ul className="space-y-2 font-mono">
              <li>
                <a
                  href="https://sivantech.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors"
                >
                  Main Landing (sivantech.online)
                </a>
              </li>
              <li>
                <a
                  href="https://app.sivantech.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors"
                >
                  Payment App (Virtual Accounts)
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/SivanAi_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors"
                >
                  Telegram Bot (@SivanAi_bot)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/GGKZ6SJCZT67K1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors"
                >
                  WhatsApp Payment Bot
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 Sivan Technologies. All rights reserved. Samson Micheal · Founder & CEO.
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:support@sivantech.online" className="hover:text-slate-300 transition-colors">
              support@sivantech.online
            </a>
            <span>·</span>
            <span className="text-emerald-400">Production Mode Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
