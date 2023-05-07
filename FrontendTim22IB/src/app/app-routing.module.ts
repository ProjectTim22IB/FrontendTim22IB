import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { AcceptDeclineRequestsComponent } from './Components/accept-decline-requests/accept-decline-requests.component';
import { AllRequestsComponent } from './Components/all-requests/all-requests.component';
import { CertificateDownloadComponent } from './Components/certificate-download/certificate-download.component';
import { CertificateReviewComponent } from './Components/certificate-review/certificate-review.component';
import { CheckIfValidComponent } from './Components/check-if-valid/check-if-valid.component';
import { WidthdrawalComponent } from './Components/widthdrawal/widthdrawal.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'acceptDecline', component: AcceptDeclineRequestsComponent },
  { path: 'allRequests', component: AllRequestsComponent },
  { path: 'download', component: CertificateDownloadComponent },
  { path: 'review', component: CertificateReviewComponent },
  { path: 'validity', component: CheckIfValidComponent },
  { path: 'widthdrawal', component: WidthdrawalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
