import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UsuarioActivo: boolean = false;
  alerta: Boolean = false;

  private API_URL = "https://portfolio-backend-v22r.onrender.com";
  currentUserSubjet: BehaviorSubject<any>;
  constructor(private Http:HttpClient) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubjet= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ));
  }

  Registrarse(credenciales: any): Observable<any> {
    console.log("Se llamó al método Registrarse de auth.service");
  
    return this.Http.post(`${this.API_URL}/new/persona`, credenciales, { observe: 'response' }).pipe(
      map((res: HttpResponse<any>) => {
        console.log("Estado de la respuesta de la petición registrarse:", res.status);
  
        this.UsuarioActivo = res.status >= 200 && res.status < 300;
        return res.status;
      })
    );
  }
  
  

  IniciarSesion(credenciales: any): Observable<any> {
    console.log("se llamó al metodo IniciarSesion, de auth.service");
    return this.Http.post(`${this.API_URL}/validar/persona`, credenciales, { observe: 'response' }).pipe(
      map((res: HttpResponse<any>) => {
        console.log("Estado de la respuesta de la petición IniciarSesion:" + res.status);
        console.log("Cuerpo de la respuesta de la petición IniciarSesion:" + res.body);
        
        this.UsuarioActivo = res.status >= 200 && res.status < 300;
        return res.status;
      })
    );
  }
}
