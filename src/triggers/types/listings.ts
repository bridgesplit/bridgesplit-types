export interface OrderUpdate {
    editType: number,
    address: string,
    version: number,
    nonce: string,
    market: string,
    owner: string,
    wallet: string,
    side: number,
    size: number,
    price: number,
    state: number,
    initTime: number,
    lastEditTime: number,
    nftMint: string,
    poolMint: string,
}

export interface WalletUpdate {
    editType: number,
    address: string,
    version: number,
    owner: string,
    balance: number,
}