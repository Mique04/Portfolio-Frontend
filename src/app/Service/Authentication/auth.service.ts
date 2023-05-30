import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UsuarioActivo: boolean = false;

  private API_URL = "https://portfolio-backend-v22r.onrender.com";
  currentUserSubjet: BehaviorSubject<any>;
  constructor(private Http:HttpClient, private ruta: Router) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubjet= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ));
  }

  Registrarse(credenciales: any): Observable<any> {
    console.log("se llamó al metodo Registrarse, de auth.service");
     return this.Http.post(`${this.API_URL}/new/persona`, credenciales, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        console.log("Estado de la respuesta de la petición registrarse:", response.status);
        console.log("Cuerpo de la respuesta de la petición registrarse:", response.body);
      })
    );
  };

  IniciarSesion(credenciales: any): Observable<any> {
    console.log("se llamó al metodo IniciarSesion, de auth.service");
    return this.Http.post(`${this.API_URL}/validar/persona`, credenciales, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        console.log("Estado de la respuesta de la petición IniciarSesion:", response.status);
        console.log("Cuerpo de la respuesta de la petición IniciarSesion:", response.body);
      })
    );
  }
}
