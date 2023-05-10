import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  developer: Developer = {
    edad: 19,
    localidad: 'Grand Bourg',
    provincia: 'Buenos Aires',
  };


  ajustarVentana(){
    let columna1 = document.getElementById("columna1") as HTMLElement;
    let columna2 = document.getElementById("columna2") as HTMLElement;

    if (window.innerWidth < 992) {
      columna1.classList.remove('col-10');
      columna1.classList.add('col');
      columna2.classList.add('dis-none');
    }
    else {
      columna1.classList.add('col-10');
      columna1.classList.remove('col');
      columna2.classList.add('col-2');
      columna2.classList.remove('dis-none');
    }
  }
  ngOnInit() {
    this.ajustarVentana();
    window.addEventListener('resize', () => this.ajustarVentana());
  }
}

interface Developer {
  edad: number;
  localidad: string;
  provincia: string;
}