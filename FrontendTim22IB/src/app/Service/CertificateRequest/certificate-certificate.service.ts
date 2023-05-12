import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApprovalOfRequestDTO, CertificateRequest } from 'src/app/Model/CertificateRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificateCertificateService {

  constructor(private http: HttpClient) { }

  requestCertificate(request: CertificateRequest): Observable<any> {
    return this.http.post<any>(environment.apiHost + "api/certificateRequest/newRequest", request);
  }

  getAllRequests(userId: string): Observable<any> {
    return this.http.get<any>(environment.apiHost + "api/certificateRequest/" + userId);
  }

  getAllRequestsForIssuer(issuerId: string): Observable<any> {
    return this.http.get<any>(environment.apiHost + "api/certificateRequest/issuer/" + issuerId);
  }

  getAllRequestsForAdmin(): Observable<any> {
    return this.http.get<any>(environment.apiHost + "api/certificateRequest/allRequests");
  }

  acceptanceOfRequest(requestId: string, approval: ApprovalOfRequestDTO): Observable<any> {
    return this.http.post<any>(environment.apiHost + "api/certificateRequest/acceptance/" + requestId, approval);
  }
}
