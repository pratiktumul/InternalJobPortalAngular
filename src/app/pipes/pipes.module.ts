import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { OrderPipe } from './order.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [SortPipe, OrderPipe, FilterPipe,],
  imports: [CommonModule],
  exports: [SortPipe, OrderPipe, FilterPipe],
})
export class PipesModule { }
