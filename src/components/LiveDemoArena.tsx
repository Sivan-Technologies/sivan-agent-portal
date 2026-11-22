import React, { useState } from 'react';
import {
  AlertTriangle,
  Building2,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  FileCheck2,
  Play,
  RefreshCw,
  ShieldCheck,
  Terminal,
  XCircle,
  Zap,
} from 'lucide-react';
import { AssetIcon } from './AssetIcon';

const ASSET_CONFIGS = {
  USDC: {
    symbol: 'USDC',
    display: 'USDC',
    contract: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
    contractShort: '0xcebA…118C',
    name: 'USD Coin',
    version: '2',
  },
  USDT: {
    symbol: 'USDT',
    display: 'USD₮',
    contract: '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
    contractShort: '0x4806…3D5e',
    name: 'Tether USD',
    version: '1',
  },
  USAT: {
    symbol: 'USAT',
    display: 'USA₮',
    contract: '0xD2ab3C9A02DBBAB236BfEC45D1d755DF4267F771',
    contractShort: '0xD2ab…F771',
    name: 'Tether America USD',
    version: '1',
  },
  cUSD: {
    symbol: 'cUSD',
    display: 'cUSD',
    contract: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
    contractShort: '0x765D…282a',
    name: 'Celo Dollar',
    version: '1',
  },
};

const X402_CHALLENGE_JSON = {
  x402: {
    version: 2,
    scheme: 'exact',
    network: 'eip155:42220',
    payTo: '0x46eFfe0409BFE99b0435e7bb7219DC6586612345',
    asset: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
    amount: '5000',
    extra: {
      name: 'USD Coin',
      version: '2',
      symbol: 'USDC',
      agentId: 10089,
      attributionTag: 'celo_bdb587d550be',
    },
  },
};

const X402_HEADER_B64 =
  'eyJ4NDAyIjp7InZlcnNpb24iOjIsInNjaGVtZSI6ImV4YWN0IiwibmV0d29yayI6ImVpcDE1NTo0MjIyMCIsInBheVRvIjoiMHg0NmVGZmUwNDA5QkZFOTliMDQzNWU3YmI3MjE5REM2NTg2NjEyMzQ1IiwiYXNzZXQiOiIweGNlYkE5MzAwZjJiOTQ4NzEwZDI2NTNkRDdCMDdmMzNBOEIzMjExOEMiLCJhbW91bnQiOiI1MDAwIn19';

