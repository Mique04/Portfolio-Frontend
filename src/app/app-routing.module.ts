import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './Components/login/login.component';
import { IniciarSesionComponent } from './Components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './Components/registrarse/registrarse.component';
import { GuardGuard } from './Guards/guard.guard';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent, canActivate:[GuardGuard]},
  {path:'login', component: LoginComponent},
  {path:'iniciarSesion', component: IniciarSesionComponent},
  {path:'registrarse', component: RegistrarseComponent},
  {path:'', component: LoginComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
