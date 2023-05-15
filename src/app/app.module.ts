import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { SobreMiComponent } from './Components/sobre-mi/sobre-mi.component';
import { NavComponent } from './Components/nav/nav.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { ExpLaboralComponent } from './Components/exp-laboral/exp-laboral.component';
import { LoginComponent } from './Components/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { IniciarSesionComponent } from './Components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './Components/registrarse/registrarse.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProyectosComponent,
    SobreMiComponent,
    NavComponent,
    EducacionComponent,
    SkillsComponent,
    ContactoComponent,
    ExpLaboralComponent,
    LoginComponent,
    IniciarSesionComponent,
    RegistrarseComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
