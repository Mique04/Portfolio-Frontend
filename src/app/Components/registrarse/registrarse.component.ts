import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/Authentication/auth.service';
import { Subscription } from 'rxjs';
import { ResizeService } from 'src/app/Service/Resize/resize.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  screenWidth = 0;
  public resizeSubscription: Subscription = new Subscription();

  form: FormGroup;
  constructor(public formBuilder: FormBuilder, public authServ: AuthService, public injector: Injector, public resizeService: ResizeService){
    this.form=this.formBuilder.group({
      Nombre:['', [Validators.required]],
      Apellido:['', [Validators.required]],
      Email:['', [Validators.required, Validators.email]],
      Password:['', [Validators.required, Validators.minLength(8)]]

    })
  }

  get Nombre(){
    return this.form.get('Nombre');
  }
  get Apellido(){
    return this.form.get('Apellido');
  }
  get Email(){
    return this.form.get('Email');
  }
  get Password(){
    return this.form.get('Password');
  } 

  onEnviar(event: Event){
    console.log("Se llamó al metodo onEnviar de registrar.component");
    event.preventDefault();
    this.authServ.Registrarse(this.form.value).subscribe(response => {
        console.log("RESPONSE:" + JSON.stringify(response));
        console.log(response.body);
        if (response.body == 'Usuario registrado exitosamente') {
          console.log("El metodo onEnviar de registrarse.component funciona correctamente");
        }
        else {
          console.log("El metodo onEnviar de registrarse.component no funciona o hubo un problema en el servicio");
        }
       }
      )
  }

  ngOnInit() {
    this.resizeService.windowWidth$.subscribe(width => {
      console.log('El ancho de la ventana es:', width);
      this.screenWidth = width;
    });
  }
} 
