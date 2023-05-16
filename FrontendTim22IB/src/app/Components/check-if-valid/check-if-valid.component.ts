import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CertificateService } from 'src/app/Service/Certificate/certificate.service';

@Component({
  selector: 'app-check-if-valid',
  templateUrl: './check-if-valid.component.html',
  styleUrls: ['./check-if-valid.component.css']
})
export class CheckIfValidComponent {

  constructor (private certificateService: CertificateService) {}
  checkForm  = new FormGroup({
    serialNumber: new FormControl('')
  })

  check1(): void{
    this.certificateService.checkIfValid(this.checkForm.value.serialNumber!)
    //dodati u html da se ispise da li je validan
  }

  check2(): void{
    this.certificateService.checkCertificateValidity()
    //ispraviti
    
  }
}
