# Carbon Credit Tokenization Protocol — Hackathon Build Plan

## Philosophy: Real Where It Matters, Mocked Where It Doesn't

The demo needs to tell one story convincingly: **IoT data → verified on-chain credit → purchase → permanent retirement → certificate**. Anything that makes that story *feel* real must be real. Everything else is smoke and mirrors.

---

## Real vs. Mocked — Decision Matrix

| Component | Real or Mock? | Rationale |
|---|---|---|
| **ProjectRegistry.sol** | ✅ Real | Core contract, simple, no reason to fake it |
| **CarbonToken.sol (ERC-1155)** | ✅ Real | This IS the product — mint, transfer, burn must work on-chain |
| **RetirementLedger.sol** | ✅ Real | Retirement records must be on-chain for the "verifiable" story |
| **OracleConsumer / Chainlink** | 🟡 MockOracle | A `MockOracle.sol` with a manual `triggerMint()`. Real Chainlink is hours of config for zero demo payoff |
| **Uniswap v3 Pool** | 🔴 Fully mocked | Hardcoded price display ($18.50/tonne). No pool creation. The PDF itself says to skip this |
| **IoT Sensors** | 🔴 Simulated data | Pre-built realistic JSON datasets. No hardware |
| **IPFS / Pinata** | 🟡 Pre-pinned | Pin 2–3 sample datasets before building. Hardcode CIDs. No dynamic uploads in the app |
| **The Graph Subgraph** | 🔴 Skip entirely | Read contract events directly via wagmi/viem. Subgraph adds complexity with no demo value |
| **Base Sepolia Deployment** | ✅ Real | Demo MUST run on a public testnet. Non-negotiable |
| **Frontend (Next.js)** | ✅ Real | The UI is 50% of the judges' impression |

---

## Project Structure

```
Carbon-Web3/
├── contracts/                    # Foundry project
│   ├── src/
│   │   ├── ProjectRegistry.sol
│   │   ├── CarbonToken.sol
│   │   ├── RetirementLedger.sol
│   │   └── MockOracle.sol
│   ├── test/
│   │   ├── CarbonToken.t.sol
│   │   └── mocks/
│   ├── script/
│   │   └── Deploy.s.sol
│   ├── foundry.toml
│   └── .env.example
│
├── frontend/                     # Next.js 14 (App Router)
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Landing / Dashboard
│   │   ├── projects/
│   │   │   ├── page.tsx          # Project marketplace
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Project detail + IoT chart + buy
│   │   ├── retire/
│   │   │   └── page.tsx          # Retirement flow
│   │   ├── certificate/
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Retirement certificate
│   │   └── dashboard/
│   │       └── page.tsx          # Portfolio / holdings
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, Layout shell
│   │   ├── ui/                   # Buttons, Cards, Badges, Modals
│   │   ├── charts/               # IoT sequestration chart (Recharts)
│   │   ├── web3/                 # ConnectButton, TxStatus, etc.
│   │   └── certificate/          # Certificate renderer
│   ├── hooks/
│   │   ├── useCarbonToken.ts
│   │   ├── useProjectRegistry.ts
│   │   └── useRetirementLedger.ts
│   ├── lib/
│   │   ├── contracts.ts          # ABIs + addresses
│   │   ├── chains.ts             # Base Sepolia config
│   │   └── mock-data.ts          # Realistic IoT mock datasets
│   ├── providers/
│   │   └── Web3Provider.tsx      # wagmi + QueryClient setup
│   └── public/
│       └── ...                   # Assets, fonts
│
├── scripts/
│   ├── seed-demo.ts              # Mint demo credits, register projects
│   └── simulate-readings.ts     # Generate realistic IoT JSON
│
└── README.md
```

---

## Build Order — 7 Phases

### Phase 1: Scaffold & Tooling
> Get both projects running with zero functionality — just confirm the toolchain works.

- Initialize Foundry project in `contracts/` (`forge init`)
- Initialize Next.js 14 in `frontend/` (App Router, TypeScript)
- Install all contract dependencies (OpenZeppelin 5.x)
- Install frontend dependencies (wagmi v2, viem v2, @tanstack/react-query, recharts, framer-motion)
- Set up `foundry.toml` with remappings
- Create `.env.example` files for both
- Verify `forge build` compiles and `npm run dev` serves

---

### Phase 2: Smart Contracts — Core Protocol
> This is the product. Every line here runs on-chain for real.

#### Contracts to write (in dependency order):

**1. `ProjectRegistry.sol`**
- `registerProject(name, location, sensorIds[], ipfsDocHash)` → projectId
- `approveProject(projectId)` — onlyOwner
- `getProject(projectId)` → Project struct
- Events: `ProjectRegistered`, `ProjectApproved`

**2. `RetirementLedger.sol`**
- `recordRetirement(retiree, tokenId, amount, reason)` — onlyToken modifier
- `getRetirementsByAddress(address)` → RetirementRecord[]
- `getRetirementsByProject(projectId)` → RetirementRecord[]
- Auto-incrementing retirement ID
- Events: `RetirementRecorded`

**3. `CarbonToken.sol` (ERC-1155)**
- `mintCredit(projectId, vintage, tonnesCO2, iotDataHash, amount)` — onlyOracle
- `retire(tokenId, amount, reason)` — burns + calls RetirementLedger
- `uri(tokenId)` → IPFS metadata URI
- `setOracle(address)` — onlyOwner (for wiring MockOracle)
- Auto-incrementing tokenId (avoid the collision gotcha)
- Events: `CreditMinted`, `CreditRetired`

