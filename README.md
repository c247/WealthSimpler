# WealthSimpler by Vijay, Sriram, Shiv, David, Abdul

- Winner of Polygon and Airstack Bounty: https://ethglobal.com/showcase/wealthsimpler-yktii
  
![dashboard](./demo.png)

## ✨ Inspiration

Traditional finance often involves lock-up periods and complex processes for earning yield on excess funds. However, leveraging account abstraction (ERC-4337) and a user-friendly login experience, organizations can easily start investing without requiring prior Externally Owned Accounts.

## 👀 What it does

This project enables seamless investment in digital strategies for individuals and organizations. Organizations can log in with their company email, choose from various investment strategies (low risk, medium risk, high risk), and automate them to optimize yield. Wealthsimpler has implemented one such strategy investing funds above a minimum balance in Compound. Future implementations can expand to include a wide selection of protocols -aave, staked eth etc.. The ERC-4337 account abstraction eliminates the need to understand Ethereum gas fees and removes concerns about private key loss or hacking leading to investment loss. We also integrated with Airstack to create stunning DeFi market visuals through graphs and tables, to guide users when making investments.

## 💻 How we built it

### Frontend:

The frontend is built using React + TypeScript and served by Vite. Login functionality is implemented with Auth0. Upon login, an externally owned wallet is generated using a manual web3Auth approach. We interact with smart contracts in the client using Ethers.js. We used the Airstack API in conjunction with D3.js to create data visualizations of market information like (Polygon token trades/ OpenSea trading volume etc.).

### Backend:

WealthSimpler is an exceptional project built on the foundation of Biconomy's Smart Contract Wallet contracts, which we skillfully forked and customized. Our remarkable modifications have unlocked groundbreaking capabilities within the backend, allowing for the seamless integration of multiple signers with diverse permission levels. Moreover, our system boasts an ingenious automation logic that is triggered at regular intervals, such as hourly or daily.

## 🚀 Accomplishments that we're proud of

One of the most impressive aspects of WealthSimpler lies in its ability to optimize the utilization of excess USDC balances. Through our innovative approach, we ensure that these surplus funds are intelligently invested in low-risk yield-generating protocols meticulously chosen from a range of preselected investment strategies. Leveraging the power of ERC-4337, which provides advanced account abstraction, we have created a remarkably modular design that empowers account owners to personalize their investment journey by selecting from an array of strategies tailored to their individual preferences.

What truly sets WealthSimpler apart from its peers is its exceptional capability to seamlessly incorporate diverse permissioning schemes, roles, and wallet-based code for automated fund investment. By affording users the flexibility to customize their permission settings and take advantage of automated fund management, we have revolutionized the way individuals can optimize their financial portfolios. The sophisticated architecture, robust security measures, and meticulous attention to detail make WealthSimpler an impressive and groundbreaking project in the realm of finance technology.

## 🛠️ Challenges we encountered

* Forking and customizing Biconomy's Smart Contract Wallet: We had to navigate the complexities of forking an existing project and customizing it to meet our specific requirements. This involved thoroughly understanding the original codebase, identifying areas that required modification, and ensuring that our changes aligned with our desired functionality. We also had to address any conflicts, ensure compatibility with other components, and maintain consistency throughout the codebase. There was also the issue of actually using the Smart Contract Wallet in terms of making transactions. Because it was a modified version of the Biconomy's Smart Contract Wallet, we had to build out the transaction flow separately.

* Implementing multiple signers with varying permission levels: Allowing multiple signers with different permission levels introduced additional complexity. We had to design and implement a robust permissioning system that accurately reflected our desired access control rules. This included implementing authentication, authorization, and role management functionalities while carefully considering potential security vulnerabilities and avoiding privilege escalation issues

* Integrating with yield-generating protocols and investment strategies: Our project involved integrating with various yield-generating protocols and accommodating different investment strategies. This required us to understand and integrate with external systems and APIs. We had to address challenges related to data validation, security measures, and potential issues such as network delays, rate fluctuations, or protocol failures. Scalability, risk management, and adaptability to evolving protocols and strategies were key considerations.

## 📄 Links

[Presentation Link](https://docs.google.com/presentation/d/1vv1t0Sr8N5y_BnS0R7LlXhStO6bTAHws7uV6VjKxWoM/edit#slide=id.g2252182b62b_1_189)

## 🧑‍💻 Instructions for running locally

### Smart Contract

1. Ensure `foundry` is installed
2. Run the following command to deploy the Smart Contracts on Polygon Mumbai<br/>

```
forge script script/DeployAccount.s.sol:DeployAccount --chain-id 80001 --rpc-url <POLYGON-MUMBAI-RPC-URL> --etherscan-api-key <API-KEY> --verifier-url https://api.polygonscan.com/api --private-key <PRIVATE KEY> --broadcast --verify -vvvv --legacy
```

### Frontend

1. Navigate to the `frontend` directory
2. Install all dependencies using `npm install`
3. Run `npm run dev` to launch the frontend dApp
