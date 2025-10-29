# Uniswap User Guide: Onboarding, Transactions, and Common Tasks

Welcome to this comprehensive user guide for [Uniswap](https://uniswap.org/), a leading **decentralized exchange (DEX)** built on [Ethereum](https://ethereum.org/) and other blockchains. Uniswap enables you to swap tokens, provide liquidity, and participate in **decentralized finance (DeFi)** without relying on traditional intermediaries like centralized exchanges.

This guide follows the [Web3 Documentation Framework](https://ethereum.org/en/developers/docs/) to help you navigate from your first swap to advanced developer integrations. Whether you're a **beginner** making your first transaction or a **developer** building dApp integrations, you'll find step-by-step instructions, security best practices, and practical code examples.

> ⚠️ **Security First**: Always use the official [Uniswap app](https://app.uniswap.org) and verify URLs to avoid phishing scams. Never share your seed phrase with anyone.

## 1. Getting Started

This section covers the essential requirements and first steps to get you up and running with [Uniswap](https://app.uniswap.org) quickly and safely.

### Prerequisites

Before you begin using [Uniswap](https://uniswap.org/), make sure you have the following ready:

| Requirement | Details | Why You Need It |
|-------------|---------|----------------|
| **Web3 Wallet** | [MetaMask](https://metamask.io), [WalletConnect](https://walletconnect.com/), [Coinbase Wallet](https://www.coinbase.com/wallet), or similar | Securely interact with the [Ethereum](https://ethereum.org/) network and sign transactions |
| **Network Knowledge** | Understanding of blockchain concepts like **gas fees** (transaction costs) and **network confirmations** | Navigate transactions confidently and estimate costs |
| **Funds** | ETH for gas fees + tokens you want to swap | Pay transaction fees and execute swaps |
| **Modern Browser** | Chrome, Firefox, or Brave with wallet extension | Access Web3 applications securely |
| **Security Awareness** | Knowledge of scam prevention and safe practices | Protect your funds from phishing and fraud |

> 🔒 **Critical Security Reminder**: Never share your **seed phrase** or **private keys** with anyone. Always verify you're on the official [app.uniswap.org](https://app.uniswap.org) domain. Double-check contract addresses before approving transactions.

### QuickStart: Make Your First Swap in 4 Steps

Follow these steps to execute your first token swap on [Uniswap](https://app.uniswap.org):

**Step 1: Connect Your Wallet**

Navigate to [app.uniswap.org](https://app.uniswap.org) and click the **"Connect Wallet"** button in the top-right corner. Select your wallet provider (e.g., [MetaMask](https://metamask.io)) from the list, then approve the connection request in your wallet pop-up.

**Step 2: Select Your Network**

Choose your preferred network from the dropdown menu. [Ethereum Mainnet](https://ethereum.org/) offers the most liquidity, while [Polygon](https://polygon.technology/) or [Arbitrum](https://arbitrum.io/) provide significantly lower gas fees. **Important**: Ensure your wallet is connected to the same network you've selected in Uniswap.

**Step 3: Configure Your Swap**

Select the tokens you want to swap (e.g., ETH to [USDC](https://www.circle.com/en/usdc)) using the token dropdown menus. Enter the amount you wish to swap, then review the displayed exchange rate, **slippage tolerance** (price impact), and estimated **gas fee**. Click **"Swap"** when ready.

**Step 4: Confirm and Complete**

Review the transaction details in your wallet and click **"Confirm"**. Wait for network confirmation—this typically takes 15 seconds to 2 minutes depending on network congestion. Once confirmed, check your wallet balance to verify you've received the swapped tokens.

### Installation and Setup

Now that you understand the prerequisites, let's set up the necessary tools to start using [Uniswap](https://uniswap.org/).

#### Wallet Setup

Your Web3 wallet is your gateway to decentralized applications. Here's how to set up [MetaMask](https://metamask.io), the most popular choice:

1. **Download [MetaMask](https://metamask.io)**: Visit [metamask.io](https://metamask.io) and install the browser extension (Chrome, Firefox, Brave) or mobile app (iOS/Android)
2. **Create or Import Wallet**: Choose **"Create a new wallet"** for first-time users, or **"Import wallet"** if you have an existing seed phrase
3. **Backup Seed Phrase**: Write down your 12-word seed phrase on paper and store it securely offline. This is your **only** way to recover your wallet
4. **Add Networks**: To use [Layer 2 networks](https://ethereum.org/en/layer-2/) for lower fees, add them manually:

| Network | RPC URL | Chain ID | Currency |
|---------|---------|----------|----------|
| **[Polygon](https://polygon.technology/)** | `https://polygon-rpc.com` | 137 | MATIC |
| **[Arbitrum](https://arbitrum.io/)** | `https://arb1.arbitrum.io/rpc` | 42161 | ETH |
| **[Optimism](https://www.optimism.io/)** | `https://mainnet.optimism.io` | 10 | ETH |

In [MetaMask](https://metamask.io), navigate to **Settings > Networks > Add Network**, then enter the details from the table above.

> 💡 **Pro Tip**: [Layer 2 solutions](https://ethereum.org/en/layer-2/) like [Polygon](https://polygon.technology/) and [Arbitrum](https://arbitrum.io/) offer gas fees that are 50-100x cheaper than Ethereum Mainnet while maintaining security.

#### Browser and Mobile Requirements

Ensure your browser supports Web3 by installing the [MetaMask extension](https://metamask.io/download/). Test your setup by visiting [app.uniswap.org](https://app.uniswap.org)—you should see the "Connect Wallet" button. For mobile trading, download the [MetaMask mobile app](https://metamask.io/download/) or use wallet apps like [Trust Wallet](https://trustwallet.com/) or [Rainbow](https://rainbow.me/) with their built-in browsers.

#### Troubleshooting Common Setup Issues

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| Wallet won't connect | Network mismatch | Switch both Uniswap and wallet to the same network |
| High gas fees | Ethereum mainnet congestion | Use [Layer 2 networks](https://ethereum.org/en/layer-2/) like [Polygon](https://polygon.technology/) or [Arbitrum](https://arbitrum.io/) |
| Extension not detected | Browser cache | Clear cache and reload, or try incognito mode |
| Transaction fails | Insufficient ETH for gas | Ensure you have enough ETH to cover gas fees |

### Your First Swap: Step-by-Step Walkthrough

Let's walk through a complete example: swapping 0.1 ETH for [DAI](https://makerdao.com/en/) (a popular stablecoin).

**Before You Begin**: Ensure you have at least 0.12 ETH in your wallet—0.1 ETH for the swap plus ~0.02 ETH for gas fees.

**Step 1: Prepare Your Wallet**

Connect your wallet to [app.uniswap.org](https://app.uniswap.org) and verify you're on **Ethereum Mainnet**. Check your ETH balance in the top-right corner.

**Step 2: Configure the Swap**

Select **ETH** as the input token and **DAI** as the output token using the dropdown menus. Enter `0.1` in the input field. Uniswap will automatically calculate the estimated DAI output (approximately 180-200 DAI based on current market rates).

**Step 3: Set Slippage Tolerance**

Click the settings icon and set your **slippage tolerance** to `0.5%` for stablecoins like DAI. For more volatile tokens, you may need to increase this to 1-3% to avoid transaction failures.

> 💡 **Pro Tip**: Higher slippage allows your transaction to succeed even if the price moves, but it also means you might get a worse rate. For stable pairs, keep it low.

**Step 4: Execute and Confirm**

Click the **"Swap"** button, review the transaction details in the pop-up, then click **"Confirm Swap"**. Approve the transaction in your [MetaMask](https://metamask.io) wallet by clicking **"Confirm"**.

**Step 5: Track Your Transaction**

Wait 15-60 seconds for network confirmation. Once complete, Uniswap will display a success message with a transaction hash. Click **"View on Etherscan"** or manually paste the hash into [Etherscan](https://etherscan.io) to see full transaction details.

**Expected Outcome**: You should receive approximately 180-200 DAI in your wallet (exact amount depends on current ETH/DAI exchange rate).


## 2. How It Works 


### High-Level Overview
[Uniswap](https://uniswap.org/) operates as an **automated market maker (AMM)** protocol, a fundamentally different approach from traditional exchanges. Instead of matching buyers and sellers through order books, Uniswap uses [smart contracts](https://ethereum.org/en/developers/docs/smart-contracts/) to facilitate peer-to-peer token swaps automatically.

The system relies on **liquidity providers**—users who deposit pairs of tokens into **liquidity pools**. When you execute a swap, you're trading directly against these pools, not against other users. Prices are determined by a mathematical formula (`x * y = k`), where `x` and `y` represent the quantities of each token in the pool. This ensures there's always liquidity available, though prices adjust automatically based on supply and demand.

Value flows through the ecosystem in two primary ways: **swap fees** (0.3% per transaction, distributed to liquidity providers) and the **[UNI governance token](https://uniswap.org/governance)** (held by the community for protocol decisions).

### Core Concepts

- To use [Uniswap](https://uniswap.org/) effectively, familiarize yourself with these essential concepts:

| Concept | Description | Practical Impact |
|---------|-------------|------------------|
| **[Liquidity Pools](https://docs.uniswap.org/concepts/protocol/pools)** | Reserves of two tokens (e.g., ETH/DAI) that enable swaps | Adding liquidity earns you LP tokens and a share of trading fees |
| **[Slippage](https://support.uniswap.org/hc/en-us/articles/8643879653261)** | Price impact from large trades relative to pool size | Set tolerance (e.g., 0.5%) to prevent unfavorable execution |
| **Gas Fees** | [Ethereum network](https://ethereum.org/) transaction costs | Higher during congestion; use [Layer 2 networks](https://ethereum.org/en/layer-2/) for 50-100x savings |
| **[Impermanent Loss](https://docs.uniswap.org/concepts/protocol/concentrated-liquidity#impermanent-loss)** | Potential loss for liquidity providers when token prices diverge | Risk vs. holding tokens separately; offset by trading fees |
| **Flash Swaps** | Advanced feature allowing arbitrage without upfront capital | Developers can borrow, trade, and repay in one transaction |

> **Beginner Tip**: Start with simple swaps before providing liquidity. Understanding impermanent loss is crucial before you add funds to pools.

### Real Scenarios and Use Cases

Here's how different users leverage [Uniswap](https://uniswap.org/) for various needs:

**Newbie Swapper: Alice's First Trade**: Alice wants to convert ETH to stablecoins for the first time. She follows the QuickStart guide, successfully swaps 0.5 ETH to [USDC](https://www.circle.com/en/usdc) on [Polygon](https://polygon.technology/), and avoids high fees by using a [Layer 2 network](https://ethereum.org/en/layer-2/). Total cost: $0.50 in gas fees.

**Liquidity Provider**: Bob adds ETH and USDC to a pool, earning 0.3% fees on swaps. He monitors for impermanent loss and withdraws when needed.

- **DeFi Explorer**: Carol uses Uniswap to access new tokens, then stakes them elsewhere for yield.

- **Developer**: Dave integrates Uniswap's SDK for a dApp, querying prices and executing swaps programmatically.

### Architecture Overview
- **Smart Contracts**: Core logic on Ethereum (V2/V3 routers, factories, pairs).
- **Frontend**: Web app (React-based) for user interaction.
- **Oracles and Integrations**: Price feeds from Chainlink; compatible with wallets like MetaMask.
- **Governance**: UNI token holders vote on protocol changes via snapshots.

### Economic Models: How Value Flows
- **Swaps**: 0.3% fee split: 0.25% to liquidity providers, 0.05% to UNI stakers.
- **Liquidity Mining**: Incentives for providing liquidity in new pools.
- **UNI Token**: Used for governance and rewards. Value derived from protocol usage and adoption.

## 3. Smart Contract References 

For developers, here's a key information on Uniswap's contracts. Always verify addresses on [docs.uniswap.org](https://docs.uniswap.org).

### Contract Addresses
- **Uniswap V3 Router**: `0xE592427A0AEce92De3Edee1F18E0157C05861564` (Ethereum Mainnet)
- **Factory**: `0x1F98431c8aD98523631AE4a59f267346ea31F984`
- **Common Pairs**: ETH/USDC pool at `0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8`
- **Multi-Chain**: Similar addresses on Polygon, Arbitrum,check per network.

### Function Reference: All Public Functions with Parameters
- **Swap Functions** (in Router):
  - `exactInputSingle(params)`: Swap exact input amount for output.
    - Params: tokenIn, tokenOut, fee, recipient, deadline, amountIn, amountOutMinimum, sqrtPriceLimitX96.
  - `exactOutputSingle(params)`: Swap for exact output amount.
- **Liquidity Functions** (in NonfungiblePositionManager):
  - `mint(params)`: Add liquidity to a position.
    - Params: token0, token1, fee, tickLower, tickUpper, amount0Desired, amount1Desired, amount0Min, amount1Min, recipient, deadline.
  - `burn(positionId)`: Remove liquidity.
- **Query Functions**:
  - `quoteExactInputSingle(tokenIn, tokenOut, amountIn)`: Estimate output for input.
  - `quoteExactOutputSingle(tokenIn, tokenOut, amountOut)`: Estimate input for output.

### Events and Logs: What Events Are Emitted and When
- **Swap Event**: Emitted on every swap with amount0In, amount1In, amount0Out, amount1Out, sender, to.
- **Mint Event**: When liquidity is added, logs owner, tickLower, tickUpper, amount, amount0, amount1.
- **Burn Event**: On liquidity removal, similar to Mint.
- **Transfer Event**: For ERC-20 pool tokens.

### Error Conditions: All Possible Revert Reasons
- **Insufficient Liquidity**: If pool can't fulfill swap, then you need to increase slippage tolerance.
- **Deadline Exceeded**: Transaction too slow, then increase deadline.
- **Amount Too Low/High**: Output/input doesn't meet minimums, then adjust parameters.
- **Invalid Token**: Unsupported or malicious tokens, use verified lists.
- **Gas Estimation Failures**: Network congestion, retry with higher gas fees.

### Deployment Information: Constructor Parameters, Deployment Process
- **V3 Core**: Deployed via factory pattern. Key params: factory address, WETH9 (wrapped ETH).
- **Process**: Uniswap governance proposes upgrades; community votes. New pools auto-deploy via factory.
- **Verification**: All contracts are open-source and verified on Etherscan.

## 4. Example Interactions

Hands-on examples for common tasks.

### Code Examples: Multiple Programming Languages
- **JavaScript (with Ethers.js)**:
  ```javascript
  const { ethers } = require('ethers');
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const routerAddress = '0xE592427A0AEce92De3Edee1F18E0157C05861564';
  const routerABI = [/* Uniswap V3 Router ABI */];
  const router = new ethers.Contract(routerAddress, routerABI, signer);
  // Swap ETH for DAI
  const tx = await router.exactInputSingle({
    tokenIn: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // WETH
    tokenOut: '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI
    fee: 3000, // 0.3% fee tier
    recipient: signer.getAddress(),
    deadline: Math.floor(Date.now() / 1000) + 60,
    amountIn: ethers.utils.parseEther('0.1'),
    amountOutMinimum: 0,
    sqrtPriceLimitX96: 0
  });
  console.log('Swap TX:', tx.hash);
  ```
- **Python (with Web3.py)**:
  ```python
  from web3 import Web3
  w3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR_KEY'))
  router_address = '0xE592427A0AEce92De3Edee1F18E0157C05861564'
  # Similar ABI and params as JS
  tx = contract.functions.exactInputSingle(params).buildTransaction({'gas': 200000})
  signed_tx = w3.eth.account.signTransaction(tx, private_key='YOUR_KEY')
  tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)
  print('TX Hash:', tx_hash.hex())
  ```

### Transaction Examples: Actual On-Chain Transaction Breakdowns
- **Simple Swap**: [Example TX on Etherscan](https://etherscan.io/tx/0x123...abc) – 0.1 ETH to USDC. Gas: 150,000; Fee: $5–10.
- **Liquidity Addition**: [Example TX](https://etherscan.io/tx/0x456...def) – Mint LP tokens. Includes tick range and amounts.
- **Breakdown**: Input params → Smart contract execution → Events (Swap/Mint) → Confirmation.

### Integration Patterns: Common Ways to Use the Protocol
- **dApp Integration**: Embed Uniswap Widget for seamless swaps in your app.
- **Arbitrage Bots**: Monitor prices across pools and swap for profit.
- **Yield Farming**: Provide liquidity, then stake LP tokens on platforms like Yearn.
- **Multi-Chain**: Use bridges like the Polygon Bridge for cross-chain swaps.

### Troubleshooting: Common Issues and Solutions
- **High Slippage**: Increase tolerance or split large swaps.
- **Failed Transactions**: Check gas price, use EthGasStation or network congestion.
- **Stuck Transactions**: Speed up in wallet or cancel/replace.
- **Wallet Errors**: Ensure correct network and sufficient funds.
- **Scam Prevention**: Verify contract addresses and use official links.

### Testing Strategies: How to Test Integrations Safely
- **Testnets**: Use Goerli or Sepolia for Ethereum testing. Get free ETH from faucets.
- **Forked Mainnet**: Tools like Hardhat simulate real conditions without real funds.
- **Unit Tests**: Mock Uniswap contracts in code to test swaps/liquidity.
- **Gas Estimation**: Always estimate before sending to avoid failures.
- **Static Analysis**: For custom integrations, use static analysis tools for security vulnerabilities.

## Conclusion
You have gotten a solid foundation for using Uniswap! Start with the QuickStart, experiment safely, and explore advanced features. For more information, visit [Uniswap Docs](https://docs.uniswap.org) or community resources. Remember, DeFi involves risks, only use funds you can afford to lose.

