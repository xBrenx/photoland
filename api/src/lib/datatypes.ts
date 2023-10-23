export interface User {
    id: string,
    createdAt: Date,
    email: string,
    emailConfirmed: Boolean,
    isAdmin: Boolean,
    name: string | null,
}

export interface Error {
    error: string,
}