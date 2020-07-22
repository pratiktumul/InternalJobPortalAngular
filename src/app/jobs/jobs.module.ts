import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { JobsRoutingModule } from './jobs-routing.module';
import { JoblistComponent } from './joblist/joblist.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [JoblistComponent,],
  imports: [CommonModule, JobsRoutingModule, NgxPaginationModule, PipesModule],
})
export class JobsModule {}
