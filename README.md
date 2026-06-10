# 🌿 CarbonChain — Carbon Credit Tokenization Protocol

> ⚠️ **This project is in very early stages of development.** Everything you see here is a work-in-progress prototype being built for a blockchain hackathon. APIs, contracts, and interfaces will change significantly. Do not use in production.

---

## What Is This?

CarbonChain is a blockchain-based protocol that turns real-world carbon removal into verifiable, tradeable, and permanently retirable digital tokens. IoT sensors at reforestation and soil carbon sites measure CO₂ sequestration, oracle systems verify the data, and each verified tonne of CO₂ removed is minted as an ERC-1155 token on-chain — with full provenance, transparent pricing, and permanent retirement tracking.

**The core flow:** Sensor data → Verification → Token minted → Bought by a company → Retired (burned forever) → Verifiable certificate

## Why?

The voluntary carbon credit market is projected to reach **$420B by 2030**, but it's riddled with problems:

- **89%** of credits have never been independently verified
- The same credit gets sold to multiple buyers (double-counting)
- Brokers extract **40–60%** margins
- Retirement "proof" is an unverifiable PDF from a private registry

We replace all of that with sensors, smart contracts, and a burn function.

## Tech Stack

| Layer | Technologies |
|---|---|
| Smart Contracts | Solidity ^0.8.20, ERC-1155, OpenZeppelin 5.x, Foundry |
| Oracle | Chainlink (mocked for hackathon) |
| Frontend | Next.js 14, wagmi v2, viem, Recharts, Framer Motion |
| Chain | Base Sepolia (testnet) |
| Storage | IPFS via Pinata |

## Project Status

| Component | Status |
|---|---|
| Smart Contracts | 🔲 Not started |
| Contract Tests | 🔲 Not started |
| Testnet Deployment | 🔲 Not started |
| Frontend UI | 🔲 Not started |
| Web3 Integration | 🔲 Not started |
| Demo Data Seeding | 🔲 Not started |

## Documentation

- [**Project Explanation (Non-Technical)**](./Project-Explanation-For-Dummies.md) — What this project does, explained for anyone
- [**Detailed Analysis Report**](./Analysis-Report.md) — Full technical breakdown of the protocol design
- [**Build Plan**](./Build-Plan.md) — Phased implementation plan with real vs. mocked component decisions

## License

TBD
