export interface LoginInfo {
    username: string;
    password: string;
};

export interface RegisterInfo {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    birth_date: string;
    gender: number;
    state: string;
    city: string;
}

export interface InterestsInfo {
    interest1: string;
    interest2: string;
    interest3: string;
    about: string;
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

export interface DwollaRegistrationInfo {
    address: string;
    postal_code: string;
    ssn: string;
}