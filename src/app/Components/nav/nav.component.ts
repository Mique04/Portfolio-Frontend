import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModoEdicionService } from 'src/app/Service/Modo-Edicion/modo-edicion.service';
import { ResizeService } from 'src/app/Service/Resize/resize.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  login: string = '';
  sections: string = '';
  mostrarComponenteLogin: boolean = false;

  mostrarLogin() {
    this.mostrarComponenteLogin = true;
  }
  noMostrarLogin() {
    this.mostrarComponenteLogin = false;
  }
   
  screenWidth = 0;
  private resizeSubscription: Subscription = new Subscription();

  constructor (public modoEdicion: ModoEdicionService, private resizeService: ResizeService){}


  ajustarResponsive(): void {
    const redes = document.getElementById('redes') as HTMLElement;
    const portfolio = document.getElementById('portfolio-mique') as HTMLElement;
    const ingreso = document.getElementById('ingreso') as HTMLElement;

    if (window.innerWidth < 840) {
      redes.classList.remove('col-4');
      redes.classList.add('col-6');
      redes.classList.remove('justify-content-around');
      redes.classList.add('justify-content-start');
      ingreso.classList.remove('col-4');
      ingreso.classList.add('col-6');
      ingreso.classList.remove('justify-content-around');
      ingreso.classList.add('justify-content-end');
      portfolio.style.display = 'none';
      this.login = '';
      this.sections = '';
    } else {
      redes.classList.remove('col-6');
      redes.classList.add('col-4');
      redes.classList.add('justify-content-around');
      redes.classList.remove('justify-content-start');
      ingreso.classList.remove('col-6');
      ingreso.classList.add('col-4');
      ingreso.classList.add('justify-content-around');
      ingreso.classList.remove('justify-content-end');
      portfolio.style.display = 'block';
      this.login = 'Ingresar';
      this.sections = 'Secciones';
    }
  }
  
  // Llamar a la función cuando la página carga y cada vez que cambia el tamaño de la ventana
  ngOnInit() {

    const initialWidth = this.resizeService.getScreenWidth();
    if (initialWidth !== undefined) {
      this.screenWidth = initialWidth;
    }
    this.resizeSubscription = this.resizeService.onResize().subscribe(width => {
      this.screenWidth = width;
    });
    
    this.ajustarResponsive();
    window.addEventListener('resize', () => this.ajustarResponsive());
  }
}

