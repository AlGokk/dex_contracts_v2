/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Token1, Token1Interface } from "../Token1";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
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
        name: "amount",
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
        name: "account",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "amount",
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
        name: "amount",
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
  "0x60806040523480156200001157600080fd5b5060405162000ce838038062000ce8833981016040819052620000349162000299565b8251839083906200004d90600390602085019062000148565b5080516200006390600490602084019062000148565b5050506200007833826200008160201b60201c565b505050620003c1565b6001600160a01b038216620000b35760405162461bcd60e51b8152600401620000aa9062000309565b60405180910390fd5b620000c16000838362000143565b8060026000828254620000d5919062000349565b90915550506001600160a01b038216600081815260208190526040808220805485019055517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906200012990859062000340565b60405180910390a36200013f6000838362000143565b5050565b505050565b82805462000156906200036e565b90600052602060002090601f0160209004810192826200017a5760008555620001c5565b82601f106200019557805160ff1916838001178555620001c5565b82800160010185558215620001c5579182015b82811115620001c5578251825591602001919060010190620001a8565b50620001d3929150620001d7565b5090565b5b80821115620001d35760008155600101620001d8565b600082601f830112620001ff578081fd5b81516001600160401b03808211156200021c576200021c620003ab565b6040516020601f8401601f1916820181018381118382101715620002445762000244620003ab565b60405283825285840181018710156200025b578485fd5b8492505b838310156200027e57858301810151828401820152918201916200025f565b838311156200028f57848185840101525b5095945050505050565b600080600060608486031215620002ae578283fd5b83516001600160401b0380821115620002c5578485fd5b620002d387838801620001ee565b94506020860151915080821115620002e9578384fd5b50620002f886828701620001ee565b925050604084015190509250925092565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b600082198211156200036957634e487b7160e01b81526011600452602481fd5b500190565b6002810460018216806200038357607f821691505b60208210811415620003a557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61091780620003d16000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012957806370a082311461013c57806395d89b411461014f578063a457c2d714610157578063a9059cbb1461016a578063dd62ed3e1461017d576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ec57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b6610190565b6040516100c39190610648565b60405180910390f35b6100df6100da366004610614565b610222565b6040516100c3919061063d565b6100f4610244565b6040516100c3919061086b565b6100df61010f3660046105d9565b61024a565b61011c610278565b6040516100c39190610874565b6100df610137366004610614565b61027d565b6100f461014a366004610586565b6102a9565b6100b66102c8565b6100df610165366004610614565b6102d7565b6100df610178366004610614565b610328565b6100f461018b3660046105a7565b610340565b60606003805461019f906108a6565b80601f01602080910402602001604051908101604052809291908181526020018280546101cb906108a6565b80156102185780601f106101ed57610100808354040283529160200191610218565b820191906000526020600020905b8154815290600101906020018083116101fb57829003601f168201915b5050505050905090565b60008061022d61036b565b905061023a81858561036f565b5060019392505050565b60025490565b60008061025561036b565b9050610262858285610423565b61026d85858561046d565b506001949350505050565b601290565b60008061028861036b565b905061023a81858561029a8589610340565b6102a49190610882565b61036f565b6001600160a01b0381166000908152602081905260409020545b919050565b60606004805461019f906108a6565b6000806102e261036b565b905060006102f08286610340565b90508381101561031b5760405162461bcd60e51b815260040161031290610826565b60405180910390fd5b61026d828686840361036f565b60008061033361036b565b905061023a81858561046d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166103955760405162461bcd60e51b8152600401610312906107e2565b6001600160a01b0382166103bb5760405162461bcd60e51b8152600401610312906106de565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061041690859061086b565b60405180910390a3505050565b600061042f8484610340565b90506000198114610467578181101561045a5760405162461bcd60e51b815260040161031290610720565b610467848484840361036f565b50505050565b6001600160a01b0383166104935760405162461bcd60e51b81526004016103129061079d565b6001600160a01b0382166104b95760405162461bcd60e51b81526004016103129061069b565b6104c483838361056a565b6001600160a01b038316600090815260208190526040902054818110156104fd5760405162461bcd60e51b815260040161031290610757565b6001600160a01b0380851660008181526020819052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061055b90869061086b565b60405180910390a36104678484845b505050565b80356001600160a01b03811681146102c357600080fd5b600060208284031215610597578081fd5b6105a08261056f565b9392505050565b600080604083850312156105b9578081fd5b6105c28361056f565b91506105d06020840161056f565b90509250929050565b6000806000606084860312156105ed578081fd5b6105f68461056f565b92506106046020850161056f565b9150604084013590509250925092565b60008060408385031215610626578182fd5b61062f8361056f565b946020939093013593505050565b901515815260200190565b6000602080835283518082850152825b8181101561067457858101830151858201604001528201610658565b818111156106855783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601d908201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604082015260600190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b90815260200190565b60ff91909116815260200190565b600082198211156108a157634e487b7160e01b81526011600452602481fd5b500190565b6002810460018216806108ba57607f821691505b602082108114156108db57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220fbd5d8b311ab4c84602de9e51e402cff1be0d6874486c2684ef34d7413d59e9464736f6c63430008000033";

export class Token1__factory extends ContractFactory {
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
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token1> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      overrides || {}
    ) as Promise<Token1>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      overrides || {}
    );
  }
  attach(address: string): Token1 {
    return super.attach(address) as Token1;
  }
  connect(signer: Signer): Token1__factory {
    return super.connect(signer) as Token1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Token1Interface {
    return new utils.Interface(_abi) as Token1Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Token1 {
    return new Contract(address, _abi, signerOrProvider) as Token1;
  }
}
