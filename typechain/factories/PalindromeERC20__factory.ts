/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PalindromeERC20,
  PalindromeERC20Interface,
} from "../PalindromeERC20";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604080518082018252600e81526d50616c696e64726f6d65204c507360901b6020918201528151808301835260018152603160f81b90820152905146916100c2917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f917ff16799afd5cc5f34e174323b77639d9fc60d58f22dcfb06ef799a76658e85580917fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc69186913091016100e3565b60408051601f1981840301815291905280516020909101206003555061010f565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b6108fd8061011e6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b4114610185578063a9059cbb1461018d578063d505accf146101a0578063dd62ed3e146101b5576100cf565b80633644e5151461015757806370a082311461015f5780637ecebe0014610172576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011257806323b872dd1461012757806330adf81f1461013a578063313ce56714610142575b600080fd5b6100dc6101c8565b6040516100e991906107a0565b60405180910390f35b6101056101003660046106f6565b6101f2565b6040516100e9919061073a565b61011a610208565b6040516100e99190610745565b61010561013536600461064a565b61020e565b61011a6102a3565b61014a6102c7565b6040516100e99190610859565b61011a6102cc565b61011a61016d3660046105f7565b6102d2565b61011a6101803660046105f7565b6102e4565b6100dc6102f6565b61010561019b3660046106f6565b61031f565b6101b36101ae366004610685565b61032c565b005b61011a6101c3366004610618565b6104b0565b6040518060400160405280600e81526020016d50616c696e64726f6d65204c507360901b81525081565b60006101ff3384846104cd565b50600192915050565b60005481565b6001600160a01b03831660009081526002602090815260408083203384529091528120546000191461028e576001600160a01b038416600090815260026020908152604080832033845290915290205461026990839061087f565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610299848484610535565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b60016020526000908152604090205481565b60046020526000908152604090205481565b6040518060400160405280600d81526020016c050616c696e64726f6d652d4c5609c1b81525081565b60006101ff338484610535565b428410156103555760405162461bcd60e51b815260040161034c9061082a565b60405180910390fd5b6003546001600160a01b038816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b9190876103a883610896565b919050558a6040516020016103c29695949392919061074e565b604051602081830303815290604052805190602001206040516020016103e992919061071f565b6040516020818303038152906040528051906020012090506000600182868686604051600081526020016040526040516104269493929190610782565b6020604051602081039080840390855afa158015610448573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061047e5750886001600160a01b0316816001600160a01b0316145b61049a5760405162461bcd60e51b815260040161034c906107f3565b6104a58989896104cd565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b6001600160a01b0380841660008181526002602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610528908590610745565b60405180910390a3505050565b6001600160a01b03831660009081526001602052604090205461055990829061087f565b6001600160a01b038085166000908152600160205260408082209390935590841681522054610589908290610867565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610528908590610745565b80356001600160a01b03811681146105f257600080fd5b919050565b600060208284031215610608578081fd5b610611826105db565b9392505050565b6000806040838503121561062a578081fd5b610633836105db565b9150610641602084016105db565b90509250929050565b60008060006060848603121561065e578081fd5b610667846105db565b9250610675602085016105db565b9150604084013590509250925092565b600080600080600080600060e0888a03121561069f578283fd5b6106a8886105db565b96506106b6602089016105db565b95506040880135945060608801359350608088013560ff811681146106d9578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610708578182fd5b610711836105db565b946020939093013593505050565b61190160f01b81526002810192909252602282015260420190565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b818110156107cc578581018301518582016040015282016107b0565b818111156107dd5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601f908201527f50616c696e64726f6d6556323a20494e56414c49445f5349474e415455524500604082015260600190565b60208082526015908201527414185b1a5b991c9bdb59558c8e8811561412549151605a1b604082015260600190565b60ff91909116815260200190565b6000821982111561087a5761087a6108b1565b500190565b600082821015610891576108916108b1565b500390565b60006000198214156108aa576108aa6108b1565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212201b7600960f70080331ba6c601d9666d9bf167029ba85216325e4811d2cf3c42f64736f6c63430008000033";

export class PalindromeERC20__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PalindromeERC20> {
    return super.deploy(overrides || {}) as Promise<PalindromeERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PalindromeERC20 {
    return super.attach(address) as PalindromeERC20;
  }
  connect(signer: Signer): PalindromeERC20__factory {
    return super.connect(signer) as PalindromeERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PalindromeERC20Interface {
    return new utils.Interface(_abi) as PalindromeERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PalindromeERC20 {
    return new Contract(address, _abi, signerOrProvider) as PalindromeERC20;
  }
}
