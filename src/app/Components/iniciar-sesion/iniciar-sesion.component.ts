import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Service/Authentication/auth.service';
import { ResizeService } from 'src/app/Service/Resize/resize.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{
  screenWidth = 0;
  public resizeSubscription: Subscription = new Subscription();
   form: FormGroup;
  constructor(public formBuilder: FormBuilder, public authServ:AuthService, public injector: Injector, public resizeService: ResizeService){
    this.form=this.formBuilder.group({
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get Email(){
    return this.form.get('Email');
  }
  
  get Password(){
    return this.form.get('Password');
  }

  onEnviar(event: Event){
    event.preventDefault();
    this.authServ.IniciarSesion(this.form.value).subscribe(response => {
        console.log("RESPONSE:" + JSON.stringify(response));
        if (response.status < 200 || response.status >= 300) {
          this.mostrarAlerta();
        }
       }
      )
    this.authServ.Registrarse(this.form.value).subscribe(response => {
        console.log("RESPONSE:" + JSON.stringify(response));
        if (response.status < 200 || response.status >= 300) {
          this.mostrarAlerta();
        }
       }
      )
  }
    
  Alerta: boolean = false;
  mostrarAlerta(){
    this.Alerta = true
  }
  noMostrarAlerta(){
    this.Alerta = false
  }
 
  ngOnInit() {
    this.resizeService.windowWidth$.subscribe(width => {
      console.log('El ancho de la ventana es:', width);
      this.screenWidth = width;
    }); 
  }
}
 