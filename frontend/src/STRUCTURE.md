src
│
├── app
│ ├── App.tsx
│ ├── router
│ │ └── router.tsx
│ └── styles
│ └── global.css
│
├── store
│ ├── wallet
│ │ └── walletStore.ts
│ │
│ ├── dao
│ │ └── daoStore.ts
│ │
│ ├── proposal
│ │ └── proposalStore.ts
│
├── blockchain
│ ├── client
│ │ └── blockchainClient.ts
│ │
│ ├── contracts
│ │ ├── daoContract.ts
│ │ ├── proposalContract.ts
│ │ └── residentContract.ts
│ │
│ ├── abi
│ │ ├── DAO.json
│ │ └── ERC20.json
│ │
│ ├── dev
│ │ ├── increaseTime.ts
│ │ └── mineBlock.ts
│
├── pages
│ ├── dashboard
│ │ └── ui
│ │ └── DashboardPage.tsx
│ │
│ ├── proposals
│ │ └── ui
│ │ └── ProposalsPage.tsx
│ │
│ ├── create-proposal
│ │ └── ui
│ │ └── CreateProposalPage.tsx
│ │
│ ├── residents
│ │ └── ui
│ │ └── ResidentsPage.tsx
│ │
│ └── dev-tools
│ └── ui
│ └── DevToolsPage.tsx
│
├── widgets
│ ├── header
│ │ └── ui
│ │ └── Header.tsx
│ │
│ ├── dashboard-stats
│ │ └── ui
│ │ ├── BalanceCard.tsx
│ │ ├── ResidentsCard.tsx
│ │ ├── ProposalsCard.tsx
│ │ └── VotingPowerCard.tsx
│ │
│ ├── navigation-tabs
│ │ └── ui
│ │ └── NavigationTabs.tsx
│ │
│ └── dev-tools-panel
│ └── ui
│ └── DevToolsPanel.tsx
│
├── features
│ ├── connect-wallet
│ │ ├── hooks
│ │ │ └── useConnectWallet.ts
│ │ └── ui
│ │ └── ConnectWalletButton.tsx
│ │
│ ├── create-proposal
│ │ ├── hooks
│ │ │ └── useCreateProposal.ts
│ │ └── ui
│ │ └── CreateProposalForm.tsx
│ │
│ ├── vote
│ │ ├── hooks
│ │ │ └── useVote.ts
│ │ └── ui
│ │ └── VoteButtons.tsx
│ │
│ ├── register-resident
│ │ ├── hooks
│ │ │ └── useRegisterResident.ts
│ │ └── ui
│ │ └── RegisterResidentForm.tsx
│ │
│ └── time-travel
│ ├── hooks
│ │ └── useTimeTravel.ts
│ └── ui
│ └── TimeControl.tsx
│
├── entities
│ ├── proposal
│ │ ├── model
│ │ │ └── proposal.types.ts
│ │ └── ui
│ │ └── ProposalCard.tsx
│ │
│ ├── resident
│ │ ├── model
│ │ │ └── resident.types.ts
│ │ └── ui
│ │ └── ResidentRow.tsx
│ │
│ └── dao
│ └── model
│ └── dao.types.ts
│
├── shared
│ ├── ui
│ │ ├── button
│ │ ├── input
│ │ ├── select
│ │ ├── card
│ │ ├── modal
│ │ └── badge
│ │
│ ├── lib
│ │ ├── formatAddress.ts
│ │ ├── formatEth.ts
│ │ └── formatDate.ts
│ │
│ └── config
│ └── contracts.ts
│
└── assets
├── icons
└── images
