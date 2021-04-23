import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  constructor( private fb: FormBuilder ) {}

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [ false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  ngOnInit(): void {
    this.miFormulario.reset(
      {...this.persona,
      condiciones: false}
    );

    this.miFormulario.valueChanges.subscribe(value => {
      delete value.condiciones;
      this.persona = value;
    });
  }

  campoNoValido( campo: string ): boolean | null {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(): void {

    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    console.log(formValue);
    this.persona = formValue;

    this.miFormulario.markAllAsTouched();
  }

}
