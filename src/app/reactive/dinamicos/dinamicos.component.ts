import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: []
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array([ ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(): FormArray {
      return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  formularioInvalido(campo: string): boolean | null {
    return this.miFormulario.controls[campo].errors
           && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(): any {
    if (this.nuevoFavorito.invalid ){ return; }

    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ));


    this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required) );

    this.nuevoFavorito.reset();
  }

  guardar(): void {
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      this.nuevoFavorito.markAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

  borrar(index: number): void {
    this.favoritosArr.removeAt(index);
  }
}
