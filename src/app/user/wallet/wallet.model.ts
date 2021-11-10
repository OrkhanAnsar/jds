export interface WalletInfo {
    id: string;
    name: string;
    bank_name: string;
    status: string;
}

export interface WalletBalance {
    name: string;
    value: string;
}

export interface TopUpInfo {
    from_wallet: string;
    sum: number;
}