const EMERGING_CORRIDORS = [
  {
    id: 'NG',
    name: 'Nigeria',
    flag: '🇳🇬',
    currency: 'NGN',
    asset: 'cNGN',
    decimals: 6,
    rate: 1650,
    rail: 'NIBSS / NIP Direct Rail',
    speed: '< 1 to 2 Mins',
    contract: '0xF6829D7393dAe24509eb1E52eE8e572e2E271a4f',
    holder: 'SAMSON MICHEAL',
    bankName: 'Access Bank Nigeria',
    account: '0441234567 (NUBAN)',
    txHash: '0xc339a4514e6b1e8949579e8d6f44ceea6ccc8450a79373d42fc2f331c734357d',
  },
  {
    id: 'BR',
    name: 'Brazil',
    flag: '🇧🇷',
    currency: 'BRL',
    asset: 'wBRL',
    decimals: 18,
    rate: 5.75,
    rail: 'Pix Instant Central Bank Rail',
    speed: '< 30 Seconds',
    contract: '0xD76f5Faf6888e24D9F04Bf92a0c8B921FE4390e0',
    holder: 'CARLOS SILVA',
    bankName: 'Nubank Brasil',
    account: 'carlos.silva@pix.br (Chave Pix)',
    txHash: '0x8f2a63d719be4d0928b502c4b8e21f928491c107e3768f512da5c3a0179f8e4a',
  },
  {
    id: 'AR',
    name: 'Argentina',
    flag: '🇦🇷',
    currency: 'ARS',
    asset: 'wARS',
    decimals: 18,
    rate: 1045,
    rail: 'Ripio / CBU Interbanking Rail',
    speed: '< 2 Mins',
    contract: '0x0DC4F92879B7670e5f4e4e6e3c801D229129D90D',
    holder: 'MATEO GONZALEZ',
    bankName: 'Banco Galicia',
    account: '0070123456789012345678 (CBU)',
    txHash: '0x7a5f82c9103e48b592d6e7104b2a38c91a0293b4827c193e481b29a74c10283e',
  },
  {
    id: 'MX',
    name: 'Mexico',
    flag: '🇲🇽',
    currency: 'MXN',
    asset: 'wMXN',
    decimals: 18,
    rate: 20.4,
    rail: 'SPEI Interbank Rail',
    speed: '< 1 Min',
    contract: '0x337E7456B420bD3481e7FA61fA9850343d610d34',
    holder: 'ALEJANDRO MORALES',
    bankName: 'BBVA Mexico',
    account: '012180001234567890 (CLABE)',
    txHash: '0x5c91d8e415b76f28a9b20739c1481b0a88e2c7a5f6e392d4b1a8f7c9e0132b47',
  },
  {
    id: 'CO',
    name: 'Colombia',
    flag: '🇨🇴',
    currency: 'COP',
    asset: 'wCOP',
    decimals: 18,
    rate: 4420,
    rail: 'PSE / ACH Colombia Rail',
    speed: '< 2 Mins',
    contract: '0x8a1D45e102e886510e891d2Ec656a708991e2D76',
    holder: 'SOFIA RODRIGUEZ',
    bankName: 'Bancolombia',
    account: '10234567890 (Cuenta Ahorros)',
    txHash: '0x4f5e6d7c8b9a0f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5c6b7a8f9e0d1c2b3a4f5e',
  },
];

