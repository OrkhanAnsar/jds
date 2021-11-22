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
    wallet: string;
    sum: number;
    direction: string; // 0 - Deposit, 1 - Withdraw
}