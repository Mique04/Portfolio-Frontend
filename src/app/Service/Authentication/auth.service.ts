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
  private API_URL = "https://portfolio-backend-v22r.onrender.comng";
  currentUserSubjet: BehaviorSubject<any>;
  constructor(private Http:HttpClient, private ruta: Router) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubjet= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ));
  }

  Registrarse(credenciales: any): Observable<any> {
    return this.Http.post(`${this.API_URL}/new/persona`, credenciales, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status >= 200 && response.status < 300) {
          sessionStorage.setItem('currentUser', JSON.stringify(response.body));
          this.ruta.navigate(['/portfolio']);
          this.UsuarioActivo = true;
          return true;
        }
        else {
          return false;
        }
      })
    );
  }

IniciarSesion(credenciales: any): Observable<any> {
  return this.Http.post(`${this.API_URL}/validar/persona`, credenciales, { observe: 'response' }).pipe(
    map((response: HttpResponse<any>) => {
      if (response.status >= 200 && response.status < 300) {
        sessionStorage.setItem('currentUser', JSON.stringify(response.body));
        this.ruta.navigate(['/portfolio']);
        this.UsuarioActivo = true;
        return true
      }
      else {
        return false;
      }
    })
  );
}

UsuarioActivo: boolean = false;

}
