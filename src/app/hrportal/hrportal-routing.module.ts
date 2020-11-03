import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrpanelComponent } from './hrpanel/hrpanel.component';
import { AuthGuard } from '../Guards/auth.guard';
import { ApplicationdetailComponent } from './applicationdetail/applicationdetail.component';
import { JobreferalsComponent } from './jobreferals/jobreferals.component';


const routes: Routes = [
  {
    path: 'HRPanel',
    component: HrpanelComponent,
    canActivate: [AuthGuard],
    data: { role: ['HR'] }
  },
  {
    path: 'ApplicationDetails/:applicationId',
    component: ApplicationdetailComponent,
    canActivate: [AuthGuard],
    data: { role: ['HR'] }
  },
  {
    path: 'jobreferals',
    component: JobreferalsComponent,
    canActivate: [AuthGuard],
    data: { role: ['HR'] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrportalRoutingModule { }
