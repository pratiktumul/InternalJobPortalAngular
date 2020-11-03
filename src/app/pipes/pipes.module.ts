import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { OrderPipe } from './order.pipe';
import { FilterPipe } from './filter.pipe';
import { SkillfilterPipe } from './skillfilter.pipe';

@NgModule({
  declarations: [SortPipe, OrderPipe, FilterPipe, SkillfilterPipe,],
  imports: [CommonModule],
  exports: [SortPipe, OrderPipe, FilterPipe,SkillfilterPipe],
})
export class PipesModule { }
