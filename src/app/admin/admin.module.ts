import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AlayoutComponent} from './alayout/alayout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductsComponent} from './products/products.component';
import {MaterialDesignModule} from "../material-design/material-design.module";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialDesignModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class AdminModule {
}
