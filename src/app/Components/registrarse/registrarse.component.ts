import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/Authentication/auth.service';
import { Subscription, of, switchMap } from 'rxjs';
import { ResizeService } from 'src/app/Service/Resize/resize.service';
import { HttpResponse } from '@angular/common/http';

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
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      contraseña:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get nombre(){
    return this.form.get('nombre');
  }
  get apellido(){
    return this.form.get('apellido');
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('contraseña');
  } 

  onEnviar(event: Event) {
    console.log("Se llamó al metodo onEnviar de Registrarse.component");
    event.preventDefault();
    this.authServ.Registrarse(this.form.value).pipe(
      switchMap((response: HttpResponse<any>) => {
        if (response.status >= 200 && response.status < 300) {
        this.authServ.UsuarioActivo = true;
        console.log("El metodo onEnviar de Registrarse.component funciona correctamente");
        console.log("Usuario activo: " + this.authServ.UsuarioActivo);
        console.log("response.body: " + response.body);
        console.log("response.status: " +response.status);
        return of(response.body);
      } else {
      throw new Error('Error en la respuesta');}})
    ).subscribe(
      (data) => {
      // Aquí puedes trabajar con el valor emitido después de aplicar el map
      this.authServ.UsuarioActivo = true;
      console.log("Respuesta de la petición Registrarse exitosa:", data);
    }, (error) => {
      this.authServ.UsuarioActivo = false;
      console.log("El metodo onEnviar de Registrarse.component no funciona o hubo un problema en el servicio");
      console.log('Error en la respuesta:', error);
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
