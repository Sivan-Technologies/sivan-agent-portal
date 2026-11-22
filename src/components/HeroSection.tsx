import React, { useState } from 'react';
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  Fingerprint,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import { AssetIcon, AssetType } from './AssetIcon';

export interface AgentChain {
  name: string;
  short: string;
  asset: AssetType;
  chainId: string;
  token: string;
  speed: string;
  feeModel: string;
  colorClass: string;
  explorer: string;
  txHash: string;
  txDisplay: string;
  txUrl: string;
}

export const AGENT_CHAINS: AgentChain[] = [
  {
    name: 'Celo Mainnet · USDC',
    short: 'USDC',
    asset: 'USDC',
    chainId: 'eip155:42220',
    token: 'Native Circle USDC',
    speed: '~5s · Sub-second Finality',
    feeModel: 'Zero Gas · EIP-3009',
    colorClass: 'chain-celo',
    explorer: 'https://celoscan.io',
    txHash: '0xc339a4514e6b1e8949579e8d6f44ceea6ccc8450a79373d42fc2f331c734357d',
    txDisplay: '0xc339a4…357d',
    txUrl: 'https://celoscan.io/tx/0xc339a4514e6b1e8949579e8d6f44ceea6ccc8450a79373d42fc2f331c734357d',
  },
  {
    name: 'Celo Mainnet · USD₮',
    short: 'USD₮',
    asset: 'USDT',
    chainId: 'eip155:42220',
    token: 'Tether USD',
    speed: '~5s · Global Liquidity',
    feeModel: 'Zero Caller Gas · EIP-3009',
    colorClass: 'chain-celo',
    explorer: 'https://celoscan.io',
    txHash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
    txDisplay: '0x1a2b3c…1a2b',
    txUrl: 'https://celoscan.io',
  },
  {
    name: 'Celo Mainnet · USA₮',
    short: 'USA₮',
    asset: 'USAT',
    chainId: 'eip155:42220',
    token: 'Tether America USD',
    speed: '~5s · x402 Facilitator',
    feeModel: 'Zero Caller Gas · EIP-3009',
    colorClass: 'chain-celo',
    explorer: 'https://celoscan.io',
    txHash: '0xd2ab3c9a02dbbab236bfec45d1d755df4267f77100112233445566778899aabb',
    txDisplay: '0xd2ab3c…aabb',
    txUrl: 'https://celoscan.io',
  },
  {
    name: 'Celo Mainnet · cUSD',
    short: 'cUSD',
    asset: 'cUSD',
    chainId: 'eip155:42220',
    token: 'Celo Dollar (cUSD)',
    speed: '~5s · Instant Settle',
    feeModel: 'Hosted x402 Facilitator',
    colorClass: 'chain-celo',
    explorer: 'https://celoscan.io',
    txHash: '0x7e8b91c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0',
    txDisplay: '0x7e8b91…f9a0',
    txUrl: 'https://celoscan.io',
  },
  {
    name: 'Textile FX · cNGN Rail',
    short: 'cNGN',
    asset: 'cNGN',
    chainId: 'celo:textile-fx',
    token: 'cNGN 1:1 Parity',
    speed: '< 1 to 2m · NIBSS Direct',
    feeModel: 'Auto-Converted to Bank NUBAN',
    colorClass: 'chain-celo',
    explorer: 'https://celoscan.io',
    txHash: '0x4f5e6d7c8b9a0f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5c6b7a8f9e0d1c2b3a4f5e',
    txDisplay: '0x4f5e6d…4f5e',
    txUrl: 'https://celoscan.io',
  },
  {
    name: 'Celo Sepolia Testnet',
    short: 'SEPOLIA',
    asset: 'SEPOLIA',
    chainId: 'eip155:11142220',
    token: 'Test USDC · cUSD',
    speed: '~5s · Sandbox Rail',
    feeModel: 'Testnet Facilitator Active',
    colorClass: 'chain-celo',
    explorer: 'https://sepolia.celoscan.io',
    txHash: '0x8b9a0f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5c6b7a8f9e0d1c2b3a4f5e6d7c8b9a',
    txDisplay: '0x8b9a0f…8b9a',
    txUrl: 'https://sepolia.celoscan.io',
  },
];

