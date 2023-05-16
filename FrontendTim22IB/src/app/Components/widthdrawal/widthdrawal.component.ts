import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CertificateWithdrawalDTO } from 'src/app/Model/CertificateRequest';
import { CertificateService } from 'src/app/Service/Certificate/certificate.service';

@Component({
  selector: 'app-widthdrawal',
  templateUrl: './widthdrawal.component.html',
  styleUrls: ['./widthdrawal.component.css']
})
export class WidthdrawalComponent {

  constructor (private certificateService: CertificateService) {}

  withdrawalForm = new FormGroup({
    serialNumber: new FormControl('')
  })
  
  withdraw(): void {
    const withdrawCert: CertificateWithdrawalDTO = { 
      email: "treba dodati",
      reasonOfWithdrawal: "treba dodati",
    };
    this.certificateService.withdrawCertificate( this.withdrawalForm.value.serialNumber!.toString(), withdrawCert);
  }
}
