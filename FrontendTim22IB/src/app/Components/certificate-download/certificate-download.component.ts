import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CertificateService } from 'src/app/Service/Certificate/certificate.service';

@Component({
  selector: 'app-certificate-download',
  templateUrl: './certificate-download.component.html',
  styleUrls: ['./certificate-download.component.css']
})
export class CertificateDownloadComponent {

constructor (private certificateService: CertificateService) {}

downloadFrom = new FormGroup({
  serialNumber: new FormControl('')
})

download(): void {
  this.certificateService.downloadCertificate( this.downloadFrom.value.serialNumber!)
}


}