export const LiveDemoArena: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'x402' | 'self' | 'agreement' | 'offramp'>('x402');

  // Tab 1: x402 Protocol State
  const [x402State, setX402State] = useState<'idle' | 'challenging' | 'signing' | 'settled'>('settled');
  const [selectedAsset, setSelectedAsset] = useState<'USDC' | 'USDT' | 'USAT' | 'cUSD'>('USDC');
  const [showDecodedHeader, setShowDecodedHeader] = useState(true);
  const [copiedHeader, setCopiedHeader] = useState(false);
  const currentAssetCfg = ASSET_CONFIGS[selectedAsset] ?? ASSET_CONFIGS.USDC;

  // Tab 2: Self Agent ID State
  const [sliderAmount, setSliderAmount] = useState<number>(500);
  const [copiedDeepLink, setCopiedDeepLink] = useState(false);

  // Tab 3: Autonomous Service Agreement State
  const [agreementStep, setAgreementStep] = useState<number>(3);
  const [agreementRunning, setAgreementRunning] = useState<boolean>(false);
  const [agreementAmount, setAgreementAmount] = useState<number>(25);

  // Tab 4: Global Fiat Off-Ramp State (Realistic 5 to 50 USDC range)
  const [offrampState, setOfframpState] = useState<'ready' | 'quoting' | 'resolving' | 'settled'>('settled');
  const [offrampUsdc, setOfframpUsdc] = useState<number>(15);
  const [selectedCorridorIdx, setSelectedCorridorIdx] = useState<number>(0);

  const activeCorridor = EMERGING_CORRIDORS[selectedCorridorIdx] ?? EMERGING_CORRIDORS[0];
  // Live indicative conversion preview based on active corridor rate
  const indicativeLocalAmount = (offrampUsdc * activeCorridor.rate).toLocaleString('en-US');

  const runX402Demo = () => {
    setX402State('challenging');
    setTimeout(() => {
      setX402State('signing');
      setTimeout(() => {
        setX402State('settled');
      }, 900);
    }, 850);
  };

  const runAgreementDemo = () => {
    setAgreementRunning(true);
    setAgreementStep(1);
    setTimeout(() => {
      setAgreementStep(2);
      setTimeout(() => {
        setAgreementStep(3);
        setAgreementRunning(false);
      }, 1000);
    }, 1000);
  };

  const runOfframpDemo = () => {
    setOfframpState('quoting');
    setTimeout(() => {
      setOfframpState('resolving');
      setTimeout(() => {
        setOfframpState('settled');
      }, 950);
    }, 850);
  };

  return (
    <section id="demo-arena" className="section-shell border-b border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        {/* Architectural Section Heading matching sivan-home-pagev2 */}
        <div className="section-heading-grid">
          <div>
            <span className="section-kicker">01 / Interactive Hackathon Demo Arena</span>
            <h2 className="section-title">
              Autonomous execution.<br />
              <span className="text-primary">Verifiable in real time.</span>
            </h2>
          </div>
          <p className="section-intro">
            Built for hackathon judges and protocol engineers. Test the complete 4-stage lifecycle right in your browser: Celo x402 zero-gas challenges, Self Protocol Proof-of-Human security, milestone Service Agreements, and global emerging-market bank payouts across Africa and Latin America.
          </p>
        </div>

        {/* 4-Tab Architectural Selector Bar */}
        <div
          role="tablist"
          aria-label="Live Demo Arena Modules"
          className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              id: 'x402' as const,
              step: 'MODULE 01',
              title: 'Celo x402 Protocol',
              sub: 'HTTP 402 · Zero-Gas Facilitator',
              icon: Zap,
            },
            {
              id: 'self' as const,
              step: 'MODULE 02',
              title: 'Self Agent ID Gate',
              sub: '$50 Bot Cap · $5,000 Human Pass',
              icon: ShieldCheck,
            },
            {
              id: 'agreement' as const,
              step: 'MODULE 03',
              title: 'Service Agreements',
              sub: 'Milestone Lock & AI Release',
              icon: FileCheck2,
            },
            {
              id: 'offramp' as const,
              step: 'MODULE 04',
              title: 'Global Fiat Corridors',
              sub: 'Africa (cNGN) & LatAm (wBRL, wARS)',
              icon: Building2,
            },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col justify-between p-5 text-left transition-colors ${
                  isSelected
                    ? 'bg-secondary text-foreground shadow-[inset_0_2px_0_var(--primary)]'
                    : 'bg-card/80 text-muted-foreground hover:bg-card hover:text-foreground'
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    {tab.step}
                  </span>
                  <Icon className={`size-4 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div className="mt-4">
                  <p className="font-display text-base font-semibold text-foreground">{tab.title}</p>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">{tab.sub}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* =====================================================================
            TAB 1: CELO x402 PROTOCOL & ZERO-GAS SETTLEMENT
           ===================================================================== */}
        {activeTab === 'x402' && (
          <div className="border-x border-b border-border bg-card">
            {/* Sub-header controls */}
            <div className="flex flex-col justify-between gap-4 border-b border-border bg-background/40 p-5 sm:flex-row sm:items-center sm:px-7">
              <div>
                <div className="flex items-center gap-2">
                  <span className="status-dot" />
                  <span className="font-mono text-[10px] uppercase text-primary">
                    FACILITATOR: HTTPS://API.X402.CELO.ORG · EIP155:42220
                  </span>
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  Gas-Free Agent Invocation via Celo Hosted x402 V2
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground mr-1">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span>LIVE ASSETS</span>
                </div>
                <div className="flex border border-border bg-background p-0.5 font-mono text-[10px]">
                  {(['USDC', 'USDT', 'USAT', 'cUSD'] as const).map((sym) => {
                    const cfg = ASSET_CONFIGS[sym];
                    return (
                      <button
                        key={sym}
                        onClick={() => setSelectedAsset(sym)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 transition-colors ${
                          selectedAsset === sym ? 'bg-secondary text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <AssetIcon asset={sym} size={14} />
                        <span>{cfg.display}</span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={runX402Demo}
                  disabled={x402State === 'challenging' || x402State === 'signing'}
                  className="inline-flex h-9 items-center gap-2 rounded-sm bg-primary px-4 font-mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {x402State === 'challenging' || x402State === 'signing' ? (
                    <>
                      <RefreshCw className="size-3.5 animate-spin" />
                      <span>EXECUTING HANDSHAKE...</span>
                    </>
                  ) : (
                    <>
                      <Play className="size-3.5 fill-current" />
                      <span>SIMULATE x402 CALL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Split Console Grid */}
            <div className="grid gap-px bg-border lg:grid-cols-2">
              {/* Left Pane: Caller Agent Request & EIP-3009 Authorization */}
              <div className="bg-background/90 p-5 sm:p-7 font-mono text-xs space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-2 text-foreground font-semibold">
                    <Terminal className="size-3.5 text-primary" />
                    01 · EXTERNAL BUYER AGENT (CALLER)
                  </span>
                  <span>SCHEME: EXACT · EIP-3009</span>
                </div>

                <div>
                  <span className="text-[10px] uppercase text-muted-foreground">
                    STEP A · OUTBOUND AGENT REQUEST
                  </span>
                  <pre className="mt-2 border border-border bg-card p-4 text-[11px] leading-relaxed text-foreground overflow-x-auto">
{`POST https://api.sivantech.online/api/v1/agent/invoke
x-x402: true
Content-Type: application/json

{
  "tool": "sivan_initiate_service_agreement",
  "params": {
    "amount": 25,
    "currency": "${selectedAsset}",
    "network": "celo"
  }
}`}
                  </pre>
                </div>

                <div>
                  <span className="text-[10px] uppercase text-muted-foreground">
                    STEP B · BUYER AGENT SIGNS EIP-3009 AUTHORIZATION (0 GAS)
                  </span>
                  <div className="mt-2 border border-border bg-card p-4 text-[11px] space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Method:</span>
                      <span className="text-primary">transferWithAuthorization</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Settlement Asset:</span>
                      <span className="text-foreground">{currentAssetCfg.display} ({currentAssetCfg.contractShort})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Authorized Micro-Fee:</span>
                      <span className="text-foreground">5000 units (0.005 {currentAssetCfg.display})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">PayTo (Agent #10089 Vault):</span>
                      <span className="text-success">0x46eFfe…612345</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Pane: Sivan Gateway HTTP 402 Challenge & Facilitator Settlement */}
              <div className="bg-background/90 p-5 sm:p-7 font-mono text-xs space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-2 text-foreground font-semibold">
                    <Zap className="size-3.5 text-primary" />
                    02 · SIVAN GATEWAY & CELO FACILITATOR
                  </span>
                  <button
                    onClick={() => setShowDecodedHeader(!showDecodedHeader)}
                    className="text-primary hover:underline"
                  >
                    {showDecodedHeader ? 'VIEW RAW BASE64' : 'DECODE HEADER JSON'}
                  </button>
                </div>

                {/* HTTP 402 Challenge Box */}
                <div className="border border-warning/40 bg-warning/5 p-4 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-semibold text-warning">
                      <AlertTriangle className="size-4" />
                      HTTP 402 PAYMENT REQUIRED CHALLENGE
                    </span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(X402_HEADER_B64);
                        setCopiedHeader(true);
                        setTimeout(() => setCopiedHeader(false), 1800);
                      }}
                      className="inline-flex items-center gap-1 border border-border bg-card px-2 py-0.5 text-[10px] text-foreground hover:border-primary"
                    >
                      {copiedHeader ? <Check className="size-3 text-success" /> : <Copy className="size-3" />}
                      <span>{copiedHeader ? 'COPIED' : 'COPY HEADER'}</span>
                    </button>
                  </div>

                  {showDecodedHeader ? (
                    <pre className="border border-border bg-card/90 p-3 text-[11px] leading-relaxed text-foreground overflow-x-auto">
                      {JSON.stringify(X402_CHALLENGE_JSON, null, 2)}
                    </pre>
                  ) : (
                    <div className="border border-border bg-card/90 p-3 text-[11px] break-all text-muted-foreground">
                      payment-required: {X402_HEADER_B64}
                    </div>
                  )}
                </div>

                {/* Settlement Confirmation Box */}
                <div
                  className={`border p-4 transition-all ${
                    x402State === 'settled'
                      ? 'border-success/40 bg-success/5'
                      : 'border-border bg-card/50 opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-semibold text-success">
                      <CheckCircle2 className="size-4" />
                      {x402State === 'settled'
                        ? 'HTTP 200 · SETTLED VIA API.X402.CELO.ORG'
                        : 'FACILITATOR SETTLING ON CELO...'}
                    </span>
                    <span className="border border-success/30 bg-success/10 px-2 py-0.5 text-[9px] text-success">
                      0 CALLER GAS
                    </span>
                  </div>

                  <div className="mt-3 space-y-1.5 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Celo Mainnet Tx:</span>
                      <span className="text-primary">0xc339a4514e6b1e…31c734357d</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ERC-8021 Attribution Suffix:</span>
                      <span className="text-foreground font-semibold">celo_bdb587d550be</span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[10px]">
                    <span className="text-muted-foreground">Confirmed in Celo Block #83391488</span>
                    <a
                      href="https://celoscan.io/tx/0xc339a4514e6b1e8949579e8d6f44ceea6ccc8450a79373d42fc2f331c734357d"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      <span>OPEN CELOSCAN</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 2: SELF AGENT ID PROOF-OF-HUMAN SECURITY GATE
           ===================================================================== */}
        {activeTab === 'self' && (
          <div className="border-x border-b border-border bg-card">
            <div className="flex flex-col justify-between gap-4 border-b border-border bg-background/40 p-5 sm:flex-row sm:items-center sm:px-7">
              <div>
                <span className="font-mono text-[10px] uppercase text-primary">
                  SELF PROTOCOL REGISTRY (CELO): 0xaC3DF9ABf80d0F5c020C06B04Cced27763355944
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  Biometric Proof-of-Human Risk Tiering & Sybil Protection
                </h3>
              </div>

              {/* Quick Amount Preset Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                {[
                  { label: '$15 Micro', val: 15 },
                  { label: '$50 Ceiling', val: 50 },
                  { label: '$500 Agreement', val: 500 },
                  { label: '$2,500 Payout', val: 2500 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    onClick={() => setSliderAmount(preset.val)}
                    className={`border px-3 py-1.5 transition-colors ${
                      sliderAmount === preset.val
                        ? 'border-primary bg-primary/15 text-primary font-semibold'
                        : 'border-border bg-background text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-7 space-y-6">
              {/* Interactive Slider Bar */}
              <div className="border border-border bg-background/60 p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs uppercase text-muted-foreground">
                    TEST TRANSACTION VALUE SLIDER
                  </span>
                  <span className="font-display text-2xl font-bold text-primary">
                    ${sliderAmount.toLocaleString('en-US')} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="2500"
                  step="5"
                  value={sliderAmount}
                  onChange={(e) => setSliderAmount(Number(e.target.value))}
                  aria-label="Simulated transaction amount in USD"
                  className="h-2 w-full cursor-pointer appearance-none bg-secondary accent-[var(--primary)]"
                />
                <div className="mt-2.5 flex justify-between font-mono text-[10px] text-muted-foreground">
                  <span>$10 USD (MICRO QUERY)</span>
                  <span className="text-warning font-semibold">$50 USD (UNVERIFIED BOT CEILING)</span>
                  <span className="text-success font-semibold">$5,000 USD (SELF HUMAN VERIFIED CAP)</span>
                </div>
              </div>

              {/* Side-by-Side Comparison */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Card A: Unverified Bot */}
                <div
                  className={`border p-6 transition-all ${
                    sliderAmount > 50
                      ? 'border-rose-500/50 bg-rose-950/15'
                      : 'border-border bg-background/60'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-muted-foreground">
                        TIER 01 · ANONYMOUS CALLER
                      </span>
                      <h4 className="mt-0.5 font-display text-lg font-semibold">
                        Unverified Autonomous Bot
                      </h4>
                    </div>
                    <span className="border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                      NO ZK PASSPORT
                    </span>
                  </div>

                  <div className="mt-4 space-y-2.5 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Maximum Allowed Limit:</span>
                      <span className="text-warning font-semibold">$50.00 USD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Attempted Value:</span>
                      <span className="text-foreground font-semibold">${sliderAmount}.00 USD</span>
                    </div>

                    {sliderAmount > 50 ? (
                      <div className="mt-4 border border-rose-500/40 bg-rose-500/10 p-4 space-y-2">
                        <div className="flex items-center gap-2 font-semibold text-rose-400">
                          <XCircle className="size-4 shrink-0" />
                          <span>HTTP 403 · SELF_AGENT_ID_REQUIRED</span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-muted-foreground">
                          Sybil guard triggered. Unverified bots cannot execute Service Agreements or fiat off-ramps above $50 USD.
                        </p>
                      </div>
                    ) : (
                      <div className="mt-4 border border-success/40 bg-success/10 p-4 flex items-center gap-2.5 text-success">
                        <CheckCircle2 className="size-4 shrink-0" />
                        <span>HTTP 200 · Micro-operation permitted under $50 ceiling.</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card B: Self-Verified Human Agent */}
                <div className="border border-primary/40 bg-background/60 p-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase text-primary">
                        TIER 02 · HUMAN-BACKED AGENT (#10089)
                      </span>
                      <h4 className="mt-0.5 font-display text-lg font-semibold">
                        Self-Verified Human Agent
                      </h4>
                    </div>
                    <span className="border border-success/40 bg-success/10 px-2.5 py-1 font-mono text-[10px] text-success">
                      ZK PROOF VALID
                    </span>
                  </div>

                  <div className="mt-4 space-y-2.5 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Authorized Limit:</span>
                      <span className="text-success font-semibold">$5,000.00 USD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sybil Nullifier (1 Agent/Human):</span>
                      <span className="text-primary">0x0000…46effe0409</span>
                    </div>

                    <div className="mt-4 border border-success/40 bg-success/10 p-4 space-y-2">
                      <div className="flex items-center gap-2 font-semibold text-success">
                        <CheckCircle2 className="size-4 shrink-0" />
                        <span>HTTP 200 · HIGH-VALUE EXECUTION GRANTED</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-muted-foreground">
                        Biometric passport zero-knowledge proof verified on Celo Mainnet. Full access to Service Agreements and NIBSS bank cashouts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Universal Deep Link Bar */}
              <div className="flex flex-col justify-between gap-4 border border-border bg-background/80 p-4 sm:flex-row sm:items-center font-mono text-xs">
                <div>
                  <span className="text-[10px] uppercase text-primary block">
                    SELF MOBILE APP UNIVERSAL ONBOARDING LINK
                  </span>
                  <span className="text-muted-foreground break-all text-[11px]">
                    https://self.xyz/verify?agentId=10089&chainId=42220&registry=0xaC3DF9ABf80d0F5c020C06B04Cced27763355944
                  </span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      'https://self.xyz/verify?agentId=10089&chainId=42220&registry=0xaC3DF9ABf80d0F5c020C06B04Cced27763355944'
                    );
                    setCopiedDeepLink(true);
                    setTimeout(() => setCopiedDeepLink(false), 1800);
                  }}
                  className="inline-flex h-9 shrink-0 items-center gap-2 border border-border bg-card px-4 text-xs font-semibold text-foreground hover:border-primary"
                >
                  {copiedDeepLink ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
                  <span>{copiedDeepLink ? 'COPIED LINK' : 'COPY DEEP LINK'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 3: AUTONOMOUS SERVICE AGREEMENT & MILESTONE RELEASE
           ===================================================================== */}
        {activeTab === 'agreement' && (
          <div className="border-x border-b border-border bg-card">
            <div className="flex flex-col justify-between gap-4 border-b border-border bg-background/40 p-5 sm:flex-row sm:items-center sm:px-7">
              <div>
                <span className="font-mono text-[10px] uppercase text-primary">
                  TOOL: SIVAN_INITIATE_SERVICE_AGREEMENT · ZERO-GAS VAULT
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  Autonomous Multi-Agent Service Agreement & Cryptographic Release
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex border border-border bg-background p-0.5 font-mono text-[10px]">
                  {[15, 25, 50].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setAgreementAmount(amt)}
                      className={`px-2.5 py-1 ${
                        agreementAmount === amt ? 'bg-secondary text-primary font-semibold' : 'text-muted-foreground'
                      }`}
                    >
                      {amt} USDC
                    </button>
                  ))}
                </div>

                <button
                  onClick={runAgreementDemo}
                  disabled={agreementRunning}
                  className="inline-flex h-9 items-center gap-2 rounded-sm bg-primary px-4 font-mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {agreementRunning ? (
                    <>
                      <RefreshCw className="size-3.5 animate-spin" />
                      <span>VERIFYING MILESTONE...</span>
                    </>
                  ) : (
                    <>
                      <Play className="size-3.5 fill-current" />
                      <span>REPLAY AGREEMENT FLOW</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-7 space-y-6">
              <div className="grid gap-px border border-border bg-border md:grid-cols-3">
                {[
                  {
                    step: 1,
                    badge: 'IN PROGRESS · FUNDS LOCKED',
                    title: '01 · Agreement Locked',
                    desc: `Hirer Agent locks ${agreementAmount}.00 USDC into Sivan Protocol Vault on Celo Mainnet with zero caller gas.`,
                    meta: 'Vault: 0x46eFfe0409BFE…612345',
                  },
                  {
                    step: 2,
                    badge: 'WORK DELIVERED · HASH VERIFIED',
                    title: '02 · Deliverable Submitted',
                    desc: 'Worker Agent submits verifiable artifact hash and completion signature via MCP.',
                    meta: 'Artifact SHA-256: 0x88f2b3…ca41',
                  },
                  {
                    step: 3,
                    badge: 'COMPLETED · PAYMENT RELEASED',
                    title: '03 · Autonomous Release',
                    desc: `Sivan Payment Ai verifies milestone terms and settles ${agreementAmount}.00 USDC to Worker Agent.`,
                    meta: 'Tag: celo_bdb587d550be',
                  },
                ].map((item) => {
                  const active = agreementStep >= item.step;
                  return (
                    <div
                      key={item.step}
                      className={`flex flex-col justify-between p-6 transition-colors ${
                        active ? 'bg-background/90' : 'bg-card/40 opacity-50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between font-mono text-[10px]">
                          <span className="border border-primary/40 bg-primary/10 px-2 py-0.5 text-primary">
                            {item.badge}
                          </span>
                          {active && <CheckCircle2 className="size-4 text-success" />}
                        </div>
                        <h4 className="mt-5 font-display text-lg font-semibold">{item.title}</h4>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                      </div>
                      <div className="mt-6 border-t border-border pt-3 font-mono text-[10px] text-primary">
                        {item.meta}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 4: GLOBAL FIAT CORRIDORS (AFRICA & LATIN AMERICA)
           ===================================================================== */}
        {activeTab === 'offramp' && (
          <div className="border-x border-b border-border bg-card">
            <div className="flex flex-col justify-between gap-4 border-b border-border bg-background/40 p-5 sm:flex-row sm:items-center sm:px-7">
              <div>
                <span className="font-mono text-[10px] uppercase text-primary">
                  CORRIDOR: CELO USDC → PERMIT2 CONVERSION → LOCAL CENTRAL BANK RAIL
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  Global Emerging-Market Fiat Off-Ramps (&lt; 1 to 2 Minutes)
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* Realistic Test Amounts (5 to 50 USDC) */}
                <div className="flex border border-border bg-background p-0.5 font-mono text-[10px]">
                  {[10, 15, 25, 50].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setOfframpUsdc(amt)}
                      className={`px-2.5 py-1 ${
                        offrampUsdc === amt ? 'bg-secondary text-primary font-semibold' : 'text-muted-foreground'
                      }`}
                    >
                      {amt} USDC
                    </button>
                  ))}
                </div>

                <button
                  onClick={runOfframpDemo}
                  disabled={offrampState === 'quoting' || offrampState === 'resolving'}
                  className="inline-flex h-9 items-center gap-2 rounded-sm bg-primary px-4 font-mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {offrampState === 'quoting' || offrampState === 'resolving' ? (
                    <>
                      <RefreshCw className="size-3.5 animate-spin" />
                      <span>SETTLING VIA {activeCorridor.rail.split(' ')[0]}...</span>
                    </>
                  ) : (
                    <>
                      <Play className="size-3.5 fill-current" />
                      <span>SIMULATE BANK PAYOUT</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-7 space-y-6">
              {/* Corridor Country Selector */}
              <div className="flex flex-col gap-3 border border-border bg-background/60 p-4 font-mono text-xs sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[10px] uppercase text-muted-foreground flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-primary" />
                  SELECT EMERGING-MARKET SETTLEMENT CORRIDOR:
                </span>
                <div className="flex flex-wrap gap-2">
                  {EMERGING_CORRIDORS.map((corridor, idx) => (
                    <button
                      key={corridor.id}
                      onClick={() => setSelectedCorridorIdx(idx)}
                      className={`inline-flex items-center gap-2 border px-3 py-1.5 text-[11px] transition-colors ${
                        selectedCorridorIdx === idx
                          ? 'border-primary bg-primary/15 text-foreground font-semibold'
                          : 'border-border bg-card text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <span>{corridor.flag}</span>
                      <span>{corridor.name} ({corridor.asset})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4-Column Pipeline Matrix */}
              <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-background/90 p-5">
                  <span className="font-mono text-[9px] uppercase text-muted-foreground">01 · ON-CHAIN INPUT</span>
                  <p className="mt-3 font-display text-2xl font-bold text-foreground">{offrampUsdc}.00 USDC</p>
                  <p className="mt-1 font-mono text-[10px] text-primary">Celo Mainnet (eip155:42220)</p>
                </div>

                <div className="bg-background/90 p-5">
                  <span className="font-mono text-[9px] uppercase text-muted-foreground">02 · CELO FACILITATOR RFQ</span>
                  <p className="mt-3 font-display text-2xl font-bold text-primary">{indicativeLocalAmount} {activeCorridor.asset}</p>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">{activeCorridor.decimals}d · Permit2 Verified</p>
                </div>

                <div className="bg-background/90 p-5">
                  <span className="font-mono text-[9px] uppercase text-muted-foreground">03 · LOCAL RECIPIENT</span>
                  <p className="mt-3 font-display text-base font-bold text-foreground">{activeCorridor.holder}</p>
                  <p className="mt-1 font-mono text-[10px] text-success">
                    {activeCorridor.bankName} · {activeCorridor.account}
                  </p>
                </div>

                <div className="bg-background/90 p-5">
                  <span className="font-mono text-[9px] uppercase text-muted-foreground">04 · CENTRAL BANK RAIL</span>
                  <p className="mt-3 font-display text-2xl font-bold text-success">{activeCorridor.speed}</p>
                  <p className="mt-1 font-mono text-[10px] text-muted-foreground">{activeCorridor.rail}</p>
                </div>
              </div>

              {/* Confirmed Settlement Banner */}
              <div className="flex flex-col justify-between gap-4 border border-success/40 bg-success/5 p-5 sm:flex-row sm:items-center font-mono text-xs">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {indicativeLocalAmount} {activeCorridor.currency} Disbursed to {activeCorridor.holder} ({activeCorridor.bankName})
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      On-chain Celo Permit2 settlement stamped with ERC-8021 calldata attribution tag celo_bdb587d550be
                    </p>
                  </div>
                </div>
                <a
                  href={`https://celoscan.io/tx/${activeCorridor.txHash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 shrink-0 items-center gap-2 border border-success/40 bg-success/10 px-4 text-[11px] font-semibold text-success hover:bg-success/20"
                >
                  <span>VERIFY CELOSCAN TX</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
