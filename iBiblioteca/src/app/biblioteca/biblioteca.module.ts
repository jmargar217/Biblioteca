import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaPageRoutingModule } from './biblioteca-routing.module';

import { BibliotecaPage } from './biblioteca.page';
import { LibrosService } from './libros.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { InputBusquedaComponent } from './input-busqueda/input-busqueda.component';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BibliotecaPage, InputBusquedaComponent, TablaComponent],
  providers:[LibrosService]
})
export class BibliotecaPageModule {}
