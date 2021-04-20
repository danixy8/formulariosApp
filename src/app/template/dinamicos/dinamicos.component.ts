import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito{
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [`
  .col-sm-12 > button{color: #fff}
  `]
})
export class DinamicosComponent{
  @ViewChild ('formularioDinamico') formulario!: NgForm;

  persona: Persona = {
    nombre: 'Daniel',
    favoritos: [
      { id: 1, nombre: 'Metal Gear'},
      { id: 2, nombre: 'Bayonetta'}
    ]
  };

  nuevoJuego = '';

  nombreValido(): boolean {
    return this.formulario?.controls.nombre?.invalid
           && this.formulario?.controls.nombre?.touched;
  }

  guardar(): void {
    if (!this.formulario?.controls.nombre?.invalid){
    console.log('Formulario posteado');
  }
  }

  eliminar(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }

  agregar(): void {
    const juego: Favorito = {
      id: this.persona.favoritos.length + 1 ,
      nombre: this.nuevoJuego
    };

    if (this.nuevoJuego !== ''){
      this.persona.favoritos.push({...juego});
      this.nuevoJuego = '';
    }
    return;
  }
}
