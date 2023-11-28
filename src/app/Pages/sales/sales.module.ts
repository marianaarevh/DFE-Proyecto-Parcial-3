import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PadreComponent } from './padre/padre.component';



@NgModule({
  declarations: [
    TablaComponent,
    ResumenComponent,
    PadreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PadreComponent
  ]
})
export class SalesModule { }
