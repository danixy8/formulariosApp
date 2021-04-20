import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [`
    button{
      color: #fff;
    }
  `]
})
export class SwitchesComponent{

  persona = {
    genero: 'F',
    notificaciones: true
  };

  terminosYCondiciones = false;

}
