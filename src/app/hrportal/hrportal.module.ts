import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrportalRoutingModule } from './hrportal-routing.module';
import { HrpanelComponent } from './hrpanel/hrpanel.component';
import { ApplicationdetailComponent } from './applicationdetail/applicationdetail.component';
import { PipesModule } from '../pipes/pipes.module';
import { JobreferalsComponent } from './jobreferals/jobreferals.component';

@NgModule({
  declarations: [HrpanelComponent, ApplicationdetailComponent, JobreferalsComponent],
  imports: [
    CommonModule,
    HrportalRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    PipesModule,
    FormsModule
  ]
})
export class HrportalModule { }
