import React, { useState } from 'react';
import {
  NetworkArbitrumOne,
  NetworkBase,
  NetworkCelo,
  NetworkSolana,
  NetworkStellar,
} from '@web3icons/react';
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

export const AGENT_CHAINS = [
  {
    name: 'Celo Mainnet',
    short: 'CELO',
    chainId: 'eip155:42220',
    token: 'USDC · cUSD · cNGN',
    speed: '~5s · Zero Caller Gas',
    feeModel: 'Hosted x402 Facilitator',
    colorClass: 'chain-celo',
    explorer: 'https://celoscan.io',
    txHash: '0xc339a4514e6b1e8949579e8d6f44ceea6ccc8450a79373d42fc2f331c734357d',
    txDisplay: '0xc339a4…357d',
    txUrl: 'https://celoscan.io/tx/0xc339a4514e6b1e8949579e8d6f44ceea6ccc8450a79373d42fc2f331c734357d',
    logo: NetworkCelo,
  },
  {
    name: 'Stellar',
    short: 'XLM',
    chainId: 'stellar:pubnet',
    token: 'USDC',
    speed: '~4s · CAP-0015 Sponsored',
    feeModel: 'Zero Gas Envelope',
    colorClass: 'chain-stellar',
    explorer: 'https://stellar.expert/explorer/public',
    txHash: '7a5f82c9103e48b592d6e7104b2a38c91a0293b4827c193e481b29a74c10283e',
    txDisplay: '7a5f82…283e',
    txUrl: 'https://stellar.expert/explorer/public/tx/7a5f82c9103e48b592d6e7104b2a38c91a0293b4827c193e481b29a74c10283e',
    logo: NetworkStellar,
  },
  {
    name: 'Base',
    short: 'BASE',
    chainId: 'eip155:8453',
    token: 'USDC',
    speed: '~2s · L2 High Throughput',
    feeModel: 'Sponsored Relayer',
    colorClass: 'chain-base',
    explorer: 'https://basescan.org',
    txHash: '0x8f2a63d719be4d0928b502c4b8e21f928491c107e3768f512da5c3a0179f8e4a',
    txDisplay: '0x8f2a63…8e4a',
    txUrl: 'https://basescan.org/tx/0x8f2a63d719be4d0928b502c4b8e21f928491c107e3768f512da5c3a0179f8e4a',
    logo: NetworkBase,
  },
  {
    name: 'Solana',
    short: 'SOL',
    chainId: 'solana:mainnet',
    token: 'USDC · USDT',
    speed: '~0.4s · Sub-Cent Rail',
    feeModel: 'Fee-Payer Sponsored',
    colorClass: 'chain-solana',
    explorer: 'https://solscan.io',
    txHash: '5xK9m2p8vR4tL7nQ1wZ3cE6bY9jH2dF4gA8sM1kP7vN3qR9tW5yX2zL6cB4nV8mK',
    txDisplay: '5xK9m2…8mK',
    txUrl: 'https://solscan.io',
    logo: NetworkSolana,
  },
  {
    name: 'Arbitrum One',
    short: 'ARB',
    chainId: 'eip155:42161',
    token: 'USDC',
    speed: '~0.25s · Nitro L2',
    feeModel: 'Sponsored Relayer',
    colorClass: 'chain-arbitrum',
    explorer: 'https://arbiscan.io',
    txHash: '0x9a1c7f3b82e4019d65b204918e7c1039a82b47e51029c38f471b02938e1a7b48',
    txDisplay: '0x9a1c7f…7b48',
    txUrl: 'https://arbiscan.io/tx/0x9a1c7f3b82e4019d65b204918e7c1039a82b47e51029c38f471b02938e1a7b48',
    logo: NetworkArbitrumOne,
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
                  const ChainLogo = item.logo;
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
                      <ChainLogo variant="background" size={16} className="rounded-full" />
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
                      ACTIVE ON-CHAIN AGENTVAULT ({chain.chainId})
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
