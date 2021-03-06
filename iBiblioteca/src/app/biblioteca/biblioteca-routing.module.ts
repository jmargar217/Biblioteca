import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallePage } from '../detalle/detalle.page';

import { BibliotecaPage } from './biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaPageRoutingModule {}
