export interface User{
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    password: string;
    autentificated: boolean;
    resetPasswordToken: string;
    resetPasswordTokenExpiration: string;
    passwordExpiration: string;
    role: string;
    oldPasswords: string[];
}

export interface LoginDTO{
    email: string;
    password: string;
}

export interface RegistrationUserDTO{
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export interface RequestResetPasswordDTO{
    resetEmailOrSMS: string;
}

export interface ResetPasswordDTO{
    newPassword: string;
    repeateNewPassword: string;
    code: string;
}

export interface TokensDTO{
    accessToken: string;
    refreshToken: string;
}