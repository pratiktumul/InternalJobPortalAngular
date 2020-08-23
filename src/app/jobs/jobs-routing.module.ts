import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoblistComponent } from './joblist/joblist.component';
import { JobdetailComponent } from './jobdetail/jobdetail.component';

const routes: Routes = [{ path: 'joblisting', component: JoblistComponent },
{ path: 'job/:id', component: JobdetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule { }
