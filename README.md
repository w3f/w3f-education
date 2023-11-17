[![CC BY 4.0][cc-by-shield]][cc-by][![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](https://opensource.org/licenses/MIT)

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-black.svg

# Technical Education at Web3 Foundation

This repository houses core course material for the Polkadot ecosystem.

## Contribution Guidelines

The Technical Education team at Web3 Foundation are the primary maintainers of this repository and
will review all issues and pull requests created here.

It is preferred that:

1. You open an issue using one of the
   [**issue templates**](https://github.com/w3f/w3f-education/issues/new/choose).
2. Open a PR referencing the issue.

If you notice typos or grammatical errors, please feel free to create pull requests with these
corrections directly. It is generally preferable to create a pull request over an issue to propose a
change to the content.

# Website

Hosted on GitHub pages - https://w3f.github.io/w3f-education/. This website is built using
[Docusaurus](https://docusaurus.io/).

## Running Locally

The Web3 Foundation Education pages are built from the source files in this repository. After
cloning the source locally, you can start the websites with each of these respective commands
(ensure you run `yarn` at the root of the repository first to install dependencies).

The Web3 Foundation Education pages use Algolia search, which can be accessed locally by providing
the correct App ID and API key. The `app_id` and `api_key` environment variables are needed for the
pages to be built successfully. If you are an external contributor, set the variables with some
values like shown below, which lets the Wiki repo build successfully (but disables the search bar).

```bash
export ALGOLIA_APP_ID="xxxxxx" ALGOLIA_API_KEY="xxxxxx"
```

Using yarn, run:

```bash
yarn install
```

### Build

:bird: Building the Web3 Foundation Pages:

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are
reflected live without having to restart the server.
