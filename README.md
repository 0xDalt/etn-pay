# ETN Pay

Browser extension enabling Electroneum (ETN) payments on any e-commerce site. Built for the Electroneum Hackathon 2025.

## Overview

ETN Pay is a browser extension that allows users to make payments using Electroneum (ETN) on any e-commerce website. It automatically detects prices, converts them to ETN in real-time using ANKR's price feeds, and facilitates secure transactions through smart contracts.

## Features

- Price detection on e-commerce sites
- Real-time ETN/fiat conversion
- Secure payment processing
- 5-second transaction finality
- Escrow system for payment security

## Project Structure

```
etn-pay/
├── contracts/               # Smart contracts
│   ├── interfaces/         # Contract interfaces
│   ├── storage/           # Storage contracts
│   └── implementation/    # Main contract implementations
├── extension/              # Browser extension
│   ├── src/
│   │   ├── background/    # Background scripts
│   │   ├── content/      # Content scripts
│   │   ├── popup/       # Extension popup UI
│   │   └── utils/       # Shared utilities
│   └── public/           # Static assets
├── scripts/                # Deployment & build scripts
├── test/                   # Test files
└── docs/                   # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Chrome/Firefox browser
- MetaMask or compatible Web3 wallet

### Installation

1. Clone the repository
```bash
git clone https://github.com/[your-username]/etn-pay.git
cd etn-pay
```

2. Install dependencies
```bash
npm install
```

3. Build the project
```bash
npm run build
```

### Development

To start development:

```bash
# Compile contracts
npm run compile

# Run tests
npm run test

# Build extension
npm run build:extension

# Start development mode
npm run dev
```

## Testing

```bash
# Run all tests
npm test

# Run specific test suite
npm test:contracts
npm test:extension
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built for the Electroneum Hackathon 2025
- Powered by ANKR API
- Uses Electroneum blockchain
