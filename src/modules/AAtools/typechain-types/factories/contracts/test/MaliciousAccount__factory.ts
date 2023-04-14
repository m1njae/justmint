/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MaliciousAccount,
  MaliciousAccountInterface,
} from "../../../contracts/test/MaliciousAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_ep",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260405161034a38038061034a83398101604081905261002291610047565b600080546001600160a01b0319166001600160a01b0392909216919091179055610077565b60006020828403121561005957600080fd5b81516001600160a01b038116811461007057600080fd5b9392505050565b6102c4806100866000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633a871cdd14610030575b600080fd5b61004361003e3660046101a1565b610055565b60405190815260200160405180910390f35b600080546040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99084906024016000604051808303818588803b1580156100c257600080fd5b505af11580156100d6573d6000803e3d6000fd5b505050505060008460c001358560a0013586608001356100f69190610224565b6101009190610224565b9050600061010e828561023c565b9050600061012161010088013583610277565b905086602001358114610194576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f5265766572742061667465722066697273742076616c69646174696f6e000000604482015260640160405180910390fd5b5060009695505050505050565b6000806000606084860312156101b657600080fd5b833567ffffffffffffffff8111156101cd57600080fd5b840161016081870312156101e057600080fd5b95602085013595506040909401359392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115610237576102376101f5565b500190565b600082610272577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082821015610289576102896101f5565b50039056fea2646970667358221220233c1b53bed3630405955a2809bf977fcd3053b67e56cf39bd460d18cc03844c64736f6c634300080f0033";

type MaliciousAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MaliciousAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MaliciousAccount__factory extends ContractFactory {
  constructor(...args: MaliciousAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ep: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<MaliciousAccount> {
    return super.deploy(_ep, overrides || {}) as Promise<MaliciousAccount>;
  }
  override getDeployTransaction(
    _ep: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ep, overrides || {});
  }
  override attach(address: string): MaliciousAccount {
    return super.attach(address) as MaliciousAccount;
  }
  override connect(signer: Signer): MaliciousAccount__factory {
    return super.connect(signer) as MaliciousAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaliciousAccountInterface {
    return new utils.Interface(_abi) as MaliciousAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MaliciousAccount {
    return new Contract(address, _abi, signerOrProvider) as MaliciousAccount;
  }
}
