import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { JobsModule } from './jobs/jobs.module';
import { StaticPagesModule } from './static-pages/static-pages.module';
import { ProfileModule } from './profile/profile.module';
import { AuthGuard } from './Guards/auth.guard';
import { AuthInterceptor } from './Guards/auth.interceptor';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { JobserviceService } from './jobservice.service';
import { HrportalModule } from './hrportal/hrportal.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HRReportsModule } from './hr-reports/hr-reports.module';
import { ReportService } from './hr-reports/report.service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JobsearchComponent,
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    JobsModule,
    ProfileModule,
    HrportalModule,
    HRReportsModule,
    StaticPagesModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [
    AuthGuard,
    JobserviceService,
    ReportService
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
