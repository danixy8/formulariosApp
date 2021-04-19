import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  // guardar( formulario: NgForm ): void {
  guardar(): void {
    console.log(this.miFormulario?.controls.precio?.touched);
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid
            && this.miFormulario?.controls.producto?.touched;

  }

  precioValido(): boolean {
    return this.miFormulario?.controls.precio?.touched
            && this.miFormulario?.controls.precio?.value;


  }

  existenciaValida(): boolean {
    return this.miFormulario?.controls.existencias?.value < 0;
  }
}
