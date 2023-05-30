import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, map } from 'rxjs';
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

  onEnviar(event: Event) {
    console.log("Se llamó al metodo onEnviar de iniciar-sesion.component");
    event.preventDefault();
    this.authServ.IniciarSesion(this.form.value).pipe(
      map((response) => {
        this.authServ.UsuarioActivo = true;
        console.log("El metodo onEnviar de iniciar-Sesion.component funciona correctamente");
        console.log("Usuario activo: " + this.authServ.UsuarioActivo);
        // Lógica adicional después de recibir la respuesta exitosa
        return response; // Puedes devolver el valor original o transformado si es necesario
      })
    ).subscribe((response) => {
      // Aquí puedes trabajar con el valor emitido después de aplicar el map
      console.log("Respuesta de la petición IniciarSesion:", response);
    }, (error) => {
      this.authServ.UsuarioActivo = false;
      console.log("El metodo onEnviar de iniciar-Sesion.component no funciona o hubo un problema en el servicio");
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
 