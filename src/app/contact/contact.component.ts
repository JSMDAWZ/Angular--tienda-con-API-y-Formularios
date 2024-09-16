import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit { 

  formularioContacto: FormGroup;
  usuarioActivo: any = {
    name: 'Juan',
    surname: 'Perez',
    dni: '12345678',
  };

  public usuario: any = {

    nombre: '',
    apellido:'',
    dni: '',
    email: '',

  }
  constructor(private form: FormBuilder){
    this.formularioContacto = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
  })
}
ngOnInit(): void {
  this.formularioContacto.patchValue({
    name: this.usuarioActivo.name,
    surname: this.usuarioActivo.surname,
    dni: this.usuarioActivo.dni,
  })
  this.formularioContacto.get('name')?.disable()
  this.formularioContacto.get('surname')?.disable()
  this.formularioContacto.get('dni')?.disable()
}
hasErrors( controlName: string, errorType: string){
  return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched;
}
  enviarDos() {
    console.log(this.formularioContacto);
  }
  enviar() {
    console.log(this.usuario);
  }

}
