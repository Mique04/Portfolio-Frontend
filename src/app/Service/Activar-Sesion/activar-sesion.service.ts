import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivarSesionService {

  sesionActiva:boolean = false;
  EstadoSesionActivado(){
    this.sesionActiva = true;
  }
} 
