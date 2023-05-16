import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CertificateRequestDTO } from 'src/app/Model/CertificateRequest';
import { CertificateCertificateService } from 'src/app/Service/CertificateRequest/certificate-certificate.service';

@Component({
  selector: 'app-new-requset',
  templateUrl: './new-requset.component.html',
  styleUrls: ['./new-requset.component.css']
})
export class NewRequsetComponent {

  constructor(private requestService: CertificateCertificateService) {}


  requestForm = new FormGroup({
    type: new FormControl(''),
    issuerSerialNumber: new FormControl(''),
  })
  newRequest(): void {
    const newrequest: CertificateRequestDTO = {
      type: this.requestForm.value.type!,
      email: "peraperic@gmail.com",
      issuerSerialNumber: this.requestForm.value.issuerSerialNumber!,
      requestDate: Date.now().toString(),
    };

    this.requestService.requestCertificate(newrequest);
    
  }
}