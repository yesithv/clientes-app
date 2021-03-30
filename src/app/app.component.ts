import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bienvendo a angular';
  curso: string = 'Curso spring con angular 14';
  estudiante: string = 'Yesith Valencia';
  edad: number = 35;
  activo: boolean = true;
}
