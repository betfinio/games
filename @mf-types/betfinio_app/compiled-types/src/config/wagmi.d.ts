import { type Chain } from 'viem';
export declare const chains: [Chain];
declare const config: import("wagmi").Config;
export default config;
export declare const archiveClient: {
    account: undefined;
    batch?: import("viem").ClientConfig["batch"] | undefined;
    cacheTime: number;
    ccipRead?: import("viem").ClientConfig["ccipRead"] | undefined;
    chain: Chain;
    key: string;
    name: string;
    pollingInterval: number;
    request: import("viem").EIP1193RequestFn<import("viem").PublicRpcSchema>;
    transport: import("viem").TransportConfig<"http", import("viem").EIP1193RequestFn> & {
        fetchOptions?: import("viem").HttpTransportConfig["fetchOptions"] | undefined;
        url?: string | undefined;
    };
    type: string;
    uid: string;
    call: (parameters: import("viem").CallParameters<Chain>) => Promise<import("viem").CallReturnType>;
    createBlockFilter: () => Promise<import("viem").CreateBlockFilterReturnType>;
    createContractEventFilter: <const abi extends import("viem").Abi | readonly unknown[], eventName extends import("viem").ContractEventName<abi> | undefined, args extends import("viem").MaybeExtractEventArgsFromAbi<abi, eventName> | undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").CreateContractEventFilterParameters<abi, eventName, args, strict, fromBlock, toBlock>) => Promise<import("viem").CreateContractEventFilterReturnType<abi, eventName, args, strict, fromBlock, toBlock>>;
    createEventFilter: <const abiEvent extends import("viem").AbiEvent | undefined = undefined, const abiEvents extends readonly import("viem").AbiEvent[] | readonly unknown[] | undefined = abiEvent extends import("viem").AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, _EventName extends string | undefined = import("viem").MaybeAbiEventName<abiEvent>, _Args extends import("viem").MaybeExtractEventArgsFromAbi<abiEvents, _EventName> | undefined = undefined>(args?: import("viem").CreateEventFilterParameters<abiEvent, abiEvents, strict, fromBlock, toBlock, _EventName, _Args> | undefined) => Promise<import("viem").CreateEventFilterReturnType<abiEvent, abiEvents, strict, fromBlock, toBlock, _EventName, _Args>>;
    createPendingTransactionFilter: () => Promise<import("viem").CreatePendingTransactionFilterReturnType>;
    estimateContractGas: <chain extends Chain | undefined, const abi extends import("viem").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "nonpayable" | "payable">, args extends import("viem").ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>>(args: import("viem").EstimateContractGasParameters<abi, functionName, args, chain>) => Promise<import("viem").EstimateContractGasReturnType>;
    estimateGas: (args: import("viem").EstimateGasParameters<Chain>) => Promise<import("viem").EstimateGasReturnType>;
    getBalance: (args: import("viem").GetBalanceParameters) => Promise<import("viem").GetBalanceReturnType>;
    getBlobBaseFee: () => Promise<import("viem").GetBlobBaseFeeReturnType>;
    getBlock: <includeTransactions extends boolean = false, blockTag extends import("viem").BlockTag = "latest">(args?: import("viem").GetBlockParameters<includeTransactions, blockTag> | undefined) => Promise<{
        number: blockTag extends "pending" ? null : bigint;
        hash: blockTag extends "pending" ? null : `0x${string}`;
        nonce: blockTag extends "pending" ? null : `0x${string}`;
        logsBloom: blockTag extends "pending" ? null : `0x${string}`;
        baseFeePerGas: bigint | null;
        blobGasUsed: bigint;
        difficulty: bigint;
        excessBlobGas: bigint;
        extraData: import("viem").Hex;
        gasLimit: bigint;
        gasUsed: bigint;
        miner: import("viem").Address;
        mixHash: import("viem").Hash;
        parentHash: import("viem").Hash;
        receiptsRoot: import("viem").Hex;
        sealFields: import("viem").Hex[];
        sha3Uncles: import("viem").Hash;
        size: bigint;
        stateRoot: import("viem").Hash;
        timestamp: bigint;
        totalDifficulty: bigint | null;
        transactionsRoot: import("viem").Hash;
        uncles: import("viem").Hash[];
        withdrawals?: import("viem").Withdrawal[] | undefined;
        withdrawalsRoot?: import("viem").Hex | undefined;
        transactions: includeTransactions extends true ? ({
            chainId?: number | undefined;
            yParity?: undefined;
            from: import("viem").Address;
            gas: bigint;
            hash: import("viem").Hash;
            input: import("viem").Hex;
            nonce: number;
            r: import("viem").Hex;
            s: import("viem").Hex;
            to: import("viem").Address | null;
            typeHex: import("viem").Hex | null;
            v: bigint;
            value: bigint;
            accessList?: undefined;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            type: "legacy";
            gasPrice: bigint;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
        } | {
            chainId: number;
            yParity: number;
            from: import("viem").Address;
            gas: bigint;
            hash: import("viem").Hash;
            input: import("viem").Hex;
            nonce: number;
            r: import("viem").Hex;
            s: import("viem").Hex;
            to: import("viem").Address | null;
            typeHex: import("viem").Hex | null;
            v: bigint;
            value: bigint;
            accessList: import("viem").AccessList;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            type: "eip2930";
            gasPrice: bigint;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
        } | {
            chainId: number;
            yParity: number;
            from: import("viem").Address;
            gas: bigint;
            hash: import("viem").Hash;
            input: import("viem").Hex;
            nonce: number;
            r: import("viem").Hex;
            s: import("viem").Hex;
            to: import("viem").Address | null;
            typeHex: import("viem").Hex | null;
            v: bigint;
            value: bigint;
            accessList: import("viem").AccessList;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            type: "eip1559";
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
        } | {
            chainId: number;
            yParity: number;
            from: import("viem").Address;
            gas: bigint;
            hash: import("viem").Hash;
            input: import("viem").Hex;
            nonce: number;
            r: import("viem").Hex;
            s: import("viem").Hex;
            to: import("viem").Address | null;
            typeHex: import("viem").Hex | null;
            v: bigint;
            value: bigint;
            accessList: import("viem").AccessList;
            authorizationList?: undefined;
            blobVersionedHashes: readonly import("viem").Hex[];
            type: "eip4844";
            gasPrice?: undefined;
            maxFeePerBlobGas: bigint;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
        } | {
            chainId: number;
            yParity: number;
            from: import("viem").Address;
            gas: bigint;
            hash: import("viem").Hash;
            input: import("viem").Hex;
            nonce: number;
            r: import("viem").Hex;
            s: import("viem").Hex;
            to: import("viem").Address | null;
            typeHex: import("viem").Hex | null;
            v: bigint;
            value: bigint;
            accessList: import("viem").AccessList;
            authorizationList: import("viem/experimental").SignedAuthorizationList;
            blobVersionedHashes?: undefined;
            type: "eip7702";
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas: bigint;
            maxPriorityFeePerGas: bigint;
            blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
            blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
            transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
        })[] : `0x${string}`[];
    }>;
    getBlockNumber: (args?: import("viem").GetBlockNumberParameters | undefined) => Promise<import("viem").GetBlockNumberReturnType>;
    getBlockTransactionCount: (args?: import("viem").GetBlockTransactionCountParameters | undefined) => Promise<import("viem").GetBlockTransactionCountReturnType>;
    getBytecode: (args: import("viem").GetBytecodeParameters) => Promise<import("viem").GetBytecodeReturnType>;
    getChainId: () => Promise<import("viem").GetChainIdReturnType>;
    getCode: (args: import("viem").GetBytecodeParameters) => Promise<import("viem").GetBytecodeReturnType>;
    getContractEvents: <const abi extends import("viem").Abi | readonly unknown[], eventName extends import("viem").ContractEventName<abi> | undefined = undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetContractEventsParameters<abi, eventName, strict, fromBlock, toBlock>) => Promise<import("viem").GetContractEventsReturnType<abi, eventName, strict, fromBlock, toBlock>>;
    getEip712Domain: (args: import("viem").GetEip712DomainParameters) => Promise<import("viem").GetEip712DomainReturnType>;
    getEnsAddress: (args: import("viem").GetEnsAddressParameters) => Promise<import("viem").GetEnsAddressReturnType>;
    getEnsAvatar: (args: import("viem").GetEnsAvatarParameters) => Promise<import("viem").GetEnsAvatarReturnType>;
    getEnsName: (args: import("viem").GetEnsNameParameters) => Promise<import("viem").GetEnsNameReturnType>;
    getEnsResolver: (args: import("viem").GetEnsResolverParameters) => Promise<import("viem").GetEnsResolverReturnType>;
    getEnsText: (args: import("viem").GetEnsTextParameters) => Promise<import("viem").GetEnsTextReturnType>;
    getFeeHistory: (args: import("viem").GetFeeHistoryParameters) => Promise<import("viem").GetFeeHistoryReturnType>;
    estimateFeesPerGas: <chainOverride extends Chain | undefined = undefined, type extends import("viem").FeeValuesType = "eip1559">(args?: import("viem").EstimateFeesPerGasParameters<Chain, chainOverride, type> | undefined) => Promise<import("viem").EstimateFeesPerGasReturnType<type>>;
    getFilterChanges: <filterType extends import("viem").FilterType, const abi extends import("viem").Abi | readonly unknown[] | undefined, eventName extends string | undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetFilterChangesParameters<filterType, abi, eventName, strict, fromBlock, toBlock>) => Promise<import("viem").GetFilterChangesReturnType<filterType, abi, eventName, strict, fromBlock, toBlock>>;
    getFilterLogs: <const abi extends import("viem").Abi | readonly unknown[] | undefined, eventName extends string | undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetFilterLogsParameters<abi, eventName, strict, fromBlock, toBlock>) => Promise<import("viem").GetFilterLogsReturnType<abi, eventName, strict, fromBlock, toBlock>>;
    getGasPrice: () => Promise<import("viem").GetGasPriceReturnType>;
    getLogs: <const abiEvent extends import("viem").AbiEvent | undefined = undefined, const abiEvents extends readonly import("viem").AbiEvent[] | readonly unknown[] | undefined = abiEvent extends import("viem").AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined, fromBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined, toBlock extends import("viem").BlockNumber | import("viem").BlockTag | undefined = undefined>(args?: import("viem").GetLogsParameters<abiEvent, abiEvents, strict, fromBlock, toBlock> | undefined) => Promise<import("viem").GetLogsReturnType<abiEvent, abiEvents, strict, fromBlock, toBlock>>;
    getProof: (args: import("viem").GetProofParameters) => Promise<import("viem").GetProofReturnType>;
    estimateMaxPriorityFeePerGas: <chainOverride extends Chain | undefined = undefined>(args?: {
        chain?: chainOverride | null | undefined;
    } | undefined) => Promise<import("viem").EstimateMaxPriorityFeePerGasReturnType>;
    getStorageAt: (args: import("viem").GetStorageAtParameters) => Promise<import("viem").GetStorageAtReturnType>;
    getTransaction: <blockTag extends import("viem").BlockTag = "latest">(args: import("viem").GetTransactionParameters<blockTag>) => Promise<{
        chainId?: number | undefined;
        yParity?: undefined;
        from: import("viem").Address;
        gas: bigint;
        hash: import("viem").Hash;
        input: import("viem").Hex;
        nonce: number;
        r: import("viem").Hex;
        s: import("viem").Hex;
        to: import("viem").Address | null;
        typeHex: import("viem").Hex | null;
        v: bigint;
        value: bigint;
        accessList?: undefined;
        authorizationList?: undefined;
        blobVersionedHashes?: undefined;
        type: "legacy";
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
        blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
        transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
    } | {
        chainId: number;
        yParity: number;
        from: import("viem").Address;
        gas: bigint;
        hash: import("viem").Hash;
        input: import("viem").Hex;
        nonce: number;
        r: import("viem").Hex;
        s: import("viem").Hex;
        to: import("viem").Address | null;
        typeHex: import("viem").Hex | null;
        v: bigint;
        value: bigint;
        accessList: import("viem").AccessList;
        authorizationList?: undefined;
        blobVersionedHashes?: undefined;
        type: "eip2930";
        gasPrice: bigint;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
        blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
        transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
    } | {
        chainId: number;
        yParity: number;
        from: import("viem").Address;
        gas: bigint;
        hash: import("viem").Hash;
        input: import("viem").Hex;
        nonce: number;
        r: import("viem").Hex;
        s: import("viem").Hex;
        to: import("viem").Address | null;
        typeHex: import("viem").Hex | null;
        v: bigint;
        value: bigint;
        accessList: import("viem").AccessList;
        authorizationList?: undefined;
        blobVersionedHashes?: undefined;
        type: "eip1559";
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
        blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
        transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
    } | {
        chainId: number;
        yParity: number;
        from: import("viem").Address;
        gas: bigint;
        hash: import("viem").Hash;
        input: import("viem").Hex;
        nonce: number;
        r: import("viem").Hex;
        s: import("viem").Hex;
        to: import("viem").Address | null;
        typeHex: import("viem").Hex | null;
        v: bigint;
        value: bigint;
        accessList: import("viem").AccessList;
        authorizationList?: undefined;
        blobVersionedHashes: readonly import("viem").Hex[];
        type: "eip4844";
        gasPrice?: undefined;
        maxFeePerBlobGas: bigint;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
        blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
        transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
    } | {
        chainId: number;
        yParity: number;
        from: import("viem").Address;
        gas: bigint;
        hash: import("viem").Hash;
        input: import("viem").Hex;
        nonce: number;
        r: import("viem").Hex;
        s: import("viem").Hex;
        to: import("viem").Address | null;
        typeHex: import("viem").Hex | null;
        v: bigint;
        value: bigint;
        accessList: import("viem").AccessList;
        authorizationList: import("viem/experimental").SignedAuthorizationList;
        blobVersionedHashes?: undefined;
        type: "eip7702";
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas: bigint;
        maxPriorityFeePerGas: bigint;
        blockNumber: (blockTag extends "pending" ? true : false) extends infer T ? T extends (blockTag extends "pending" ? true : false) ? T extends true ? null : bigint : never : never;
        blockHash: (blockTag extends "pending" ? true : false) extends infer T_1 ? T_1 extends (blockTag extends "pending" ? true : false) ? T_1 extends true ? null : `0x${string}` : never : never;
        transactionIndex: (blockTag extends "pending" ? true : false) extends infer T_2 ? T_2 extends (blockTag extends "pending" ? true : false) ? T_2 extends true ? null : number : never : never;
    }>;
    getTransactionConfirmations: (args: import("viem").GetTransactionConfirmationsParameters<Chain>) => Promise<import("viem").GetTransactionConfirmationsReturnType>;
    getTransactionCount: (args: import("viem").GetTransactionCountParameters) => Promise<import("viem").GetTransactionCountReturnType>;
    getTransactionReceipt: (args: import("viem").GetTransactionReceiptParameters) => Promise<import("viem").TransactionReceipt>;
    multicall: <const contracts extends readonly unknown[], allowFailure extends boolean = true>(args: import("viem").MulticallParameters<contracts, allowFailure>) => Promise<import("viem").MulticallReturnType<contracts, allowFailure>>;
    prepareTransactionRequest: <const request extends import("viem").PrepareTransactionRequestRequest<Chain, chainOverride>, chainOverride extends Chain | undefined = undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(args: import("viem").PrepareTransactionRequestParameters<Chain, import("viem").Account | undefined, chainOverride, accountOverride, request>) => Promise<import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<Chain, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<Chain, chainOverride> extends infer T_1 ? T_1 extends import("viem").DeriveChain<Chain, chainOverride> ? T_1 extends Chain ? {
        chain: T_1;
    } : {
        chain?: undefined;
    } : never : never) & (import("viem").DeriveAccount<import("viem").Account | undefined, accountOverride> extends infer T_2 ? T_2 extends import("viem").DeriveAccount<import("viem").Account | undefined, accountOverride> ? T_2 extends import("viem").Account ? {
        account: T_2;
        from: import("viem").Address;
    } : {
        account?: undefined;
        from?: undefined;
    } : never : never), import("viem").IsNever<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
        chainId?: number | undefined;
    }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "chainId" | "gas" | "nonce" | "blobVersionedHashes" | "type" | "fees") extends infer T_8 ? T_8 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "chainId" | "gas" | "nonce" | "blobVersionedHashes" | "type" | "fees") ? T_8 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_8 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">) extends infer T ? { [K in keyof T]: (import("viem").UnionRequiredBy<Extract<import("viem").UnionOmit<import("viem").ExtractChainFormatterParameters<import("viem").DeriveChain<Chain, chainOverride>, "transactionRequest", import("viem").TransactionRequest>, "from"> & (import("viem").DeriveChain<Chain, chainOverride> extends infer T_1 ? T_1 extends import("viem").DeriveChain<Chain, chainOverride> ? T_1 extends Chain ? {
        chain: T_1;
    } : {
        chain?: undefined;
    } : never : never) & (import("viem").DeriveAccount<import("viem").Account | undefined, accountOverride> extends infer T_2 ? T_2 extends import("viem").DeriveAccount<import("viem").Account | undefined, accountOverride> ? T_2 extends import("viem").Account ? {
        account: T_2;
        from: import("viem").Address;
    } : {
        account?: undefined;
        from?: undefined;
    } : never : never), import("viem").IsNever<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)> extends true ? unknown : import("viem").ExactPartial<((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_3 ? T_3 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_3 extends "legacy" ? import("viem").TransactionRequestLegacy : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_4 ? T_4 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_4 extends "eip1559" ? import("viem").TransactionRequestEIP1559 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_5 ? T_5 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_5 extends "eip2930" ? import("viem").TransactionRequestEIP2930 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_6 ? T_6 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_6 extends "eip4844" ? import("viem").TransactionRequestEIP4844 : never : never : never) | ((request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) extends infer T_7 ? T_7 extends (request["type"] extends string | undefined ? request["type"] : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)> extends "legacy" ? unknown : import("viem").GetTransactionType<request, (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").FeeValuesLegacy) | (import("viem").ValueOf<Required<{ [K_1 in keyof request]: K_1 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_1 : undefined; }>> extends string ? import("viem").TransactionSerializableLegacy : never) | (import("viem").ValueOf<Required<{ [K_2 in keyof request]: K_2 extends keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "legacy"> ? K_2 : undefined; }>> extends string ? import("viem").TransactionRequestLegacy : never) ? "legacy" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: undefined;
        maxFeePerBlobGas?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & (import("viem").OneOf<{
        maxFeePerGas: import("viem").FeeValuesEIP1559["maxFeePerGas"];
    } | {
        maxPriorityFeePerGas: import("viem").FeeValuesEIP1559["maxPriorityFeePerGas"];
    }, import("viem").FeeValuesEIP1559> & {
        accessList?: import("viem").TransactionSerializableEIP2930["accessList"] | undefined;
    })) | (import("viem").ValueOf<Required<{ [K_3 in keyof request]: K_3 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_3 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP1559 : never) | (import("viem").ValueOf<Required<{ [K_4 in keyof request]: K_4 extends "accessList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip1559"> ? K_4 : undefined; }>> extends string ? import("viem").TransactionRequestEIP1559 : never) ? "eip1559" : never) | (request extends ({
        accessList?: import("viem").AccessList | undefined;
        authorizationList?: undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        gasPrice?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesLegacy> & {
        accessList: import("viem").TransactionSerializableEIP2930["accessList"];
    }) | (import("viem").ValueOf<Required<{ [K_5 in keyof request]: K_5 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_5 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP2930 : never) | (import("viem").ValueOf<Required<{ [K_6 in keyof request]: K_6 extends "accessList" | keyof import("viem").FeeValuesLegacy<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip2930"> ? K_6 : undefined; }>> extends string ? import("viem").TransactionRequestEIP2930 : never) ? "eip2930" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: undefined;
        blobs?: readonly `0x${string}`[] | readonly Uint8Array[] | undefined;
        blobVersionedHashes?: readonly `0x${string}`[] | undefined;
        maxFeePerBlobGas?: bigint | undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: false | readonly import("viem").BlobSidecar<`0x${string}`>[] | undefined;
    } & (import("viem").ExactPartial<import("viem").FeeValuesEIP4844> & import("viem").OneOf<{
        blobs: import("viem").TransactionSerializableEIP4844["blobs"];
    } | {
        blobVersionedHashes: import("viem").TransactionSerializableEIP4844["blobVersionedHashes"];
    } | {
        sidecars: import("viem").TransactionSerializableEIP4844["sidecars"];
    }, import("viem").TransactionSerializableEIP4844>)) | (import("viem").ValueOf<Required<{ [K_7 in keyof request]: K_7 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_7 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP4844 : never) | (import("viem").ValueOf<Required<{ [K_8 in keyof request]: K_8 extends "from" | "gas" | "nonce" | "to" | "value" | "accessList" | "blobVersionedHashes" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" | "blobs" | "kzg" | "sidecars" ? K_8 : undefined; }>> extends string ? import("viem").TransactionRequestEIP4844 : never) ? "eip4844" : never) | (request extends ({
        accessList?: undefined;
        authorizationList?: import("viem/experimental").SignedAuthorizationList | undefined;
        blobs?: undefined;
        blobVersionedHashes?: undefined;
        maxFeePerGas?: bigint | undefined;
        maxPriorityFeePerGas?: bigint | undefined;
        sidecars?: undefined;
    } & import("viem").ExactPartial<import("viem").FeeValuesEIP1559> & {
        authorizationList: import("viem").TransactionSerializableEIP7702["authorizationList"];
    }) | (import("viem").ValueOf<Required<{ [K_9 in keyof request]: K_9 extends "chainId" | "yParity" | "gas" | "nonce" | "r" | "s" | "to" | "v" | "value" | "accessList" | "authorizationList" | "type" | "gasPrice" | "maxFeePerBlobGas" | "maxFeePerGas" | "maxPriorityFeePerGas" | "data" ? K_9 : undefined; }>> extends string ? import("viem").TransactionSerializableEIP7702 : never) | (import("viem").ValueOf<Required<{ [K_10 in keyof request]: K_10 extends "accessList" | "authorizationList" | keyof import("viem").FeeValuesEIP1559<bigint> | keyof import("viem").TransactionRequestBase<bigint, number, "eip7702"> ? K_10 : undefined; }>> extends string ? import("viem").TransactionRequestEIP7702 : never) ? "eip7702" : never) | (request["type"] extends string | undefined ? Extract<request["type"], string> : never)>) ? T_7 extends "eip7702" ? import("viem").TransactionRequestEIP7702 : never : never : never)>> & {
        chainId?: number | undefined;
    }, (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "chainId" | "gas" | "nonce" | "blobVersionedHashes" | "type" | "fees") extends infer T_8 ? T_8 extends (request["parameters"] extends readonly import("viem").PrepareTransactionRequestParameterType[] ? request["parameters"][number] : "chainId" | "gas" | "nonce" | "blobVersionedHashes" | "type" | "fees") ? T_8 extends "fees" ? "gasPrice" | "maxFeePerGas" | "maxPriorityFeePerGas" : T_8 : never : never> & (unknown extends request["kzg"] ? {} : Pick<request, "kzg">))[K]; } : never>;
    readContract: <const abi extends import("viem").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "pure" | "view">, args extends import("viem").ContractFunctionArgs<abi, "pure" | "view", functionName>>(args: import("viem").ReadContractParameters<abi, functionName, args>) => Promise<import("viem").ReadContractReturnType<abi, functionName, args>>;
    sendRawTransaction: (args: import("viem").SendRawTransactionParameters) => Promise<import("viem").SendRawTransactionReturnType>;
    simulateContract: <const abi extends import("viem").Abi | readonly unknown[], functionName extends import("viem").ContractFunctionName<abi, "payable" | "nonpayable">, args_1 extends import("viem").ContractFunctionArgs<abi, "payable" | "nonpayable", functionName>, chainOverride extends Chain | undefined, accountOverride extends import("viem").Account | import("viem").Address | undefined = undefined>(args: import("viem").SimulateContractParameters<abi, functionName, args_1, Chain, chainOverride, accountOverride>) => Promise<import("viem").SimulateContractReturnType<abi, functionName, args_1, Chain, import("viem").Account | undefined, chainOverride, accountOverride>>;
    verifyMessage: (args: import("viem").VerifyMessageActionParameters) => Promise<import("viem").VerifyMessageActionReturnType>;
    verifySiweMessage: (args: {
        blockNumber?: bigint | undefined;
        blockTag?: import("viem").BlockTag | undefined;
        time?: Date | undefined;
        nonce?: string | undefined;
        address?: import("viem").Address | undefined;
        domain?: string | undefined;
        scheme?: string | undefined;
        message: string;
        signature: import("viem").Hex;
    }) => Promise<boolean>;
    verifyTypedData: (args: import("viem").VerifyTypedDataActionParameters) => Promise<import("viem").VerifyTypedDataActionReturnType>;
    uninstallFilter: (args: import("viem").UninstallFilterParameters) => Promise<import("viem").UninstallFilterReturnType>;
    waitForTransactionReceipt: (args: import("viem").WaitForTransactionReceiptParameters<Chain>) => Promise<import("viem").TransactionReceipt>;
    watchBlockNumber: (args: import("viem").WatchBlockNumberParameters) => import("viem").WatchBlockNumberReturnType;
    watchBlocks: <includeTransactions extends boolean = false, blockTag extends import("viem").BlockTag = "latest">(args: import("viem").WatchBlocksParameters<import("viem").HttpTransport, Chain, includeTransactions, blockTag>) => import("viem").WatchBlocksReturnType;
    watchContractEvent: <const abi extends import("viem").Abi | readonly unknown[], eventName extends import("viem").ContractEventName<abi>, strict extends boolean | undefined = undefined>(args: import("viem").WatchContractEventParameters<abi, eventName, strict, import("viem").HttpTransport>) => import("viem").WatchContractEventReturnType;
    watchEvent: <const abiEvent extends import("viem").AbiEvent | undefined = undefined, const abiEvents extends readonly import("viem").AbiEvent[] | readonly unknown[] | undefined = abiEvent extends import("viem").AbiEvent ? [abiEvent] : undefined, strict extends boolean | undefined = undefined>(args: import("viem").WatchEventParameters<abiEvent, abiEvents, strict, import("viem").HttpTransport>) => import("viem").WatchEventReturnType;
    watchPendingTransactions: (args: import("viem").WatchPendingTransactionsParameters<import("viem").HttpTransport>) => import("viem").WatchPendingTransactionsReturnType;
    extend: <const client extends {
        [x: string]: unknown;
        account?: undefined;
        batch?: undefined;
        cacheTime?: undefined;
        ccipRead?: undefined;
        chain?: undefined;
        key?: undefined;
        name?: undefined;
        pollingInterval?: undefined;
        request?: undefined;
        transport?: undefined;
        type?: undefined;
        uid?: undefined;
    } & import("viem").ExactPartial<Pick<import("viem").PublicActions<import("viem").HttpTransport, Chain, undefined>, "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getChainId" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "prepareTransactionRequest" | "readContract" | "sendRawTransaction" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<import("viem").WalletActions<Chain, undefined>, "sendTransaction" | "writeContract">>>(fn: (client: import("viem").Client<import("viem").HttpTransport, Chain, undefined, import("viem").PublicRpcSchema, import("viem").PublicActions<import("viem").HttpTransport, Chain>>) => client) => import("viem").Client<import("viem").HttpTransport, Chain, undefined, import("viem").PublicRpcSchema, { [K in keyof client]: client[K]; } & import("viem").PublicActions<import("viem").HttpTransport, Chain>>;
};
