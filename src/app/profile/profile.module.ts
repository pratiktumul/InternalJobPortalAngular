import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';
import { JobapplicationService } from './jobapplication.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PipesModule } from '../pipes/pipes.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { DashboardService } from './dashboard.service';
import { AdminpanelService } from './adminpanel.service';
import { TotalappliedjobsComponent } from './totalappliedjobs/totalappliedjobs.component';
import { AddjobsComponent } from './addjobs/addjobs.component';
import { SuggestedjobsComponent } from './suggestedjobs/suggestedjobs.component';
import { ApproveuserComponent } from './approveuser/approveuser.component';
import { ApproveadminComponent } from './approveadmin/approveadmin.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReferraljobapplicationComponent } from './referraljobapplication/referraljobapplication.component';
import { RateskillsComponent } from './rateskills/rateskills.component';



@NgModule({
  declarations: [
    ProfileComponent,
    JobapplicationComponent,
    AdminPanelComponent,
    UserdashboardComponent,
    TotalappliedjobsComponent,
    AddjobsComponent,
    SuggestedjobsComponent,
    ApproveuserComponent,
    ApproveadminComponent,
    ReferraljobapplicationComponent,
    RateskillsComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    NgbModule,
  ],
  providers: [JobapplicationService, DashboardService, AdminpanelService],
})
export class ProfileModule { }
