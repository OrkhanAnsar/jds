import { CouponDetails, PurchasedCoupon } from "../coupons/coupons.model"

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

export interface Transaction {
    type: number,
    value: number,
    status: 'pending' | 'processed',
    created_at: Date,
    purchased_coupon: PurchasedCoupon,
    from_user_id: number,
    to_user_id: number,
    from_bank_id: string,
    to_bank_id: string
}