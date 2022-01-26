import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurriculumPageRoutingModule } from './curriculum-routing.module';

import { CurriculumPage } from './curriculum.page';
import { EstudiosService } from './estudios.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurriculumPageRoutingModule
  ],
  declarations: [CurriculumPage],
  providers:[EstudiosService]
})
export class CurriculumPageModule {}
