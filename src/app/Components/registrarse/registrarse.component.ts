import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/Authentication/auth.service';
import { Subscription, map } from 'rxjs';
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
  constructor(public formBuilder: FormBuilder, public authServ:AuthService, public injector: Injector, public resizeService: ResizeService){
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

  onEnviar(event: Event) {
    console.log("Se llamó al metodo onEnviar de Registrarse.component");
    event.preventDefault();
    this.authServ.Registrarse(this.form.value).pipe(
      map((response) => {
        this.authServ.UsuarioActivo = true;
        console.log("El metodo onEnviar de Registrarse.component funciona correctamente");
        console.log("Usuario activo: " + this.authServ.UsuarioActivo);
        // Lógica adicional después de recibir la respuesta exitosa
        return response; // Puedes devolver el valor original o transformado si es necesario
      })
    ).subscribe((response) => {
      // Aquí puedes trabajar con el valor emitido después de aplicar el map
      console.log("Respuesta de la petición Registrarse:", response);
    }, (error) => {
      this.authServ.UsuarioActivo = false;
      console.log("El metodo onEnviar de Registrarse.component no funciona o hubo un problema en el servicio");
      console.log("Usuario activo: " + this.authServ.UsuarioActivo);
      // Lógica adicional para manejar el error
      return error;
    });
  }

  ngOnInit() {
    this.resizeService.windowWidth$.subscribe(width => {
      console.log('El ancho de la ventana es:', width);
      this.screenWidth = width;
    });
  }
} 
