import { Component, OnInit } from '@angular/core';
import { Estudios } from './estudios.interface';
import { EstudiosService } from './estudios.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit {
  estudios:Estudios[]=[];

  constructor(private estudioService:EstudiosService) { }

  ngOnInit() {
    this.estudios = this.estudioService.getEstudios();
  }

}
