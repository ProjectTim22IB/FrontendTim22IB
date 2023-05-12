import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CertificateWithdrawalDTO } from 'src/app/Model/CertificateRequest';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }

  getAllCertificates(): Observable<any> {
    return this.http.get<any>(environment.apiHost + "api/certificate");
  }

  checkIfValid(serialNumber: string): Observable<any> {
    return this.http.get<any>(environment.apiHost + "api/certificate/valid/" + serialNumber);
  }

  withdrawCertificate(serialNumber: string, withdrawal: CertificateWithdrawalDTO): Observable<any> {
    return this.http.put<any>(environment.apiHost + "api/certificate/withdraw/" + serialNumber, withdrawal);
  }

  downloadCertificate(serialNumber: string): Observable<any> {
    return this.http.get<any>(environment.apiHost + "api/certificate/download/" + serialNumber);
  }

  checkCertificateValidity(): Observable<any> {
    return this.http.get<any>(environment.apiHost + "api/certificate/valid");
  }
}
