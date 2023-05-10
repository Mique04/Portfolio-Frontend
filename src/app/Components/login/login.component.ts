import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  iniciarSesion:boolean = false;
  ver_iniciarSesion() {
    this.iniciarSesion = true;
  }
  no_ver_iniciarSesion() {
    this.iniciarSesion = false;
  }

  registrarse:boolean = false;
  ver_registrarse(){
    this.registrarse = true;
  }
  no_ver_registrarse(){
    this.registrarse = false;
  }
}
