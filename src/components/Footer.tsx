import React from 'react';
import { ArrowRight, ExternalLink, MessageCircle, Send } from 'lucide-react';
import sivanLogo from '../assets/sivan-logo.png';
import { AGENT_CHAINS } from './HeroSection';
import { AssetIcon } from './AssetIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="footer-beam absolute inset-x-0 top-0 h-px" aria-hidden="true" />
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 lg:px-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Column 1: Brand & Quick Actions */}
          <div>
            <a href="#protocol" className="flex items-center gap-3" aria-label="Sivan Ai Agent Portal">
              <img src={sivanLogo} alt="Sivan Ai logo" className="h-12 w-12 rounded-lg object-contain" />
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold">Sivan Ai</span>
                <span className="border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase text-primary">
                  AGENT PORTAL
                </span>
              </div>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
              The autonomous Celo settlement and African fiat off-ramp protocol for AI agents and the global digital workforce.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://app.sivantech.online"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <span>Launch app</span>
                <ArrowRight className="size-3.5" />
              </a>
              <a
                href="https://wa.me/message/GGKZ6SJCZT67K1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-emerald-500/40 px-3 text-xs font-semibold text-emerald-500 transition-colors hover:bg-emerald-500/10"
              >
                <MessageCircle className="size-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://t.me/SivanAi_bot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-3 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                <Send className="size-3.5" />
                <span>Telegram</span>
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
              <a
                className="footer-link flex items-center gap-1.5 text-emerald-500"
                href="https://wa.me/message/GGKZ6SJCZT67K1"
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp (+1 555-759-0137)</span>
                <ExternalLink className="size-3" />
              </a>
              <a
                className="footer-link flex items-center gap-1.5"
                href="https://x.com/sivan_Tech"
                target="_blank"
                rel="noreferrer"
              >
                <span>X (Twitter)</span>
                <ExternalLink className="size-3" />
              </a>
              <a
                className="footer-link flex items-center gap-1.5"
                href="https://t.me/Sivan_Ai"
                target="_blank"
                rel="noreferrer"
              >
                <span>Community</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Agent Protocol */}
          <nav aria-label="Agent Protocol">
            <h3 className="font-mono text-[10px] uppercase text-muted-foreground">Agent Protocol</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a className="footer-link" href="#protocol">
                  Agentic Console
                </a>
              </li>
              <li>
                <a className="footer-link" href="#demo-arena">
                  Interactive Demo Arena
                </a>
              </li>
              <li>
                <a className="footer-link" href="#mcp-hub">
                  1-Click MCP Hub
                </a>
              </li>
              <li>
                <a className="footer-link" href="#architecture">
                  Architectural Pillars
                </a>
              </li>
              <li>
                <a className="footer-link" href="#receipts">
                  Smart Receipts
                </a>
              </li>
              <li>
                <a className="footer-link" href="#developers">
                  Developer Studio
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 3: Celo Settlement Rails */}
          <nav aria-label="Celo Rails">
            <h3 className="font-mono text-[10px] uppercase text-muted-foreground">Celo Settlement Rails</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {AGENT_CHAINS.map((item) => (
                <li key={item.short}>
                  <a
                    className="footer-link group flex items-center gap-3"
                    href={item.explorer}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="grid size-6 shrink-0 place-items-center" aria-hidden="true">
                      <AssetIcon asset={item.asset} size={18} />
                    </span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: On-Chain Verification & Ecosystem */}
          <nav aria-label="On-Chain Verification">
            <h3 className="font-mono text-[10px] uppercase text-muted-foreground">On-Chain Verification</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  className="footer-link flex items-center gap-1.5"
                  href="https://8004scan.io/agents/celo/10089"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>8004scan Agent #10089</span>
                  <ExternalLink className="size-3" />
                </a>
              </li>
              <li>
                <a
                  className="footer-link flex items-center gap-1.5"
                  href="https://celoscan.io/tx/0xc339a4514e6b1e8949579e8d6f44ceea6ccc8450a79373d42fc2f331c734357d"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Celoscan Attribution Tx</span>
                  <ExternalLink className="size-3" />
                </a>
              </li>
              <li>
                <a
                  className="footer-link flex items-center gap-1.5"
                  href="https://x402.celo.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Celo x402 Facilitator</span>
                  <ExternalLink className="size-3" />
                </a>
              </li>
              <li>
                <a
                  className="footer-link flex items-center gap-1.5"
                  href="https://api.sivantech.online/mcp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Live MCP Server Endpoint</span>
                  <ExternalLink className="size-3" />
                </a>
              </li>
              <li>
                <a
                  className="footer-link flex items-center gap-1.5"
                  href="https://sivantech.online"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Main Landing (sivantech.online)</span>
                  <ExternalLink className="size-3" />
                </a>
              </li>
              <li>
                <a
                  className="footer-link flex items-center gap-1.5"
                  href="https://github.com/Sivan-Technologies"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GitHub Organization</span>
                  <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Non-Custodial Protocol Disclosure matching sivan-home-pagev2 */}
        <div className="mt-14 border border-border bg-card/60 p-5 text-xs leading-6 text-muted-foreground">
          <p>
            Sivan Ai is a non-custodial settlement coordination layer for humans and autonomous AI agents. Counterparties retain control of their assets and cryptographic authorization at all times. Service Agreements are programmable coordination instruments with milestone verification. Off-ramp pathways, including Textile FX RFQ liquidity and domestic NIBSS bank rails, operate through regulated liquidity partners.
          </p>
        </div>

        {/* Bottom Copyright & Telemetry Bar */}
        <div className="mt-8 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Sivan Technology. All rights reserved. Support: support@sivantech.online
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] text-muted-foreground">
            <a className="footer-link" href="https://8004scan.io/agents/celo/10089" target="_blank" rel="noreferrer">
              CELO AGENT #10089
            </a>
            <span>TAG: CELO_BDB587D550BE</span>
            <span className="text-success">NON-CUSTODIAL · PRODUCTION ACTIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
