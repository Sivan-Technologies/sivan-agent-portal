import React, { useState } from 'react';
import {
  Zap,
  ShieldCheck,
  FileCheck2,
  Building2,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Copy,
  Check,
  RefreshCw,
  Play,
  Terminal,
  AlertTriangle,
} from 'lucide-react';

export const LiveDemoArena: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'x402' | 'self' | 'agreement' | 'offramp'>('x402');

  // Tab 1: x402 State
  const [x402State, setX402State] = useState<'idle' | 'challenging' | 'signing' | 'settled'>('idle');

  // Tab 2: Self ID Slider State
  const [sliderAmount, setSliderAmount] = useState<number>(250);
  const [copiedDeepLink, setCopiedDeepLink] = useState(false);

  // Tab 3: Service Agreement Stepper
  const [agreementStep, setAgreementStep] = useState<number>(1);
  const [agreementRunning, setAgreementRunning] = useState<boolean>(false);

  // Tab 4: Fiat Off-ramp State
  const [offrampState, setOfframpState] = useState<'ready' | 'quoting' | 'resolving' | 'settled'>('ready');

  // Handle Tab 1 Demo Execution
  const runX402Demo = () => {
    setX402State('challenging');
    setTimeout(() => {
      setX402State('signing');
      setTimeout(() => {
        setX402State('settled');
      }, 1000);
    }, 900);
  };

  // Handle Tab 3 Agreement Stepper
  const runAgreementDemo = () => {
    setAgreementRunning(true);
    setAgreementStep(1);
    setTimeout(() => {
      setAgreementStep(2);
      setTimeout(() => {
        setAgreementStep(3);
        setAgreementRunning(false);
      }, 1200);
    }, 1200);
  };

  // Handle Tab 4 Off-Ramp Simulation
  const runOfframpDemo = () => {
    setOfframpState('quoting');
    setTimeout(() => {
      setOfframpState('resolving');
      setTimeout(() => {
        setOfframpState('settled');
      }, 1100);
    }, 900);
  };

  return (
    <section id="demo-arena" className="py-20 bg-[#06080f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00f2fe]/40 text-xs font-mono text-[#00f2fe] mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Hackathon Demo Arena</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            See Autonomous Execution in Action
          </h2>
          <p className="text-slate-400 font-sans mt-3 text-base">
            Test Sivan Payment Ai's real protocol flows live. Designed for hackathon judges and agent builders to inspect verifiable on-chain outputs in seconds.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => setActiveTab('x402')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
              activeTab === 'x402'
                ? 'bg-[#00f2fe] text-[#06080f] font-semibold shadow-[0_0_20px_rgba(0,242,254,0.3)]'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>1. Celo x402 Protocol</span>
          </button>

          <button
            onClick={() => setActiveTab('self')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
              activeTab === 'self'
                ? 'bg-blue-500 text-white font-semibold shadow-[0_0_20px_rgba(59,130,246,0.35)]'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>2. Self Agent ID Security</span>
          </button>

          <button
            onClick={() => setActiveTab('agreement')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
              activeTab === 'agreement'
                ? 'bg-[#fcff52] text-[#06080f] font-semibold shadow-[0_0_20px_rgba(252,255,82,0.3)]'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>3. Service Agreements</span>
          </button>

          <button
            onClick={() => setActiveTab('offramp')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
              activeTab === 'offramp'
                ? 'bg-emerald-500 text-white font-semibold shadow-[0_0_20px_rgba(16,185,129,0.35)]'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>4. African Bank Off-Ramp</span>
          </button>
        </div>

        {/* Tab 1: Celo x402 Protocol */}
        {activeTab === 'x402' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto border border-slate-800/90 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
              <div>
                <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-wider">Protocol Flow</span>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  Gas-Free Agent Invocation via Celo Hosted Facilitator
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  External agent sends request · Server challenges with HTTP 402 · Facilitator settles EIP-3009 gas-free
                </p>
              </div>

              <button
                onClick={runX402Demo}
                disabled={x402State === 'challenging' || x402State === 'signing'}
                className="px-5 py-2.5 rounded-xl bg-[#00f2fe] hover:bg-[#00f2fe]/90 text-[#06080f] font-semibold text-xs transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)] flex items-center justify-center gap-2 self-start md:self-auto"
              >
                {x402State === 'challenging' || x402State === 'signing' ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Processing Protocol Wire...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run x402 Invocation Flow</span>
                  </>
                )}
              </button>
            </div>

            {/* Split Pane: Request Terminal & Gateway Response */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Left Pane: External Agent Client */}
              <div className="bg-[#030509] rounded-xl p-4 border border-slate-800/80 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#00f2fe]" />
                    Client Agent (Caller)
                  </span>
                  <span className="text-slate-500">x402 Version 2</span>
                </div>

                <div className="mt-3 space-y-2 text-slate-300">
                  <div className="text-slate-500">// 1. Outbound invocation with x-x402 header</div>
                  <div className="text-emerald-400">POST https://api.sivantech.online/api/v1/agent/invoke</div>
                  <div className="text-slate-400">x-x402: true</div>
                  <div className="text-slate-400">Content-Type: application/json</div>
                  <div className="p-2 rounded bg-slate-900/60 border border-slate-800 text-slate-300 mt-2">
                    {`{\n  "prompt": "Verify milestone & prepare off-ramp quote"\n}`}
                  </div>

                  {x402State !== 'idle' && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80">
                      <div className="text-slate-500">// 2. Signing EIP-3009 Authorization (0.005 USDC)</div>
                      <div className="text-cyan-300 text-[11px] mt-1 break-all">
                        {`Signed Authorization: { from: 0xBuyer... nonce: 0x8f... value: 5000 }`}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Pane: Sivan Gateway & Facilitator */}
              <div className="bg-[#030509] rounded-xl p-4 border border-slate-800/80 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#fcff52]" />
                    Sivan Gateway & Facilitator
                  </span>
                  <span className="text-slate-500">api.x402.celo.org</span>
                </div>

                <div className="mt-3 space-y-3">
                  {x402State === 'idle' && (
                    <div className="py-12 text-center text-slate-500">
                      Click "Run x402 Invocation Flow" to simulate the live handshake and settlement.
                    </div>
                  )}

                  {x402State === 'challenging' && (
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 space-y-1 animate-pulse">
                      <div className="font-bold flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        HTTP 402 Payment Required Issued
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Header payment-required: eyJ4NDAyIjp7InZlcnNpb24iOjIsInNjaGVtZSI6ImV4YWN0Ii...
                      </div>
                      <div className="text-[11px] text-amber-200">
                        Asset: Celo USDC · Amount: 5000 units (0.005 USDC) · Network: eip155:42220
                      </div>
                    </div>
                  )}

                  {(x402State === 'signing' || x402State === 'settled') && (
                    <div className="space-y-3">
                      <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800 text-slate-400 text-[11px]">
                        <div>Facilitator: https://api.x402.celo.org/settle</div>
                        <div className="text-emerald-400">Gas Paid by Facilitator: 0 CELO for Buyer Agent</div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 space-y-1.5">
                        <div className="font-bold flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            HTTP 200 Success · Payment Settled
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                            Attribution Confirmed
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Transaction Hash:
                          <span className="text-[#00f2fe] ml-1 break-all">
                            0x9c1f1a201f362a3bdb587d550be
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
                          <span>Attribution Tag: celo_bdb587d550be</span>
                          <a
                            href="https://8004scan.io/agents/celo/10089"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#fcff52] hover:underline flex items-center gap-1"
                          >
                            Verify on 8004scan <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Self Agent ID Security */}
        {activeTab === 'self' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto border border-slate-800/90 shadow-2xl">
            <div className="pb-6 border-b border-slate-800/80">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Sybil Resistance & Risk Tiering</span>
              <h3 className="text-xl font-bold font-display text-white mt-1">
                Biometric Proof-of-Human Security Gate (Self Protocol)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Prevent rogue bots from draining liquidity pools while granting verified human agents high-volume access.
              </p>
            </div>

            {/* Transaction Amount Slider */}
            <div className="my-6 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-300">Simulate Transaction Amount</span>
                <span className="text-lg font-bold font-mono text-[#00f2fe]">${sliderAmount} USD</span>
              </div>
              <input
                type="range"
                min="10"
                max="2500"
                step="10"
                value={sliderAmount}
                onChange={(e) => setSliderAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00f2fe]"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                <span>$10 USD (Micro)</span>
                <span className="text-amber-400 font-semibold">$50 USD (Unverified Bot Ceiling)</span>
                <span className="text-emerald-400 font-semibold">$5,000 USD (Verified Human Cap)</span>
              </div>
            </div>

            {/* Comparison Cards: Unverified Bot vs Self-Verified Human */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Unverified Bot Card */}
              <div
                className={`p-5 rounded-xl border transition-all ${
                  sliderAmount > 50
                    ? 'bg-rose-950/20 border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.15)]'
                    : 'bg-slate-900/40 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                    <span className="font-bold text-sm text-white">Unverified Autonomous Bot</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    No Passport
                  </span>
                </div>

                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Ceiling Limit:</span>
                    <span className="text-amber-400 font-bold">$50 USD</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Requested Amount:</span>
                    <span className="text-white">${sliderAmount} USD</span>
                  </div>

                  {sliderAmount > 50 ? (
                    <div className="p-3 rounded-lg bg-rose-500/15 border border-rose-500/40 text-rose-300 space-y-1">
                      <div className="font-bold flex items-center gap-1.5 text-xs">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        HTTP 403 SELF_AGENT_ID_REQUIRED
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Transaction blocked. Autonomous bots without Self biometric Proof-of-Human cannot exceed $50 USD.
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Micro-query approved under $50 ceiling.</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Self-Verified Human Agent Card */}
              <div className="p-5 rounded-xl border bg-blue-950/20 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="font-bold text-sm text-white">Self-Verified Human Agent</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    Proof Attached
                  </span>
                </div>

                <div className="mt-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Authorized Limit:</span>
                    <span className="text-emerald-400 font-bold">$5,000 USD</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>ZK Nullifier:</span>
                    <span className="text-slate-300 text-[11px]">0x1234...890a</span>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 space-y-1">
                    <div className="font-bold flex items-center gap-1.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      HTTP 200 AUTHORIZED
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Full access to high-value Service Agreements, multi-chain transfers, and instant bank off-ramps.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Self Mobile Deep Link Helper */}
            <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="text-slate-400">
                <span className="text-white font-semibold">Attach Proof via Self App:</span>
                <span className="ml-2 text-slate-500">https://self.xyz/verify?agentId=10089&chainId=42220</span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    'https://self.xyz/verify?agentId=10089&chainId=42220&registry=0xaC3DF9ABf80d0F5c020C06B04Cced27763355944'
                  );
                  setCopiedDeepLink(true);
                  setTimeout(() => setCopiedDeepLink(false), 2000);
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors shrink-0"
              >
                {copiedDeepLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDeepLink ? 'Copied' : 'Copy Deep Link'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Autonomous Service Agreement */}
        {activeTab === 'agreement' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto border border-slate-800/90 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
              <div>
                <span className="text-xs font-mono text-[#fcff52] uppercase tracking-wider">Multi-Agent Protocol</span>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  Autonomous Service Agreement & Milestone Verification
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Hirer and worker agents coordinate contracts with zero-gas sponsorship and cryptographic release.
                </p>
              </div>

              <button
                onClick={runAgreementDemo}
                disabled={agreementRunning}
                className="px-5 py-2.5 rounded-xl bg-[#fcff52] hover:bg-[#fcff52]/90 text-[#06080f] font-semibold text-xs transition-all shadow-[0_0_20px_rgba(252,255,82,0.3)] flex items-center justify-center gap-2 self-start md:self-auto"
              >
                {agreementRunning ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Verifying Delivery...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Agreement Stepper</span>
                  </>
                )}
              </button>
            </div>

            {/* 3-Step Lifecycle Stepper */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {/* Step 1 */}
              <div
                className={`p-5 rounded-xl border transition-all ${
                  agreementStep >= 1 ? 'bg-slate-900/70 border-[#fcff52]/40' : 'bg-slate-950/40 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <span className="w-6 h-6 rounded-full bg-[#fcff52]/20 text-[#fcff52] flex items-center justify-center font-bold">
                    1
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">
                    FUNDS LOCKED
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm">Agreement Initiated</h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Hirer Agent locks 25 USDC into protocol vault. Zero caller gas.
                </p>
                <div className="mt-3 text-[11px] font-mono text-slate-500">
                  Vault: 0x46eFfe...12345
                </div>
              </div>

              {/* Step 2 */}
              <div
                className={`p-5 rounded-xl border transition-all ${
                  agreementStep >= 2 ? 'bg-slate-900/70 border-[#00f2fe]/40' : 'bg-slate-950/40 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <span className="w-6 h-6 rounded-full bg-[#00f2fe]/20 text-[#00f2fe] flex items-center justify-center font-bold">
                    2
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px]">
                    WORK DELIVERED
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm">Milestone Submitted</h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Worker Agent submits cryptographic payload hash and proof.
                </p>
                <div className="mt-3 text-[11px] font-mono text-cyan-300">
                  Hash: 0x88f2b3...ca41
                </div>
              </div>

              {/* Step 3 */}
              <div
                className={`p-5 rounded-xl border transition-all ${
                  agreementStep >= 3 ? 'bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'bg-slate-950/40 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    3
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                    COMPLETED
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm">Autonomous Release</h4>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Sivan AI validates criteria and releases 25 USDC to worker vault.
                </p>
                <div className="mt-3 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Settlement Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: African Bank Off-Ramp */}
        {activeTab === 'offramp' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto border border-slate-800/90 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800/80 gap-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">The Last-Mile Bridge</span>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  Instant Fiat Off-Ramp to Nigerian Bank Account
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  USDC on Celo · Textile FX RFQ · cNGN 1:1 Parity · NIBSS / NIP Rail in under 1 to 2 minutes
                </p>
              </div>

              <button
                onClick={runOfframpDemo}
                disabled={offrampState === 'quoting' || offrampState === 'resolving'}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-500/90 text-[#06080f] font-semibold text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 self-start md:self-auto"
              >
                {offrampState === 'quoting' || offrampState === 'resolving' ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Resolving NUBAN Rail...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Simulate Bank Off-Ramp</span>
                  </>
                )}
              </button>
            </div>

            {/* Pipeline Visualizer */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs">
                <span className="text-slate-500 block text-[10px]">STEP 1 · SOURCE</span>
                <span className="text-white font-bold text-sm mt-1 block">15 USDC</span>
                <span className="text-slate-400 text-[11px]">Celo Mainnet</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs">
                <span className="text-slate-500 block text-[10px]">STEP 2 · RFQ SWAP</span>
                <span className="text-[#00f2fe] font-bold text-sm mt-1 block">24,750 cNGN</span>
                <span className="text-slate-400 text-[11px]">Textile FX Protocol</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs">
                <span className="text-slate-500 block text-[10px]">STEP 3 · DESTINATION</span>
                <span className="text-white font-bold text-sm mt-1 block">ACCESS BANK</span>
                <span className="text-slate-400 text-[11px]">NUBAN: 0441234567</span>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 font-mono text-xs">
                <span className="text-emerald-400 block text-[10px]">STEP 4 · SETTLEMENT</span>
                <span className="text-emerald-300 font-bold text-sm mt-1 block">&lt; 1 to 2 Mins</span>
                <span className="text-slate-400 text-[11px]">NIBSS Direct Credit</span>
              </div>
            </div>

            {/* Live Result Notification */}
            {offrampState === 'settled' && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold">24,750 NGN Disbursed to SAMSON MICHEAL (Access Bank).</span>
                    <div className="text-[11px] text-slate-400">
                      Celo Calldata Attribution: celo_bdb587d550be (Block 83391488)
                    </div>
                  </div>
                </div>
                <a
                  href="https://celoscan.io/tx/0xc339a4514e6b1e8949579e8d6f44ceea6ccc8450a79373d42fc2f331c734357d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto shrink-0"
                >
                  <span>View on Celoscan</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
