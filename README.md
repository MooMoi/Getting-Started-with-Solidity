# MyToken

This Solidity program is a simple token contract demonstrating the basics of creating and managing a custom token on the Ethereum blockchain. The `MyToken` contract allows users to mint and burn tokens, while tracking balances and total supply.

## Description

The `MyToken` contract includes:
- Public variables for token details, such as name, symbol, and total supply.
- A mapping to track the balance of each address.
- A `mint` function to create new tokens and increase the balance of a specified address.
- A `burn` function to destroy tokens from a specified address, decreasing its balance and the total supply.

This contract serves as a starting point for building more complex token-based applications on the Ethereum network.

## Getting Started

### Executing Program

To run this contract, you can use [Remix](https://remix.ethereum.org/), an online Solidity IDE.

1. Go to the Remix website and create a new file with a `.sol` extension (e.g., `MyToken.sol`).
2. Copy and paste the code into the file:
3. Go to the **Solidity Compiler** tab, ensure the compiler version is set to `0.8.18`, and click **Compile MyToken.sol**.
4. After compiling, go to the **Deploy & Run Transactions** tab, select the `MyToken` contract, and click **Deploy**.

### Interacting with the Contract

- **Mint**: Use the `mint` function to create new tokens. Input the recipient's address and the number of tokens.
- **Burn**: Use the `burn` function to destroy tokens from a specific address.

## Authors

Moira Gabrielle L. Radam |
4th year student from Far Eastern University of Technology
