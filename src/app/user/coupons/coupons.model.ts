export interface Coupon {
    id: number;
    name: string;
    desc: string;
    short_desc: string;
    exp_date: string;
    price: number;
    type: number;
    vendor: number
}

export interface Vendor {
    user: number,
    email: string,
    state: string,
    city: string,
    address: string,
    postal_code: string,
    is_registered_on_dwolla: boolean,
    name: string,
    desc: string,
    website: string,
    rating: string,
    photos: number[]
}