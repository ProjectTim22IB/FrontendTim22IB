import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CertificateReviewComponent } from './Components/certificate-review/certificate-review.component';
import { CertificateDownloadComponent } from './Components/certificate-download/certificate-download.component';
import { CheckIfValidComponent } from './Components/check-if-valid/check-if-valid.component';
import { NewRequsetComponent } from './Components/new-requset/new-requset.component';
import { AllRequestsComponent } from './Components/all-requests/all-requests.component';
import { AcceptDeclineRequestsComponent } from './Components/accept-decline-requests/accept-decline-requests.component';
import { WidthdrawalComponent } from './Components/widthdrawal/widthdrawal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    CertificateReviewComponent,
    CertificateDownloadComponent,
    CheckIfValidComponent,
    NewRequsetComponent,
    AllRequestsComponent,
    AcceptDeclineRequestsComponent,
    WidthdrawalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
