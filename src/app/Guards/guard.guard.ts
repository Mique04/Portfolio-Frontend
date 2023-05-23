import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/Authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor (private rutas: Router, private auth: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.UsuarioActivo){
        this.rutas.navigate(['/portfolio']);
        console.log("el guard funciona y está permitiendo el paso");
        return true;
      }
      else {
        console.log("el guard no funciona o no se autenticó correctamente");
        return false;
      }
  }
  
}
