import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/app/Model/Certificate';
import { CertificateService } from 'src/app/Service/Certificate/certificate.service';

@Component({
  selector: 'app-certificate-review',
  templateUrl: './certificate-review.component.html',
  styleUrls: ['./certificate-review.component.css']
})
export class CertificateReviewComponent implements OnInit {
  certificates: Array<Certificate> = [];
  taskArray: CertificatesContent[]=[];

  fillTable(task: CertificatesContent) {
    this.taskArray.push(task);
  }

  
  constructor(private certificateService: CertificateService) {}

  
  ngOnInit(): void {
    this.certificateService.getAllCertificates().subscribe((certs) => {
      this.certificates = certs;
      this.generateSmartTable();
    });
  }

  generateSmartTable() {
    for (let i = 0; i < this.certificates.length; i += 1) {
      this.fillTable({
        column1: this.certificates[i],
        column2: this.certificates[i + 1],
      });
    }
  }


}

  export interface CertificatesContent{
    column1: Certificate;
    column2: Certificate;
  }
    

