import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './Pages/dashboard/inicio/inicio.component';
import { PadreComponent } from './Pages/sales/padre/padre.component'

const routes: Routes = [
  { path: 'dashboard', component: InicioComponent },
  { path: 'sales', component: PadreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
