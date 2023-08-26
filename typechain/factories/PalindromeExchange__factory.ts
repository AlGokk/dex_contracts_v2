/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PalindromeExchange,
  PalindromeExchangeInterface,
} from "../PalindromeExchange";

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
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
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
    name: "MINIMUM_LIQUIDITY",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
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
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
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
    name: "price0CumulativeLast",
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
    name: "price1CumulativeLast",
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
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
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
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
  "0x60a06040526001600b5534801561001557600080fd5b50604080518082018252600e81526d50616c696e64726f6d65204c507360901b6020918201528151808301835260018152603160f81b90820152905146916100c7917f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f917ff16799afd5cc5f34e174323b77639d9fc60d58f22dcfb06ef799a76658e85580917fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc69186913091016100ef565b60408051601f198184030181529190528051602090910120600355503360601b60805261011b565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60805160601c61244c610147600039600081816108f1015281816111240152611885015261244c6000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a71461033d578063d505accf14610345578063dd62ed3e14610358578063fff6cae91461036b576101a9565b8063ba9a7a561461031a578063bc25cf7714610322578063c45a015514610335576101a9565b80637ecebe00116100d35780637ecebe00146102cb57806389afcb44146102de57806395d89b41146102ff578063a9059cbb14610307576101a9565b80636a6278421461029d57806370a08231146102b05780637464fc3d146102c3576101a9565b806323b872dd116101665780633644e515116101405780633644e51514610272578063485cc9551461027a5780635909c0d51461028d5780635a3d549314610295576101a9565b806323b872dd1461024257806330adf81f14610255578063313ce5671461025d576101a9565b8063022c0d9f146101ae57806306fdde03146101c35780630902f1ac146101e1578063095ea7b3146101f85780630dfe16811461021857806318160ddd1461022d575b600080fd5b6101c16101bc366004611d32565b610373565b005b6101cb6107a2565b6040516101d89190611ed9565b60405180910390f35b6101e96107cc565b6040516101d893929190612237565b61020b610206366004611ccf565b6107f6565b6040516101d89190611e73565b61022061080d565b6040516101d89190611dfa565b61023561081c565b6040516101d89190611e7e565b61020b610250366004611c1a565b610822565b6102356108b7565b6102656108db565b6040516101d89190612289565b6102356108e0565b6101c1610288366004611be2565b6108e6565b61023561095c565b610235610962565b6102356102ab366004611baa565b610968565b6102356102be366004611baa565b610c1c565b610235610c2e565b6102356102d9366004611baa565b610c34565b6102f16102ec366004611baa565b610c46565b6040516101d8929190612260565b6101cb610fc0565b61020b610315366004611ccf565b610fe9565b610235610ff6565b6101c1610330366004611baa565b610ffc565b610220611122565b610220611146565b6101c1610353366004611c5a565b611155565b610235610366366004611be2565b6112d0565b6101c16112ed565b600b5460011461039e5760405162461bcd60e51b8152600401610395906120d0565b60405180910390fd5b6000600b55841515806103b15750600084115b6103cd5760405162461bcd60e51b815260040161039590611f9c565b6000806103d86107cc565b5091509150816001600160701b0316871080156103fd5750806001600160701b031686105b6104195760405162461bcd60e51b815260040161039590612027565b60055460065460009182916001600160a01b039182169190811690891682148015906104575750806001600160a01b0316896001600160a01b031614155b6104735760405162461bcd60e51b815260040161039590611f72565b8a1561048457610484828a8d611439565b891561049557610495818a8c611439565b861561050257604051630da3329360e41b81526001600160a01b038a169063da332930906104cf9033908f908f908e908e90600401611e27565b600060405180830381600087803b1580156104e957600080fd5b505af11580156104fd573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81526001600160a01b038316906370a082319061052e903090600401611dfa565b60206040518083038186803b15801561054657600080fd5b505afa15801561055a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057e9190611d1a565b6040516370a0823160e01b81529094506001600160a01b038216906370a08231906105ad903090600401611dfa565b60206040518083038186803b1580156105c557600080fd5b505afa1580156105d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fd9190611d1a565b92505050600089856001600160701b03166106189190612337565b8311610625576000610642565b6106388a6001600160701b038716612337565b6106429084612337565b905060006106598a6001600160701b038716612337565b8311610666576000610683565b6106798a6001600160701b038716612337565b6106839084612337565b905060008211806106945750600081115b6106b05760405162461bcd60e51b8152600401610395906121c5565b60006106d26106c084600261157d565b6106cc876103e861157d565b906115bd565b905060006106e46106c084600261157d565b9050610709620f42406107036001600160701b038b8116908b1661157d565b9061157d565b610713838361157d565b10156107315760405162461bcd60e51b8152600401610395906121fc565b505061073f848488886115eb565b886001600160a01b0316336001600160a01b03167fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d82284848f8f604051610788949392919061226e565b60405180910390a350506001600b55505050505050505050565b6040518060400160405280600e81526020016d50616c696e64726f6d65204c507360901b81525081565b6007546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610803338484611772565b5060015b92915050565b6005546001600160a01b031681565b60005481565b6001600160a01b0383166000908152600260209081526040808320338452909152812054600019146108a2576001600160a01b038416600090815260026020908152604080832033845290915290205461087d908390612337565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b6108ad8484846117da565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461092e5760405162461bcd60e51b815260040161039590612153565b600580546001600160a01b039384166001600160a01b03199182161790915560068054929093169116179055565b60085481565b60095481565b6000600b5460011461098c5760405162461bcd60e51b8152600401610395906120d0565b6000600b8190558061099c6107cc565b506005546040516370a0823160e01b81529294509092506000916001600160a01b03909116906370a08231906109d6903090600401611dfa565b60206040518083038186803b1580156109ee57600080fd5b505afa158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190611d1a565b6006546040516370a0823160e01b81529192506000916001600160a01b03909116906370a0823190610a5c903090600401611dfa565b60206040518083038186803b158015610a7457600080fd5b505afa158015610a88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aac9190611d1a565b90506000610ac3836001600160701b0387166115bd565b90506000610ada836001600160701b0387166115bd565b90506000610ae88787611880565b60005490915080610b1f57610b0b6103e86106cc610b06878761157d565b6119d9565b9850610b1a60006103e8611a49565b610b66565b610b636001600160701b038916610b36868461157d565b610b4091906122d5565b6001600160701b038916610b54868561157d565b610b5e91906122d5565b611ad8565b98505b60008911610b865760405162461bcd60e51b815260040161039590611fe4565b610b908a8a611a49565b610b9c86868a8a6115eb565b8115610bc657600754610bc2906001600160701b0380821691600160701b90041661157d565b600a555b336001600160a01b03167f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f8585604051610c01929190612260565b60405180910390a250506001600b5550949695505050505050565b60016020526000908152604090205481565b600a5481565b60046020526000908152604090205481565b600080600b54600114610c6b5760405162461bcd60e51b8152600401610395906120d0565b6000600b81905580610c7b6107cc565b506005546006546040516370a0823160e01b81529395509193506001600160a01b039081169291169060009083906370a0823190610cbd903090600401611dfa565b60206040518083038186803b158015610cd557600080fd5b505afa158015610ce9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0d9190611d1a565b90506000826001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610d3d9190611dfa565b60206040518083038186803b158015610d5557600080fd5b505afa158015610d69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8d9190611d1a565b30600090815260016020526040812054919250610daa8888611880565b60005490915080610dbb848761157d565b610dc591906122d5565b9a5080610dd2848661157d565b610ddc91906122d5565b995060008b118015610dee575060008a115b610e0a5760405162461bcd60e51b815260040161039590612182565b610e143084611af0565b610e1f878d8d611439565b610e2a868d8c611439565b6040516370a0823160e01b81526001600160a01b038816906370a0823190610e56903090600401611dfa565b60206040518083038186803b158015610e6e57600080fd5b505afa158015610e82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea69190611d1a565b6040516370a0823160e01b81529095506001600160a01b038716906370a0823190610ed5903090600401611dfa565b60206040518083038186803b158015610eed57600080fd5b505afa158015610f01573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f259190611d1a565b9350610f3385858b8b6115eb565b8115610f5d57600754610f59906001600160701b0380821691600160701b90041661157d565b600a555b8b6001600160a01b0316336001600160a01b03167fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d819364968d8d604051610fa2929190612260565b60405180910390a35050505050505050506001600b81905550915091565b6040518060400160405280600d81526020016c050616c696e64726f6d652d4c5609c1b81525081565b60006108033384846117da565b6103e881565b600b5460011461101e5760405162461bcd60e51b8152600401610395906120d0565b6000600b556005546006546007546040516370a0823160e01b81526001600160a01b0393841693909216916110d091849186916001600160701b03169083906370a0823190611071903090600401611dfa565b60206040518083038186803b15801561108957600080fd5b505afa15801561109d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c19190611d1a565b6110cb9190612337565b611439565b6007546040516370a0823160e01b81526111189183918691600160701b90046001600160701b0316906001600160a01b038416906370a0823190611071903090600401611dfa565b50506001600b5550565b7f000000000000000000000000000000000000000000000000000000000000000081565b6006546001600160a01b031681565b428410156111755760405162461bcd60e51b8152600401610395906120f6565b6003546001600160a01b038816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b9190876111c8836123a3565b919050558a6040516020016111e296959493929190611e87565b60405160208183030381529060405280519060200120604051602001611209929190611ddf565b6040516020818303038152906040528051906020012090506000600182868686604051600081526020016040526040516112469493929190611ebb565b6020604051602081039080840390855afa158015611268573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061129e5750886001600160a01b0316816001600160a01b0316145b6112ba5760405162461bcd60e51b815260040161039590611f3b565b6112c5898989611772565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600b5460011461130f5760405162461bcd60e51b8152600401610395906120d0565b6000600b556005546040516370a0823160e01b8152611432916001600160a01b0316906370a0823190611346903090600401611dfa565b60206040518083038186803b15801561135e57600080fd5b505afa158015611372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113969190611d1a565b6006546040516370a0823160e01b81526001600160a01b03909116906370a08231906113c6903090600401611dfa565b60206040518083038186803b1580156113de57600080fd5b505afa1580156113f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114169190611d1a565b6007546001600160701b0380821691600160701b9004166115eb565b6001600b55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e7432353629000000000000006020909101525160009081906001600160a01b038616907fa9059cbb2ab09eb219583f4a59a5d0623ade346d962bcd4e46b11da047c9049b906114b09087908790602401611e0e565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516114ee9190611dc3565b6000604051808303816000865af19150503d806000811461152b576040519150601f19603f3d011682016040523d82523d6000602084013e611530565b606091505b509150915081801561155a57508051158061155a57508080602001905181019061155a9190611cfa565b6115765760405162461bcd60e51b81526004016103959061206b565b5050505050565b60008115806115a1575082826115938183612318565b925061159f90836122d5565b145b6108075760405162461bcd60e51b8152600401610395906120a2565b6000826115ca8382612337565b91508111156108075760405162461bcd60e51b815260040161039590611f0c565b60006115fc640100000000426123be565b60075490915060009061161c90600160e01b900463ffffffff168361234e565b905060008163ffffffff1611801561163c57506001600160701b03841615155b801561165057506001600160701b03831615155b156116ca5763ffffffff811661166685856122af565b61167091906122e9565b6001600160701b03166008600082825461168a9190612297565b909155505063ffffffff81166116a084866122af565b6116aa91906122e9565b6001600160701b0316600960008282546116c49190612297565b90915550505b600780546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff87160217928390556040517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1936117629381811693909104169061221d565b60405180910390a1505050505050565b6001600160a01b0380841660008181526002602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906117cd908590611e7e565b60405180910390a3505050565b6001600160a01b0383166000908152600160205260409020546117fe908290612337565b6001600160a01b03808516600090815260016020526040808220939093559084168152205461182e908290612297565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906117cd908590611e7e565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663017e7e586040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156118de57600080fd5b505af11580156118f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119169190611bc6565b600a546001600160a01b0382161580159450919250906119c55780156119c0576000611951610b066001600160701b03808816908916612318565b9050600061195e836119d9565b9050808211156119bd57600061198061197784846115bd565b6000549061157d565b905060006119998361199386600561157d565b90611b7c565b905060006119a782846122d5565b905080156119b9576119b98782611a49565b5050505b50505b6119d1565b80156119d1576000600a555b505092915050565b60006003821115611a3a57508060006119f36002836122d5565b6119fe906001612297565b90505b81811015611a3457905080600281611a1981866122d5565b611a239190612297565b611a2d91906122d5565b9050611a01565b50611a44565b8115611a44575060015b919050565b80600054611a579190612297565b60009081556001600160a01b038316815260016020526040902054611a7d908290612297565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611acc908590611e7e565b60405180910390a35050565b6000818310611ae75781611ae9565b825b9392505050565b6001600160a01b038216600090815260016020526040902054611b14908290612337565b6001600160a01b03831660009081526001602052604081209190915554611b3c908290612337565b60009081556040516001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611acc908590611e7e565b600082611b898382612297565b91508110156108075760405162461bcd60e51b815260040161039590612125565b600060208284031215611bbb578081fd5b8135611ae9816123fe565b600060208284031215611bd7578081fd5b8151611ae9816123fe565b60008060408385031215611bf4578081fd5b8235611bff816123fe565b91506020830135611c0f816123fe565b809150509250929050565b600080600060608486031215611c2e578081fd5b8335611c39816123fe565b92506020840135611c49816123fe565b929592945050506040919091013590565b600080600080600080600060e0888a031215611c74578283fd5b8735611c7f816123fe565b96506020880135611c8f816123fe565b95506040880135945060608801359350608088013560ff81168114611cb2578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611ce1578182fd5b8235611cec816123fe565b946020939093013593505050565b600060208284031215611d0b578081fd5b81518015158114611ae9578182fd5b600060208284031215611d2b578081fd5b5051919050565b600080600080600060808688031215611d49578081fd5b85359450602086013593506040860135611d62816123fe565b9250606086013567ffffffffffffffff80821115611d7e578283fd5b818801915088601f830112611d91578283fd5b813581811115611d9f578384fd5b896020828501011115611db0578384fd5b9699959850939650602001949392505050565b60008251611dd5818460208701612373565b9190910192915050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b600060018060a01b038716825285602083015284604083015260806060830152826080830152828460a084013781830160a090810191909152601f909201601f19160101949350505050565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082528251806020840152611ef8816040850160208701612373565b601f01601f19169190910160400192915050565b60208082526015908201527464732d6d6174682d7375622d756e646572666c6f7760581b604082015260600190565b6020808252601f908201527f50616c696e64726f6d6556323a20494e56414c49445f5349474e415455524500604082015260600190565b60208082526010908201526f737761703a20494e56414c49445f544f60801b604082015260600190565b60208082526028908201527f50616c696e64726f6d6556323a20494e53554646494349454e545f4f555450556040820152671517d05353d5539560c21b606082015260800190565b60208082526023908201527f6d696e743a20494e53554646494349454e545f4c49515549444954595f4d494e60408201526215115160ea1b606082015260800190565b60208082526024908201527f50616c696e64726f6d6556323a20494e53554646494349454e545f4c495155496040820152634449545960e01b606082015260800190565b6020808252601e908201527f5f736166655472616e736665723a205452414e534645525f4641494c45440000604082015260600190565b60208082526014908201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604082015260600190565b6020808252600c908201526b1b1bd8dace881313d0d2d15160a21b604082015260600190565b60208082526015908201527414185b1a5b991c9bdb59558c8e8811561412549151605a1b604082015260600190565b60208082526014908201527364732d6d6174682d6164642d6f766572666c6f7760601b604082015260600190565b60208082526015908201527434b734ba34b0b634bd329d102327a92124a22222a760591b604082015260600190565b60208082526023908201527f6275726e3a20494e53554646494349454e545f4c49515549444954595f42555260408201526213915160ea1b606082015260800190565b6020808252601f908201527f737761703a20494e53554646494349454e545f494e5055545f414d4f554e5400604082015260600190565b602080825260079082015266737761703a204b60c81b604082015260600190565b6001600160701b0392831681529116602082015260400190565b6001600160701b03938416815291909216602082015263ffffffff909116604082015260600190565b918252602082015260400190565b93845260208401929092526040830152606082015260800190565b60ff91909116815260200190565b600082198211156122aa576122aa6123d2565b500190565b60006001600160701b03808416806122c9576122c96123e8565b92169190910492915050565b6000826122e4576122e46123e8565b500490565b60006001600160701b038083168185168183048111821515161561230f5761230f6123d2565b02949350505050565b6000816000190483118215151615612332576123326123d2565b500290565b600082821015612349576123496123d2565b500390565b600063ffffffff8381169083168181101561236b5761236b6123d2565b039392505050565b60005b8381101561238e578181015183820152602001612376565b8381111561239d576000848401525b50505050565b60006000198214156123b7576123b76123d2565b5060010190565b6000826123cd576123cd6123e8565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6001600160a01b038116811461241357600080fd5b5056fea2646970667358221220b0abfc0a072ec5f96f41254921732e5177d7ca990b30fb488eb062c985189b0b64736f6c63430008000033";

export class PalindromeExchange__factory extends ContractFactory {
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
  ): Promise<PalindromeExchange> {
    return super.deploy(overrides || {}) as Promise<PalindromeExchange>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PalindromeExchange {
    return super.attach(address) as PalindromeExchange;
  }
  connect(signer: Signer): PalindromeExchange__factory {
    return super.connect(signer) as PalindromeExchange__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PalindromeExchangeInterface {
    return new utils.Interface(_abi) as PalindromeExchangeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PalindromeExchange {
    return new Contract(address, _abi, signerOrProvider) as PalindromeExchange;
  }
}
