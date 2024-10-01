export interface TUserResponse {
    id: number;
    fullName: string;
    company?: string;
    email: string;
    phoneNumber: string;
    address: string;
    website?: string;
    logo?: string;
    created_at: Date;
    updated_at: Date;
}
export interface TUser {
    id?: string;
    fullName: string;
    company?: string;
    email: string;
    phoneNumber: string;
    address: string;
    website?: string;
    logo?: string;
}
export interface Tlogin {
    password: string;
    email: string;
}
