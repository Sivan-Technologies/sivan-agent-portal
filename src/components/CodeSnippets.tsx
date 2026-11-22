import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const CodeSnippets: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<'curl' | 'ts' | 'python'>('curl');
  const [copied, setCopied] = useState(false);

  const curlCode = `# 1. Probing x402 Payment Challenge (Celo Hosted Facilitator)
curl -i -X POST https://api.sivantech.online/api/v1/agent/invoke \\
  -H "Content-Type: application/json" \\
  -H "x-x402: true" \\
  -d '{"prompt": "Initiate Service Agreement for 25 USDC on Celo"}'

# 2. Submitting Signed EIP-3009 Authorization for Gas-Free Settlement
curl -X POST https://api.sivantech.online/api/v1/agent/invoke \\
  -H "Content-Type: application/json" \\
  -H "x-x402: true" \\
  -H "payment-signature: eyJ4NDAyVmVyc2lvbiI6MiwicGF5bWVudFBheWxvYWQiOnt9fQ==" \\
  -d '{"prompt": "Initiate Service Agreement for 25 USDC on Celo"}'`;

  const tsCode = `import fetch from 'node-fetch';

async function invokeSivanAgent() {
  // Call Sivan Gateway with x-x402 challenge header
  const response = await fetch('https://api.sivantech.online/api/v1/agent/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-x402': 'true',
    },
    body: JSON.stringify({
      tool: 'sivan_create_payment_link',
      params: {
        destinationAddress: '0x46eFfe0409BFE99b0435e7bb7219DC6586612345',
        amount: 15,
        network: 'celo',
        currency: 'usdc',
      },
    }),
  });

  if (response.status === 402) {
    const paymentRequiredHeader = response.headers.get('payment-required');
    console.log('x402 Challenge Received:', Buffer.from(paymentRequiredHeader!, 'base64').toString());
  } else {
    const data = await response.json();
    console.log('Agent Execution Success:', data);
  }
}

invokeSivanAgent();`;

  const pythonCode = `import requests
import json
import base64

def call_sivan_payment_ai():
    url = "https://api.sivantech.online/api/v1/agent/invoke"
    headers = {
        "Content-Type": "application/json",
        "x-x402": "true"
    }
    payload = {
        "tool": "sivan_resolve_bank_account",
        "params": {
            "accountNumber": "0441234567",
            "bankCode": "044"
        }
    }
    
    res = requests.post(url, headers=headers, json=payload)
    if res.status_code == 402:
        req_b64 = res.headers.get("payment-required")
        challenge = json.loads(base64.b64decode(req_b64).decode())
        print("x402 Challenge:", challenge)
    else:
        print("Response:", res.json())

call_sivan_payment_ai()`;

  const getCode = () => {
    if (selectedLang === 'curl') return curlCode;
    if (selectedLang === 'ts') return tsCode;
    return pythonCode;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(getCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-snippets" className="py-20 bg-[#06080f] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#00f2fe] uppercase tracking-wider block mb-2">
            Developer Integration
          </span>
          <h2 className="text-3xl font-display font-bold text-white tracking-tight">
            Direct REST & Wire Protocol Reference
          </h2>
          <p className="text-slate-400 font-sans mt-2 text-sm">
            Simple HTTP endpoints compliant with ERC-8004 and the Celo x402 V2 specification.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-slate-800/90 shadow-2xl overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/80 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSelectedLang('curl')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  selectedLang === 'curl' ? 'bg-[#00f2fe] text-[#06080f] font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                cURL
              </button>

              <button
                onClick={() => setSelectedLang('ts')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  selectedLang === 'ts' ? 'bg-[#00f2fe] text-[#06080f] font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                TypeScript
              </button>

              <button
                onClick={() => setSelectedLang('python')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  selectedLang === 'python' ? 'bg-[#00f2fe] text-[#06080f] font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Python
              </button>
            </div>

            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Code */}
          <div className="p-5 bg-[#030509] overflow-x-auto">
            <pre className="text-xs font-mono text-slate-300 leading-relaxed">
              <code>{getCode()}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
