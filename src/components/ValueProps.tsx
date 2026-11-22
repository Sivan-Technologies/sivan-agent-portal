import React, { useState } from 'react';
import {
  Award,
  ChevronRight,
  Clipboard,
  ExternalLink,
  Landmark,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { AGENT_CHAINS } from './HeroSection';

const PILLARS = [
  {
    number: '01',
    icon: Landmark,
    title: 'Last-Mile African Fiat Bridge',
    copy: 'Autonomous AI agents can hold USDC on-chain, but human contractors and local providers in emerging markets require physical currency. Sivan swaps USDC to cNGN via Textile FX RFQ and credits Nigerian NUBAN bank accounts in under 1 to 2 minutes via NIBSS.',
    detail: 'Textile FX RFQ · NIBSS / NIP Bank Rails',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Zero-Gas x402 Execution',
    copy: 'Most autonomous agent workflows break when native gas tokens run out. Sivan implements Celo hosted x402 V2 facilitator settlement so caller agents sign EIP-3009 authorizations with zero native CELO gas required.',
    detail: 'HTTP 402 · EIP-3009 Gas-Free Settlement',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Self Protocol Sybil Defense',
    copy: 'To protect off-ramp liquidity pools from autonomous drainer loops, Sivan enforces biometric Proof-of-Human risk tiering. Unverified bots are capped at $50 USD, while Self passport-verified agents unlock up to $5,000 USD per transaction.',
    detail: 'Zero-Knowledge Passport · Dynamic Tiering',
  },
  {
    number: '04',
    icon: Award,
    title: 'Verified ERC-8004 Identity',
    copy: 'Sivan Payment Ai is registered on Celo Mainnet as Agent #10089 on 8004scan with immutable discovery manifests for MCP, REST Web API, and ERC-8021 calldata attribution tag celo_bdb587d550be.',
    detail: 'Celo Agent #10089 · Tag celo_bdb587d550be',
  },
];

export const ValueProps: React.FC = () => {
  const [activeChainIdx, setActiveChainIdx] = useState(0);
  const chain = AGENT_CHAINS[activeChainIdx] ?? AGENT_CHAINS[0];

  return (
    <>
      {/* Section 03: Architectural Pillars */}
      <section id="architecture" className="section-shell border-b border-border py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="section-heading-grid">
            <div>
              <span className="section-kicker">03 / Architectural Differentiation</span>
              <h2 className="section-title">
                One agentic protocol.<br />
                <span className="text-primary">From LLM intent to bank account.</span>
              </h2>
            </div>
            <p className="section-intro">
              Sivan Ai goes beyond simple smart contract wrappers to give autonomous agents real banking rails, biometric sybil protection, and zero-gas Celo settlement.
            </p>
          </div>

          <div className="mt-14 grid border-l border-t border-border md:grid-cols-2 xl:grid-cols-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.number} className="pillar-cell group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-muted-foreground">{pillar.number}</span>
                      <Icon className="size-5 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
                    </div>
                    <h3 className="mt-14 font-display text-xl font-semibold">{pillar.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">{pillar.copy}</p>
                  </div>
                  <div className="mt-8 border-t border-border pt-4 font-mono text-[9px] uppercase leading-4 text-primary">
                    {pillar.detail}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 04: Verifiable On-Chain Smart Receipts */}
      <section id="receipts" className="section-shell border-b border-border bg-card/35 py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
          <div className="section-heading-grid">
            <div>
              <span className="section-kicker">04 / Verifiable On-Chain Smart Receipts</span>
              <h2 className="section-title">
                Cryptographic proof<br />
                <span className="text-primary">agents and judges can verify.</span>
              </h2>
            </div>
            <p className="section-intro">
              Every autonomous invocation, milestone Service Agreement, and fiat off-ramp generates an immutable receipt linking ERC-8004 agent identity, calldata attribution, and public block explorer settlement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Left: Celo Settlement Rails */}
            <div className="border border-border bg-card p-5 sm:p-7">
              <span className="font-mono text-[9px] uppercase text-muted-foreground">
                SELECT CELO SETTLEMENT RAIL
              </span>
              <div className="mt-5 space-y-2" role="tablist" aria-label="Celo settlement rails">
                {AGENT_CHAINS.map((item, idx) => {
                  const ChainLogo = item.logo;
                  const active = activeChainIdx === idx;
                  return (
                    <button
                      key={item.short}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveChainIdx(idx)}
                      className={`flex h-12 w-full items-center justify-between rounded-sm border px-4 text-sm font-medium transition-colors ${
                        active
                          ? 'border-primary/50 bg-secondary text-foreground'
                          : 'border-transparent text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <ChainLogo variant="background" size={22} className="rounded-full" />
                        <span>{item.name}</span>
                      </span>
                      <ChevronRight className="size-4" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Smart Receipt Card matching sivan-home-pagev2 */}
            <article className="receipt-card relative overflow-hidden border border-border bg-card">
              <div className="receipt-watermark" aria-hidden="true">
                VERIFIED SETTLEMENT
              </div>
              <div className="relative flex items-center justify-between border-b border-border p-5 sm:px-7">
                <div className="flex items-center gap-3">
                  <Clipboard className="size-5 text-primary" />
                  <span className="font-display font-semibold">Agentic Smart Receipt · #10089</span>
                </div>
                <span className="border border-success/30 bg-success/10 px-2.5 py-1 font-mono text-[9px] text-success">
                  CONFIRMED ON-CHAIN
                </span>
              </div>

              <div className="relative p-5 sm:p-7">
                <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    ['Service Agreement', 'Autonomous Contract & Fiat Off-Ramp'],
                    ['ERC-8004 Agent ID', 'Celo Agent #10089 (Verified)'],
                    ['Network & Chain ID', `${chain.name} (${chain.chainId})`],
                    ['Settlement Amount', `25.00 USDC (${chain.token})`],
                    ['Gas & Fee Model', `$0.00 Caller Gas (${chain.feeModel})`],
                    ['Attribution Tag', 'celo_bdb587d550be (ERC-8021)'],
                  ].map(([label, value]) => (
                    <div key={label} className="min-h-24 bg-card p-4">
                      <span className="font-mono text-[9px] uppercase text-muted-foreground">{label}</span>
                      <p className="mt-3 text-sm font-semibold leading-5 text-foreground">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-4 border-t border-dashed border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-muted-foreground">
                      VERIFIED SETTLEMENT TRANSACTION HASH
                    </span>
                    <p className="mt-1 font-mono text-xs text-primary break-all">{chain.txHash}</p>
                  </div>
                  <a
                    href={chain.txUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 shrink-0 items-center gap-2 border border-border bg-background px-4 font-mono text-xs font-semibold text-foreground transition-colors hover:border-primary"
                  >
                    <span>Open {chain.short} Explorer</span>
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>

              <div className="relative border-t border-border bg-background/50 px-5 py-3 text-center font-mono text-[9px] uppercase text-muted-foreground">
                Cryptographically signed, Self ZK verified, and settled on public ledger
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
