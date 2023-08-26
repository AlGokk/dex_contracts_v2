/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IExchange",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IExchange__factory>;
    getContractFactory(
      name: "IExchangeCallee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IExchangeCallee__factory>;
    getContractFactory(
      name: "IExchangeLibrary",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IExchangeLibrary__factory>;
    getContractFactory(
      name: "IFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFactory__factory>;
    getContractFactory(
      name: "IRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouter__factory>;
    getContractFactory(
      name: "ITransferHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITransferHelper__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "ExchangeLibrary",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExchangeLibrary__factory>;
    getContractFactory(
      name: "FixedPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FixedPoint__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Palindrome",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Palindrome__factory>;
    getContractFactory(
      name: "PalindromeERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PalindromeERC20__factory>;
    getContractFactory(
      name: "PalindromeExchange",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PalindromeExchange__factory>;
    getContractFactory(
      name: "PalindromeFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PalindromeFactory__factory>;
    getContractFactory(
      name: "PalindromeMigrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PalindromeMigrator__factory>;
    getContractFactory(
      name: "PalindromeRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PalindromeRouter__factory>;
    getContractFactory(
      name: "Token1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token1__factory>;
    getContractFactory(
      name: "Token2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token2__factory>;
    getContractFactory(
      name: "WETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETH__factory>;

    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IExchange",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IExchange>;
    getContractAt(
      name: "IExchangeCallee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IExchangeCallee>;
    getContractAt(
      name: "IExchangeLibrary",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IExchangeLibrary>;
    getContractAt(
      name: "IFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFactory>;
    getContractAt(
      name: "IRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouter>;
    getContractAt(
      name: "ITransferHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITransferHelper>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "ExchangeLibrary",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExchangeLibrary>;
    getContractAt(
      name: "FixedPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FixedPoint>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Palindrome",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Palindrome>;
    getContractAt(
      name: "PalindromeERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PalindromeERC20>;
    getContractAt(
      name: "PalindromeExchange",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PalindromeExchange>;
    getContractAt(
      name: "PalindromeFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PalindromeFactory>;
    getContractAt(
      name: "PalindromeMigrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PalindromeMigrator>;
    getContractAt(
      name: "PalindromeRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PalindromeRouter>;
    getContractAt(
      name: "Token1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token1>;
    getContractAt(
      name: "Token2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token2>;
    getContractAt(
      name: "WETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETH>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
