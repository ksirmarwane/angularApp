import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import {PlayoutComponent} from './playout/playout.component';
import {MaterialDesignModule} from "../material-design/material-design.module";

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    PlayoutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialDesignModule

  ]
})
export class PublicModule {
}
