import { Component, OnInit } from '@angular/core';
import { CertificateRequest } from 'src/app/Model/CertificateRequest';
import { CertificateCertificateService } from 'src/app/Service/CertificateRequest/certificate-certificate.service';

@Component({
  selector: 'app-accept-decline-requests',
  templateUrl: './accept-decline-requests.component.html',
  styleUrls: ['./accept-decline-requests.component.css']
})
export class AcceptDeclineRequestsComponent implements OnInit {
  requests: Array<CertificateRequest> = [];

  taskArray: RequestsContent[] = [];

  fillTable(task: RequestsContent) {
    this.taskArray.push(task);
  }

  constructor(private certificateRequestService: CertificateCertificateService) {}

  ngOnInit(): void {
    this.certificateRequestService.getAllRequestsForIssuer("1").subscribe((requests2) => {
      this.requests = requests2;
      this.generateSmartTable();
    });
  }

  generateSmartTable() {
    for (let i = 0; i < this.requests.length; i += 1) {
      this.fillTable({
        column1: this.requests[i],
        column2: this.requests[i + 1],
      });
    }
  }
}

export interface RequestsContent {
  column1: CertificateRequest;
  column2: CertificateRequest;
}
