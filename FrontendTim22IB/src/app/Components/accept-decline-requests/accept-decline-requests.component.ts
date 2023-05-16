import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApprovalOfRequestDTO, CertificateRequest } from 'src/app/Model/CertificateRequest';
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

  acceptDeclineForm = new FormGroup({
    issuerEmail: new FormControl(''),
    requestId: new FormControl('')
  })

  accept(): void{
    const approval: ApprovalOfRequestDTO = {
      approved: true,
      issuerEmail: this.acceptDeclineForm.value.issuerEmail!,
      reasonOfRejection: " "
    }
    
    this.certificateRequestService.acceptanceOfRequest(this.acceptDeclineForm.value.requestId!.toString(), approval).subscribe((requests2) => {
      this.requests = requests2;
      this.generateSmartTable();
    });
    
  }

  decline(): void{
    const approval: ApprovalOfRequestDTO = {
      approved: false,
      issuerEmail: this.acceptDeclineForm.value.issuerEmail!,
      reasonOfRejection: "treba dodati ovo"
    }
    
    this.certificateRequestService.acceptanceOfRequest(this.acceptDeclineForm.value.requestId!.toString(), approval).subscribe((requests2) => {
      this.requests = requests2;
      this.generateSmartTable();
    });
  }

}

export interface RequestsContent {
  column1: CertificateRequest;
  column2: CertificateRequest;
}
