import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { CommonComponent } from './common/common.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';



console.log('home....');
@NgModule({
  declarations: [Page1Component, Page2Component, CommonComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatPaginatorModule
  ],
})
export class HomeModule { }
