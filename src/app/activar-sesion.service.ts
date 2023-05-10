import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivarSesionService {
  url= 'https://portfolio-backend-t4bc.onrender.com';
  currentUserSubjet: BehaviorSubject<any>;
  constructor(private Http:HttpClient) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubjet= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}' ));
  }

  IniciarSesion(credenciales:any) :Observable<any> {
    return this.Http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }


  sesionActiva:boolean = false;
  SesionActivada?(){
    this.sesionActiva = true;
  }
}
