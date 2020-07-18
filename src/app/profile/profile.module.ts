import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';
import { JobapplicationService } from './jobapplication.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    ProfileComponent,
    JobapplicationComponent,
    AdminPanelComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [JobapplicationService],
})
export class ProfileModule {}
