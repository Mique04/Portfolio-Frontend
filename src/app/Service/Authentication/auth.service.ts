import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import {map} from 'rxjs/operators';
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
      map((response: HttpResponse<any>) => {
        if (response.body == 'Usuario registrado exitosamente') {
          sessionStorage.setItem('currentUser', JSON.stringify(response.body));
          this.UsuarioActivo = true;
          console.log("Respuesta del servidor:", response.body);
          console.log("Metodo Registrarse realizado con exito");
          return true;
        }
        else {
          console.log("Respuesta del servidor:", response.body);
          console.log("Metodo Registrarse ha fallado");
          return false;
        }
      })
    )
  };

IniciarSesion(credenciales: any): Observable<any> {
  console.log("se llamó al metodo IniciarSesion, de auth.service");
  return this.Http.post(`${this.API_URL}/validar/persona`, credenciales, { observe: 'response' }).pipe(
    map((response: HttpResponse<any>) => {
      if (response.body == 'Usuario registrado exitosamente') {
        sessionStorage.setItem('currentUser', JSON.stringify(response.body));
        this.UsuarioActivo = true;
        console.log("Respuesta del servidor:", response.body);
        console.log("Metodo IniciarSesion realizado con exito");
        return true
      }
      else {
        console.log("Respuesta del servidor:", response.body);
        console.log("Metodo IniciarSesion ha fallado");
        return false;
      }
    })
  );
}

}
