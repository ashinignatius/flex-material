import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_IMPORTS, SHARED_EXPORTS } from './shared.imports';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...SHARED_IMPORTS
  ],
  exports: [
    ...SHARED_EXPORTS
  ]
})
export class SharedModule { }
