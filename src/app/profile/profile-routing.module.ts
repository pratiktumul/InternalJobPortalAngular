import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { JobapplicationComponent } from './jobapplication/jobapplication.component';
import { AuthGuard } from '../Guards/auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { TotalappliedjobsComponent } from './totalappliedjobs/totalappliedjobs.component';
import { AddjobsComponent } from './addjobs/addjobs.component';
import { SuggestedjobsComponent } from './suggestedjobs/suggestedjobs.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { role: ['User'] },
  },
  {
    path: 'applicationform',
    component: JobapplicationComponent,
    canActivate: [AuthGuard],
    data: { role: ['User'] },
  },
  {
    path: 'dashboard',
    component: UserdashboardComponent,
    canActivate: [AuthGuard],
    data: { role: ['User'] },
  },
  {
    path: 'appliedjobs',
    component: TotalappliedjobsComponent,
    canActivate: [AuthGuard],
    data: { role: ['User'] },
  },
  {
    path: 'suggestedjobs',
    component: SuggestedjobsComponent,
    canActivate: [AuthGuard],
    data: { role: ['User'] },
  },
  {
    path: 'adminpanel',
    component: AdminPanelComponent,
    canActivate: [AuthGuard],
    data: { role: ['Admin'] },
  },
  {
    path: 'addjobs',
    component: AddjobsComponent,
    canActivate: [AuthGuard],
    data: { role: ['Admin'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
