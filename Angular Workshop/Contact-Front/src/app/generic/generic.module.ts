import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonedaPipe } from './pipes/moneda.pipe';

@NgModule({
  declarations: [
    MonedaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [MonedaPipe]
})
export class GenericModule { }
