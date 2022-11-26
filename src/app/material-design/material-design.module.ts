import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialDesignModule {
}
