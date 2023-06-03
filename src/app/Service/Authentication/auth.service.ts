import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { error } from 'jquery';
import { LoginRequest } from './loginRequest';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UsuarioActivo: boolean = false;
  alerta: Boolean = false;

  activarUsuario(){
    this.UsuarioActivo = true;
  };
  desactivarUsuario(){
    this.UsuarioActivo = false;
  };

  private API_URL = "https://portfolio-backend-v22r.onrender.com";
  currentUserSubjet: BehaviorSubject<any>;
  constructor(private Http:HttpClient) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubjet= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ));
  }

  Registrarse(credenciales: LoginRequest): Observable<any> {
    console.log("Se llamó al método Registrarse de auth.service");
    console.log(credenciales);
    return this.Http.post<boolean>(`${this.API_URL}/new/persona`, credenciales, { observe: 'response' });
  }

  IniciarSesion(credenciales: LoginRequest): Observable<any> {
    console.log("se llamó al metodo IniciarSesion, de auth.service");
    console.log(credenciales);
    return this.Http.post<boolean>(`${this.API_URL}/validar/persona`, credenciales);
  }
}