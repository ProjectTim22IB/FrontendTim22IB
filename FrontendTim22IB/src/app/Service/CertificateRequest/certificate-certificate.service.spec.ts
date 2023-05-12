import { TestBed } from '@angular/core/testing';

import { CertificateCertificateService } from './certificate-certificate.service';

describe('CertificateCertificateService', () => {
  let service: CertificateCertificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificateCertificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
