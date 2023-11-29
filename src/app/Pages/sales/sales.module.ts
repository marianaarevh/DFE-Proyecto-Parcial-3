import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PadreComponent } from './padre/padre.component';
import { HttpClientModule } from '@angular/common/http';
import { DatosService } from 'src/app/services/datos.service';

@NgModule({
  declarations: [
    TablaComponent,
    ResumenComponent,
    PadreComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    DatosService
  ],
  exports: [
    PadreComponent
  ]
})
export class SalesModule { }