**4. `MockOracle.sol`**
- `triggerMint(projectId, vintage, tonnesCO2, iotDataHash, amount)` — calls CarbonToken.mintCredit()
- Owner-only, simulates what a real Chainlink callback would do
- Simple, minimal, just a pass-through with access control

#### Tests:
- `CarbonToken.t.sol` — mint, retire, access control, supply tracking, ledger integration
- Aim for the key happy-path and revert scenarios (8 tests from the PDF brief)

---

### Phase 3: Deploy to Base Sepolia
> Get contracts on-chain early. Don't wait until the end.

- Write `Deploy.s.sol` — deploys all 4 contracts in correct order, wires references
- Deploy to Base Sepolia via `forge script`
- Verify all contracts on Basescan
- Export deployed addresses to `frontend/lib/contracts.ts`
- Run seed script: register 3 demo projects, approve them, mint demo credits via MockOracle

---

### Phase 4: Frontend Foundation
> Shell, routing, Web3 connection, design system — before any contract interaction.

- Set up the design system: dark theme (`#0A0F1E` background), green accent (`#10B981`), Inter font
- Build layout shell: Navbar with wallet connect, page transitions, footer
- Set up wagmi v2 provider with Base Sepolia chain config
- Create all 6 route stubs (landing, projects, project detail, retire, certificate, dashboard)
- Build shared UI components: cards, buttons, badges, stat displays, loading skeletons
- Create mock data file with realistic IoT readings (30 days of CO₂ sequestration data)

---

### Phase 5: Frontend — Contract Integration
> Wire every page to real on-chain data. This is where the demo comes alive.

**Page build order (most impressive first):**

1. **`/projects/[id]`** — Project Detail ⭐ (the "wow moment")
   - IoT Sequestration Chart (Recharts AreaChart, gradient fill, animated)
   - Credit stats row (Total Minted, Retired, Available, Price)
   - Buy Credits section (amount input, USDC cost display, mint/transfer button)
   - Provenance timeline (Sensor → Oracle → Minted → Retired)

2. **`/retire`** — Retirement Flow
   - Show user's held token balances (from contract)
   - Retire form: select tokens, enter amount, enter reason
   - Execute `retire()` → show success + link to certificate

3. **`/certificate/[id]`** — Retirement Certificate 🏆
   - Premium document design (the PDF brief emphasizes this heavily)
   - On-chain data: retiree address, amount, reason, timestamp, tx hash
   - "PERMANENTLY RETIRED" stamp effect
   - "Verify on-chain" button → Basescan link
   - Print/download as PDF via browser print API
   - Animated checkmark on load (framer-motion)

4. **`/`** — Landing / Dashboard
   - Protocol stats banner (total minted, retired, active credits)
   - Recent retirements feed
   - Featured projects grid
   - CTA to explore projects

5. **`/projects`** — Project Marketplace
   - Project cards with key metrics
   - Filter by type (reforestation, soil carbon, industrial)
   - Each card links to detail page

6. **`/dashboard`** — User Portfolio
   - Connected wallet's holdings
   - Retirement history
   - Offset progress visualization

---

### Phase 6: Polish & Demo Prep
> Make it feel premium. This is what separates winners from participants.

- Loading states on every transaction (pending → confirming → confirmed)
- Error handling with user-friendly messages
- Mobile responsiveness pass
- Micro-animations: hover effects, page transitions, number counters
- Empty states (no wallet connected, no holdings, no projects)
- SEO: page titles, meta descriptions
- Seed the deployed contracts with compelling demo data:
  - 3 projects (Tanzania Reforestation, Brazilian Soil Carbon, Iceland Direct Air Capture)
  - Pre-minted credits on each
  - A few pre-existing retirements for the history feed

---

### Phase 7: Demo Rehearsal
> Follow the 3-minute script from the PDF. Practice until it's muscle memory.

- Ensure demo wallets are funded (Base Sepolia ETH)
- Ensure demo wallets hold credits ready to retire
- Walk through the full flow: landing → project → buy → retire → certificate
- Test on a fresh browser (incognito) to catch any cached state issues

---

## Open Questions

> [!IMPORTANT]
> **Chain choice**: The PDF specifies Base Sepolia. Are you happy with that, or do you prefer a different testnet (e.g., Sepolia mainnet, Polygon Amoy)?

> [!IMPORTANT]
> **"Buy" flow mechanics**: Since we're skipping Uniswap, the "buy" button needs to do *something*. Two options:
> - **Option A**: The MockOracle mints credits directly to the buyer's wallet (simulates the full flow as if they purchased)
> - **Option B**: Credits are pre-minted to a "treasury" wallet, and "buying" calls a simple `safeTransferFrom` to the buyer
>
> Option A is simpler. Option B is more realistic. Which do you prefer?

> [!IMPORTANT]
> **Design direction**: The PDF suggests dark theme + green accent. Do you have a specific aesthetic preference beyond that? Any reference sites or designs you want to emulate?

> [!IMPORTANT]
> **Wallet preference**: RainbowKit, ConnectKit, or just a custom wagmi connect button? RainbowKit gives the most polished UX out of the box.

> [!NOTE]
> **Scope confirmation**: This plan produces 3 real smart contracts + 1 mock, deployed to a public testnet, with a 6-page polished Next.js frontend that can mint, hold, retire, and generate certificates — all on real blockchain state. The IoT data, oracle, Uniswap pricing, and IPFS are all mocked but visually convincing. Does this scope feel right?
