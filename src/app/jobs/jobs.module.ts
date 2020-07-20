import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { JobsRoutingModule } from './jobs-routing.module';
import { JoblistComponent } from './joblist/joblist.component';
import { OrderByPipe } from '../pipe/order-by.pipe';


@NgModule({
  declarations: [JoblistComponent, ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    NgxPaginationModule,
    // OrderByPipe
  ]
})
export class JobsModule { }
