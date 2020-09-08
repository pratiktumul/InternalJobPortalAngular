import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { HrportalRoutingModule } from './hrportal-routing.module';
import { HrpanelComponent } from './hrpanel/hrpanel.component';
import { ApplicationdetailComponent } from './applicationdetail/applicationdetail.component';

@NgModule({
  declarations: [HrpanelComponent, ApplicationdetailComponent],
  imports: [
    CommonModule,
    HrportalRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class HrportalModule { }
