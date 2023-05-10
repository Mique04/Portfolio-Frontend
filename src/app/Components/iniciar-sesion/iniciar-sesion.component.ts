import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { ActivarSesionService } from 'src/app/activar-sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent extends LoginComponent {
  form: FormGroup;
  constructor(public formBuilder: FormBuilder, private activarSesionService:ActivarSesionService, private ruta:Router){
    super();
    this.form=this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      contraseña:['', [Validators.required, Validators.minLength(8)]]

    })
  }

  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password');
  }

  onEnviar(event: Event){
    event.preventDefault;
    this.activarSesionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
    })
    this.ruta.navigate(['/portfolio'])
  }

}
