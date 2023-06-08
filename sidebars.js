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
      collapsed: false,
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
      collapsed: false,
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
      collapsed: false,
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
      id: 'Rust/rust-appendix',
      label: 'appendix',
    },
    {
      type: 'doc',
      id: 'introrust',
      label: 'Course Syllabus',
    },
    {
      type: "category",
      label: "Why Rust?",
      items: [
        'Rust/section1/section-intro',
        'Rust/section1/what-is-rust',
        'Rust/section1/why-rust',
        'Rust/section1/wasm-tldr'
      ],
    },
    {
      type: "category",
      label: "Installation & Development Environment Setup",
      items: [
        'Rust/setup/installation',
      ],
    },
    {
      type: "category",
      label: "Rust 101 - Intro to Basic Rust",
      items: [
        'Rust/section2/section-2-intro',
        'Rust/section2/variables-mutability',
        'Rust/section2/heap-vs-stack',
        'Rust/section2/data-types',
        'Rust/section2/functions-comments',
        'Rust/section2/loops'
      ],
    },
    {
      type: "category",
      label: "Intro to Intermediate Rust: Ownership, Borrowing, & Slices",
      items: [
        'Rust/section3/section-3-intro',
        'Rust/section3/ownership',
        'Rust/section3/borrowing',
        'Rust/section3/slices',
      ],
    },
    {
      type: "category",
      label: "Intro to Intermediate Rust: Enums & Matching Patterns",
      items: [
        'Rust/section4/section-4-intro',
        'Rust/section4/enums',
        'Rust/section4/panic',
        'Rust/section4/error-handling'
      ],
    },
    {
      type: "category",
      label: "Intro to Intermediate Rust: Data Structs & Collections",
      items: [
        'Rust/section5/section-5-intro',
        'Rust/section5/collections',
        'Rust/section5/structs',
        'Rust/section5/struct-methods',
        'Rust/section5/vectors-vs-strings'
      ],
    },
    {
      type: "category",
      label: "Intro to Advanced Rust: Traits, Generics, & Lifetimes",
      items: [
        'Rust/section6/section-6-intro',
        'Rust/section6/traits',
        'Rust/section6/generics',
        'Rust/section6/associated-generics',
        'Rust/section6/lifetimes',
      ],
    },
    {
      type: "category",
      label: "Intro to Advanced Rust: Iterators & Closures",
      items: [
        'Rust/section7/section-7-intro',
        'Rust/section7/iterators',
        'Rust/section7/closures',
        'Rust/section7/macros'
      ],
    },
    {
      type: "category",
      label: "Learning Cargo, Rust’s Package Management	 System, Basic Testing",
      items: [
        'Rust/section8/section-8-intro',
        'Rust/section8/defining-cargo-config',
        'Rust/section8/installing-crate',
        'Rust/section8/defining-crate-features',
        'Rust/section8/unit-tests'

      ],
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
      type: "category",
      label: "Introduction to Substrate",
      items: [
        'Substrate/section1/section-intro',
        'Substrate/section1/what-is-substrate',
        'Substrate/section1/substrate-history',
        'Substrate/section1/substrate-design'
      ],
    },
    {
      type: "category",
      label: "Substrate Development 101",
      items: [
        'Substrate/section2/section-2-intro',
        'Substrate/section2/substrate-runtime',
        'Substrate/section2/substrate-storage',
        'Substrate/section2/substrate-pallets',
      ],
    },
    {
      type: "category",
      label: "Installing Dependencies & Node Template",
      items: [
        'Substrate/section3/section-3-intro',
        'Substrate/section3/install-deps',
        'Substrate/section3/node-template-tour',
        'Substrate/section3/explore-pallet-template',
        'Substrate/section3/install-explore-frontend',
      ],
    },
    {
      type: "category",
      label: "Building a Custom FRAME Pallet: Intro",
      items: [
        'Substrate/section4/section-4-intro',
        'Substrate/section4/project-structure',
        'Substrate/section4/pallet-config',
        'Substrate/section4/create-storage-map',
        'Substrate/section4/events-errors',
      ],
    },
    {
      type: "category",
      label: "Building a Custom FRAME Pallet: Making our pallet actionable",
      items: [
        'Substrate/section5/section-5-intro',
        'Substrate/section5/dispatchable',
        'Substrate/section5/unit-tests',
        'Substrate/section5/coupling-balances',
      ],
    },
    {
      type: "category",
      label: "Building a Custom FRAME Pallet: Deploying & Testing",
      items: [
        'Substrate/section6/section-6-intro',
        'Substrate/section6/run-node',
        'Substrate/section6/test-frontend',
        'Substrate/section6/use-polkadotjs',
      ],
    },
    {
      type: "category",
      label: "Building a Custom FRAME Pallet: Pallet & FRAME best practices",
      items: [
        'Substrate/section7/section-7-intro',
        'Substrate/section7/blockchain-dev',
        'Substrate/section7/runtime-panics',
        'Substrate/section7/how-to-test-frame',

      ],
    },
    {
      type: "category",
      label: "Substrate Deepdive",
      items: [
        'Substrate/section8/section-8-intro',
        'Substrate/section8/origins-calls',
        'Substrate/section8/chain-genesis-spec',
        'Substrate/section8/pallet-coupling',
        'Substrate/section8/benchmarking',
      ],
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
    {
      type: 'doc',
      id: 'AtoZ/collator',
      label: 'C for Collator',
    },
    {
      type: 'doc',
      id: 'AtoZ/democracy',
      label: 'D for Democracy',
    },
    {
      type: 'doc',
      id: 'AtoZ/existential-deposit',
      label: 'E for Existential Deposit',
    },
    {
      type: 'doc',
      id: 'AtoZ/forkless',
      label: 'F for Forkless',
    },
    {
      type: 'doc',
      id: 'AtoZ/grandpa',
      label: 'G for Grandpa',
    },
    {
      type: 'doc',
      id: 'AtoZ/hash',
      label: 'H for Hash',
    },
    {
      type: 'doc',
      id: 'AtoZ/interoperability',
      label: 'I for Interoperability',
    },
    {
      type: 'doc',
      id: 'AtoZ/polkadot-js',
      label: 'J for Polkadot JS',
    },
    {
      type: 'doc',
      id: 'AtoZ/kusama',
      label: 'K for Kusama',
    },
    {
      type: 'doc',
      id: 'AtoZ/launch',
      label: 'L for Polkadot Launch',
    },
    {
      type: 'doc',
      id: 'AtoZ/multisig',
      label: 'M for Multisig',
    },
    {
      type: 'doc',
      id: 'AtoZ/npos',
      label: 'N for Nominated Proof of Stake',
    },
    {
      type: 'doc',
      id: 'AtoZ/on-chain-governance',
      label: 'O for On-chain Governance',
    },
    {
      type: 'doc',
      id: 'AtoZ/phragmén',
      label: 'P for Phragmén',
    },
    {
      type: 'doc',
      id: 'AtoZ/q-faq',
      label: 'Q for FAQ',
    },
  ],
};
