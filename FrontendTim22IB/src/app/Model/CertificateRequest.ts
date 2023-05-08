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

export interface CertificateRequestDTO{
    issuerSerialNumber: string;
    requestDate: string;
    type: string;
    email: string;
}

export interface ApprovalOfRequest{
    approved: boolean;
    reasonOfRejection: string;
    issuerEmail: string;
}



