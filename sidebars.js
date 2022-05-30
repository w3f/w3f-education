module.exports = {
  blockchain: [
    {
      type: 'doc',
      id: 'introblock',
      label: 'Blockchain Fundamentals',
    },
    {
      type: 'category',
      label: 'Introduction to Blockchain',
      items: [
          'Blockchain/Module1/blockchain',
          'Blockchain/Module1/money-trust',
          'Blockchain/Module1/money-properties',
          'Blockchain/Module1/digital-money',
          'Blockchain/Module1/bitcoin',
          'Blockchain/Module1/ethereum',
          'Blockchain/Module1/web3',
      ],
    },
    {
      type: 'category',
      label: 'Blockchain and Cryptography',
      items: [
          'Blockchain/Module2/cryptography',
          'Blockchain/Module2/keypair',
          'Blockchain/Module2/hash',
          'Blockchain/Module2/datastructures',
          'Blockchain/Module2/trust',
          'Blockchain/Module2/invincible',
          'Blockchain/Module2/decentralization',
      ],
    },
    {
      type: 'category',
      label: 'Block Mining and Finality',
      items: [
          'Blockchain/Module3/mining',
          'Blockchain/Module3/mining-hardware',
          'Blockchain/Module3/hashpower',
          'Blockchain/Module3/PoW',
          'Blockchain/Module3/forking',
          'Blockchain/Module3/finality',
          'Blockchain/Module3/PoS',
      ],
    },
    {
      type: 'category',
      label: 'Nodes and Networking',
      items: [
          'Blockchain/Module4/distributed',
          'Blockchain/Module4/consensus',
          'Blockchain/Module4/networkstack',
          'Blockchain/Module4/gossip',
          'Blockchain/Module4/nodes',
          'Blockchain/Module4/network-challenges',
          'Blockchain/Module4/lightclients',
      ],
    },
    {
      type: 'category',
      label: 'Layers and Applications',
      items: [
          'Blockchain/Module5/layers',
          'Blockchain/Module5/layer0',
          'Blockchain/Module5/layer1',
          'Blockchain/Module5/layer2',
          'Blockchain/Module5/enterprise',
          'Blockchain/Module5/zk-proofs',
      ],
    },
    {
      type: 'category',
      label: 'Web3 and the future of Blockchain',
      items: [
          'Blockchain/Module6/web3',
          'Blockchain/Module6/crypto-defi',
          'Blockchain/Module6/nft-meta',
          'Blockchain/Module6/dao',
          'Blockchain/Module6/computing',
          'Blockchain/Module6/future-web3',
      ],
    },
    {
      type: 'link',
      label: 'Learn more',
      href: 'https://mooc.web3.foundation/',
    },
  ],

  polkadot: [
    {
      type: 'doc',
      id: 'introdot',
      label: 'Introduction to Polkadot',
    },
    {
      type: 'category',
      label: 'What is Polkadot?',
      items: [
          'Polkadot/Module1/polkadot',
          'Polkadot/Module1/architecture',
          'Polkadot/Module1/polkadotvision',
          'Polkadot/Module1/features',
          'Polkadot/Module1/becomeparachain',
      ],
    },
    {
      type: 'category',
      label: 'Interact with Polkadot',
      items: [
          'Polkadot/Module2/account',
          'Polkadot/Module2/dotutility',
          'Polkadot/Module2/explorenetwork',
          'Polkadot/Module2/governance',
          'Polkadot/Module2/treasury',
      ],
    },
    {
      type: 'category',
      label: 'Consensus and Security',
      items: [
          'Polkadot/Module3/consensus',
          'Polkadot/Module3/npos',
          'Polkadot/Module3/maintainers',
          'Polkadot/Module3/sharedsecurity',
          'Polkadot/Module3/securityimprovements',
      ],
    },
    {
      type: 'category',
      label: 'Cryptography and Networking',
      items: [
          'Polkadot/Module4/cryptography',
          'Polkadot/Module4/networking',
          'Polkadot/Module4/nodes',
          'Polkadot/Module4/parachainblock',
          'Polkadot/Module4/decentralization',

      ],
    },
    {
      type: 'category',
      label: 'Interoperability and Scalability',
      items: [
          'Polkadot/Module5/interoperability',
          'Polkadot/Module5/bridges',
          'Polkadot/Module5/parachains',
          'Polkadot/Module5/scalability',
          'Polkadot/Module5/architectureimprovements',

      ],
    },
    {
      type: 'category',
      label: 'Polkadot for Developers',
      items: [
          'Polkadot/Module6/rust',
          'Polkadot/Module6/substrate',
          'Polkadot/Module6/testnets',
          'Polkadot/Module6/polkadotjs',
          'Polkadot/Module6/developers',
      ],
    },
    {
      type: 'link',
      label: 'Learn more',
      href: 'https://wiki.polkadot.network/',
    },
  ],

  rust: [
    {
      type: 'doc',
      id: 'introrust',
      label: 'Rust Programming',
    },
    {
      type: 'link',
      label: 'Learn more',
      href: 'https://www.rust-lang.org/',
    },
  ],

  substrate: [
    {
      type: 'doc',
      id: 'introsubstrate',
      label: 'Substrate',
    },
    {
      type: 'doc',
      id: 'Substrate/workshop',
      label: 'Substrate Workshop',
    },
    {
      type: 'link',
      label: 'Learn more',
      href: 'https://docs.substrate.io/',
    },
  ],

    web3: [
      {
        type: 'doc',
        id: 'introweb3',
        label: 'Web3',
      },
      {
        type: 'link',
        label: 'Learn more',
        href: 'https://web3.foundation/',
      },
    ],

  atoz: [
    {
      type: 'doc',
      id: 'introatoz',
      label: 'A to Z ELI5 Series',
    },
    {
      type: 'doc',
      id: 'AtoZ/account',
      label: 'A for Account',
    },
    {
      type: 'doc',
      id: 'AtoZ/bridge',
      label: 'B for Bridge',
    },
  ],
};
