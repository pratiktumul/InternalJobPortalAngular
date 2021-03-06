import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [ContactComponent, AboutComponent, PageComponent],
  imports: [
    CommonModule,
    StaticPagesRoutingModule
  ]
})
export class StaticPagesModule { }
