# Sivan Agent Portal (agent.sivantech.online)
## Design System, High-Value Agentic Proposition, and Technical Specification

Version: 1.0.0
Domain Target: https://agent.sivantech.online
Repository: https://github.com/Sivan-Technologies/sivan-agent-portal.git
Parent Umbrella: https://github.com/Sivan-Technologies/Sivan.git (as Git Submodule)

================================================================================
1. EXECUTIVE SUMMARY & STRATEGIC POSITIONING
================================================================================

The Sivan Agent Portal is the dedicated developer home, Model Context Protocol (MCP) connection hub, and autonomous financial execution gateway for Sivan Payment Ai.

While the primary landing site (sivantech.online) serves consumer users, freelancers, and peer-to-peer communities, the Agent Portal serves AI builders, autonomous agent frameworks, Web3 developers, and enterprise partners.

Core Mission:
Bridge autonomous AI intelligence with real-world African banking rails, multi-chain liquidity, ERC-8004 identity, and biometric Proof-of-Human sybil resistance.

================================================================================
2. DESIGN SYSTEM ALIGNMENT (MATCHING SIVAN-HOME-PAGEV2)
================================================================================

To ensure total brand cohesion and immediate recognition across the Sivan ecosystem, the Agent Portal strictly inherits the design tokens, typography, and palette of sivan-home-pagev2 while emphasizing a high-tech developer aesthetic.

Typography:
• Display & Headers: "Syne", sans-serif (Bold, futuristic, architectural fintech headers)
• Body & Prose: "Manrope", sans-serif (Clean, readable, modern sans-serif)
• Code, Keys & Schemas: "JetBrains Mono", monospace (Precise code blocks, JSON-RPC, addresses)

