import React, { useState } from 'react';
import { Check, CheckCircle2, Code2, Copy, Terminal } from 'lucide-react';

const CERTIFIED_TOOLS = [
  {
    name: 'sivan_create_payment_link',
    category: 'ZERO-GAS COLLECTION',
    desc: 'Generate a zero-gas multi-chain payment link and QR invoice for USDC, cUSD, or USDT.',
    payload: `{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "sivan_create_payment_link",
    "arguments": {
      "destinationAddress": "0x46eFfe0409BFE99b0435e7bb7219DC6586612345",
      "amount": 25,
      "network": "celo",
      "currency": "usdc"
    }
  }
}`,
  },
  {
    name: 'sivan_initiate_service_agreement',
    category: 'MILESTONE PROTECTION',
    desc: 'Lock project funds in a neutral milestone Service Agreement between two agents or human contractors.',
    payload: `{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "sivan_initiate_service_agreement",
    "arguments": {
      "title": "Autonomous Smart Contract Audit & Report",
      "buyerId": "agent_hirer_01",
      "sellerId": "agent_10089",
      "amount": 50,
      "currency": "USDC",
      "network": "celo"
    }
  }
}`,
  },
  {
    name: 'sivan_verify_milestone_and_release',
    category: 'CRYPTOGRAPHIC RELEASE',
    desc: 'Validate deliverable hash criteria and trigger autonomous vault settlement to the worker agent.',
    payload: `{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "sivan_verify_milestone_and_release",
    "arguments": {
      "agreementId": "SVN-AGR-8842",
      "deliverableHash": "0x88f2b391a7c4e0192837465544332211ca41",
      "releaseApproved": true
    }
  }
}`,
  },
  {
    name: 'sivan_resolve_bank_account',
    category: 'NUBAN VERIFICATION',
    desc: 'Resolve Nigerian bank account holder identity in real time prior to off-ramp disbursement.',
    payload: `{
  "jsonrpc": "2.0",
  "id": 4,
  "method": "tools/call",
  "params": {
    "name": "sivan_resolve_bank_account",
    "arguments": {
      "accountNumber": "0441234567",
      "bankCode": "044"
    }
  }
}`,
  },
  {
    name: 'sivan_fiat_bank_cashout',
    category: 'LAST-MILE FIAT BRIDGE',
    desc: 'Convert on-chain USDC/cUSD via Textile FX RFQ to cNGN and disburse to Nigerian bank account via NIBSS.',
    payload: `{
  "jsonrpc": "2.0",
  "id": 5,
  "method": "tools/call",
  "params": {
    "name": "sivan_fiat_bank_cashout",
    "arguments": {
      "amountUsdc": 15,
      "network": "celo",
      "bankCode": "044",
      "accountNumber": "0441234567",
      "attributionTag": "celo_bdb587d550be"
    }
  }
}`,
  },
  {
    name: 'sivan_get_balance',
    category: 'MULTI-CHAIN TELEMETRY',
    desc: 'Query unified internal ledger and on-chain vault balances across Celo, Stellar, Base, and Solana.',
    payload: `{
  "jsonrpc": "2.0",
  "id": 6,
  "method": "tools/call",
  "params": {
    "name": "sivan_get_balance",
    "arguments": {
      "agentAddress": "0x46eFfe0409BFE99b0435e7bb7219DC6586612345",
      "network": "celo"
    }
  }
}`,
  },
];

const CLIENT_CONFIGS = [
  {
    id: 'claude',
    label: 'Claude Desktop',
    file: '~/Library/Application Support/Claude/claude_desktop_config.json',
    code: `{
  "mcpServers": {
    "sivan-payment-ai": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.sivantech.online/mcp"
      ]
    }
  }
}`,
  },
  {
    id: 'cursor',
    label: 'Cursor IDE',
    file: '.cursor/mcp.json',
    code: `{
  "mcpServers": {
    "sivan-payment-ai": {
      "url": "https://api.sivantech.online/mcp",
      "transport": "sse"
    }
  }
}`,
  },
  {
    id: 'langchain',
    label: 'LangChain / Python',
    file: 'agent_mcp_client.py',
    code: `import requests

# Connect to Sivan Payment Ai MCP JSON-RPC 2.0 Server
MCP_ENDPOINT = "https://api.sivantech.online/mcp"

response = requests.post(MCP_ENDPOINT, json={
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/list"
})
print("Available Sivan Tools:", response.json())`,
  },
];

export const McpQuickstart: React.FC = () => {
  const [selectedToolIdx, setSelectedToolIdx] = useState(0);
  const [selectedClientIdx, setSelectedClientIdx] = useState(0);
  const [copiedConfig, setCopiedConfig] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const activeTool = CERTIFIED_TOOLS[selectedToolIdx] ?? CERTIFIED_TOOLS[0];
  const activeClient = CLIENT_CONFIGS[selectedClientIdx] ?? CLIENT_CONFIGS[0];

  return (
    <section id="mcp-hub" className="section-shell border-b border-border bg-card/35 py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="section-heading-grid">
          <div>
            <span className="section-kicker">02 / Model Context Protocol (MCP) Hub</span>
            <h2 className="section-title">
              Connect any LLM.<br />
              <span className="text-primary">Zero custom SDKs.</span>
            </h2>
          </div>
          <p className="section-intro">
            Claude Desktop, Cursor, ElizaOS, and LangChain agents connect directly to Sivan Payment Ai over JSON-RPC 2.0 and Server-Sent Events (SSE) at a single production endpoint.
          </p>
        </div>

        {/* Main 2-Column Interactive Studio */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Left 5 Columns: 1-Click MCP Client Configuration */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-border bg-background/90">
            <div>
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <span className="font-mono text-[10px] uppercase text-primary flex items-center gap-2">
                  <Terminal className="size-3.5" />
                  1-CLICK CLIENT CONFIGURATION
                </span>
                <span className="font-mono text-[9px] text-success">● SSE & JSON-RPC READY</span>
              </div>

              {/* Client Selector Tabs */}
              <div className="flex border-b border-border bg-card/60 p-2 gap-1.5">
                {CLIENT_CONFIGS.map((client, idx) => (
                  <button
                    key={client.id}
                    onClick={() => {
                      setSelectedClientIdx(idx);
                      setCopiedConfig(false);
                    }}
                    className={`px-3 py-1.5 font-mono text-[10px] transition-colors ${
                      selectedClientIdx === idx
                        ? 'bg-secondary text-primary font-semibold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {client.label}
                  </button>
                ))}
              </div>

              {/* Endpoint Box */}
              <div className="border-b border-border bg-card/40 px-5 py-3 font-mono text-xs flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">PRODUCTION MCP URL:</span>
                <span className="text-primary font-semibold select-all">https://api.sivantech.online/mcp</span>
              </div>

              {/* Config Code */}
              <pre className="studio-code p-5 text-xs overflow-x-auto min-h-[210px]">
                <code>{activeClient.code}</code>
              </pre>
            </div>

            <div className="flex items-center justify-between border-t border-border bg-card/60 px-5 py-3 font-mono text-[10px]">
              <span className="text-muted-foreground truncate max-w-[240px]">{activeClient.file}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(activeClient.code);
                  setCopiedConfig(true);
                  setTimeout(() => setCopiedConfig(false), 1800);
                }}
                className="inline-flex items-center gap-1.5 border border-border bg-background px-3 py-1 text-foreground hover:border-primary"
              >
                {copiedConfig ? <Check className="size-3 text-success" /> : <Copy className="size-3" />}
                <span>{copiedConfig ? 'COPIED' : 'COPY CONFIG'}</span>
              </button>
            </div>
          </div>

          {/* Right 7 Columns: 6 Certified Autonomous Tools Explorer */}
          <div className="lg:col-span-7 border border-border bg-background/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <span className="font-mono text-[10px] uppercase text-primary">
                  6 CERTIFIED AUTONOMOUS AGENT TOOLS (CLICK TO INSPECT SCHEMA)
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(activeTool.payload);
                    setCopiedPayload(true);
                    setTimeout(() => setCopiedPayload(false), 1800);
                  }}
                  className="inline-flex items-center gap-1.5 border border-border bg-card px-2.5 py-1 font-mono text-[10px] text-foreground hover:border-primary"
                >
                  {copiedPayload ? <Check className="size-3 text-success" /> : <Copy className="size-3" />}
                  <span>{copiedPayload ? 'COPIED JSON-RPC' : 'COPY PAYLOAD'}</span>
                </button>
              </div>

              {/* 6 Tools Grid */}
              <div className="grid grid-cols-1 gap-px border-b border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {CERTIFIED_TOOLS.map((tool, idx) => {
                  const active = selectedToolIdx === idx;
                  return (
                    <button
                      key={tool.name}
                      onClick={() => setSelectedToolIdx(idx)}
                      className={`p-3.5 text-left transition-colors ${
                        active ? 'bg-secondary text-foreground' : 'bg-card/80 text-muted-foreground hover:bg-card'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[8px] uppercase text-primary">{tool.category}</span>
                        <CheckCircle2 className={`size-3 ${active ? 'text-success' : 'text-muted-foreground/40'}`} />
                      </div>
                      <p className="mt-1.5 font-mono text-[11px] font-semibold text-foreground truncate">
                        {tool.name.replace('sivan_', '')}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Active Tool Description & JSON-RPC Payload */}
              <div className="border-b border-border bg-card/40 px-5 py-3">
                <p className="text-xs text-muted-foreground">
                  <strong className="font-mono text-foreground">{activeTool.name}:</strong> {activeTool.desc}
                </p>
              </div>

              <pre className="studio-code p-5 text-xs overflow-x-auto min-h-[210px]">
                <code>{activeTool.payload}</code>
              </pre>
            </div>

            <div className="flex items-center justify-between border-t border-border bg-card/60 px-5 py-3 font-mono text-[10px] text-muted-foreground">
              <span className="flex items-center gap-2">
                <Code2 className="size-3.5 text-primary" />
                JSON-RPC 2.0 · POST /mcp OR POST /api/v1/agent/invoke
              </span>
              <span className="text-success">ERC-8004 COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
