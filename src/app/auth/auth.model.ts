export interface LoginInfo {
    username: string;
    password: string;
};

export interface RegisterInfo {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    birthDate: string;
    gender: number;
    state: string;
    city: string;
}

export interface RegisterVendorInfo {
    name: string;
    state: string;
    email: string;
    username: string;
    password: string;
    address: string;
    postalCode: string;
    city: string;
}

export interface AuthResponse {
    id: number;
    token: string;
};