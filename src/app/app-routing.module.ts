import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsearchComponent } from './jobsearch/jobsearch.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'jobsearch', component: JobsearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
