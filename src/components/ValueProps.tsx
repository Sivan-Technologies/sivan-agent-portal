import React from 'react';
import { Landmark, Zap, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const cards = [
    {
      icon: <Landmark className="w-6 h-6 text-emerald-400" />,
      title: 'The Last-Mile African Fiat Bridge',
      badge: 'Textile FX · NIBSS Rails',
      description:
        'AI agents can hold USDC on-chain, but real contractors and hosting providers in emerging markets need cash in local bank accounts. Sivan converts crypto to cNGN via Textile FX and deposits physical Naira directly into Nigerian NUBAN accounts in under 1 to 2 minutes.',
      tag: 'Real-World Settlement',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#fcff52]" />,
      title: 'Zero-Gas Protocol Sponsorship',
      badge: 'Celo Hosted Facilitator',
      description:
        'Autonomous agents frequently fail when native gas tokens run out. Sivan provides zero-gas protocol rails: external agents invoke tools and execute settlements without having to manage or hold native gas tokens.',
      tag: 'Gas-Free Agent Calls',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
      title: 'Proof-of-Human Sybil Resistance',
      badge: 'Self Protocol ZK Gate',
      description:
        'To prevent malicious bots from draining liquidity pools or spamming agreements, Sivan enforces biometric passport verification via Self Protocol. Unverified bots are capped at $50 USD, while verified human agents unlock up to $5,000 USD per transaction.',
      tag: 'Biometric Risk Tiering',
    },
    {
      icon: <Award className="w-6 h-6 text-[#00f2fe]" />,
      title: 'Verified ERC-8004 On-Chain Identity',
      badge: 'Celo Agent #10089',
      description:
        'Sivan Payment Ai is an officially registered on-chain autonomous agent on Celo Mainnet. Discoverable on 8004scan with certified service manifests for Web API, Model Context Protocol (MCP), and calldata attribution tag celo_bdb587d550be.',
      tag: 'Verifiable Protocol',
    },
  ];

  return (
    <section id="value-props" className="py-20 bg-[#06080f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-wider block mb-2">
            Architectural Differentiation
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Why Autonomous Agents Choose Sivan Ai
          </h2>
          <p className="text-slate-400 font-sans mt-3 text-base">
            Moving beyond simple smart contract wrappers to provide autonomous agents with real banking rails, sybil defense, and zero-friction execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-7 rounded-2xl border border-slate-800/80 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white group-hover:text-[#00f2fe] transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-400 font-sans leading-relaxed mt-2.5">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{card.tag}</span>
                <span className="text-slate-400 group-hover:text-[#00f2fe] flex items-center gap-1 transition-colors">
                  Protocol Standard <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
