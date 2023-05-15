import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Authentication/auth.service';
import { IniciarSesionComponent } from 'src/app/Components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from 'src/app/Components/registrarse/registrarse.component';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor (private iniciarSesion: IniciarSesionComponent, private registrarse: RegistrarseComponent, private rutas: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return true;
  
}
}