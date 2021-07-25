import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent  {

  courseList: string[] = ['JavaScript', 'Java EE', 'Php' , 'C ++'];
  active: boolean = true;
  buttonText: string = 'Ocultar';

  constructor() { }

  setActive(): void{
    // Primer alternativa:
    //this.active = (this.active == true)? false : true;
    if(this.active){
      this.active = false;
      this.buttonText = 'Mostrar';
    }else{
      this.active = true;
      this.buttonText = 'Ocultar';
    }

  }

}
