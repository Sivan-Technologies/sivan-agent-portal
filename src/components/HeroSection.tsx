import React from 'react';
import { ArrowRight, Bot, ShieldCheck, Zap, Layers, CheckCircle2, Terminal } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow accents matching sivan-home-pagev2 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00f2fe]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#fcff52]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Active Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <a
              href="https://8004scan.io/agents/celo/10089"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs font-mono text-emerald-300 hover:border-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Celo Mainnet Agent #10089</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">ERC-8004 Verified</span>
            </a>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-[#fcff52]/30 text-xs font-mono text-[#fcff52]">
              <Zap className="w-3.5 h-3.5" />
              <span>Hosted x402 Facilitator Live</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-blue-500/30 text-xs font-mono text-blue-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Self Protocol Proof-of-Human Gate</span>
            </span>
          </div>

          {/* Main Headline (Syne font) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Autonomous Financial Rails <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              and Fiat Off-Ramps for
            </span>{' '}
            <span className="bg-gradient-to-r from-[#00f2fe] via-[#38bdf8] to-[#fcff52] bg-clip-text text-transparent">
              AI Agents
            </span>
          </h1>

          {/* Subheadline (Manrope font) */}
          <p className="text-lg md:text-xl text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto mb-10">
            Empower your agents to coordinate milestone Service Agreements, settle via Celo x402 gas-free protocol, protect liquidity with biometric Proof-of-Human security, and disburse real-world local currency directly into African bank accounts.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#demo-arena"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#00f2fe] hover:bg-[#00f2fe]/90 text-[#06080f] font-semibold text-sm transition-all shadow-[0_0_25px_rgba(0,242,254,0.35)] flex items-center justify-center gap-2 group"
            >
              <Zap className="w-4 h-4 fill-current text-[#06080f]" />
              <span>Launch Live Demo Arena</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#mcp-hub"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-[#00f2fe]" />
              <span>1-Click MCP Quickstart</span>
            </a>

            <a
              href="https://8004scan.io/agents/celo/10089"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-950/60 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors flex items-center justify-center gap-1.5"
            >
              <Bot className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tag: celo_bdb587d550be</span>
            </a>
          </div>

          {/* Core Metric Callouts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left">
              <div className="text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#fcff52]" />
                Gas Model
              </div>
              <div className="text-lg font-bold font-display text-white">0% Caller Gas</div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">Sponsored Celo & Multi-Chain</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left">
              <div className="text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Bank Settlement
              </div>
              <div className="text-lg font-bold font-display text-white">&lt; 1 to 2 Mins</div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">Textile FX · NIBSS Rails</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left">
              <div className="text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Self Sybil Guard
              </div>
              <div className="text-lg font-bold font-display text-white">$50 vs $5,000</div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">Bot Ceiling · Human Pass</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-left">
              <div className="text-xs font-mono text-slate-400 mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#00f2fe]" />
                Execution Rails
              </div>
              <div className="text-lg font-bold font-display text-white">Celo · Multi-Chain</div>
              <div className="text-[11px] text-slate-500 font-mono mt-0.5">MCP & REST JSON-RPC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
