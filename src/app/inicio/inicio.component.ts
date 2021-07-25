import { Component } from '@angular/core';

@Component ({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})

export class InicioComponent{
  title = 'Bienvendo a angular';
  curso: string = 'Curso spring con angular 14';
  estudiante: string = 'Yesith Valencia';
  edad: number = 35;
  activo: boolean = true;
}
