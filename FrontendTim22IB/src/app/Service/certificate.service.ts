import { Injectable } from '@angular/core';
import { Certificate } from '../Model/Certificate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }

  public getAllCertificates(): Observable<any>{
    return this.http.get<any>(environment.apiHost + "/api/certificate");
  }

  public checkIfValid(serialNumber: string): Observable<any>{
    return this.http.get<any>(environment.apiHost + "/valid/" + serialNumber);
  }

  public withdrawCertificate(serialNumber: string): Observable<any>{
    return this.http.get<any>(environment.apiHost + "/withdraw/" + serialNumber);
  }

  public downloadCertificate(serialNumber: string): Observable<any>{
    return this.http.get<any>(environment.apiHost + "/download/" + serialNumber);
  }

  
}
