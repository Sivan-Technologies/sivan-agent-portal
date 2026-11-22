import React, { useState } from 'react';
import { Check, CheckCircle2, Code2, Copy } from 'lucide-react';

const STUDIO_TABS = [
  {
    id: 'x402-curl',
    label: 'Celo x402 cURL',
    language: 'BASH · CELO HOSTED FACILITATOR (EIP155:42220)',
    code: `# 1. Request x402 V2 Payment Challenge from Sivan Agent #10089
curl -i -X POST https://api.sivantech.online/api/v1/agent/invoke \\
  -H "Content-Type: application/json" \\
  -H "x-x402: true" \\
  -d '{"tool": "sivan_create_payment_link", "params": {"amount": 25, "network": "celo", "currency": "usdc"}}'

# 2. Submit Signed EIP-3009 Authorization for Gas-Free Celo Settlement
curl -X POST https://api.sivantech.online/api/v1/agent/invoke \\
  -H "Content-Type: application/json" \\
  -H "x-x402: true" \\
  -H "payment-signature: eyJ4NDAyVmVyc2lvbiI6MiwicGF5bWVudFBheWxvYWQiOnt9fQ==" \\
  -d '{"tool": "sivan_create_payment_link", "params": {"amount": 25, "network": "celo", "currency": "usdc"}}'`,
  },
  {
    id: 'typescript',
    label: 'TypeScript / Node',
    language: 'TYPESCRIPT · X402 + ERC-8004 INVOCATION',
    code: `async function invokeSivanPaymentAi() {
  const endpoint = 'https://api.sivantech.online/api/v1/agent/invoke';

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-x402': 'true',
    },
    body: JSON.stringify({
      tool: 'sivan_initiate_service_agreement',
      params: {
        title: 'AI Agent Backend Integration',
        amount: 25,
        currency: 'USDC',
        network: 'celo',
      },
    }),
  });

  if (res.status === 402) {
    const headerB64 = res.headers.get('payment-required')!;
    const challenge = JSON.parse(Buffer.from(headerB64, 'base64').toString('utf8'));
    console.log('x402 Challenge (PayTo #10089):', challenge.x402.payTo);
  }
}`,
  },
  {
    id: 'self-id',
    label: 'Self Agent ID ZK',
    language: 'TYPESCRIPT · @SELFXYZ/AGENT-SDK PROOF-OF-HUMAN',
    code: `import { SelfAgentVerifier } from '@selfxyz/agent-sdk';

// Verify Celo Mainnet Proof-of-Human for Agent #10089
const verifier = new SelfAgentVerifier({
  network: 'mainnet',
  registryAddress: '0xaC3DF9ABf80d0F5c020C06B04Cced27763355944',
  rpcUrl: 'https://forno.celo.org',
  maxAgentsPerHuman: 1,
});

// Check live Self status via Sivan Gateway
const statusRes = await fetch('https://api.sivantech.online/api/v1/agent/self-status', {
  headers: { 'x-self-agent-address': '0x46eFfe0409BFE99b0435e7bb7219DC6586612345' },
});
const { verification } = await statusRes.json();
console.log('Tier:', verification.tier, 'Limit USD:', verification.maxTransactionLimitUsd);`,
  },
  {
    id: 'python',
    label: 'Python / LangChain',
    language: 'PYTHON · AUTONOMOUS FIAT OFF-RAMP',
    code: `import requests
import base64
import json

SIVAN_INVOKE_URL = "https://api.sivantech.online/api/v1/agent/invoke"

# Resolve Nigerian NUBAN Bank Account & Prepare cNGN Off-Ramp
payload = {
    "tool": "sivan_resolve_bank_account",
    "params": {
        "accountNumber": "0441234567",
        "bankCode": "044"
    }
}

res = requests.post(SIVAN_INVOKE_URL, json=payload)
print("Resolved Bank Account & Agent Attribution:", res.json())`,
  },
];

export const CodeSnippets: React.FC = () => {
  const [studioTab, setStudioTab] = useState(STUDIO_TABS[0].id);
  const [copied, setCopied] = useState(false);

  const activeStudio = STUDIO_TABS.find((t) => t.id === studioTab) ?? STUDIO_TABS[0];

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(activeStudio.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="developers" className="section-shell border-b border-border py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-10">
        {/* Left Column */}
        <div className="max-w-lg">
          <span className="section-kicker">05 / Developer Studio & Wire Protocol</span>
          <h2 className="section-title">
            Settlement primitives for <span className="text-primary">agents and builders.</span>
          </h2>
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Invoke Sivan Payment Ai via Celo x402 V2 HTTP challenges, Model Context Protocol (MCP) JSON-RPC 2.0, or Self Agent ID authenticated REST calls. Every request resolves to the same verifiable ledger and Service Agreement engine.
          </p>
          <div className="mt-9 space-y-4">
            {[
              'HTTP 402 base64 payment-required challenge headers',
              'Gas-free EIP-3009 settlement via api.x402.celo.org',
              'Self Protocol ZK sybil protection ($50 vs $5,000 tiers)',
              'ERC-8021 calldata attribution (celo_bdb587d550be)',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="size-4 text-success shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Terminal Studio matching sivan-home-pagev2 */}
        <div className="border border-border bg-background/90 shadow-2xl shadow-background">
          <div className="flex flex-col gap-3 border-b border-border p-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
            <div role="tablist" aria-label="Developer interface" className="flex min-w-0 overflow-x-auto gap-1">
              {STUDIO_TABS.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={studioTab === tab.id}
                  onClick={() => {
                    setStudioTab(tab.id);
                    setCopied(false);
                  }}
                  className={`shrink-0 rounded-sm px-3 py-1.5 font-mono text-[10px] transition-colors ${
                    studioTab === tab.id
                      ? 'bg-secondary text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <button
              onClick={copyCode}
              aria-label="Copy developer example"
              className="inline-flex items-center gap-1.5 self-end border border-border bg-card px-3 py-1.5 font-mono text-[10px] text-foreground hover:border-primary sm:self-auto"
            >
              {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between border-b border-border bg-card/60 px-5 py-3 font-mono text-[9px] text-muted-foreground">
            <span>{activeStudio.language}</span>
            <span className="text-success">● PRODUCTION READY</span>
          </div>

          <pre className="studio-code min-h-[340px] overflow-x-auto p-5 sm:p-7">
            <code>{activeStudio.code}</code>
          </pre>

          <div className="flex items-center justify-between border-t border-border px-5 py-3 font-mono text-[9px] text-muted-foreground">
            <span className="flex items-center gap-2">
              <Code2 className="size-3.5 text-primary" /> SIVAN AGENTIC DEVELOPER INTERFACE
            </span>
            <span>AGENT #10089 · CELO MAINNET</span>
          </div>
        </div>
      </div>
    </section>
  );
};