Color Palette (Strict OKLCH & Hex Matching):
• Background: #06080f (Deep space midnight black)
• Surface & Cards: #0b0f19 (Elevated dark slate container)
• Card Accent: #101926 (Subtle border highlight)
• Primary Accent: #00f2fe (Electric neon cyan)
• Primary Foreground: #06080f (Deep contrast on cyan buttons)
• Celo Mainnet Yellow: #fcff52 (Attribution tag & Celo network highlights)
• Success Emerald: #00e676 / #10b981 (Verified badge, confirmation pulses)
• Warning Amber: #f5b700 (Unverified tier warnings)
• Muted Borders: color-mix(in srgb, #94a3b8 18%, transparent)
• Muted Text: #94a3b8 (Secondary labels, documentation captions)

Atmosphere & Visual Style:
• Dark theme by default (developer preferred).
• Subtle glowing radial gradient accents (#00f2fe and #fcff52 at 10% opacity).
• Glassmorphism card borders (1px translucent slate border with backdrop blur).
• Interactive copyable code blocks with 1-click clipboard triggers.

================================================================================
3. HIGH-VALUE AGENTIC VALUE PROPOSITIONS
================================================================================

Why do AI agents and agent builders choose Sivan Payment Ai over legacy payment gateways or raw Web3 wallets?

Value Proposition 1 . The Last-Mile Fiat Bridge
Autonomous AI agents can hold USDC, USDT, or CELO on-chain, but the physical contractors, freelancers, and server hosting providers they hire in emerging markets need physical currency in their local bank account to pay real expenses. Sivan is the only autonomous protocol that converts crypto to cNGN via Textile FX and deposits physical Naira directly into Nigerian NUBAN bank accounts in under 1 to 2 minutes via NIBSS / NIP rails.

Value Proposition 2 . Zero-Gas Autonomous Execution
Most blockchain interactions fail because autonomous agents run out of native gas tokens (CELO, SOL, XLM, ETH). Sivan Payment Ai provides zero-gas protocol sponsorship so external AI agents can execute payments, create Service Agreements, and trigger disbursements seamlessly.

Value Proposition 3 . Biometric Sybil Resistance (Self Protocol)
Autonomous agent platforms are vulnerable to rogue bots draining off-ramp liquidity pools or spamming fake agreements. Sivan is the first protocol to enforce Self Protocol Proof of Human:
• Unverified Bots: Capped at a safe $50 USD limit for micro-queries.
• Verified Human Agents: Unlocked up to $5,000 USD per transaction.

Value Proposition 4 . Native Model Context Protocol (MCP) First
Instead of writing complex custom SDKs, external LLMs and autonomous agents (Claude Desktop, Cursor, AutoGPT, LangChain, ElizaOS) connect to Sivan with a single JSON configuration pointing to https://api.sivantech.online/mcp.

Value Proposition 5 . Verified ERC-8004 Identity
Sivan Payment Ai is an officially registered on-chain agent (Celo Mainnet Agent #10089 on 8004scan) with immutable service manifests for Web API, MCP, and Agent-to-Agent discovery.

================================================================================
4. PORTAL STRUCTURE & PAGE SECTIONS
================================================================================

The Agent Portal (agent.sivantech.online) will be structured as a high-converting, single-page progressive developer experience:

Section 1: Hero & Real-Time Identity Header
• Main Headline: "Autonomous Financial Rails & Fiat Off-Ramps for AI Agents."
• Subheadline: "Empower your agents to hold balances, coordinate milestone Service Agreements, and disburse instant local currency into African bank accounts."
• Live Agent Pill Badge:
  - Pulses green: "Celo Mainnet Agent #10089 . ERC-8004 Registered" (links to 8004scan.io).
• Primary Actions:
  - "Connect via MCP" (scrolls to MCP config).
  - "Read API Spec" (scrolls to developer tools).
  - "Launch App" (links to app.sivantech.online).

Section 2: 1-Click MCP Quickstart (The Developer Hook)
• Visual Claude Desktop / Cursor configuration box with 1-click copy:
  Endpoint: https://api.sivantech.online/mcp
  Supported Tools: 6 certified tools (payments, agreements, verification, cashouts).
• Step-by-step 30-second setup instructions.

Section 3: Interactive Hackathon Live Demo Arena (The Judge & Submission Experience)
• Embedded directly into the homepage as a high-visibility, cinematic interactive simulator.
• Purpose: Allows hackathon judges to verify protocol execution in 15 seconds without installing packages, and serves as the primary visual stage for the 3-minute hackathon video recording.

• Tab 1: Celo x402 Protocol & Zero-Gas Settlement
  - Visual: Interactive split-pane with caller agent terminal on the left and Sivan Gateway inspector on the right.
  - Interactive Action: Click "Send Agent Request (x-x402: true)".
  - Execution Flow:
    1. Caller invokes POST /api/v1/agent/invoke.
    2. Sivan server immediately returns HTTP 402 Payment Required with base64 `payment-required` header.
    3. Caller signs EIP-3009 authorization (0.005 USDC on Celo).
    4. Celo hosted facilitator (https://api.x402.celo.org/settle) settles transaction gas-free for the caller.
    5. Returns confirmed transaction hash with ERC-8021 calldata attribution tag `celo_bdb587d550be`.
  - Judge Proof: Link directly to Celoscan with verified attribution suffix.

• Tab 2: Self Agent ID Proof-of-Human Security Gate
  - Visual: Side-by-side agent comparison:
    - Card A: Unverified Anonymous Bot (Zero passport credentials)
    - Card B: Self-Verified Human Agent (Biometric passport ZK proof attached)
  - Interactive Action: Interactive slider to select transaction amount ($10 to $2,500 USD).
  - Execution Flow:
    - At $15 USD: Both agents pass (micro-operation allowed).
    - At $500 USD:
      - Unverified Bot: Instantly BLOCKED with HTTP 403 `SELF_AGENT_ID_REQUIRED`. Displays safe $50 ceiling alert.
      - Self-Verified Agent: GRANTED immediately. Displays proof nullifier, expiration window, and $5,000 ceiling.
  - Onboarding Deep Link: 1-click button to open Self Mobile App universal link for instant human onboarding.

• Tab 3: Autonomous Service Agreement & Milestone Release
  - Visual: Timeline stepper showing autonomous multi-agent contract lifecycle.
  - Interactive Action: Click "Create Agreement & Simulate Milestone Delivery".
  - Execution Flow:
    1. Hirer Agent locks 25 USDC into Service Agreement with zero-gas sponsorship.
    2. Status updates to IN_PROGRESS (Funds Locked in Secure Protocol Vault).
    3. Worker Agent submits cryptographic milestone proof payload.
    4. Sivan Payment Ai verifies delivery criteria and executes autonomous cryptographic payout.
    5. Status transitions to COMPLETED.

• Tab 4: Autonomous Fiat Off-Ramp to African Bank
  - Visual: Corridor pipeline: USDC on Celo -> Textile FX RFQ -> cNGN (1:1 Parity) -> NIBSS / NIP Rail -> Nigerian NUBAN Bank Account.
  - Interactive Action: Enter test amount (e.g. 10 USDC) and click "Simulate Off-Ramp".
  - Execution Flow:
    1. Fetches live indicative exchange rate from Textile FX.
    2. Resolves destination bank account name via NUBAN resolver.
    3. Demonstrates settlement under 1 to 2 minutes into bank account.
    4. Calldata attribution tag `celo_bdb587d550be` verified on Celo block 83391488.

Section 4: 1-Click MCP Quickstart (The Developer Hook)
• Visual Claude Desktop / Cursor configuration box with 1-click copy:
  Endpoint: https://api.sivantech.online/mcp
  Supported Tools: 6 certified tools (payments, agreements, verification, cashouts).
• Step-by-step 30-second setup instructions.

Section 5: Stablecoin Corridors (Textile FX & cNGN)
• Visual explanation of the cross-currency corridor:
  USDT / USDC -> Textile Swap -> cNGN (1:1 Parity) -> NIBSS / NIP Rail -> Nigerian Bank Account (under 2 minutes).
• Verified Calldata Attribution Tag:
  `celo_bdb587d550be` (ERC-8021 compliant).

Section 6: Developer Code Snippets & SDK Reference
• Tabbed code switcher with copy buttons:
  - cURL (REST invocation)
  - TypeScript (Fastify / Express / Next.js)
  - Python (Requests / LangChain)

Section 7: Footer & Protocol Network Proof
• Official Links:
  - 8004scan: https://8004scan.io/agents/celo/10089
  - Celoscan Tx Proof: https://celoscan.io/tx/0xc339a4514e6b1e8949579e8d6f44ceea6ccc8450a79373d42fc2f331c734357d
  - GitHub: https://github.com/Sivan-Technologies/sivan-payment
  - Admin Hub: https://admin.sivantech.online
  - Telegram Bot: https://t.me/SivanAi_bot
  - WhatsApp Bot: https://wa.me/message/GGKZ6SJCZT67K1

================================================================================
5. HACKATHON VIDEO DEMO STORYBOARD & TALKING POINTS (3 MINUTES)
================================================================================

Target Audience: Loops House Hackathon Judges ("Agents Open for Business")
Presenter: Samson Micheal (Founder & CEO, Sivan Technology)

00:00 . 00:30 | The Problem & The Solution
• Hook: "Autonomous AI agents can write code, analyze data, and negotiate deals. But when it comes to paying human freelancers or settling real-world expenses in emerging markets, they hit a wall: no native gas, no fiat bank off-ramps, and high vulnerability to rogue bots."
• Introduce Sivan: "Meet Sivan Payment Ai, Celo Mainnet Agent #10089. Sivan gives autonomous agents zero-gas settlement, milestone Service Agreements, biometric Proof-of-Human security, and direct African bank cashouts."

00:30 . 01:15 | Celo x402 Protocol & Gas-Free Settlement
• Screen: Live Demo Arena . Tab 1
• Demo Action: Click "Send Agent Request".
• Talking Point: "Watch as an external agent calls Sivan. Sivan issues an HTTP 402 challenge. The buyer agent signs the authorization, and Celo's hosted facilitator settles it with zero gas for the agent. Funds land in our vault, stamped with our verified attribution tag celo_bdb587d550be."

01:15 . 01:55 | Self Agent ID Proof-of-Human Security
• Screen: Live Demo Arena . Tab 2
• Demo Action: Move transaction slider to $500.
• Talking Point: "To prevent autonomous bots from draining liquidity pools, Sivan integrates Self Protocol. Unverified bots are capped at $50 USD. Watch this unverified bot try to move $500: it is instantly blocked with code SELF_AGENT_ID_REQUIRED. But when a human developer attaches their biometric passport proof via the Self mobile app, the agent unlocks up to $5,000 USD."

01:55 . 02:30 | Autonomous Service Agreement & Milestone Delivery
• Screen: Live Demo Arena . Tab 3
• Demo Action: Click "Create Agreement & Deliver Milestone".
• Talking Point: "Agents can hire other agents or humans using Sivan Service Agreements. Funds remain safely locked in the protocol vault until cryptographic milestone deliverables are validated. Once verified, Sivan releases the payment autonomously."

02:30 . 03:00 | Real-World African Bank Off-Ramp & Conclusion
• Screen: Live Demo Arena . Tab 4
• Demo Action: Show live Textile FX conversion to cNGN and NUBAN bank resolution.
• Talking Point: "Finally, the last-mile bridge: converting on-chain USDC to cNGN via Textile FX and depositing real Naira into a Nigerian bank account in under 1 to 2 minutes via NIBSS rails. Sivan is open for business on Celo, registered on 8004scan, and ready to power the agent economy."

================================================================================
6. TECHNICAL STACK & REPOSITORY SETUP
================================================================================

• Repository: sivan-agent-portal (Git Submodule inside Sivan.git)
• Framework: Next.js 16 (App Router) or Vite + React (matching sivan-home-pagev2)
• Styling: Tailwind CSS v4 using @theme inline and oklch color variables
• Icons: Lucide React
• Code Highlighting: Prism / Shiki with JetBrains Mono
• Production Hosting: Cloudflare Pages or Vercel connected to agent.sivantech.online
• Backend API Upstream: Cloudflare Gateway -> AWS EC2 (https://api.sivantech.online)
