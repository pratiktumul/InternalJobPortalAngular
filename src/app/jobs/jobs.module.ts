import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { JobsRoutingModule } from './jobs-routing.module';
import { JoblistComponent } from './joblist/joblist.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [JoblistComponent,],
  imports: [CommonModule, JobsRoutingModule, NgxPaginationModule, PipesModule, FormsModule],
})
export class JobsModule { }
