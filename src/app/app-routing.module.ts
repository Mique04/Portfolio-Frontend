import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent},
  {path:'iniciarSesion', component: LoginComponent},
  {path:'', component: LoginComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
