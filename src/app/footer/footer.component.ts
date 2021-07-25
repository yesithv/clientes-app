// Se importa el decorador
import { Component } from '@angular/core';

// Todas las clases deben llevar el decorador
@Component({
  // Atributos de la clase
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.css']
})

export class FooterComponent {
  public autor: any = { nombre: 'Yesith', apellido: 'Valencia'  };
}
