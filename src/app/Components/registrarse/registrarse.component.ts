import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/Authentication/auth.service';
import { Subscription, map } from 'rxjs';
import { ResizeService } from 'src/app/Service/Resize/resize.service';
import { HttpResponse } from '@angular/common/http';
import { LoginRequest } from 'src/app/Service/Authentication/loginRequest';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  screenWidth = 0;
  public resizeSubscription: Subscription = new Subscription();
  form: FormGroup;
  constructor(public formBuilder: FormBuilder, public authServ:AuthService, public injector: Injector, public resizeService: ResizeService){
    this.form=this.formBuilder.group({
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      contraseña:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get nombre(){
    return this.form.get('nombre');
  }
  get apellido(){
    return this.form.get('apellido');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('contraseña');
  } 

  onEnviar(event: Event) {
    console.log("Se llamó al método onEnviar de Registrarse.component");
    event.preventDefault();
    if (this.form.valid){
    this.authServ.Registrarse(this.form.value as LoginRequest).subscribe(
      {next: (res) => {
        this.authServ.activarUsuario();
        console.log(res);
      },
      error: (err) => {
        this.authServ.desactivarUsuario();
        console.log("el usuario activo es: " + this.authServ.UsuarioActivo);
        console.error(err);
      },
      complete: () => {
        this.authServ.activarUsuario();
        console.log("el usuario activo es: " + this.authServ.UsuarioActivo);
        console.info("Login Completo");
      },
      }
      );
    }
  }
  
  


  ngOnInit() {
    this.resizeService.windowWidth$.subscribe(width => {
      console.log('El ancho de la ventana es:', width);
      this.screenWidth = width;
    });
  } 
}