import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [`
  button, button:disabled{
    color: #fff;
  }
  `]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }


  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid
            && this.miFormulario?.controls.producto?.touched;

  }

  precioValido(): boolean {
    this.miFormulario?.controls.precio?.setErrors(null);
    return this.miFormulario?.controls.precio?.touched
            && this.miFormulario?.controls.precio?.value < 10;

  }


  // guardar( formulario: NgForm ): void {
    guardar(): void {
      console.log('posteo correcto');

      this.miFormulario.resetForm({
        precio: 0,
        existencias: 0,
        producto: 'algo'
      });
    }

}
