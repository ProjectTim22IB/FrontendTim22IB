export interface CertificateRequest{
    id: number;
    issuerSerialNumber: string;
    requestDate: string;
    status: string;
    type: string;
    email: string;
    issuerEmail: string;
    reasonOfRejection: string;
}

export interface RequestCertificateDTO{
    issuerSerialNumber: string;
    requestDate: string;
    type: string;
    email: string;
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