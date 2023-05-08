export interface Certificate{
    id: number;
    serialNumber: string;
    issuerSerialNumber: string;
    validFrom: string;
    validTo: string;
    status: string;
    certificateType: string;
    email: string;
}

export interface CertificateWithdrawal{
    email: string;
    reasonOfWithdrawal: string
}