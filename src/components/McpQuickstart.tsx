import React, { useState } from 'react';
import { Terminal, Copy, Check, CheckCircle2 } from 'lucide-react';

export const McpQuickstart: React.FC = () => {
  const [activeClient, setActiveClient] = useState<'claude' | 'cursor' | 'python'>('claude');
  const [copied, setCopied] = useState(false);

  const claudeConfig = JSON.stringify(
    {
      mcpServers: {
        'sivan-payment-ai': {
          command: 'npx',
          args: ['-y', '@sivan/mcp-remote', 'https://api.sivantech.online/mcp'],
        },
      },
    },
    null,
    2
  );

  const cursorConfig = JSON.stringify(
    {
      mcp: {
        servers: [
          {
            name: 'sivan-payment-ai',
            transport: 'sse',
            url: 'https://api.sivantech.online/mcp',
          },
        ],
      },
    },
    null,
    2
  );

  const pythonCode = `import requests

# 1. Discover Sivan Payment AI capabilities & tools
response = requests.get("https://api.sivantech.online/api/v1/agent/invoke")
agent_info = response.json()
print("Connected to Agent:", agent_info["agent"]["name"], "ID:", agent_info["agent"]["agentId"])

# 2. Invoke Sivan Tool (e.g. create payment link)
invoke_payload = {
    "tool": "sivan_create_payment_link",
    "params": {
        "amount": 10,
        "network": "celo",
        "currency": "usdc"
    }
}
res = requests.post("https://api.sivantech.online/api/v1/agent/invoke", json=invoke_payload)
print(res.json())`;

  const getCurrentConfig = () => {
    if (activeClient === 'claude') return claudeConfig;
    if (activeClient === 'cursor') return cursorConfig;
    return pythonCode;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getCurrentConfig());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="mcp-hub" className="py-20 bg-[#06080f] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Explainer & Tool Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#00f2fe]/40 text-xs font-mono text-[#00f2fe]">
              <Terminal className="w-3.5 h-3.5" />
              <span>Model Context Protocol (MCP) First</span>
            </div>

            <h2 className="text-3xl font-display font-bold text-white tracking-tight">
              Connect Any Agent Framework in 30 Seconds
            </h2>

            <p className="text-slate-400 font-sans text-sm leading-relaxed">
              No custom payment SDKs required. Claude Desktop, Cursor, LangChain, AutoGPT, and ElizaOS connect natively via Sivan's Model Context Protocol (MCP) server running on Celo.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="text-white font-semibold flex items-center justify-between">
                <span>Production MCP Endpoint:</span>
                <span className="text-[10px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#030509] border border-slate-800 text-[#00f2fe] break-all select-all">
                https://api.sivantech.online/mcp
              </div>
            </div>

            {/* List of 6 Certified Tools */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                6 Certified Autonomous Tools Available
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                  <span>create_payment_link</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                  <span>initiate_service_agreement</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                  <span>verify_milestone_and_release</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                  <span>resolve_bank_account</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                  <span>fiat_bank_cashout</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                  <span>get_balance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Config Box */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl border border-slate-800/90 shadow-2xl overflow-hidden">
              {/* Tab Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/80 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveClient('claude')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      activeClient === 'claude'
                        ? 'bg-[#00f2fe] text-[#06080f] font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Claude Desktop
                  </button>

                  <button
                    onClick={() => setActiveClient('cursor')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      activeClient === 'cursor'
                        ? 'bg-[#00f2fe] text-[#06080f] font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Cursor IDE
                  </button>

                  <button
                    onClick={() => setActiveClient('python')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      activeClient === 'python'
                        ? 'bg-[#00f2fe] text-[#06080f] font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Python / LangChain
                  </button>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Config'}</span>
                </button>
              </div>

              {/* Code Display */}
              <div className="p-5 bg-[#030509] overflow-x-auto">
                <pre className="text-xs font-mono text-slate-300 leading-relaxed">
                  <code>{getCurrentConfig()}</code>
                </pre>
              </div>

              {/* Quick Setup Note */}
              <div className="p-4 bg-slate-950 border-t border-slate-900 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Configuration file location:</span>
                <span className="text-slate-300 text-[11px]">
                  {activeClient === 'claude'
                    ? '~/Library/Application Support/Claude/claude_desktop_config.json'
                    : activeClient === 'cursor'
                    ? '.cursor/mcp.json'
                    : 'agent.py'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