const HERO_METRICS: [string, string][] = [
  ['#10089', 'ERC-8004 Celo Agent ID'],
  ['$0.00', 'Caller Agent Gas Fee'],
  ['< 1 to 2m', 'Nigerian Bank NIBSS Rail'],
  ['$50 / $5K', 'Self Proof-of-Human Tiers'],
  ['6 Tools', 'Certified MCP & REST Surface'],
];

export const HeroSection: React.FC = () => {
  const [selectedChainIdx, setSelectedChainIdx] = useState(0);
  const chain = AGENT_CHAINS[selectedChainIdx] ?? AGENT_CHAINS[0];

  return (
    <>
      <section id="protocol" className="relative min-h-[780px] border-b border-border pt-16">
        <div className="glacial-grid absolute inset-0" aria-hidden="true" />
        <div className="route-beam absolute left-1/2 top-16 h-px w-[68%] -translate-x-1/2" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 pb-16 pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10 lg:pb-24 lg:pt-24">
          {/* Left Column: Narrative & Primary CTAs */}
          <div className="max-w-2xl">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 border border-border bg-secondary/70 px-3 py-1.5 font-mono text-[10px] uppercase text-muted-foreground">
                <Sparkles className="size-3 text-primary" />
                <span>Protocol Status</span>
                <span className="text-success font-semibold">Operational</span>
              </div>

              <a
                href="https://8004scan.io/agents/celo/10089"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-primary/35 bg-primary/5 px-3 py-1.5 font-mono text-[10px] uppercase text-primary transition-colors hover:bg-primary/10"
              >
                <span className="status-dot" />
                <span>Celo Agent #10089 · ERC-8004</span>
                <ExternalLink className="size-2.5" />
              </a>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,5.1vw,5.3rem)] font-semibold leading-[0.98] tracking-tight">
              Autonomous Financial Rails. <span className="text-gradient">Real-World Fiat</span> for AI Agents.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground lg:text-lg">
              Connect any LLM or autonomous agent to milestone-protected Service Agreements, Celo x402 zero-gas settlement, Self Protocol biometric sybil defense, and direct African bank payouts via Textile FX and NIBSS rails.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#demo-arena"
                className="btn-glow inline-flex h-11 items-center gap-2.5 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95"
              >
                <Zap className="size-4 fill-current" />
                <span>Launch Live Demo Arena</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href="#mcp-hub"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
              >
                <Terminal className="size-4 text-primary" />
                <span>1-Click MCP Setup</span>
              </a>

              <a
                href="https://8004scan.io/agents/celo/10089"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-background/60 px-4 font-mono text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
              >
                <Bot className="size-3.5 text-success" />
                <span>8004scan Registry</span>
                <ExternalLink className="size-3" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <Zap className="size-4 text-primary" /> Hosted x402 V2 Facilitator
              </span>
              <span className="flex items-center gap-2">
                <Fingerprint className="size-4 text-success" /> Self Agent ID ZK Guard
              </span>
              <span className="flex items-center gap-2">
                <CircleDollarSign className="size-4 text-primary" /> Textile FX cNGN · NIBSS
              </span>
              <span className="flex items-center gap-2 text-foreground">
                <ShieldCheck className="size-4 text-success" /> Tag: celo_bdb587d550be
              </span>
            </div>
          </div>

          {/* Right Column: 3D Architectural Agent Execution Console */}
          <div className="console-wrap relative mx-auto w-full max-w-[680px]">
            <div className="console-glow" aria-hidden="true" />
            <div className="relative border border-border bg-card/95 shadow-2xl shadow-background">
              {/* Top Console Bar */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-muted-foreground">
                  <span className="size-1.5 bg-primary" /> Agentic Settlement Console · ERC-8004
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px]">
                  <span className="border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary">
                    x402 V2
                  </span>
                  <span className="border border-success/30 bg-success/10 px-2 py-0.5 text-success">
                    SELF ZK ACTIVE
                  </span>
                </div>
              </div>

              {/* Chain Switcher Tabs */}
              <div className="flex overflow-x-auto border-b border-border bg-background/50 px-3 py-2 gap-1.5">
                {AGENT_CHAINS.map((item, idx) => {
                  const active = selectedChainIdx === idx;
                  return (
                    <button
                      key={item.short}
                      onClick={() => setSelectedChainIdx(idx)}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-sm border px-3 py-1.5 font-mono text-[10px] transition-colors ${
                        active
                          ? 'border-primary/50 bg-secondary text-foreground font-semibold'
                          : 'border-transparent text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <AssetIcon asset={item.asset} size={16} />
                      <span>{item.short}</span>
                    </button>
                  );
                })}
              </div>

              {/* Console Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Agent Identity & Vault Header */}
                <div className="flex flex-col justify-between gap-4 border border-border bg-background/60 p-4 sm:flex-row sm:items-center">
                  <div>
                    <span className="font-mono text-[9px] uppercase text-muted-foreground">
                      ACTIVE CELO PROTOCOL VAULT ({chain.chainId})
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <strong className="font-display text-lg font-semibold text-foreground">
                        Sivan Payment Ai · #10089
                      </strong>
                      <span className="font-mono text-[10px] text-primary">
                        0x46eF…12345
                      </span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="font-mono text-[9px] uppercase text-muted-foreground">
                      CALLDATA ATTRIBUTION
                    </span>
                    <p className="mt-1 font-mono text-xs font-semibold text-success">
                      celo_bdb587d550be
                    </p>
                  </div>
                </div>

                {/* Live Animated Flow Pipeline */}
                <div className="flex items-center justify-between gap-2 border border-border bg-background/40 px-4 py-4">
                  <div className="network-node">
                    <span className="font-mono text-[9px] uppercase text-muted-foreground">CALLER AGENT</span>
                    <strong>EIP-3009 Auth</strong>
                    <span className="font-mono text-[10px] text-primary">0.005 USDC · 0 Gas</span>
                  </div>

                  <div className="flow-line" aria-hidden="true">
                    <i />
                  </div>

                  <div className="network-node text-center">
                    <span className="font-mono text-[9px] uppercase text-muted-foreground">FACILITATOR & GATE</span>
                    <strong>x402 + Self ZK</strong>
                    <span className="font-mono text-[10px] text-success">Human Tier ($5,000)</span>
                  </div>

                  <div className="flow-line" aria-hidden="true">
                    <i />
                  </div>

                  <div className="network-node text-right">
                    <span className="font-mono text-[9px] uppercase text-muted-foreground">LAST-MILE RAIL</span>
                    <strong>Textile FX · NIBSS</strong>
                    <span className="font-mono text-[10px] text-foreground">&lt; 1 to 2m Bank Credit</span>
                  </div>
                </div>

                {/* 4-Step Verification Grid */}
                <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
                  {[
                    ['HTTP 402 Issued', 'Base64 challenge header'],
                    ['Self ZK Proof', 'Sybil limit verified'],
                    ['Milestone Locked', 'Service Agreement active'],
                    ['Settled to Bank', 'cNGN · NUBAN credited'],
                  ].map(([title, sub]) => (
                    <div key={title} className="flex min-h-20 flex-col justify-between bg-card p-3">
                      <div className="flex items-center justify-between">
                        <Check className="size-3.5 text-success" />
                        <span className="font-mono text-[8px] uppercase text-primary">OK</span>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-semibold text-foreground">{title}</p>
                        <span className="font-mono text-[9px] leading-3 text-muted-foreground">{sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Console Footer */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-background/40 px-4 py-3 font-mono text-[9px] text-muted-foreground sm:px-6">
                <span>
                  CONFIRMED ON {chain.name.toUpperCase()} · {chain.speed.toUpperCase()}
                </span>
                <a
                  href={chain.txUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  <span>VERIFY TX ({chain.txDisplay})</span>
                  <ChevronRight className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Column Protocol Proof Bar matching sivan-home-pagev2 */}
      <section aria-label="Protocol proof" className="border-b border-border bg-card/60">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:grid-cols-3 lg:grid-cols-5 lg:px-10">
          {HERO_METRICS.map(([value, label], index) => (
            <div
              key={label}
              className={`py-7 ${index < 4 ? 'lg:border-r lg:border-border' : ''} ${
                index % 2 === 0 ? 'max-sm:border-r max-sm:border-border' : ''
              }`}
            >
              <div className="px-4 lg:px-6">
                <strong className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                  {value}
                </strong>
                <p className="mt-1 font-mono text-[9px] uppercase leading-4 text-muted-foreground">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
