import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { OrderPipe } from './order.pipe';

@NgModule({
  declarations: [SortPipe, OrderPipe,],
  imports: [CommonModule],
  exports: [SortPipe, OrderPipe,],
})
export class PipesModule {}
