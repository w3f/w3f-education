const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Polkadot Education Initiative",
  tagline: "Powered by the community",
  url: "https://education.web3.foundation/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-32x32.png",
  organizationName: "w3f", // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: "w3f-education", // Usually your repo name.

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig: {
    prism: {
      additionalLanguages: ["rust"],
      theme: require("prism-react-renderer/themes/dracula"),
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: "education-web3",
      contextualSearch: true,
    },
    mermaid: {
      theme: { light: 'base', dark: 'base' },
      options: {
        themeVariables: {
          fontFamily: 'Unbounded',
          primaryColor: '#E6007A',
          primaryBorderColor: '#E6007A',
          lineColor: '#140523',
          secondaryColor: '#552BBF',
          tertiaryColor: '#fff',
          titleColor: '#000',
          nodeTextColor: '#fff'
          }
        },
      },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
    },
    navbar: {
      title: "Technical Education",
      logo: {
        alt: "Polkadot Education Initiative",
        src: "img/w3f_logo.svg",
      },
      items: [
        {
          type: "dropdown",
          label: "Courses",
          position: "right",
          items: [
            {
              to: "docs/introblock",
              label: "Blockchain",
            },
            {
              to: "docs/introdot",
              label: "Polkadot",
            },
            {
              to: "docs/introrust",
              label: "Rust Programming",
            },
            {
              to: "docs/introsubstrate",
              label: "Substrate",
            },
          ],
        },

        {
          type: "dropdown",
          label: "Guides",
          position: "right",
          items: [
            {
              to: "docs/introparachain",
              label: "Parachain Development",
            },
            {
              to: "docs/OpenZeppelinTemplate/intro-oz-generic-template",
              label: "Educhain",
            },
          ],
        },

        {
          type: "dropdown",
          label: "Resources",
          position: "right",
          items: [
            {
              to: "docs/introatoz",
              label: "A - Z ELI5 series ",
            },
            {
              to: "docs/polkadotFAQ",
              label: "Polkadot FAQ ",
            },
          ],
        },

        { to: "/blog", label: "Blog", position: "right" },

        { to: "https://wiki.polkadot.network/", label: "Wiki", position: "right" },

        {
          href: "https://github.com/w3f/w3f-education",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Courses",
          items: [
            {
              label: "Blockchain Fundamentals",
              to: "docs/introblock",
            },
            {
              label: "Introduction to Polkadot",
              to: "docs/introdot",
            },
            {
              label: "Introduction to Rust Programming",
              to: "docs/introrust",
            },
            {
              label: "Introduction to Substrate",
              to: "docs/introsubstrate",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Wiki",
              href: "https://wiki.polkadot.network/",
            },
            {
              label: "Website",
              href: "https://web3.foundation/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Web3foundation",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/w3f/w3f-education",
            },
            {
              label: 'Legal Disclosures',
              to: 'https://web3.foundation/legal-disclosures/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Web3 Foundation. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          editUrl: "https://github.com/w3f/w3f-education/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/w3f/w3f-education/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
