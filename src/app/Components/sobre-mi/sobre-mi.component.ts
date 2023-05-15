import { Component, OnInit} from '@angular/core';
import { ModoEdicionService } from 'src/app/Service/Modo-Edicion/modo-edicion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  constructor (public ModoEdicion : ModoEdicionService, form: FormsModule){}

  developer: Developer = {
    edad: 19,
    localidad: 'Grand Bourg',
    provincia: 'Buenos Aires',
  };

  texto = `Soy un joven de ${this.developer.edad} años residente de ${this.developer.localidad}, ${this.developer.provincia}, apasionado por la tecnología y la música. Me considero una persona perseverante y comprometida con mis metas. Disfruto mucho de resolver problemas mediante el uso de tecnologías, y me siento motivado por los desafíos y la oportunidad de aprender nuevas habilidades.<br> <br>
  En mi tiempo libre, me gusta seguir aprendiendo y experimentando con nuevas tecnologías, explorando diferentes géneros musicales y componiendo mis propias canciones. También me gusta pasar tiempo con amigos y familia, y participar en actividades al aire libre, lo que me ayuda a mantener un equilibrio saludable entre mi vida profesional y personal.<br> <br>
  En resumen, soy una persona que corre en pos de lo que le gusta y apasiona, comprometido con el logro de mis metas personales y profesionales. Estoy emocionado por las posibilidades que el futuro me depara y estoy decidido a seguir aprendiendo y creciendo en ambas áreas para poder crear herramientas innovadoras y útiles para toda clase de personas.`

  llamarFuncion() {
    this.ModoEdicion.VolverNormalidad(this.texto);
  }
  
  inputValue: string = '';

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