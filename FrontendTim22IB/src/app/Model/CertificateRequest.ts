export interface CertificateRequest{
    id: number;
    type: string;
    email: string;
    issuerSerialNumber: string;
    requestDate: string;
    status: string;
    issuerEmail: string;
    reasonOfRejection: string;
}

export interface CertificateRequestDTO{
    type: string;
    email: string;
    issuerSerialNumber: string;
    requestDate: string;
}

export interface ApprovalOfRequestDTO{
    approved: boolean;
    reasonOfRejection: string;
    issuerEmail: string;
}

export interface CertificateWithdrawalDTO{
    email: string;
    reasonOfWithdrawal: string
}