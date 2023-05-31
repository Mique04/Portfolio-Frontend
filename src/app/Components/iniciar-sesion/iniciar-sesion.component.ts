import { HttpResponse } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, map, of, switchMap } from 'rxjs';
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
      email:['', [Validators.required, Validators.email]],
      contraseña:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get email(){
    return this.form.get('email');
  }
  
  get password(){
    return this.form.get('contraseña');
  }

  onEnviar(event: Event) {
    console.log("Se llamó al metodo onEnviar de IniciarSesion.component");
    event.preventDefault();
    this.authServ.IniciarSesion(this.form.value).subscribe(val => {
      console.log(val);
    }
    );
  }
  
 
  ngOnInit() {
    this.resizeService.windowWidth$.subscribe(width => {
      console.log('El ancho de la ventana es:', width);
      this.screenWidth = width;
    }); 
  }
}
 